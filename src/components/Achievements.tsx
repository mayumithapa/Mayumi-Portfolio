import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { achievements, education } from "@/data/portfolio";

const icons = [Trophy, Medal, Award];

export function Achievements() {
  return (
    <section className="container-x py-24 sm:py-32">
      <SectionHeading
        eyebrow="Achievements & education"
        title="Recognized for ownership and execution."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="glass glass-hover ring-gradient rounded-2xl p-6"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-xl ring-1 ring-white/10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(251,191,36,0.18), rgba(217,70,239,0.12))",
                }}
              >
                <Icon className="h-5 w-5 text-brand-amber" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-white">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {a.body}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="glass ring-gradient mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl p-6 md:flex-row md:items-center"
      >
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Education
          </div>
          <h3 className="mt-2 font-display text-lg font-semibold text-white">
            {education.degree}
          </h3>
          <div className="mt-1 text-sm text-zinc-400">{education.school}</div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">{education.period}</span>
          <span className="chip border-emerald-400/30 text-emerald-300">
            CGPA · {education.cgpa}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
