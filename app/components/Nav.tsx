"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: "mailto:youremail@example.com", label: "Email" },
  { href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { href: "https://github.com/CodingMaster123456", label: "GitHub" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-56 border-r border-line px-6 py-8 flex flex-col justify-between hidden md:flex">
      <div>
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-tight text-ink"
        >
          SRITHANSH
        </Link>

        <nav className="mt-10 flex flex-col gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm py-1.5 px-2 -ml-2 rounded transition-colors ${
                  active
                    ? "text-signal font-medium"
                    : "text-graphite hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-graphite mb-3">
          Links
        </p>
        <div className="flex flex-col gap-1.5">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-graphite hover:text-signal transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}