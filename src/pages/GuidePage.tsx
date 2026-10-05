import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Box,
  CheckCircle2,
  FolderGit2,
  Github,
  Globe,
  KeyRound,
  Link2,
  Lock,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Terminal,
  UserRound,
} from 'lucide-react';
import { Link } from '../router';
import { Callout, CodeBlock, C, DocH2, DocH3, DocsLayout, P, Steps, Tabs } from '../components/docs/DocsKit';
import { CommandReferenceTable, DeployFlagsTable, DnsTable } from '../components/docs/Tables';
import {
  CLI_SNIPPETS,
  DETECTED_STACKS,
  EXAMPLE_PUBLIC_REPO,
  LOCAL_ROUTE_PATTERN,
  SSL_FACTS,
} from '../data/productGuide';

const TOC = [
  { id: 'sign-in', label: '1. Sign in with GitHub' },
  { id: 'deploy', label: '2. Deploy your first app' },
  { id: 'domains', label: '3. Custom domains & SSL' },
  { id: 'env', label: '4. Secrets & env variables' },
  { id: 'cli', label: '5. Using the CLI' },
  { id: 'reference', label: 'Quick reference' },
];

const STEP_CARDS = [
  { id: 'sign-in', icon: Github, title: 'Sign in with GitHub', text: 'OAuth 2.0, no tokens to paste' },
  { id: 'deploy', icon: FolderGit2, title: 'Deploy an app', text: 'Dashboard or one CLI command' },
  { id: 'domains', icon: Globe, title: 'Domains & SSL', text: "Free Let's Encrypt certificates" },
  { id: 'env', icon: KeyRound, title: 'Secrets', text: 'Encrypted at rest, masked in UI' },
  { id: 'cli', icon: Terminal, title: 'CLI', text: 'Everything from your terminal' },
];

/* Small product-UI mockups used to illustrate each step ----------------- */

