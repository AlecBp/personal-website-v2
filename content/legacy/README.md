# Legacy site archive (Gatsby, 2020–2021)

Snapshot of everything the old Gatsby site at alecpagliarussi.me published, kept so nothing is
lost when the Gatsby code is removed. Raw data files are in `data/`, original images in `images/`.
Git history before the `redesign/astro` branch has the full source.

## Build and hosting (as found 2026-09-22)

- Gatsby 2.23 / React 16, react-bootstrap, SCSS, react-reveal animations, Font Awesome 4 (self-hosted).
- Plugins: sass, react-helmet, sharp, **gatsby-plugin-offline** (service worker at `/sw.js`),
  gatsby-plugin-manifest (theme color `#02aab0`, icon `src/images/favicon.png`).
- Hosted on **Netlify** (`server: Netlify` header). No `netlify.toml`, `_redirects`, `CNAME` or CI
  workflow in the repo: build command, publish dir and domain are configured in the Netlify UI.
- `www.alecpagliarussi.me` 301 → `https://alecpagliarussi.me/` (Netlify domain setting).
- No analytics, no Open Graph / Twitter meta, no Twitter handle anywhere in the source.
- Routes: `/` and `/404` only. `/manifest.webmanifest` and `/sw.js` also served.

## Head

- Title: "Alec Pagliarussi"
- Description: "Alec Pagliarussi - Software Engineer based in Toronto, ON"

## Hero

"I am **Alec Pagliarussi** / Software Engineer based in Toronto"

## About ("About Me")

Heading quote: "Pleasure in the job puts perfection in the work" - Aristotle

1. I am a Software Engineer, highly skilled in designing in developing React and NodeJS applications.
2. My journey in programming started back in high school, when I took part in many Robotics competitions and discovered my passion for problem-solving and creating things both hardware and software related.
3. After graduating from high school I was invited to work as a Robotics and Programming teacher, opened my own business, a 3D Printing Services company and worked on many projects, from designing my 3D printer to building drones and robots.
4. I enrolled in George Brown College's Computer Programmer Analyst course, where I among many things I had the opportunity to work as a tutor and teacher assistant, develop a diverse set of projects and work with industry partners.
5. I am a challenge-driven person who excels at working in teams and cooperation with a passion for learning and teaching.

Older unused paragraphs (in data, not rendered): "Currently taking the last semester of the Computer Programmer
Analyst program at George Brown College and looking for a position as Software Developer after graduation." /
"I am a challenge driven person, with strong teamwork and cooperation skills, and passionate about learning and
teaching." / "I started programming during High School and since then I had the opportunity to work with a wide
variety of technologies, ranging from robots, microprocessors and 3D printers to designing and developing software."

Buttons: "Get my Cover Letter" (Google Drive), "Get my Resume" (Google Drive). Retired.

- Resume: https://drive.google.com/file/d/1S9A2dhzPu2MmsqQKEXzTfzv0PUbt4o06/view?usp=sharing
- Cover letter: https://drive.google.com/file/d/19sMQ8SndArrPwm3GHFKDfqp6efNthIOW/view?usp=sharing

## Projects

| Project | Stack | Live demo | Status 2026-09-22 | Repo |
|---|---|---|---|---|
| React-Messenger — Slack-inspired messaging app | React, Redux, SemanticUI, Firebase | https://messenger.alecpagliarussi.me/ | 200, login page renders, no console errors (backend not exercised) | https://github.com/AlecBp/react-messenger-public (200) |
| Dog Breed Classifier — CNN classifies 120+ breeds from a photo; includes a write-up on training the model | TensorFlow 2, React, Flask, AWS EC2 + ALB | https://www.dogbreed.alecpagliarussi.me/ | **Dead**: DNS points at a CloudFront distribution that no longer resolves (curl exit 6) | none |
| Tutoring Management System — tutoring-program management for community centres (CRUD, scheduling/matching, reports, progress tracking) | React, Node.js, GraphQL, PostgreSQL, TypeORM, MaterialUI | none | — | none |
| Weather Forecast App — OpenWeather forecast for any city | React | https://weatherapp.alecpagliarussi.me | 200, fetches live 10-day forecast | https://github.com/AlecBp/weather-react (200) |
| React Spring CRUD — student records CRUD, Formik + yup validation, react-table filtering | React, Spring Boot, PostgreSQL, MaterialUI | none | — | https://github.com/AlecBp/react-spring-simple-crud (200) |

Full modal copy and image captions are in `data/projectData.json`.

## Experience (as published)

- **Software Engineer (Contract)**, Working Women Community Center, Toronto — Apr 2020 – Present. Tutoring program web app; data collection, scheduling, reports. TypeScript, React, Node.js, GraphQL, PostgreSQL.
- **Tutor and Teacher Assistant (Part-time)**, George Brown College — Jan 2019 – Aug 2020 and Feb 2021 – Present. 850+ hours of one-to-one tutoring (HTML, CSS, JS, C#, Python, Java, C++, PHP, MySQL, Math, CCNA, DSA); lab assistance; in-class sessions.
- **Software Engineer (Contract)**, George Brown College — Aug 2020 – Feb 2021. App for seniors in care homes (US/Canada) to meet online and access curated content; WebSockets, scheduled tasks, fine-grained authorization. React, Node.js, GraphQL, MongoDB, Redis, Twilio; AWS.
- **Extracurricular Robotics Teacher (Full-time)**, Colégio Jean Piaget, Santos, SP, Brazil — Jan 2015 – Jan 2018. Coached robotics competition teams; K–12 logic and intro programming.

## Other areas of interest

- Robotics — competitions in high school, "got a few gold medals on the way."
- 3D Printing — owns a 3D printer.
- Competitive programming — 11th in Canada, top 12% global, IEEEXtreme 2020.
- Gaming — first-person shooters and RPGs.

## References & Recommendations (retired)

Andrew Rudder, PhD — Professor, CADIT, George Brown College. Three excerpted quotes and a Google Drive
letter link (https://drive.google.com/file/d/1-ADe-CZ9gCy27zoE0QTdBDtMsqMGkQCi/view?usp=sharing).
Full text in `data/recommendationData.json`.

## Contact

"Would you like to work with me? Awesome!" / button "Let's Talk" (its `href` was the bare email string,
not a `mailto:`, so it was broken). No contact form.

## Footer

Back-to-top arrow; LinkedIn https://www.linkedin.com/in/alecbp/ ; GitHub https://github.com/AlecBp ; "© 2021 Alec Pagliarussi".

## 404

"Sorry, this path does not exist 😞" / "Go back".
