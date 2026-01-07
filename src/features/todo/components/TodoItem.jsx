// ✅ src/features/todo/components/TodoItem.jsx
import { useState } from "react";

export default function TodoItem({ todo, onCompleted, onUndo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const save = () => {
    onEdit(todo.id, value);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-slate-50 px-3 py-2 rounded-lg border">
      {!isEditing ? (
        <span
          className={`${todo.done ? "line-through text-slate-400" : "text-slate-800"}`}
        >
          {todo.text}
        </span>
      ) : (
        <input
          className="flex-1 border rounded px-2 py-1 mr-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}

      <div className="flex gap-2 items-center">
        {/* ✅ STATUS BUTTON */}
        {!todo.done ? (
          <button
            onClick={() => onCompleted(todo.id)}
            className="bg-green-600 text-white px-2 py-1 rounded text-sm hover:bg-green-700"
          >
            Completed
          </button>
        ) : (
          <button
            onClick={() => onUndo(todo.id)}
            className="bg-slate-700 text-white px-2 py-1 rounded text-sm hover:bg-slate-800"
          >
            Undo
          </button>
        )}

        {/* EDIT */}
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)} className="text-blue-500 text-sm">
            Edit
          </button>
        ) : (
          <button onClick={save} className="text-green-600 text-sm">
            Save
          </button>
        )}

        {/* DELETE */}
        <button onClick={() => onDelete(todo.id)} className="text-red-500 text-sm">
          X
        </button>
      </div>
    </div>
  );
}
