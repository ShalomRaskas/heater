import Image from "next/image";
import { Sparkles, Flame, LayoutGrid } from "lucide-react";
import { BRAND } from "@/lib/constants";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-20 bg-[#0a0a0f]">
      {/* Hero */}
      <div className="flex flex-col items-center text-center flex-1 justify-center">
        <Image
          src="/logo.png"
          alt="Heater"
        width={677}
          
      
        height={369}
          priority
          className="h-56 sm:h-72 md:h-80 w-auto"
        />
        <p className="mt-6 text-base sm:text-lg text-white/60 max-w-md">
          {BRAND.tagline}
        </p>
        <p className="mt-8 text-xs tracking-[0.25em] uppercase text-[#D32F2F] font-medium">
          Coming Soon
        </p>

        {/* Waitlist */}
        <div className="mt-8 w-full max-w-md">
          <WaitlistForm />
        </div>
      </div>

      {/* What's coming */}
      <section className="mt-16 sm:mt-24 w-full max-w-5xl">
        <h2 className="text-center text-xs tracking-[0.25em] uppercase text-[#D32F2F] font-medium mb-10">
          What&apos;s coming
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] transition">
            <Sparkles className="w-5 h-5 mb-4" style={{ color: "#D32F2F" }} />
            <h3 className="text-base font-bold text-white mb-2">Albert</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              An AI scout watching every game, every prospect, every pitch. Ask him anything — he&apos;s read everything.
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] transition">
            <Flame className="w-5 h-5 mb-4" style={{ color: "#D32F2F" }} />
            <h3 className="text-base font-bold text-white mb-2">Heater Boards</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              See who&apos;s heating up across every category in real time. Before the rest of the internet catches on.
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] transition">
            <LayoutGrid className="w-5 h-5 mb-4" style={{ color: "#D32F2F" }} />
            <h3 className="text-base font-bold text-white mb-2">One place for everything</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              MLB and MiLB data, unified. No more 8 tabs open on game day.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
