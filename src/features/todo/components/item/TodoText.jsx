export default function TodoText({ todo, isEditing, value, setValue }) {
  if (isEditing) {
    return (
      <input
        className="flex-1 border border-blue-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-sm font-medium ${
          todo.done ? "line-through text-slate-400" : "text-slate-800"
        }`}
      >
        {todo.text}
      </span>

      <span
        className={`text-xs px-2 py-0.5 rounded-full ${
          todo.done
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {todo.done ? "Completed" : "Active"}
      </span>
    </div>
  );
}
