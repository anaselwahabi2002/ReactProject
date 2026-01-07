const KEY = "todos";

export const loadTodos = () => JSON.parse(localStorage.getItem(KEY) || "[]");

export const saveTodos = (todos) => localStorage.setItem(KEY, JSON.stringify(todos));
