// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabasePublishableKey =
//   process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// if (!supabaseUrl) {
//   throw new Error(
//     "Missing NEXT_PUBLIC_SUPABASE_URL in .env.local"
//   );
// }

// if (!supabasePublishableKey) {
//   throw new Error(
//     "Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local"
//   );
// }

// export const supabase = createClient(
//   supabaseUrl,
//   supabasePublishableKey
// );
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}