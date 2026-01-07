export default function TodoDeleteButton({ onDelete }) {
  return (
    <button
      onClick={onDelete}
      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-100 text-red-600 hover:bg-red-200 transition"
    >
      Delete
    </button>
  );
}
