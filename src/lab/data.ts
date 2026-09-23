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

/** The route, oldest first. Approved facts only (docs/content-brief.md §5); the last stop is open-ended. */
export const route = [
  { year: '2015', title: 'Robotics teacher', where: 'Jean Piaget College, Santos, Brazil' },
  { year: '2016', title: 'Opened a 3D-printing shop', where: 'Brazil, alongside teaching' },
  { year: '2018', title: 'Moved to Toronto to study', where: 'George Brown College, Computer Programmer Analyst' },
  { year: '2019', title: 'Tutor and teaching assistant', where: 'George Brown College' },
  { year: '2021', title: 'Software Engineer', where: 'HomeX, on Schedule Engine' },
  { year: '2022', title: 'ServiceTitan, via acquisition', where: 'Senior Software Engineer' },
  { year: '2025', title: 'Staff Software Engineer', where: 'ServiceTitan, Contact Center Pro' },
];
export const next = {
  year: '2026',
  title: 'Next',
  where: 'Growing: new challenges and bigger projects, at work and outside it.',
};

/** Life and career on one timeline, Kevin Kelly style. Each line is an approved fact. */
export const chronology = [
  { year: '2015', lines: ['Started teaching robotics at Jean Piaget College in Santos, Brazil.'] },
  { year: '2016', lines: ['Opened a small 3D-printing shop on the side.'] },
  { year: '2018', lines: ['Moved to Toronto to study computer programming at George Brown College.'] },
  { year: '2019', lines: ['Tutored and worked as a teaching assistant at George Brown.', 'IEEEXtreme: 20th in Canada.'] },
  {
    year: '2020',
    lines: [
      'Contract software engineer at George Brown College Research & Innovation.',
      'Started volunteering as a software engineer at Working Women Community Center.',
      'IEEEXtreme: 11th in Canada, top 12% worldwide.',
    ],
  },
  { year: '2021', lines: ['Graduated from George Brown; Computer Technology Departmental Award.', 'Joined HomeX to work on Schedule Engine.'] },
  { year: '2022', lines: ['HomeX’s Schedule Engine was acquired by ServiceTitan; I came along as a Senior Software Engineer.'] },
  { year: '2024', lines: ['Became tech lead of the Contact Center Pro team.'] },
  { year: '2025', lines: ['Staff Software Engineer.'] },
];
