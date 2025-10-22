
function CategorySkeleton() {
    return (
        <div role="tablist" className="flex overflow-hidden justify-start items-center gap-3 animate-pulse transition-all duration-1000">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="h-3.5 bg-gray-200 px-5 py-4 rounded-lg dark:bg-gray-300 min-w-[128px] transition-all duration-700 animate-pulse"></div>
            ))}
        </div>
    )
}

export default CategorySkeleton;