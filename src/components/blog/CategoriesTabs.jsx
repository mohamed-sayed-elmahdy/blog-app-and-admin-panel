const categories = [
  "All",
  "Technology",
  "Tips & Tricks",
  "StartUp",
  "Errors",
  "RoadMaps",
  "Others",
];
export default function CategoriesTabs({ selectedCategory, onCategorySelect }) {
  return (
    <div role="tablist" className="flex flex-wrap justify-center gap-3 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          aria-label={`Filter by ${category}`}
          title={`Filter by ${category}`}
          value={category}
          role="tab"
          onClick={() => onCategorySelect(category)}
          className={`px-5 py-2 rounded-lg border transition-all duration-300 text-sm font-medium border-[var(--white-border)] ${
            selectedCategory === category
              ? "bg-[var(--bg-black)] text-[var(--text)]"
              : "bg-[var(--bg-white)] text-[var(--black-text)] hover:bg-[var(--bg-black)] hover:text-[var(--white-text)]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
