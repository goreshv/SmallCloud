/**
 * Product facts used across the home page, the user guide (/docs) and the CLI page (/cli).
 * Keep this file in sync with the real product — it is the single source of truth for the site.
 */

export const DETECTED_STACKS = ['Next.js', 'FastAPI', 'Node.js', 'Python', 'Dockerfile'] as const;

export const EXAMPLE_PUBLIC_REPO = 'https://github.com/tiangolo/fastapi';

/** Route an app receives straight after deploying (local install). */
export const LOCAL_ROUTE_PATTERN = 'http://localhost:8000/live/<app-slug>';

export interface DnsRecord {
  type: string;
  host: string;
  target: string;
  usage: string;
}

export const DNS_RECORDS: DnsRecord[] = [
  { type: 'CNAME', host: 'api or app', target: 'local.smallcloud', usage: 'Subdomains (e.g. api.yourbrand.dev)' },
  { type: 'A', host: '@', target: '127.0.0.1 (or Public IP)', usage: 'Apex domains (yourbrand.dev)' },
];

export const SSL_FACTS = [
  'Generates a 2048-bit RSA key pair for the domain',
  "Obtains an X.509 certificate from Let's Encrypt",
  'Activates TLS 1.3 reverse-proxy routing to your app',
  'Renews automatically in the background every 60 days',
  'One-click manual “Renew SSL” whenever you need it',
];

export interface CliCommand {
  command: string;
  description: string;
  group: 'Account' | 'Apps' | 'Environment' | 'Domains';
}

export const CLI_COMMANDS: CliCommand[] = [
  { group: 'Account', command: 'smallcloud login', description: 'Authenticate your terminal session' },
  { group: 'Account', command: 'smallcloud whoami', description: 'Show the currently signed-in user' },
  {
    group: 'Apps',
    command: 'smallcloud deploy --name <app> --repo <git-url> --port <port>',
    description: 'Build a repository into a container and route it',
  },
  { group: 'Apps', command: 'smallcloud apps', description: 'List apps with their statuses and ports' },
  { group: 'Apps', command: 'smallcloud logs <app>', description: 'Stream live container logs' },
  {
    group: 'Environment',
    command: 'smallcloud env set <app> KEY=VALUE [KEY=VALUE ...]',
    description: 'Set one or more environment variables',
  },
  { group: 'Environment', command: 'smallcloud env list <app>', description: "List an app's environment variables" },
  {
    group: 'Domains',
    command: 'smallcloud domains add <app> <domain>',
    description: "Attach a custom domain and issue a Let's Encrypt certificate",
  },
  { group: 'Domains', command: 'smallcloud domains list', description: 'View custom domains and TLS status' },
];

export const DEPLOY_FLAGS = [
  { flag: '--name', example: 'my-app', description: 'Name of the app. You use it in later commands, e.g. logs my-app.' },
  { flag: '--repo', example: EXAMPLE_PUBLIC_REPO, description: 'Git URL of the repository to deploy.' },
  { flag: '--port', example: '8000', description: 'Port your application listens on (8000 for a typical FastAPI app).' },
];

export const CLI_SNIPPETS = {
  alias: 'sudo ln -sf "$(pwd)/bin/smallcloud" /usr/local/bin/smallcloud',
  deploy: `./bin/smallcloud deploy --name my-app --repo ${EXAMPLE_PUBLIC_REPO} --port 8000`,
  domainAdd: './bin/smallcloud domains add my-app api.mycompany.dev',
  env: `./bin/smallcloud env set my-app STRIPE_API_KEY=sk_live_your_key DB_PORT=5432
./bin/smallcloud env list my-app`,
  essentials: `smallcloud login          # Authenticate session
smallcloud whoami         # View current user
smallcloud apps           # List apps, statuses, and ports
smallcloud logs <app>     # Stream live container logs
smallcloud domains list   # View custom domains & TLS status`,
};
