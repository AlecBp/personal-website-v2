# Content and voice brief — alecpagliarussi.me

The single reference for **what the site says and how it sounds**. Settle this before any design
work; the design serves it, not the other way round. Copy in `src/content/` should follow it.

Status: reviewed with Alec, 2026-09-23. Open questions answered (see §8).

---

## 1. Purpose and audience

**What the site is for:** a personal home on the web. Someone who looks Alec up should come away
knowing who Alec is as a person *and* that Alec is a serious, senior engineer. It is not a résumé
replacement; the résumé PDF carries the detail.

**Who reads it**

| Reader | What they want | What they should leave with |
| --- | --- | --- |
| Recruiters, hiring managers | Level, current role, résumé | Staff engineer, backend-focused, tech lead; résumé one click away |
| Engineers (peers, future teammates) | What Alec works on, how Alec thinks | Builds reliable backend systems; likes teaching and growing people |
| People who've met Alec / friends | Who Alec is | A builder and tinkerer who skis, camps, smokes BBQ, 3D prints |

**The one idea to remember:** *Alec likes building things* — software at work, and physical,
hands-on things outside it. Curiosity and learning are the thread through all of it.

**Second thread — teaching:** robotics teacher in Brazil → tutor and TA at George Brown → growing
engineers as a tech lead today. Use it to connect the past to the present ("the teacher in me never
really left"), not as a separate section.

**Personal life: light touch.** Convey personality and what Alec likes to do, without much detail
about private life. Hobbies are short mentions, not stories.

---

## 2. Voice and tone

### Two registers

| Where | Register | Notes |
| --- | --- | --- |
| Hero, About, Beyond work, Contact | **Personal** | First person, plain words, a little warmth. Sounds like Alec talking, not a LinkedIn summary. |
| Selected work | **Plain professional** | Serious, but no jargon. Says what the work is in normal words. |
| Experience | **Professional / corporate is fine** | Résumé-style bullets are OK here. Still factual, still no metrics or internal names (see §5). |

### Rules

- First person ("I"), active voice, short sentences.
- Say it the way you'd say it out loud. If it sounds like a performance review, rewrite it.
- Specific beats abstract: "skiing, camping, a smoker for low-and-slow BBQ" beats "outdoor enthusiast".
- A light touch of humour is fine; jokes that need explaining are not.
- Don't claim what you can't back up; don't editorialise about your own excellence.

### In Alec's own words (use as the source for personal copy)

> My passion is for building things, tinkering with technology and the challenge of learning
> something new, plus the curiosity of understanding different things. That is why I got into
> robotics and electronics, woodworking, 3D printing.

### Sounds like Alec vs. doesn't

| ✅ Sounds right | ❌ Reads as corporate / "BS" |
| --- | --- |
| "At heart I like building things." | "I care about distributed systems that keep working when their dependencies don't…" |
| "I enjoy tinkering with technology and the challenge of learning something new." | "I like systems that degrade gracefully instead of falling over." |
| "Most of what I build is backend: shared libraries, caching and billing pieces other teams rely on." | "Architect of shared foundations adopted by every microservice." |
| "Happy to talk shop, BBQ or skiing." | "Would you like to work with me? Awesome!" |
| "The teacher in me never really left." | "Passionate about growing engineers into technical owners." |

Words and phrases to avoid in personal sections: *passionate about, leverage, drive, spearhead,
foundations, technical owners, resilient, robust, synergy, impact, results-driven, world-class,
cutting-edge, ninja/rockstar.*

---

## 3. What to talk about

### Must say

1. **Who:** Alec Pagliarussi, Staff Software Engineer at ServiceTitan, Ontario, Canada.
2. **What Alec is like:** likes building things; curious; always learning something new.
3. **The story:** robotics teacher in Brazil and a small 3D-printing shop → George Brown College in
   Toronto → HomeX (Schedule Engine) → ServiceTitan via acquisition → Staff. *The line keeps going:*
   next is growing the career — new challenges and bigger projects, at work and personally.
4. **What Alec works on (themes only):** keeping services up when dependencies fail; shared libraries
   other teams use; big migrations and messaging (Kubernetes, Kafka); growing engineers.
5. **Experience:** ServiceTitan (Staff, Senior), HomeX, then a one-line "Earlier".
6. **Outside work:** hobbies (§4).
7. **How to get in touch:** email, LinkedIn, GitHub, résumé.

### Nice to have

- Talks: org-wide tech talk on microservice authentication patterns; presenter at a company-wide AI tools demo.
- Side projects from 2020 (React-Messenger, Weather app, React Spring CRUD) — low priority, visually quiet.
- IEEEXtreme placings (hobby context, not a headline).

### Don't say

- Phone number. Anything confidential about ServiceTitan.
- Work metrics (hit rates, "6x", "30+ services", coverage %, revenue, ticker). They live in the résumé.
- Internal product/feature/API names (WorkConnect, Holiday Hours, Voice Intelligence, Virtual Agent, telephony SDK).
  Public product names — Contact Center Pro, Scheduling Pro, Schedule Engine — are fine.
- The old student-era copy: "student", "looking for a position", "based in Toronto", Aristotle quote, recommendation letter.

---

## 4. Hobbies

Mention them — they are a big part of the personality. Present them simply and briefly, not as a
gimmick (the "bill of materials" treatment was rejected), and without personal-life detail.

| Hobby | Weight | Notes |
| --- | --- | --- |
| Skiing | **Big one** | Lead with it. |
| Camping | Big | "Up there" with skiing. |
| 3D printing | Ongoing | Ran a 3D-printing shop in Brazil, 2016–2018. |
| Woodworking | Ongoing | |
| Electronics / robotics | Origin story | Where it started (robotics teacher). Not a current hobby — mention only in the story. |
| Home lab | Ongoing | |
| Smoking BBQ | Ongoing | Low and slow. |
| Gaming | Mention | Added by Alec in the 2a handoff (photo caption). |
| Competitive programming | Occasional | IEEEXtreme: 11th in Canada, top 12% worldwide (2020); 20th in Canada (2019). |

---

## 5. Approved facts

Source of truth: the original brief's appendix, the 2026 résumé (`public/resume.pdf`), and Alec's
answers in conversation. Don't invent anything beyond these.

- **ServiceTitan — Staff Software Engineer**, May 2025–present, remote (Ontario). Tech lead for one of
  the teams behind Contact Center Pro (cloud contact-center product). Shared authorization and
  service-client libraries; caching/resilience for the most critical dependency; usage-based billing
  for the AI virtual-agent product; Kafka and Azure Service Bus consumer patterns; led AI-assisted
  engineering adoption; org-wide talk on microservice auth.
- **ServiceTitan — Senior Software Engineer**, Aug 2022–Apr 2025. Tech lead of the Contact Center Pro
  team from late 2024. Co-led ECS→Kubernetes migration; MongoDB 7 upgrade; Kafka partitioning with
  per-entity ordering; core scheduling services/APIs for Scheduling Pro (incl. Reserve with Google);
  public partner-integration API and SSO via a token server; call-routing features; a year owning
  scheduling-platform production support.
- **HomeX — Software Engineer I/II**, Apr 2021–Aug 2022, Toronto. Schedule Engine (acquired by
  ServiceTitan, Aug 2022). Full-stack TypeScript/Node.js, GraphQL, Kafka, MongoDB, React. First
  end-to-end metrics, dashboards and alerting for the platform.
- **Earlier:** software engineer (contract), George Brown College Research & Innovation, 2020–2021;
  volunteer software engineer, Working Women Community Center, 2020–2022; robotics teacher, Jean Piaget
  College (Santos, Brazil), 2015–2018; founder of a 3D-printing shop, 2016–2018; tutor and teaching
  assistant, George Brown College, 2019–2021 (keep on the site even though the new résumé drops it:
  it is part of the teaching thread).
- **Education:** Advanced Diploma, Computer Programmer Analyst, George Brown College, 2018–2021;
  Computer Technology Departmental Award.
- **Stack (for context, not a keyword wall):** C#/.NET, TypeScript/Node.js, React, Kafka, MongoDB,
  PostgreSQL, Redis, Kubernetes, Azure.
- **Links:** alec.paglia@gmail.com · linkedin.com/in/alecbp · github.com/AlecBp · alecpagliarussi.me

---

## 6. Current copy (live on `redesign/astro`, design 2a "Statement + portrait")

| Slot | Text |
| --- | --- |
| h1 | Alec Pagliarussi / Staff Software Engineer / at ServiceTitan |
| Intro | Backend engineer at heart. Five years of building services, APIs and event-driven systems. Outside work I'm still building things: personal projects, woodworking and 3D printing. |
| Photo caption | Out of office. Skiing is the big one. Then camping, woodworking, 3D printing, BBQ smoking and gaming. |
| Expertise | Distributed backend systems · Event-driven architecture · Data and performance · Reliability and platform · Technical leadership ("The teacher in me never really left.") |
| Asides | "I run a home lab too, so I'm on call there as well." · "Before software, I spent three years teaching robotics in Brazil." |
| Route summary | From teaching robotics in Brazil to leading a team at ServiceTitan. |
| Contact | Always up for a good engineering problem. Or a ski trip. |

Full text: `src/content/profile.md`, `expertise.yaml`, `route.yaml`, `experience/`.

---

## 7. Design principles (from the explorations)

Direction chosen: **between "simple and clean, with photos" and "bold and minimal"**.

- From *bold and minimal*: type-led, a strong statement up top, generous space, very little decoration.
- From *simple and clean, with photos*: a real photo carries personality instead of visual gimmicks.
  **Constraint:** Alec has few shareable photos. Plan for **one** portrait — possibly a new one taken
  skiing or camping — not a gallery. Personality comes mainly from the words and the type.
- Net effect: a calm, confident page where the words and one good photo do the work.

**Keep**
- The **route timeline** (Brazil → Toronto → HomeX → ServiceTitan → Staff), with the line
  **continuing past 2025** into "what's next".
- Hobbies clearly present, as plain content.

**Avoid** (feedback on the Blueprint, Swiss and Literary explorations)
- **Busy** pages: many boxes, labels, patterns and notes competing for attention.
- **Costumes:** themes that dress the site up as something else (engineering drawing, magazine, book).
- **Gimmicky interactivity** that adds no value (e.g. the outage simulator).
- Parts-list / "bill of materials" style framing of hobbies.
- Generic developer-portfolio templates; corporate tone.

**Constraints still in force:** light and dark mode, accessible (WCAG AA, keyboard, reduced motion),
fast (Lighthouse 95+, under ~500 KB), no client JS beyond small essentials, self-hosted fonts,
strict CSP, deploys to Netlify unchanged.

---

## 8. Decisions log

Answers from Alec, 2026-09-23:

| Question | Answer |
| --- | --- |
| Electronics/robotics | Where it started; not a current hobby. |
| Tutor/TA line | Keep. It parallels teaching and growing engineers. |
| Photos | Few shareable. Maybe a new profile photo in a skiing or camping setting. No gallery. |
| Personal detail | Convey personality and interests without much personal-life detail. |
| Route's next stop | Growing the career: new challenges, bigger projects, at work and personally. |
| `LICENSE.md` | Removed. (With no licence file, the public repo's code defaults to all rights reserved.) |
| Design direction | Between "simple and clean, with photos" and "bold and minimal". |
| Experience tone | More corporate/serious is fine there. |
| Rejected | Blueprint (busy, costume, impersonal), parts-list hobbies, outage simulator. |

Design handoff 2a ("Statement + portrait", from `~/Downloads/design_handoff_homepage`), 2026-09-25:

| Change | Detail |
| --- | --- |
| Layout | Big statement h1 + intro + tall ski portrait; Expertise (5 rows); horizontal Route timeline; compact Experience; contact statement. Geist only (Charter dropped). |
| Removed | About section, Selected work, side projects, "Beyond work", education line, IEEEXtreme mention. Hobbies now live in the photo caption and two asides. |
| Photo | New ski portrait (`src/assets/portrait.jpg`); the old headshot is retired. |
| Stack names | A tech line per Expertise row is fine (C#/.NET, TypeScript, Node.js, GraphQL, Kafka, Azure Service Bus, MongoDB, PostgreSQL, Redis, Kubernetes, Azure, AWS). |
| Implementation note | Route switches to horizontal at 60rem (not 720px) because eight columns overlap on tablets. |

Design handoff 4a (animated mountain horizon, from `~/Downloads/design_handoff_scenery`), 2026-09-25:
a faded SVG scene behind the bottom of the intro (ridgelines, chairlift, skiers, snow in the gutters),
~30% strength behind the content column. Ambient, not interactive; paused for reduced motion and off
screen. It carries the skiing personality visually, so the copy doesn't need to say more.

SEO pass, 2026-09-25: the structured data names George Brown College as `alumniOf` (an approved fact from
§5); the page shows it as the 2018 route stop, and it helps search engines match the LinkedIn profile. Remove
`alumniOf` from `profile.md` to drop it. Title and description copy are unchanged.

Intro wording, 2026-09-25: Alec dropped "tech lead on Contact Center Pro these days" from the intro: no team or
product name there, and no "tech lead" either. It now opens "Backend engineer at heart." The heading already says
Staff Software Engineer at ServiceTitan. Experience keeps its team names; the tech-lead fact stays under Expertise.

Still open:

1. Reference sites for the bold-and-minimal feel, if Alec has any.
