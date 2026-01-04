import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./features/auth/components/LoginForm";
import Success from "./success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
