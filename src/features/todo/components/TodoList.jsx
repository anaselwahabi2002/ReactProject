import TodoItem from "./item/TodoItem";

export default function TodoList({ todos, onCompleted, onUndo, onDelete, onEdit }) {
  return (
    <div className="space-y-2">
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onCompleted={onCompleted}
          onUndo={onUndo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
