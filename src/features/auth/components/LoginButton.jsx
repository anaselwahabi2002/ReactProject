export default function LoginButton({ loading }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-2 bg-blue-600 text-white rounded"
    >
      {loading ? "Signing in..." : "Sign in"}
    </button>
  );
}
