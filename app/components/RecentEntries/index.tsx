type RecentEntryType = {
  name: string;
  rangeDateTime: string;
  duration: string;
};

const RecentEntry = ({ recentEntry }: { recentEntry: RecentEntryType }) => {
  const { duration, name, rangeDateTime } = recentEntry;
  return (
    <div className="flex justify-between w-full">
      <div>{name}</div>
      <div className=" flex flex-col">
        <span>{rangeDateTime}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
};

const RecentEntries = () => {
  const array = [
    {
      name: "Test",
      rangeDateTime: "12.12.2025. - 13.12.2025.",
      duration: "7:40:21",
    },
    {
      name: "Test",
      rangeDateTime: "12.12.2025. - 13.12.2025.",
      duration: "7:40:21",
    },
  ] as RecentEntryType[];
  return (
    <div className="flex flex-col items-center mt-10">
      <span>RECENT ENTRY</span>
      {array.map((item, index) => (
        <RecentEntry recentEntry={item} key={index} />
      ))}
    </div>
  );
};

export default RecentEntries;
