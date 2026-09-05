Ayanda Mini Designs — Portfolio Website

A personal portfolio site for Ayanda Mini, a multimedia designer working across video editing, photography, UX/UI, and graphic design.

Live site: add your deployed URL here once live

Overview

Single-page portfolio built with React, TypeScript, and Tailwind CSS, featuring:

Hero — Landing intro and tagline
Selected Work — Curated project sections (Custom Award Design, Inspire Work, Event Photography, and more) plus a video showreel
Skills & Tools — Core competencies and software toolkit
About — Bio, work experience, and education
Contact — Direct email (with copy-to-clipboard) and social links
Tech Stack
React + TypeScript
Vite
Tailwind CSS
Framer Motion (animations)
Lucide React (icons)
Getting Started

Clone the repo and install dependencies:

bash
git clone https://github.com/NeoM84/ayandaminidesignsportfolio.git
cd ayandaminidesignsportfolio
npm install

Run the local dev server:

bash
npm run dev

Build for production:

bash
npm run build
Project Structure
src/
  components/     # Section components (Hero, ProjectGrid, SkillsSection, etc.)
  data/           # Content data (projects, skills, about info)
  context/        # Shared React context (cursor state, etc.)
  types.ts        # Shared TypeScript interfaces
public/
  assets/         # Images and static files
  favicon.ico, favicon.svg, etc.
Updating Content

Most of the site's text and project data lives in the src/data/ folder rather than the components themselves:

data/selectedWork.ts — project sections and items
data/skills.ts — skills and tools lists
data/about.ts — bio, work experience, education

Update these files to change content without touching component code.

Author

Designed and developed for Ayanda Mini — LinkedIn · Instagram
