import Skeleton from "./Skeleton";

export default function LockerCardSkeleton() {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="flex items-center justify-between pt-4 border-b border-outline-variant/10">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  );
}