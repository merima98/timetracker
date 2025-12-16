"use client";

import { format } from "date-fns";

import { useTimeTrackerEntries } from "@/app/hooks";

import { TimetrackerEntryType } from "@/app/types";

const RecentEntry = ({
  recentEntry,
}: {
  recentEntry: TimetrackerEntryType;
}) => {
  const { created_at, duration, end_date, entry, id, start_date, user_id } =
    recentEntry;

  return (
    <div className="flex justify-between w-full py-2 border-b border-b-foreground/10">
      <div>{entry}</div>
      <div className=" flex flex-col">
        <span>
          {format(new Date(created_at), "dd MMM yyyy")}{" "}
          {end_date && `- ${format(new Date(end_date), "dd MMM yyyy")}`}
        </span>
        <span>{duration}</span>
      </div>
    </div>
  );
};

const RecentEntries = () => {
  const { data, loading, error } = useTimeTrackerEntries();

  return (
    <div className="flex flex-col items-center mt-10 px-10">
      <span className="w-full border-b border-b-foreground/10 pb-2 font-semibold">
        RECENT ENTRY
      </span>
      {data.map((item, index) => (
        <RecentEntry recentEntry={item} key={index} />
      ))}
    </div>
  );
};

export default RecentEntries;
