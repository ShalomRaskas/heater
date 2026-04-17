import { Flame } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.12),_transparent_60%)]"
      />
      <div className="relative flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <h1
            className={cn(
              "text-5xl font-bold uppercase tracking-[0.2em] sm:text-6xl",
            )}
          >
            {BRAND.name}
          </h1>
          <Flame
            className="h-8 w-8 text-orange-500 sm:h-10 sm:w-10"
            fill="currentColor"
            strokeWidth={1.5}
          />
        </div>
        <p className="mt-6 max-w-md text-base text-white/60 sm:text-lg">
          {BRAND.tagline}
        </p>
        <span
          className={cn(
            "mt-10 text-xs font-medium uppercase tracking-[0.3em] text-orange-500",
          )}
        >
          Coming soon
        </span>
      </div>
    </main>
  );
}
