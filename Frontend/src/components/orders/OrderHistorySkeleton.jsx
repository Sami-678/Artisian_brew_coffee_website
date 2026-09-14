import Skeleton from "./Skeleton";

export default function OrderHistorySkeleton() {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex items-start gap-4 w-full">
        <Skeleton className="w-14 h-14 rounded-xl shrink-0" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-56" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto justify-end">
        <Skeleton className="h-9 w-20 rounded-lg" />
        <Skeleton className="h-9 w-24 rounded-lg" />
      </div>
    </div>
  );
}