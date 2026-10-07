type IconProps = { className?: string };

export const GithubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22" />
  </svg>
);

export const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

export const ArrowIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const SunIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const MenuIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
