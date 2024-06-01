
interface linkData {
    linkURL: string;
    linkName: string;
    linkIcon?: React.ReactNode;
  }
  
  interface ProjectData {
    projectImages: string[];
    projectName: string;
    projectType: string;
    projectTypeDisplay: string; // I.e. (Software (TypeScript / React))
    projectDescription: string;
    //   lessonsLearned?: string;
    textBlocks: { header: string; content: string }[];
    technologies: string[];
    projectLinks?: linkData[];
    projectDate?: string;
  }
  