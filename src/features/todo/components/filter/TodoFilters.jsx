import FilterButton from "./FilterButton";

export default function TodoFilters({ filter, onChange }) {
  return (
    <div className="flex justify-center gap-3 mb-6">
      <FilterButton
        label="All"
        active={filter === "all"}
        onClick={() => onChange("all")}
      />

      <FilterButton
        label="Active"
        active={filter === "active"}
        onClick={() => onChange("active")}
      />

      <FilterButton
        label="Done"
        active={filter === "done"}
        onClick={() => onChange("done")}
      />
    </div>
  );
}
