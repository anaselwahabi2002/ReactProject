// src/features/todo/components/TodoFilters.jsx
export default function TodoFilters({ filter, onChange }) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      <button
        onClick={() => onChange("all")}
        className={`px-3 py-1 rounded-lg border ${
          filter === "all" ? "bg-blue-600 text-white" : "hover:bg-slate-100"
        }`}
      >
        All
      </button>

      <button
        onClick={() => onChange("active")}
        className={`px-3 py-1 rounded-lg border ${
          filter === "active" ? "bg-blue-600 text-white" : "hover:bg-slate-100"
        }`}
      >
        Active
      </button>

      <button
        onClick={() => onChange("done")}
        className={`px-3 py-1 rounded-lg border ${
          filter === "done" ? "bg-blue-600 text-white" : "hover:bg-slate-100"
        }`}
      >
        Done
      </button>
    </div>
  );
}
