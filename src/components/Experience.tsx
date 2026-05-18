import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="container-x py-24 sm:py-32">
      <SectionHeading
        eyebrow="Experience"
        title="Modernizing enterprise apps at Korn Ferry."
        description="Hands-on across the stack — owning bug triage, frontend rebuilds, modular backend services, and event-driven flows."
      />

      <div className="relative">
        <div
          aria-hidden
          className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand-violet/60 via-brand-fuchsia/40 to-transparent sm:block"
        />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.article
              key={job.role + job.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="relative sm:pl-14"
            >
              <span
                aria-hidden
                className="absolute left-[10px] top-3 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-brand-fuchsia
                  shadow-[0_0_18px_theme(colors.brand.fuchsia)] sm:block"
              />

              <div className="glass ring-gradient rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-brand-cyan">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.period}
                      {job.current && (
                        <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                      {job.role}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                      <Building2 className="h-3.5 w-3.5" />
                      {job.company}
                      {job.client && (
                        <>
                          <span className="text-zinc-600">•</span>
                          <span className="text-zinc-300">Client: {job.client}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {job.groups.map((g) => (
                    <div key={g.title}>
                      <h4 className="text-sm font-semibold text-zinc-100">
                        {g.title}
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {g.bullets.map((b, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-violet/80"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
