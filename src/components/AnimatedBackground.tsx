export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid grid-fade-mask opacity-[0.18]" />

      <div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full
          bg-brand-violet/30 blur-[120px] animate-blob-float"
      />
      <div
        className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full
          bg-brand-fuchsia/25 blur-[130px] animate-blob-float-slow"
      />
      <div
        className="absolute bottom-[-180px] left-1/3 h-[600px] w-[600px] rounded-full
          bg-brand-cyan/20 blur-[140px] animate-blob-float"
        style={{ animationDelay: "-6s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay bg-noise"
      />
    </div>
  );
}
