import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Download,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { useEffect, useState } from "react";

function useTypewriter(words: string[], speed = 70, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center pt-32 sm:pt-36"
    >
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {profile.available && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to new opportunities
            </div>
          )}

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Hi, I'm{" "}
            <span className="text-gradient-strong">
              {profile.name.split(" ")[0]}
            </span>
            <br />
            <span className="text-zinc-200">{profile.name.split(" ")[1]}.</span>
          </h1>

          <div className="mt-5 flex items-center gap-2 text-base font-medium text-zinc-300 sm:text-lg">
            <Code2 className="h-4 w-4 text-brand-cyan" />
            <span className="font-mono text-zinc-400">{">"}</span>
            <span className="font-mono">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse-soft bg-brand-fuchsia" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View my work
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
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialIcon
              href={profile.socials.github}
              label="GitHub"
              icon={<Github className="h-4 w-4" />}
            />
            <SocialIcon
              href={profile.socials.linkedin}
              label="LinkedIn"
              icon={<Linkedin className="h-4 w-4" />}
            />
            <SocialIcon
              href={profile.socials.email}
              label="Email"
              icon={<Mail className="h-4 w-4" />}
            />
            <span className="ml-2 hidden items-center gap-1.5 text-xs text-zinc-500 sm:inline-flex">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <CodeCard />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition hover:text-zinc-200 sm:flex"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

function SocialIcon({
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
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03]
        text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
    >
      {icon}
    </a>
  );
}

function CodeCard() {
  return (
    <div className="ring-gradient relative rounded-3xl">
      <div className="glass rounded-3xl p-5 shadow-card">
        <div className="flex items-center gap-2 border-b border-white/5 pb-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-zinc-500">
            mayumi.ts
          </span>
        </div>
        <pre className="mt-4 overflow-x-auto font-mono text-[13px] leading-relaxed">
          <code>
            <span className="text-fuchsia-300">const</span>{" "}
            <span className="text-cyan-300">mayumi</span>{" "}
            <span className="text-zinc-500">=</span> {"{"}
            {"\n"}
            {"  "}
            <span className="text-violet-300">name</span>
            <span className="text-zinc-500">:</span>{" "}
            <span className="text-emerald-300">'Mayumi Thapa'</span>
            <span className="text-zinc-500">,</span>
            {"\n"}
            {"  "}
            <span className="text-violet-300">role</span>
            <span className="text-zinc-500">:</span>{" "}
            <span className="text-emerald-300">'Full-Stack Engineer'</span>
            <span className="text-zinc-500">,</span>
            {"\n"}
            {"  "}
            <span className="text-violet-300">stack</span>
            <span className="text-zinc-500">:</span> [
            <span className="text-emerald-300">'React'</span>
            <span className="text-zinc-500">,</span>{" "}
            <span className="text-emerald-300">'TS'</span>
            <span className="text-zinc-500">,</span>{" "}
            <span className="text-emerald-300">'Node'</span>
            <span className="text-zinc-500">,</span>{" "}
            <span className="text-emerald-300">'Nest'</span>],
            {"\n"}
            {"  "}
            <span className="text-violet-300">loves</span>
            <span className="text-zinc-500">:</span> [
            <span className="text-emerald-300">'Clean code'</span>
            <span className="text-zinc-500">,</span>{" "}
            <span className="text-emerald-300">'Kafka'</span>
            <span className="text-zinc-500">,</span>{" "}
            <span className="text-emerald-300">'Great UX'</span>],
            {"\n"}
            {"  "}
            <span className="text-violet-300">shipping</span>
            <span className="text-zinc-500">:</span>{" "}
            <span className="text-amber-300">true</span>
            <span className="text-zinc-500">,</span>
            {"\n"}
            {"}"}
            <span className="text-zinc-500">;</span>
          </code>
        </pre>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {["React", "TypeScript", "NestJS", "PostgreSQL", "Kafka"].map((t) => (
            <span key={t} className="chip text-[10.5px]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
