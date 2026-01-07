export default function TodoStatusButton({ todo, onCompleted, onUndo }) {
  if (!todo.done) {
    return (
      <button
        onClick={() => onCompleted(todo.id)}
        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-600 text-white hover:bg-green-700 transition"
      >
        ✓ Done
      </button>
    );
  }

  return (
    <button
      onClick={() => onUndo(todo.id)}
      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-700 text-white hover:bg-slate-800 transition"
    >
      ↺ Undo
    </button>
  );
}
