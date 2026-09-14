import Skeleton from "./orders/Skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(63,46,38,0.06)] flex flex-col justify-between">
      <div>
        <Skeleton className="h-64 w-full rounded-none" />
        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-14" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
      <div className="p-6 pt-0 flex items-center justify-between">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-9 w-20 rounded-lg" />
      </div>
    </div>
  );
}