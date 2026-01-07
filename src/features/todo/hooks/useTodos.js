import { useEffect, useState } from "react";
import { loadTodos, saveTodos } from "../utils/storage";

export function useTodos() {
  const [todos, setTodos] = useState(() => loadTodos());
  const [filter, setFilter] = useState("all"); 

  useEffect(() => saveTodos(todos), [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos((p) => [...p, { id: Date.now(), text: text.trim(), done: false }]);
  };

  const setCompleted = (id, done) => {
    setTodos((p) => p.map((t) => (t.id === id ? { ...t, done } : t)));
  };

  const toggleTodo = (id) => {
    setTodos((p) =>
      p.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const editTodo = (id, newText) => {
    setTodos((p) => p.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  const deleteTodo = (id) => {
    setTodos((p) => p.filter((t) => t.id !== id));
  };

  const todosFiltered = todos.filter((t) => {
    if (filter === "done") return t.done;
    if (filter === "active") return !t.done;
    return true;
  });

  return {
    todos: todosFiltered,
    addTodo,
    toggleTodo,
    setCompleted, 
    editTodo,
    deleteTodo,
    filter,
    setFilter,
  };
}
