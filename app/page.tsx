import Image from "next/image";
import { BRAND } from "@/lib/constants";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#0a0a0f]">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/logo.png"
          alt="Heater"
          width={400}
          height={220}
          priority
          className="h-40 sm:h-56 w-auto"
        />
        <p className="mt-6 text-base sm:text-lg text-white/60 max-w-md">
          {BRAND.tagline}
        </p>
        <p className="mt-8 text-xs tracking-[0.25em] uppercase text-orange-500 font-medium">
          Coming Soon
        </p>
        <WaitlistForm />
      </div>
    </main>
  );
}