const Window: React.FC<{ title: string; path?: string; children: React.ReactNode }> = ({ title, path, children }) => (
  <div className="rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] overflow-hidden shadow-subtle">
    <div className="px-4 py-2.5 border-b border-gray-200 dark:border-[#1A1A1A] bg-gray-50 dark:bg-[#050505] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-[#262626]" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-[#262626]" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-[#262626]" />
        </div>
        <span className="ml-2 text-xs font-medium text-gray-700 dark:text-gray-300">{title}</span>
      </div>
      {path && <span className="text-[11px] font-mono text-gray-400 dark:text-[#666666]">{path}</span>}
    </div>
    <div className="p-5">{children}</div>
  </div>
);

const LoginMock = () => (
  <Window title="Sign in" path="/login">
    <div className="max-w-xs mx-auto text-center py-2">
      <div className="text-base font-semibold text-gray-950 dark:text-white">Sign in to SmallCloud</div>
      <div className="text-xs text-gray-500 dark:text-[#8A8A8A] mt-1">Deploy straight from your repositories.</div>
      <div className="mt-5 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#111111] dark:bg-white text-white dark:text-black text-sm font-medium">
        <Github className="w-4 h-4" /> Continue with GitHub
      </div>
      <div className="my-4 flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-[#5C5C5C]">
        <span className="flex-1 h-px bg-gray-200 dark:bg-[#1F1F1F]" /> local testing <span className="flex-1 h-px bg-gray-200 dark:bg-[#1F1F1F]" />
      </div>
      <div className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-200 dark:border-[#262626] text-gray-700 dark:text-gray-300 text-sm">
        <UserRound className="w-4 h-4" /> Demo GitHub Account
      </div>
    </div>
  </Window>
);

const DeployFormMock = () => (
  <Window title="Deploy Application" path="/applications/new">
    <div className="space-y-4 text-sm">
      <div className="inline-flex p-1 rounded-lg bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-[#222222] text-xs">
        <span className="px-3 py-1 text-gray-500 dark:text-[#8A8A8A]">GitHub repositories</span>
        <span className="px-3 py-1 rounded-md bg-white dark:bg-[#262626] text-gray-900 dark:text-white shadow-sm">Custom Git URL</span>
      </div>
      <div>
        <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-[#666666] mb-1.5">Repository URL</div>
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#0E0E0E] font-mono text-xs text-gray-800 dark:text-gray-200 break-all">
          <Link2 className="w-3.5 h-3.5 text-gray-400 shrink-0" /> {EXAMPLE_PUBLIC_REPO}
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="px-2 py-1 rounded-md bg-emerald-50 dark:bg-[#071F15] border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 font-mono flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" /> FastAPI detected
        </span>
      </div>
      <div className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-500 text-white text-sm font-medium">
        Deploy Repository <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </Window>
);

const DomainMock = () => (
  <Window title="Domains & SSL" path="my-app">
    <div className="space-y-3 text-sm">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <span className="font-mono text-gray-900 dark:text-white">api.mycompany.dev</span>
        <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-[#071F15] border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400 text-xs font-medium flex items-center gap-1">
          <Lock className="w-3 h-3" /> HTTPS active
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
        {[
          ['Issuer', "Let's Encrypt"],
          ['Key', 'RSA 2048-bit'],
          ['Protocol', 'TLS 1.3'],
          ['Renewal', 'Automatic · 60 days'],
        ].map(([k, v]) => (
          <div key={k} className="px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#0E0E0E] border border-gray-200 dark:border-[#1F1F1F]">
            <div className="text-gray-400 dark:text-[#666666] text-[10px] uppercase tracking-wider">{k}</div>
            <div className="text-gray-800 dark:text-gray-200 mt-0.5">{v}</div>
          </div>
        ))}
      </div>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#262626] text-xs text-gray-700 dark:text-gray-300">
        <RefreshCw className="w-3.5 h-3.5" /> Renew SSL
      </div>
    </div>
  </Window>
);

const EnvMock = () => (
  <Window title="Environment Variables" path="my-app">
    <div className="divide-y divide-gray-100 dark:divide-[#1A1A1A] text-sm font-mono">
      {['STRIPE_API_KEY', 'DB_PORT', 'DATABASE_URL'].map((k) => (
        <div key={k} className="flex items-center justify-between py-2.5 gap-4">
          <span className="text-amber-700 dark:text-amber-300 text-xs">{k}</span>
          <span className="text-gray-400 dark:text-[#5C5C5C] tracking-widest text-xs">••••••••••••</span>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-[#737373]">
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Encrypted at rest · values masked
    </div>
  </Window>
);

/* Page ---------------------------------------------------------------- */

export const GuidePage: React.FC = () => {
  const header = (
    <>
      <div className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 dark:text-[#8A8A8A]">Documentation</div>
      <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white font-sans">SmallCloud user guide</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
        Everything you need to go from a GitHub repository to a running app: sign in, deploy, add a domain with free SSL, manage secrets, and
        work from the terminal.
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {STEP_CARDS.map((s, i) => (
          <motion.a
            key={s.id}
            href={`#${s.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            whileHover={{ y: -3 }}
            className="p-3.5 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] hover:border-gray-300 dark:hover:border-[#333333] transition-colors"
          >
            <div className="flex items-center justify-between">
              <s.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-[10px] font-mono text-gray-400 dark:text-[#5C5C5C]">0{i + 1}</span>
            </div>
            <div className="mt-3 text-sm font-semibold text-gray-950 dark:text-white">{s.title}</div>
            <div className="text-xs text-gray-500 dark:text-[#8A8A8A] mt-0.5">{s.text}</div>
          </motion.a>
        ))}
      </div>
    </>
  );

  const aside = (
    <Link
      to="/cli"
      className="block p-4 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0A0A0A] hover:border-gray-300 dark:hover:border-[#333333] transition-colors"
    >
      <Terminal className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      <div className="mt-2 text-sm font-semibold text-gray-950 dark:text-white">CLI reference</div>
      <div className="text-xs text-gray-500 dark:text-[#8A8A8A] mt-0.5">Every command and flag →</div>
    </Link>
  );

  return (
    <DocsLayout toc={TOC} header={header} aside={aside}>
      {/* STEP 1 ------------------------------------------------------- */}
      <section className="space-y-6">
        <DocH2 id="sign-in" eyebrow="Step 1">Sign in with GitHub</DocH2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
          <div className="space-y-5">
            <P>
              Open <C>/login</C> and click <strong className="text-gray-900 dark:text-white">Continue with GitHub</strong>. SmallCloud completes
              the OAuth 2.0 flow, then queries GitHub's API to list your repositories so you can pick one to deploy.
            </P>
            <Callout type="tip" title="No secret tokens">
              You never create or paste a GitHub personal access token. Access is granted on GitHub's own authorisation screen.
            </Callout>
            <Callout type="note" title="Testing locally?">
              Click <strong>Demo GitHub Account</strong> on the login page to simulate an authenticated GitHub profile without a real GitHub
              account.
            </Callout>
            <div>
              <DocH3>From the terminal</DocH3>
              <div className="mt-3">
                <CodeBlock code={'smallcloud login     # Authenticate session\nsmallcloud whoami    # View current user'} />
              </div>
            </div>
          </div>
          <LoginMock />
        </div>
      </section>

      {/* STEP 2 ------------------------------------------------------- */}
      <section className="space-y-6">
        <DocH2 id="deploy" eyebrow="Step 2">Deploy your first application</DocH2>
        <P>Deploy from the web dashboard or with a single CLI command. Both do the same thing.</P>

        <Tabs
          id="deploy"
          tabs={[
            {
              key: 'web',
              label: 'Web dashboard',
              icon: <Monitor className="w-4 h-4" />,
              content: (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
                  <Steps
                    items={[
                      <>
                        Go to <strong className="text-gray-900 dark:text-white">Deploy Application</strong> (<C>/applications/new</C>).
                      </>,
                      <>
                        Select your repository from the GitHub list, or switch to <strong className="text-gray-900 dark:text-white">Custom Git URL</strong>{' '}
                        for a public repository such as <C>{EXAMPLE_PUBLIC_REPO}</C>.
                      </>,
                      <>SmallCloud detects the stack automatically: {DETECTED_STACKS.join(', ')}.</>,
                      <>
                        Click <strong className="text-gray-900 dark:text-white">Deploy Repository</strong>.
                      </>,
                    ]}
                  />
                  <DeployFormMock />
                </div>
              ),
            },
            {
              key: 'cli',
              label: 'Terminal CLI',
              icon: <Terminal className="w-4 h-4" />,
              content: (
                <div className="space-y-5">
                  <CodeBlock code={CLI_SNIPPETS.deploy} />
                  <DeployFlagsTable />
                </div>
              ),
            },
          ]}
        />

        <div>
          <DocH3>Detected automatically</DocH3>
          <div className="mt-3 flex flex-wrap gap-2">
            {DETECTED_STACKS.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0A0A0A] text-sm font-mono text-gray-800 dark:text-gray-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <DocH3>What happens after you click deploy</DocH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A]">
              <Box className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <div className="mt-3 font-semibold text-gray-950 dark:text-white">Containerised with limits</div>
              <p className="mt-1 text-sm text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
                Your app runs in its own container with CPU and RAM bounds, so one app can't starve the others.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A]">
              <Link2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <div className="mt-3 font-semibold text-gray-950 dark:text-white">Routed instantly</div>
              <p className="mt-1 text-sm text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
                The app is available at <C>{LOCAL_ROUTE_PATTERN}</C>.
              </p>
            </div>
          </div>
          <Callout type="note">
            Want it on your own domain over HTTPS? Continue to <a href="#domains" className="underline underline-offset-2">Step 3</a>.
          </Callout>
        </div>
      </section>

      {/* STEP 3 ------------------------------------------------------- */}
      <section className="space-y-6">
        <DocH2 id="domains" eyebrow="Step 3">Custom domains & free Let's Encrypt SSL</DocH2>
        <P>Point your domain at SmallCloud, add it to your app, and SmallCloud issues and renews the certificate for you.</P>

        <div className="space-y-3">
          <DocH3>1. Configure DNS at your registrar</DocH3>
          <DnsTable />
        </div>

        <Callout type="warning" title="Let's Encrypt needs to reach your domain">
          Let's Encrypt can only issue a certificate if your domain resolves to a SmallCloud host reachable from the public internet. Use your
          server's public IP for the A record. <C>127.0.0.1</C> only works for local routing on your own machine.
        </Callout>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
          <div className="space-y-5">
            <div className="space-y-3">
              <DocH3>2. Add the domain</DocH3>
              <P>
                Enter your domain (for example <C>api.mycompany.dev</C>) in the <strong className="text-gray-900 dark:text-white">Domains & SSL</strong>{' '}
                tab or on the dashboard. Or use the CLI:
              </P>
              <CodeBlock code={CLI_SNIPPETS.domainAdd} />
            </div>
            <div className="space-y-3">
              <DocH3>3. SSL is issued automatically</DocH3>
              <ul className="space-y-2">
                {SSL_FACTS.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[15px] text-gray-700 dark:text-[#B5B5B5]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <DomainMock />
        </div>
      </section>

      {/* STEP 4 ------------------------------------------------------- */}
      <section className="space-y-6">
        <DocH2 id="env" eyebrow="Step 4">Managing secrets & environment variables</DocH2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
          <div className="space-y-5">
            <P>Keep API keys and configuration out of your repository. Add them per app instead.</P>
            <ul className="space-y-2">
              {['Encrypted at rest in SQLite', 'Values are masked in the UI with bullet points (••••••••••••)'].map((f) => (
                <li key={f} className="flex gap-2.5 text-[15px] text-gray-700 dark:text-[#B5B5B5]">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <CodeBlock code={CLI_SNIPPETS.env} />
            <Callout type="tip">Set several variables in one command by listing multiple <C>KEY=VALUE</C> pairs.</Callout>
          </div>
          <EnvMock />
        </div>
      </section>

      {/* STEP 5 ------------------------------------------------------- */}
      <section className="space-y-6">
        <DocH2 id="cli" eyebrow="Step 5">Using the smallcloud CLI</DocH2>
        <P>
          The CLI lives at <C>bin/smallcloud</C> in the SmallCloud project. Optionally link it globally so you can type <C>smallcloud</C> from
          anywhere (run this from the project root):
        </P>
        <CodeBlock code={CLI_SNIPPETS.alias} title="Global alias (optional)" />
        <DocH3>Essential commands</DocH3>
        <CodeBlock code={CLI_SNIPPETS.essentials} />
        <Link
          to="/cli"
          className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0A0A0A] hover:border-gray-300 dark:hover:border-[#333333] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#111111] dark:bg-[#141414] border border-gray-800 dark:border-[#262626] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-950 dark:text-white">Full CLI guide</div>
              <div className="text-sm text-gray-500 dark:text-[#8A8A8A]">Install, every command, flags, and a complete workflow</div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* REFERENCE ---------------------------------------------------- */}
      <section className="space-y-6">
        <DocH2 id="reference" eyebrow="Cheat sheet">Quick reference</DocH2>
        <CommandReferenceTable />
      </section>
    </DocsLayout>
  );
};
