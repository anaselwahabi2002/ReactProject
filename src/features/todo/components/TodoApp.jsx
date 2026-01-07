import { useTodos } from "../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoFilters from "./filter/TodoFilters";
import TodoList from "./TodoList";

export default function TodoApp() {
  const {
    todos,
    addTodo,
    setCompleted, 
    editTodo,
    deleteTodo,
    filter,
    setFilter,
  } = useTodos();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-center mb-4">Todo List</h2>

        <TodoForm onAdd={addTodo} />
        <TodoFilters filter={filter} onChange={setFilter} />

        <TodoList
          todos={todos}
          onCompleted={(id) => setCompleted(id, true)}
          onUndo={(id) => setCompleted(id, false)}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}
