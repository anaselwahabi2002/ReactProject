import { useState } from "react";

import LoginHeader from "./LoginHeader";
import LoginError from "./LoginError";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    if (email !== "issam@email.com" || password !== "issam") {
      throw new Error("Invalid credentials");
    }

    location.href = "/success";
  } catch {
    setError("Invalid email or password");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen grid place-items-center bg-slate-100 px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-2xl bg-white p-8 ring-1 ring-slate-200 hover:shadow-md"
      >
        <LoginHeader />
        <LoginError message={error} />

        <LoginInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <LoginInput
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <LoginButton loading={loading} />
      </form>
    </div>
  );
}
