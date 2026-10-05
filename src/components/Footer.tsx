import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from '../router';

interface FooterProps {
  onOpenDocsModal: () => void;
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDocsModal, onOpenDeployModal }) => {
  return (
    <footer className="bg-white dark:bg-[#000000] border-t border-gray-200 dark:border-[#1F1F1F] pt-16 pb-12 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-3 cursor-pointer">
              <div className="w-7 h-7 rounded-lg bg-surface-dark dark:bg-[#0E0E0E] flex items-center justify-center text-white border border-gray-800 dark:border-[#262626]">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 20C8.34315 20 7 18.6569 7 17C7 15.4806 8.1307 14.2254 9.60144 14.0305C9.53483 13.6963 9.5 13.3522 9.5 13C9.5 10.5147 11.5147 8.5 14 8.5C15.9084 8.5 17.5357 9.68913 18.1729 11.3653C18.6791 11.1298 19.2435 11 19.8333 11C21.7663 11 23.3333 12.567 23.3333 14.5C23.3333 14.6644 23.322 14.8262 23.3 14.9845C24.3142 15.429 25 16.4382 25 17.6C25 19.2569 23.6569 20.6 22 20.6H10.5"
                    stroke="#38BDF8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M14 20L16 17.5L18 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 18V23.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-bold text-gray-950 dark:text-white font-sans tracking-tight text-base">
                SmallCloud
              </span>
              <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-gray-100 dark:bg-[#121212] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#1F1F1F]">
                .si
              </span>
            </Link>

            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm max-w-sm mb-4 leading-relaxed">
              Simple application deployment for developers, startups, and agencies. From GitHub to production without managing servers.
            </p>

            <div className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#121212] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#121212] transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#121212] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-xs text-gray-900 dark:text-gray-200 uppercase tracking-wider font-mono mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Deployments
                </a>
              </li>
              <li>
                <a href="#custom-domains" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Domains
                </a>
              </li>
              <li>
                <a href="#dashboard-showcase" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Environment Variables
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Logs & Metrics
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Pricing (INR & USD)
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-xs text-gray-900 dark:text-gray-200 uppercase tracking-wider font-mono mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/docs"
                  className="hover:text-gray-950 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>User Guide</span>
                  <span className="text-[10px] font-mono px-1 rounded bg-gray-100 dark:bg-[#1E1E1E] text-gray-500">/docs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cli"
                  className="hover:text-gray-950 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Terminal CLI</span>
                  <span className="text-[10px] font-mono px-1 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400">/cli</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/docs#domains"
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  Domains & Free SSL
                </Link>
              </li>
              <li>
                <Link
                  to="/docs#env"
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  Encrypted Secrets
                </Link>
              </li>
              <li>
                <a href="#dashboard-showcase" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Datacenter (ap-south-1)
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-xs text-gray-900 dark:text-gray-200 uppercase tracking-wider font-mono mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("SmallCloud is an independent Indian cloud application deployment platform built for developers, agencies, and small businesses.");
                  }}
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="mailto:contact@smallcloud.si" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Terms of Service: Standard SaaS agreements governed by Indian commercial and digital services jurisdiction.");
                  }}
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Privacy Policy: Full compliance with India Digital Personal Data Protection (DPDP) Act. Zero tracking telemetry sold to third parties.");
                  }}
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  DPDP Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400 font-mono">
          <div>
            © {new Date().getFullYear()} SmallCloud (smallcloud.si). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Mumbai (ap-south-1) Operational
            </span>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <span className="text-gray-800 dark:text-gray-200">Made with precision in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
