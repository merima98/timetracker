import { Button } from "@/components/ui/button";

const TrackingComponent = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <span className="text-2xl">Tracking</span>
      <span className="text-lg">12:15:56</span>
      <span className="text-lg">Name of action</span>
      <Button>Start</Button>
    </div>
  );
};

export default TrackingComponent;
