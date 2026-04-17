"use client";

import { useFormState, useFormStatus } from "react-dom";
import { joinWaitlist } from "@/app/actions";

const initialState = { success: false, error: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="
        px-5 py-3 rounded-lg
        bg-[#C62828] hover:bg-[#D32F2F]
        text-white font-semibold text-sm
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        whitespace-nowrap
      "
    >
      {pending ? "…" : "Get Early Access"}
    </button>
  );
}

export default function WaitlistForm() {
  const [state, formAction] = useFormState(joinWaitlist, initialState);

  if (state.success) {
    return (
      <div className="mt-10 flex flex-col items-center gap-2">
        <p className="text-[#E65100] font-semibold text-sm tracking-wide">
          🔥 You&apos;re on the list.
        </p>
        <p className="text-white/40 text-xs">
          We&apos;ll reach out when Heater launches.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-10 w-full max-w-sm flex flex-col items-center gap-3">
      <div className="w-full flex gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="
            flex-1 min-w-0 px-4 py-3 rounded-lg
            bg-white/5 border border-white/10
            text-white placeholder-white/30 text-sm
            focus:outline-none focus:border-[#C62828]/60
            transition-colors duration-200
          "
        />
        <SubmitButton />
      </div>
      {state.error && (
        <p className="text-red-400 text-xs">{state.error}</p>
      )}
      <p className="text-white/25 text-xs">No spam. Just a launch email when we&apos;re ready.</p>
    </form>
  );
}
