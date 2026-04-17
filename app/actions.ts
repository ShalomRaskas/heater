"use server";

import { createClient } from "@supabase/supabase-js";

export async function joinWaitlist(
  prevState: { success: boolean; error: string | null },
  formData: FormData
): Promise<{ success: boolean; error: string | null }> {
  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase
    .from("waitlist")
    .insert({ email });

  if (error) {
    if (error.code === "23505") {
      // unique violation — already signed up
      return { success: true, error: null }; // treat as success silently
    }
    console.error("Waitlist insert error:", error);
    return { success: false, error: "Something went wrong. Try again." };
  }

  return { success: true, error: null };
}
