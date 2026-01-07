export default function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
        border
        ${
          active
            ? "bg-blue-600 text-white border-blue-600 shadow"
            : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100 hover:text-slate-900"
        }
      `}
    >
      {label}
    </button>
  );
}
