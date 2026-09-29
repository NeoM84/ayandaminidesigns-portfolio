import { WorkExperienceItem, EducationItem } from '../types';

export const aboutData = {
  name: 'Ayanda Mini',
  title: 'Multimedia Designer & Brand Architect',
  location: 'Johannesburg, South Africa',
  bioLead: "I'm a multimedia designer; a jack of all design trades, but not yet a master of any...",
  bioExtended: [
    "My passion shifts between video editing, photography, UX/UI, and graphic design. Here you'll find work I've created across these categories over my years as a designer with a degree from Vega College. I'd love to hear from you if you're looking for a designer for your brand!"
  ],
  workexperience: [
    {
      year: 'May 2026 - Present',
      company: 'Allan & Gill Gray Philanthropies',
      role: 'Programme Administrator Inspire',
    },
    {
      year: 'April 2025 - Dec 2025',
      company: 'Allan & Gill Gray Philanthropies',
      role: 'Multimedia Content Creator',
    },
    {
      year: '2024 Jul-Sep',
      company: 'Syte',
      role: 'Design Intern',
    },
    {
      year: '2023 Nov-Dec',
      company: 'Setshabelo Family & Child Services',
      role: 'Freelance Photographer',
    }
  ] as WorkExperienceItem[],
  education: [
    { institutionname: 'Vega College', degree: 'BA Digital Design', year: '2020-2022' },
  ] as EducationItem[],
};
