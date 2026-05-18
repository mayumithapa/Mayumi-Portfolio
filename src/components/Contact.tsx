import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="container-x py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 md:p-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full
            bg-brand-fuchsia/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl"
        />

        <div className="relative text-center">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_10px_theme(colors.brand.cyan)]" />
            Let's collaborate
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Got a product worth building?{" "}
            <span className="text-gradient-strong">Let's talk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I'm open to full-time roles, freelance projects, and interesting
            collaborations. The fastest way to reach me is email.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={profile.socials.email} className="btn-primary">
              <Mail className="h-4 w-4" />
              {profile.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume.url}
              download={profile.resume.filename}
              className="btn-ghost"
            >
              <Download className="h-4 w-4" />
              {profile.resume.label}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="btn-ghost"
            >
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <ContactIcon
              href={profile.socials.github}
              label="GitHub"
              icon={<Github className="h-4 w-4" />}
            />
            <ContactIcon
              href={profile.socials.linkedin}
              label="LinkedIn"
              icon={<Linkedin className="h-4 w-4" />}
            />
            <ContactIcon
              href={profile.socials.leetcode}
              label="LeetCode"
              icon={
                <span className="text-[11px] font-bold tracking-wider">LC</span>
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ContactIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03]
        text-zinc-300 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
    >
      {icon}
    </a>
  );
}
