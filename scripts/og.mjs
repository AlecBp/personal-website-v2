// Generates the Open Graph card and the favicon set into public/.
// Run with `npm run og` after changing the photo, name or role; outputs are committed.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const pub = (name) => `${root}public/${name}`;
const fontFile = (weight) =>
  readFile(`${root}node_modules/@fontsource/geist-sans/files/geist-sans-latin-${weight}-normal.woff`);

const fonts = [
  { name: 'Geist', data: await fontFile(400), weight: 400, style: 'normal' },
  { name: 'Geist', data: await fontFile(500), weight: 500, style: 'normal' },
  { name: 'Geist', data: await fontFile(600), weight: 600, style: 'normal' },
];

const colors = { bg: '#FAFAF8', fg: '#1B1D1F', muted: '#5A5F66', line: '#E2E2DD', accent: '#0A7479' };

// Tiny hyperscript helper so the layouts read like markup without a JSX build step.
const h = (type, style, ...children) => ({
  type,
  props: { style, children: children.length === 1 ? children[0] : children },
});
const img = (src, style) => ({ type: 'img', props: { src, style } });

const toPng = (svg, width) => new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();

// ---------- Open Graph card, 1200x630 ----------

const photo = await sharp(`${root}src/assets/profile.jpeg`).resize(640, 640).jpeg({ quality: 82 }).toBuffer();
const photoUri = `data:image/jpeg;base64,${photo.toString('base64')}`;

const card = h(
  'div',
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 88px',
    background: colors.bg,
    fontFamily: 'Geist',
    borderTop: `14px solid ${colors.accent}`,
  },
  h(
    'div',
    { display: 'flex', flexDirection: 'column', maxWidth: 660 },
    h('div', { fontSize: 26, fontWeight: 500, color: colors.muted, letterSpacing: 0.5 }, 'alecpagliarussi.me'),
    h(
      'div',
      { fontSize: 88, fontWeight: 600, color: colors.fg, letterSpacing: -3.5, lineHeight: 1.02, marginTop: 28 },
      'Alec Pagliarussi',
    ),
    h(
      'div',
      { display: 'flex', fontSize: 32, fontWeight: 500, marginTop: 30, letterSpacing: -0.4 },
      h('span', { color: colors.accent }, 'Staff Software Engineer'),
      h('span', { color: colors.fg, marginLeft: 9 }, 'at ServiceTitan'),
    ),
    h(
      'div',
      { fontSize: 26, color: colors.muted, marginTop: 36, lineHeight: 1.4 },
      'Builds things: backend systems at work; electronics, woodworking and 3D prints at home.',
    ),
  ),
  img(photoUri, { width: 320, height: 320, borderRadius: 160, border: `1px solid ${colors.line}` }),
);

const ogSvg = await satori(card, { width: 1200, height: 630, fonts });
await writeFile(pub('og.png'), toPng(ogSvg, 1200));

// ---------- Monogram favicon ----------

const monogram = (size, radius) =>
  h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: colors.accent,
      borderRadius: radius,
      color: '#FFFFFF',
      fontFamily: 'Geist',
      fontWeight: 600,
      fontSize: size * 0.46,
      letterSpacing: -size * 0.03,
      paddingBottom: size * 0.03,
    },
    'AP',
  );

const iconSvg = await satori(monogram(64, 14), { width: 64, height: 64, fonts });
const squareSvg = await satori(monogram(512, 0), { width: 512, height: 512, fonts });

await writeFile(pub('favicon.svg'), iconSvg);
await writeFile(pub('apple-touch-icon.png'), toPng(squareSvg, 180));
await writeFile(pub('icon-192.png'), toPng(squareSvg, 192));
await writeFile(pub('icon-512.png'), toPng(squareSvg, 512));

// favicon.ico: an ICONDIR header plus PNG-encoded 16px and 32px images, which every current browser accepts.
const icoImages = [16, 32].map((size) => ({ size, data: toPng(iconSvg, size) }));
const header = Buffer.alloc(6 + 16 * icoImages.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icoImages.length, 4);
let offset = header.length;
icoImages.forEach(({ size, data }, i) => {
  const entry = 6 + 16 * i;
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(data.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += data.length;
});
await writeFile(pub('favicon.ico'), Buffer.concat([header, ...icoImages.map((image) => image.data)]));

console.log('Wrote og.png, favicon.svg, favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png');
