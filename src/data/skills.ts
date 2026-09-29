export interface SkillItem {
  id: string;
  name: string;
  category: 'core' | 'creative' | 'professional' | 'strategic';
  description?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'design' | 'motion' | 'office' | 'layout';
  description?: string;
}

export const skillsList: string[] = [
  'Collaborative',
  'Video Editing',
  'Content Strategy & Copywriting',
  'Social Media & Digital Marketing',
  'Self Development',
  'Typography',
  'Time Management',
  'UI/UX',
  'Wireframes & Prototypes',
  'Branding'
];

export const toolsList: string[] = [
  'Figma',
  'Premiere Pro',
  'Capcut',
  'Photoshop',
  'Illustrator',
  'Canva',
  'Affinity Designer',
  'MS PowerPoint',
  'Indesign',
  'After Effects'
];
