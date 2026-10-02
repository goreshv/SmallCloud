export interface Project {
  id: string;
  name: string;
  repo: string;
  branch: string;
  framework: string;
  frameworkIcon: string;
  url: string;
  status: 'production' | 'building' | 'failed';
  lastDeployed: string;
  commit: string;
  commitMsg: string;
  region: string;
  customDomain?: string;
}

export interface DeploymentLog {
  timestamp: string;
  level: 'info' | 'success' | 'warn' | 'error';
  message: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
