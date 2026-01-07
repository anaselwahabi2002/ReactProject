import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./features/auth/components/LoginForm";
import TodoApp from "./features/todo/components/TodoApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
