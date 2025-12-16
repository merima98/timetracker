import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

import { TimetrackerEntryType } from "../types";

export const useTimeTrackerEntries = () => {
  const [data, setData] = useState<TimetrackerEntryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const supabase = await createClient();

        const { data: userDataClaims } = await supabase.auth.getClaims();

        const userData = userDataClaims?.claims;

        const { data, error } = await supabase
          .from("Timetracker")
          .select("*")
          .eq("user_id", userData?.sub);

        if (error) throw error;

        setData(data ?? []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  return { data, loading, error };
};
