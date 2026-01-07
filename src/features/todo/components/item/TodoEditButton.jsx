export default function TodoEditButton({ isEditing, onEdit, onSave }) {
  if (!isEditing) {
    return (
      <button
        onClick={onEdit}
        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
      >
        Edit
      </button>
    );
  }

  return (
    <button
      onClick={onSave}
      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      Save
    </button>
  );
}
