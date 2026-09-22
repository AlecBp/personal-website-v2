// Shared content loader for the design explorations in src/pages/lab. Not used by the real site.
import { getCollection, getEntry, render } from 'astro:content';

export async function loadSite() {
  const profile = await getEntry('profile', 'profile');
  if (!profile) throw new Error('profile missing');
  const { Content: About } = await render(profile);
  const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;
  const roles = (await getCollection('experience')).sort(byOrder);
  const experience = await Promise.all(
    roles.map(async (role) => ({ ...role.data, id: role.id, Content: (await render(role)).Content })),
  );
  return {
    p: profile.data,
    About,
    experience,
    work: (await getCollection('work')).sort(byOrder).map((w) => w.data),
    writing: (await getCollection('writing')).sort(byOrder).map((w) => w.data),
    projects: (await getCollection('projects')).sort(byOrder).map((w) => w.data),
    earlier: profile.data.earlier.split('·').map((s) => s.trim()),
  };
}
