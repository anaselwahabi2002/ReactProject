export default function LoginButton({ loading }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        w-full rounded-xl py-2.5 text-sm font-semibold text-white
        bg-blue-600 hover:bg-blue-700
        transition disabled:opacity-60 disabled:cursor-not-allowed
        active:scale-95
      "
    >
      {loading ? "Signing in..." : "Sign in"}
    </button>
  );
}
