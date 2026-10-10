import React from 'react';

/**
 * Shimmering placeholder blocks used while data loads.
 * <Skeleton className='h-4 w-24' /> — arbitrary shapes.
 * <ToyCardSkeleton />            — a card-shaped placeholder.
 */
const Skeleton = ({ className = '', rounded = 'rounded-xl' }) => (
    <div
        className={`animate-shimmer bg-gradient-to-r from-slate-200/70 via-slate-100 to-slate-200/70 bg-[length:200%_100%] ${rounded} ${className}`}
        aria-hidden="true"
    />
);

/** Matches ProductCard's silhouette so the grid doesn't jump when data lands. */
export const ToyCardSkeleton = () => (
    <div className="card-surface overflow-hidden">
        <Skeleton rounded="rounded-none" className="aspect-[4/3] w-full" />
        <div className="space-y-3 p-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-3 w-3" rounded="rounded-full" />
                ))}
            </div>
            <div className="flex items-center justify-between pt-1">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-3 w-20" />
            </div>
            <Skeleton className="mt-3 h-9 w-full" rounded="rounded-full" />
        </div>
    </div>
);

export default Skeleton;
