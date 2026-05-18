import { Heart } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container-x pb-10 pt-6">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          Crafted with
          <Heart className="h-3.5 w-3.5 text-brand-fuchsia" />
          using React, TypeScript & Tailwind
        </p>
      </div>
    </footer>
  );
}
