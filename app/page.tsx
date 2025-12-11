import { Suspense } from "react";
import Link from "next/link";

import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import TimeTracker from "./components/TimeTracker";
import RecentEntries from "./components/RecentEntries";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Timetracker</Link>
              <div className="flex items-center gap-2">
                <ThemeSwitcher />
              </div>
            </div>
            <Suspense>
              <AuthButton />
            </Suspense>
          </div>
        </nav>
        <div className="w-full">
          <TimeTracker />
          <RecentEntries />
        </div>
      </div>
    </main>
  );
}
