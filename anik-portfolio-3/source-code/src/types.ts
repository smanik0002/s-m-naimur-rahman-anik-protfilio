export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend & Mobile' | 'Core CS & Engineering' | 'Databases & Tools' | 'Productivity & Office';
  level: number; // 0 to 100
  levelLabel: string;
  description: string;
  iconName: string;
  isHighlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'Web' | 'Mobile' | 'Database' | 'Systems & Algorithms';
  githubUrl: string;
  liveDemoUrl?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
  highlights: string[];
}

export interface EducationItem {
  stage: 'University' | 'College' | 'School';
  institution: string;
  degree: string;
  location: string;
  period?: string;
  status: string;
  badge: string;
  highlights: string[];
}

export interface AcademicCourse {
  title: string;
  code: string;
  description: string;
  topics: string[];
  icon: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
