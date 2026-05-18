import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { profile, stats } from "@/data/portfolio";
import { Sparkles, Layers, Server, Rocket } from "lucide-react";

const icons = [Sparkles, Layers, Server, Rocket];

export function About() {
  return (
    <section id="about" className="container-x py-24 sm:py-32">
      <SectionHeading
        eyebrow="About me"
        title="Engineer who turns ideas into reliable products."
        description="Comfortable across the stack — React UIs, NestJS APIs, event-driven pipelines and well-modeled databases."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg"
        >
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="mt-8 flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Kafka", "RabbitMQ"].map(
              (t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              )
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass glass-hover ring-gradient relative overflow-hidden rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-brand-fuchsia" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="text-gradient">{s.value}</span>
                </div>
                <div className="mt-1 text-sm text-zinc-400">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
