import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/data/portfolio";

const accentMap: Record<
  Project["accent"],
  { glow: string; ring: string; tag: string; from: string; to: string }
> = {
  violet: {
    glow: "from-violet-500/35 to-violet-500/0",
    ring: "ring-violet-400/30",
    tag: "text-violet-300 border-violet-400/30 bg-violet-500/[0.07]",
    from: "#8b5cf6",
    to: "#22d3ee",
  },
  fuchsia: {
    glow: "from-fuchsia-500/35 to-fuchsia-500/0",
    ring: "ring-fuchsia-400/30",
    tag: "text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-500/[0.07]",
    from: "#d946ef",
    to: "#8b5cf6",
  },
  cyan: {
    glow: "from-cyan-400/35 to-cyan-400/0",
    ring: "ring-cyan-400/30",
    tag: "text-cyan-300 border-cyan-400/30 bg-cyan-500/[0.07]",
    from: "#22d3ee",
    to: "#8b5cf6",
  },
  emerald: {
    glow: "from-emerald-400/35 to-emerald-400/0",
    ring: "ring-emerald-400/30",
    tag: "text-emerald-300 border-emerald-400/30 bg-emerald-500/[0.07]",
    from: "#34d399",
    to: "#22d3ee",
  },
  amber: {
    glow: "from-amber-400/35 to-amber-400/0",
    ring: "ring-amber-400/30",
    tag: "text-amber-300 border-amber-400/30 bg-amber-500/[0.07]",
    from: "#fbbf24",
    to: "#d946ef",
  },
};

export function Projects() {
  return (
    <section id="projects" className="container-x py-24 sm:py-32">
      <SectionHeading
        eyebrow="Selected projects"
        title="Things I've built — for the joy of building."
        description="Personal projects exploring real-time systems, distributed jobs, AI integrations, and good database design."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const a = accentMap[project.accent];
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10
        bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/25"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-0
          blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(closest-side, ${a.from}55, transparent 70%)`,
        }}
      />

      <div className="flex items-start justify-between">
        <div
          className="grid h-11 w-11 place-items-center rounded-xl ring-1 ring-white/10"
          style={{
            background: `linear-gradient(135deg, ${a.from}33, ${a.to}22)`,
          }}
        >
          <span
            className="font-display text-base font-bold"
            style={{
              background: `linear-gradient(135deg, ${a.from}, ${a.to})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {project.name.charAt(0)}
          </span>
        </div>
        <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>

      {project.highlight && (
        <span
          className={`mt-5 inline-flex w-fit items-center gap-1 rounded-full border px-2 py-0.5 text-[10.5px] font-semibold ${a.tag}`}
        >
          <Sparkles className="h-3 w-3" />
          {project.highlight}
        </span>
      )}

      <h3 className="mt-3 font-display text-lg font-semibold text-white">
        {project.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
        {project.blurb}
      </p>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10.5px] text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4 text-xs text-zinc-500">
        <Github className="h-3.5 w-3.5" />
        <span className="truncate">{project.href.replace("https://", "")}</span>
      </div>
    </motion.a>
  );
}
