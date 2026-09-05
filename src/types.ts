export interface WorkItem {
  id: string;
  workId: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'tall'| 'banner'| 'widescreen';
  meta?: string;
}

export interface WorkSection {
  id: string;
  sectionNumber: string;
  heading: string;
  tagline?: string;
  items: WorkItem[];
}

export interface VideoShowcaseItem {
  id: string;
  workId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  duration?: string;
  format?: string;
  client?: string;
  year?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  yearsOfExperience: string;
  competencies: string[];
  tools: string[];
  highlight?: string;
}

export interface ToolBadge {
  name: string;
  category: 'design' | 'motion' | 'code' | '3d' | 'strategy';
  level: string;
}

export interface AwardItem {
  year: string;
  award: string;
  project: string;
  organization: string;
}

export interface ClientItem {
  name: string;
  industry: string;
  year: string;
}

export type CursorVariant = 'default' | 'project' | 'button' | 'link' | 'text' | 'hidden';

export interface CursorContextType {
  cursorVariant: CursorVariant;
  cursorText: string;
  setCursorVariant: (variant: CursorVariant, text?: string) => void;
  resetCursor: () => void;
}

