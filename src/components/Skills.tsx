import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  "Data & Messaging": Database,
  Languages: Terminal,
  "Tools & Workflow": Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="container-x py-24 sm:py-32">
      <SectionHeading
        eyebrow="Skills & stack"
        title="Tools I reach for to ship great products."
        description="A pragmatic toolkit for building scalable frontends, robust APIs, and resilient event-driven systems."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = iconMap[group.category] ?? Code2;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="glass glass-hover ring-gradient rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.05]
                    text-brand-cyan ring-1 ring-white/10"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">
                  {group.category}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip transition-colors hover:border-brand-fuchsia/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
