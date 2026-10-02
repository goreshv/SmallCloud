import { Project, FaqItem } from '../types';

export const DEMO_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    name: 'Storefront',
    repo: 'acme/store',
    branch: 'main',
    framework: 'Next.js',
    frameworkIcon: 'nextjs',
    url: 'https://storefront.smallcloud.si',
    status: 'production',
    lastDeployed: '2 minutes ago',
    commit: 'c4f9a12',
    commitMsg: 'feat: optimize checkout page & add cart drawer',
    region: 'ap-south-1 (Mumbai, India)',
    customDomain: 'app.acme.com',
  },
  {
    id: 'proj-2',
    name: 'Inventory API',
    repo: 'acme/inventory-service',
    branch: 'main',
    framework: 'FastAPI',
    frameworkIcon: 'python',
    url: 'https://inventory.smallcloud.si',
    status: 'production',
    lastDeployed: '18 minutes ago',
    commit: '8b21ef0',
    commitMsg: 'perf: async database connection pool',
    region: 'ap-south-1 (Mumbai, India)',
    customDomain: 'api.acme.com',
  },
  {
    id: 'proj-3',
    name: 'Company Blog',
    repo: 'acme/marketing-blog',
    branch: 'main',
    framework: 'Astro',
    frameworkIcon: 'astro',
    url: 'https://blog.smallcloud.si',
    status: 'production',
    lastDeployed: '3 hours ago',
    commit: 'f93d4a1',
    commitMsg: 'content: publish 2026 product roadmap overview',
    region: 'ap-south-1 (Mumbai, India)',
  },
];

export const FEATURES = [
  {
    id: 'feat-github',
    title: 'GitHub Deployments',
    description: 'Connect repositories directly from GitHub and deploy without manually transferring source code.',
    badge: 'Direct Sync',
  },
  {
    id: 'feat-builds',
    title: 'Automatic Builds',
    description: 'SmallCloud detects supported frameworks and prepares the application automatically.',
    badge: 'Zero Config',
  },
  {
    id: 'feat-https',
    title: 'Automatic HTTPS',
    description: 'Every deployed application receives a secure HTTPS endpoint with auto-renewing TLS certificates.',
    badge: 'TLS 1.3',
  },
  {
    id: 'feat-domains',
    title: 'Custom Domains',
    description: 'Connect your own domain to your application. Example: app.yourcompany.com.',
    badge: 'DNS Ready',
  },
  {
    id: 'feat-env',
    title: 'Environment Variables',
    description: 'Manage application configuration and secrets securely without storing them directly in your source code.',
    badge: 'Encrypted',
  },
  {
    id: 'feat-logs',
    title: 'Deployment Logs',
    description: 'See build and deployment output in real-time when something succeeds or fails.',
    badge: 'Live Streaming',
  },
  {
    id: 'feat-redeploy',
    title: 'Automatic Redeployments',
    description: 'Connect your GitHub repository and automatically deploy new commits when changes are pushed.',
    badge: 'Git Webhooks',
  },
  {
    id: 'feat-isolation',
    title: 'Isolated Applications',
    description: 'Applications run in isolated environments so different customer deployments remain completely separated.',
    badge: 'Container Sandboxed',
  },
  {
    id: 'feat-dashboard',
    title: 'Simple Dashboard',
    description: 'See applications, deployments, domains, logs, and environment configuration from one place.',
    badge: 'Unified UI',
  },
];

export const AUDIENCES = [
  {
    title: 'Small Businesses',
    description: 'Launch your business application without hiring someone to manage servers.',
    tag: 'Cost Effective',
    example: 'E-commerce storefronts, internal tools, customer portals',
  },
  {
    title: 'Freelancers',
    description: 'Deploy client applications quickly without repeating the same infrastructure setup.',
    tag: 'Fast Handoff',
    example: 'Client web apps, headless CMS frontends, marketing tools',
  },
  {
    title: 'Agencies',
    description: 'Manage multiple client applications from one deployment platform.',
    tag: 'Multi-Project',
    example: 'Client staging URLs, portfolio websites, dedicated staging envs',
  },
  {
    title: 'Developers',
    description: 'Spend time building features instead of configuring servers.',
    tag: 'Focus on Code',
    example: 'Side projects, APIs, full-stack hobby experiments, microservices',
  },
];

export const WHY_ITEMS = [
  {
    title: 'Less infrastructure work.',
    description: 'Skip provisioning Linux virtual machines, opening firewall ports, configuring Nginx reverse proxies, or writing boilerplate Dockerfiles.',
  },
  {
    title: 'Simple deployments.',
    description: 'Paste your repository URL or choose from your authorized GitHub repositories. One click, and your live URL is ready.',
  },
  {
    title: 'Clear pricing.',
    description: 'Transparent tiers designed for small budgets and Indian developers. No unexpected bandwidth surprises or complex utility billing formulas.',
  },
  {
    title: 'Developer-friendly workflows.',
    description: 'Git-centric approach. When you push to your default branch, SmallCloud builds and deploys the latest commit automatically.',
  },
  {
    title: 'Built for small teams.',
    description: 'We do not build for sprawling Fortune 500 enterprises with thousand-page compliance forms. We build for agile makers who need to ship today.',
  },
  {
    title: 'Your code stays yours.',
    description: 'No proprietary vendor lock-in code or vendor SDKs required. Your project remains standard, portable code that runs anywhere.',
  },
];

