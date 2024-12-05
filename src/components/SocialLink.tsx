import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full p-4 flex items-center justify-between space-x-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white/90 rounded-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
    >
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5" />
        <span className="font-medium">{label}</span>
      </div>
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
        <svg
          className="w-3 h-3 text-white/70 group-hover:translate-x-0.5 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </a>
  );
}