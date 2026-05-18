import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "pt-2" : "pt-4"
      )}
    >
      <div className="container-x">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-3 py-2.5 transition-all duration-500",
            scrolled
              ? "border border-white/10 bg-ink-950/70 shadow-card backdrop-blur-xl backdrop-saturate-150"
              : "border border-transparent bg-transparent"
          )}
        >
          <a
            href="#top"
            className="group flex items-center gap-2 pl-2 pr-3"
            aria-label="Home"
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-xl text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, #8b5cf6, #d946ef 50%, #22d3ee)",
              }}
            >
              {profile.initials}
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-zinc-100">
              {profile.name.split(" ")[0]}
              <span className="text-zinc-500">.dev</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-300
                    transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume.url}
              download={profile.resume.filename}
              className="hidden md:inline-flex btn-primary !px-4 !py-2 text-xs"
            >
              <Download className="h-3.5 w-3.5" />
              {profile.resume.label}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04]
                text-zinc-200 transition hover:bg-white/[0.08] md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 md:hidden">
            <div className="glass rounded-2xl p-2">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-200
                        transition hover:bg-white/[0.05] hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={profile.resume.url}
                    download={profile.resume.filename}
                    onClick={() => setOpen(false)}
                    className="mt-2 block rounded-xl bg-white/[0.06] px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    {profile.resume.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