export interface PricingPlan {
  name: string;
  description: string;
  monthlyInr: number;
  annualInr: number;
  monthlyUsd: number;
  annualUsd: number;
  badge: string;
  features: string[];
  buttonText: string;
  isPlaceholder: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free / Developer',
    description: 'For experimentation, learning, and personal projects.',
    monthlyInr: 0,
    annualInr: 0,
    monthlyUsd: 0,
    annualUsd: 0,
    badge: 'Developer Tier',
    features: [
      'Up to 3 active applications',
      '512MB RAM compute per instance',
      'Automatic HTTPS encryption (Let\'s Encrypt)',
      'SmallCloud subdomain (*.smallcloud.si)',
      'Basic build and runtime logs (24h retention)',
      'Community support forum',
    ],
    buttonText: 'Start for Free',
    isPlaceholder: true,
  },
  {
    name: 'Pro',
    description: 'For freelancers, independent builders, and small businesses.',
    monthlyInr: 999,
    annualInr: 799,
    monthlyUsd: 14,
    annualUsd: 11,
    badge: 'Production Ready',
    features: [
      'Up to 15 active applications',
      '2GB RAM compute per instance',
      'Custom domains with automatic SSL',
      'Encrypted environment variables',
      'Instant rollback & deployment history',
      'Automatic deployments on git push',
      'Extended logs (7-day retention)',
      'Email support with 4h SLA',
    ],
    buttonText: 'Deploy with Pro',
    isPlaceholder: true,
  },
  {
    name: 'Business',
    description: 'For growing teams, agency client rosters, and startups.',
    monthlyInr: 2999,
    annualInr: 2499,
    monthlyUsd: 42,
    annualUsd: 35,
    badge: 'Team Collaboration',
    features: [
      'Unlimited applications (fair compute use)',
      'Up to 8GB RAM dedicated compute',
      'Multiple team members & RBAC permissions',
      'High concurrency deployment queues',
      'Wildcard custom domains with SSL',
      'Priority email and Slack support',
      'Multi-project team workspace management',
      '30-day log retention & CSV export',
    ],
    buttonText: 'Get Started with Business',
    isPlaceholder: true,
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'What is SmallCloud?',
    answer: 'SmallCloud is an Indian developer-focused application hosting and deployment platform. It simplifies putting web applications onto the internet by handling builds, containers, reverse proxies, and SSL certificates automatically from your GitHub repository.',
  },
  {
    question: 'How does deployment work?',
    answer: 'You authorize SmallCloud with your GitHub account, choose a repository and branch, and click Deploy. SmallCloud detects your project runtime (such as Next.js, FastAPI, Node.js, etc.), runs the build process in an isolated environment, provisions a secure HTTPS URL, and routes incoming traffic to your application.',
  },
  {
    question: 'Do I need to manage a server?',
    answer: 'No. You do not need to provision VPS instances, patch operating systems, set up SSH keys, configure Nginx or Caddy, or manage SSL certificates. SmallCloud manages the underlying runtime environment for you.',
  },
  {
    question: 'Can I connect GitHub?',
    answer: 'Yes. SmallCloud connects directly to GitHub via our GitHub App integration. You can grant access to all repositories or select specific repositories.',
  },
  {
    question: 'Can I use my own domain?',
    answer: 'Yes. You can add your custom domain (such as app.yourcompany.com) in your project settings. Once you create a simple CNAME or A record with your DNS provider pointing to SmallCloud, we automatically verify it and provision an SSL certificate.',
  },
  {
    question: 'Does SmallCloud provide HTTPS?',
    answer: 'Yes. Every application deployed on SmallCloud receives an automatic TLS/SSL certificate, whether using our default *.smallcloud.si subdomain or your custom domain.',
  },
  {
    question: 'What frameworks are supported?',
    answer: 'SmallCloud provides out-of-the-box automatic detection for modern web frameworks and runtimes including Next.js, Remix, Vite/React, Vue, Nuxt, Astro, Node.js/Express, Python (FastAPI, Flask, Django), Go, Rust, and static sites. More runtimes are continuously being added.',
  },
  {
    question: 'Can I automatically deploy when I push to GitHub?',
    answer: 'Yes. When enabled, every push to your production branch triggers a fresh build and atomic deployment. If a build fails, your existing deployment stays online without interruption.',
  },
  {
    question: 'Where does my application run?',
    answer: 'Applications run in isolated Linux containers within our Indian infrastructure (Mumbai - ap-south-1 / Bengaluru). Each application is strictly isolated in its own namespace with dedicated memory and CPU boundaries, offering sub-15ms latency across India.',
  },
  {
    question: 'Can I deploy a Dockerfile?',
    answer: 'Currently, SmallCloud specializes in zero-config native detection for standard languages and frameworks. Custom Dockerfile deployments are currently under active development and planned for an upcoming release.',
  },
];
