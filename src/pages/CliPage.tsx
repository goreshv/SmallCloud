import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  BookOpen,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Link } from '../router';
import { Callout, CodeBlock, C, DocH2, DocH3, DocsLayout, P, Steps } from '../components/docs/DocsKit';
import { CommandReferenceTable, DeployFlagsTable, DnsTable } from '../components/docs/Tables';
import { TerminalDemo } from '../components/docs/TerminalDemo';
import {
  CLI_SNIPPETS,
  DETECTED_STACKS,
  EXAMPLE_PUBLIC_REPO,
  LOCAL_ROUTE_PATTERN,
  SSL_FACTS,
} from '../data/productGuide';

const TOC = [
  { id: 'install', label: '1. Installation & Alias' },
  { id: 'auth', label: '2. Authentication' },
  { id: 'deploy', label: '3. Deploying Applications' },
  { id: 'inspect', label: '4. Status & Streaming Logs' },
  { id: 'domains', label: '5. Custom Domains & TLS' },
  { id: 'env', label: '6. Secrets & Environment' },
  { id: 'terminal-demo', label: '7. Live Terminal Demo' },
  { id: 'reference', label: '8. Command Reference' },
];

export const CliPage: React.FC = () => {
  const header = (
    <>
      <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400 mb-2">
        <Terminal className="w-3.5 h-3.5" />
        <span>Command Line Interface</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white font-sans">
        SmallCloud CLI Guide
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
        Deploy, inspect, and configure production containers directly from your terminal. Zero server setup, instant local & edge routing, automated Let's Encrypt certificates, and encrypted secrets.
      </p>

      {/* Quick stats pills */}
      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-[#222222] text-gray-800 dark:text-gray-200">
          Binary: ./bin/smallcloud
        </span>
        <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#071F15] border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-3 h-3" /> TLS 1.3 Automatic
        </span>
        <span className="px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300">
          SQLite AES-256 Storage
        </span>
      </div>
    </>
  );

  const aside = (
    <div className="space-y-3">
      <Link
        to="/docs"
        className="block p-4 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0A0A0A] hover:border-gray-300 dark:hover:border-[#333333] transition-colors"
      >
        <BookOpen className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        <div className="mt-2 text-sm font-semibold text-gray-950 dark:text-white">Full User Guide</div>
        <div className="text-xs text-gray-500 dark:text-[#8A8A8A] mt-0.5">Step-by-step dashboard flow →</div>
      </Link>

      <div className="p-4 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#070707] text-xs font-mono text-gray-600 dark:text-[#888888] space-y-2">
        <div className="font-semibold text-gray-900 dark:text-gray-200 uppercase text-[10px] tracking-wider">Quick Commands</div>
        <div>$ smallcloud login</div>
        <div>$ smallcloud apps</div>
        <div>$ smallcloud logs &lt;app&gt;</div>
      </div>
    </div>
  );

  return (
    <DocsLayout toc={TOC} header={header} aside={aside}>
      {/* 1. INSTALLATION & ALIAS -------------------------------------- */}
      <section className="space-y-5">
        <DocH2 id="install" eyebrow="Step 1">Installation & Global Alias</DocH2>
        <P>
          The SmallCloud CLI binary is packaged in the root of the SmallCloud repository at <C>./bin/smallcloud</C>. You can execute commands directly with the relative path or create a global symlink so the command <C>smallcloud</C> is available in any directory.
        </P>

        <DocH3>Create global symlink</DocH3>
        <CodeBlock code={CLI_SNIPPETS.alias} title="Run from repository root" />

        <Callout type="tip" title="Verification">
          After creating the symlink, test with <C>smallcloud --version</C> or <C>smallcloud whoami</C>. If you prefer not to use sudo, you can add <C>$(pwd)/bin</C> to your shell <C>PATH</C>.
        </Callout>
      </section>

      {/* 2. AUTHENTICATION ------------------------------------------- */}
      <section className="space-y-5">
        <DocH2 id="auth" eyebrow="Step 2">Session Authentication</DocH2>
        <P>
          Authenticate your terminal session using OAuth 2.0. SmallCloud queries GitHub's API securely without requiring you to manually generate or paste sensitive Personal Access Tokens (PATs).
        </P>

        <CodeBlock
          code={`# Authenticate current terminal session via browser or local token
smallcloud login

# Verify current authenticated profile
smallcloud whoami`}
        />

        <Callout type="note" title="Zero Secret Tokens">
          All session tokens are securely held in local configuration. For local testing without GitHub credentials, click <strong>"Demo GitHub Account"</strong> on the web interface or run <C>smallcloud login --demo</C>.
        </Callout>
      </section>

      {/* 3. DEPLOYING APPLICATIONS ----------------------------------- */}
      <section className="space-y-5">
        <DocH2 id="deploy" eyebrow="Step 3">Deploying Applications</DocH2>
        <P>
          Deploy any application by passing its name, git repository URL, and port. SmallCloud clones the source, auto-detects the runtime ({DETECTED_STACKS.join(', ')}), establishes CPU/RAM bounds, and launches the containerized service.
        </P>

        <CodeBlock code={CLI_SNIPPETS.deploy} title="Deploy command" />

        <DocH3>Deploy command flags</DocH3>
        <DeployFlagsTable />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50/50 dark:bg-[#0A0A0A] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-sm text-gray-950 dark:text-white">
              <Cpu className="w-4 h-4 text-brand-500" />
              <span>Resource Bounds</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-[#8E8E8E] leading-relaxed">
              Containers execute within isolated Linux namespaces with strict CPU and memory ceilings to prevent noisy neighbor starvation.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50/50 dark:bg-[#0A0A0A] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-sm text-gray-950 dark:text-white">
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>Instant Routing</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-[#8E8E8E] leading-relaxed">
              Upon completion, the application receives an instantaneous reverse-proxy route at <C>{LOCAL_ROUTE_PATTERN}</C>.
            </p>
          </div>
        </div>
      </section>

      {/* 4. STATUS & LOGS -------------------------------------------- */}
      <section className="space-y-5">
        <DocH2 id="inspect" eyebrow="Step 4">Status Inspection & Streaming Logs</DocH2>
        <P>
          Monitor all active services, exposed port bindings, container health states, and stream real-time standard output and error logs directly to your terminal.
        </P>

        <div className="space-y-3">
          <DocH3>List active applications</DocH3>
          <CodeBlock code="smallcloud apps" />
        </div>

        <div className="space-y-3">
          <DocH3>Stream live application logs</DocH3>
          <CodeBlock
            code={`# Stream logs for a specific application
smallcloud logs my-app

# Follow live output (tail stream)
smallcloud logs my-app --follow`}
          />
        </div>
      </section>

      {/* 5. CUSTOM DOMAINS & TLS ------------------------------------- */}
      <section className="space-y-5">
        <DocH2 id="domains" eyebrow="Step 5">Custom Domains & Automated Let's Encrypt TLS</DocH2>
        <P>
          Attach production domains to your running applications with a single command. SmallCloud automatically provisions 2048-bit RSA keypairs, signs certificates through Let's Encrypt Authority, and activates TLS 1.3 reverse-proxy termination.
        </P>

        <DocH3>Attach custom domain via CLI</DocH3>
        <CodeBlock code={CLI_SNIPPETS.domainAdd} />

        <div className="space-y-3 pt-2">
          <DocH3>DNS registrar configuration</DocH3>
          <P>Before issuance can finalize, point your DNS record to your SmallCloud host:</P>
          <DnsTable />
        </div>

        <div className="space-y-3 pt-2">
          <DocH3>List domains and TLS statuses</DocH3>
          <CodeBlock code="smallcloud domains list" />
        </div>

        <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-950/60 bg-emerald-50/50 dark:bg-[#04130C] space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900 dark:text-emerald-300">
            <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Automated SSL Lifecycle</span>
          </div>
          <ul className="space-y-1.5 text-xs text-emerald-800 dark:text-emerald-400">
            {SSL_FACTS.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. SECRETS & ENVIRONMENT ------------------------------------ */}
      <section className="space-y-5">
        <DocH2 id="env" eyebrow="Step 6">Secrets & Environment Variables</DocH2>
        <P>
          Manage sensitive API tokens, database connection strings, and runtime flags. Values are encrypted at rest with AES-256 in SQLite and masked with bullet points (<C>••••••••••••</C>) in the web interface.
        </P>

        <div className="space-y-3">
          <DocH3>Set and inspect environment variables</DocH3>
          <CodeBlock code={CLI_SNIPPETS.env} />
        </div>

        <Callout type="tip" title="Batch updates">
          You can set multiple environment variables simultaneously by passing space-separated <C>KEY=VALUE</C> arguments.
        </Callout>
      </section>

      {/* 7. LIVE TERMINAL DEMO --------------------------------------- */}
      <section className="space-y-5">
        <DocH2 id="terminal-demo" eyebrow="Interactive Demo">Terminal Walkthrough Simulator</DocH2>
        <P>
          See the end-to-end flow in action: from <C>smallcloud login</C> to deployment, environment configuration, custom domain mapping, and container inspection.
        </P>
        <div className="pt-2">
          <TerminalDemo />
        </div>
      </section>

      {/* 8. COMMAND REFERENCE ---------------------------------------- */}
      <section className="space-y-5">
        <DocH2 id="reference" eyebrow="Full Reference">Complete Command Reference</DocH2>
        <P>
          All available CLI commands categorized by resource domain:
        </P>
        <CommandReferenceTable />

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50/60 dark:bg-[#0A0A0A]">
          <div>
            <h4 className="font-semibold text-gray-950 dark:text-white text-base">Prefer a Graphical Interface?</h4>
            <p className="text-sm text-gray-600 dark:text-[#8E8E8E] mt-0.5">
              Read the full user guide covering the web dashboard deployment console.
            </p>
          </div>
          <Link
            to="/docs"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-medium text-xs hover:bg-black dark:hover:bg-gray-100 transition-colors shrink-0"
          >
            <span>User Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </DocsLayout>
  );
};
