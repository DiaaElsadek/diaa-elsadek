import { Mail, ArrowUpRight } from "lucide-react";

function GithubIcon({ className, size }: { className?: string, size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    </svg>
  );
}

function LinkedinIcon({ className, size }: { className?: string, size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

// function TwitterIcon({ className, size }: { className?: string, size?: number }) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//     </svg>
//   );
// }

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/diaaelsadek", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/diaaelsadek", icon: LinkedinIcon },
  // { label: "Twitter", href: "https://twitter.com/diaaelsadek", icon: TwitterIcon },
  { label: "Email", href: "mailto:diaaelsadek@icloud.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="font-mono text-xl font-medium tracking-tight text-foreground block mb-4">
              d.elsadek
            </span>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              Full-Stack Software Engineer focused on building scalable,
              high-performance web applications and SaaS products.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for work
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {["Work", "Systems", "Stack", "Principles"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Icon size={14} className="group-hover:text-foreground transition-colors" />
                      <span>{social.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <span className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Diaa Elsadek. All rights reserved.
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            Crafted with intention in Egypt
          </span>
        </div>
      </div>
    </footer>
  );
}
