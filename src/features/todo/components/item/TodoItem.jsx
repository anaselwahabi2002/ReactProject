import { useState } from "react";
import TodoText from "./TodoText";
import TodoStatusButton from "./TodoStatusButton";
import TodoEditButton from "./TodoEditButton";
import TodoDeleteButton from "./TodoDeleteButton";

export default function TodoItem({ todo, onCompleted, onUndo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const save = () => {
    onEdit(todo.id, value);
    setIsEditing(false);
  };

return (
    <div
      className={[
        "bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200",
        isEditing
          ? "flex flex-col gap-3 items-stretch"
          : "flex items-center justify-between gap-4",
      ].join(" ")}
    >
      <div className={isEditing ? "w-full" : "flex-1 min-w-0"}>
        <TodoText
          todo={todo}
          isEditing={isEditing}
          value={value}
          setValue={setValue}
        />
      </div>

      <div
        className={[
          "flex gap-2",
          isEditing ? "justify-end flex-wrap" : "items-center",
        ].join(" ")}
      >
        <TodoStatusButton todo={todo} onCompleted={onCompleted} onUndo={onUndo} />

        <TodoEditButton
          isEditing={isEditing}
          disabled={todo.done}   // ✅ ICI
          onEdit={() => setIsEditing(true)}
          onSave={save}
        />

        <TodoDeleteButton onDelete={() => onDelete(todo.id)} />
      </div>
    </div>
  );
}
