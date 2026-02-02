
export interface SectionContent {
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface LandingPageData {
  hero: SectionContent;
  painPoints: SectionContent;
  solution: SectionContent;
  portfolio: {
    title: string;
    subtitle: string;
    projects: Project[];
  };
  process: {
    title: string;
    steps: { step: string; label: string; desc: string }[];
  };
  differentiation: {
    title: string;
    reasons: { title: string; desc: string; icon: string }[];
  };
  cta: SectionContent;
}

export interface GeminiResponse {
  refinedText: string;
}
