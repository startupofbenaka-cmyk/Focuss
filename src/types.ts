export type PageId = 'home' | 'services' | 'work' | 'about' | 'contact' | '404';

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  capabilities: string[];
  deliverables: string[];
  impact: string;
}

export type ProjectCategory = 'all' | 'branding' | 'websites' | 'marketing' | 'content' | 'ai';

export interface ConceptProject {
  id: string;
  name: string;
  industry: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  strategy: string;
  solution: string;
  deliverables: string[];
  expectedImpact: string;
  image: string;
  featured?: boolean;
}

export interface LeadEnquiry {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
}
