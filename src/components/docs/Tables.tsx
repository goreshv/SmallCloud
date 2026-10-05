import React from 'react';
import { CLI_COMMANDS, DEPLOY_FLAGS, DNS_RECORDS } from '../../data/productGuide';

const tableWrap = 'rounded-xl border border-gray-200 dark:border-[#1F1F1F] overflow-hidden overflow-x-auto';
const th = 'px-4 py-2.5 text-left text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-500 dark:text-[#8A8A8A]';
const td = 'px-4 py-3 align-top';

export const DnsTable: React.FC = () => (
  <div className={tableWrap}>
    <table className="w-full text-sm min-w-[560px]">
      <thead className="bg-gray-50 dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-[#1F1F1F]">
        <tr>
          <th className={th}>Record type</th>
          <th className={th}>Host / Name</th>
          <th className={th}>Target / IP</th>
          <th className={th}>Usage</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 dark:divide-[#1A1A1A] bg-white dark:bg-[#000000]">
        {DNS_RECORDS.map((r) => (
          <tr key={r.type}>
            <td className={td}>
              <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-[#262626] font-mono text-xs font-semibold text-gray-800 dark:text-gray-200">
                {r.type}
              </span>
            </td>
            <td className={`${td} font-mono text-[13px] text-gray-800 dark:text-gray-200`}>{r.host}</td>
            <td className={`${td} font-mono text-[13px] text-brand-600 dark:text-brand-400`}>{r.target}</td>
            <td className={`${td} text-gray-600 dark:text-[#A1A1A1]`}>{r.usage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const DeployFlagsTable: React.FC = () => (
  <div className={tableWrap}>
    <table className="w-full text-sm min-w-[560px]">
      <thead className="bg-gray-50 dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-[#1F1F1F]">
        <tr>
          <th className={th}>Flag</th>
          <th className={th}>Example</th>
          <th className={th}>Description</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 dark:divide-[#1A1A1A] bg-white dark:bg-[#000000]">
        {DEPLOY_FLAGS.map((f) => (
          <tr key={f.flag}>
            <td className={`${td} font-mono text-[13px] text-sky-600 dark:text-sky-400 whitespace-nowrap`}>{f.flag}</td>
            <td className={`${td} font-mono text-[12.5px] text-gray-700 dark:text-gray-300 break-all`}>{f.example}</td>
            <td className={`${td} text-gray-600 dark:text-[#A1A1A1]`}>{f.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const CommandReferenceTable: React.FC = () => {
  const groups = Array.from(new Set(CLI_COMMANDS.map((c) => c.group)));
  return (
    <div className={tableWrap}>
      <table className="w-full text-sm min-w-[600px]">
        <thead className="bg-gray-50 dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-[#1F1F1F]">
          <tr>
            <th className={th}>Command</th>
            <th className={th}>What it does</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-[#000000]">
          {groups.map((g) => (
            <React.Fragment key={g}>
              <tr className="bg-gray-50/60 dark:bg-[#050505] border-y border-gray-100 dark:border-[#1A1A1A]">
                <td colSpan={2} className="px-4 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400 dark:text-[#666666]">
                  {g}
                </td>
              </tr>
              {CLI_COMMANDS.filter((c) => c.group === g).map((c) => (
                <tr key={c.command} className="border-b border-gray-100 dark:border-[#141414] last:border-0">
                  <td className={`${td} font-mono text-[12.5px] text-gray-900 dark:text-gray-100`}>{c.command}</td>
                  <td className={`${td} text-gray-600 dark:text-[#A1A1A1]`}>{c.description}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
