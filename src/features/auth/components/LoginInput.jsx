export default function LoginInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-xs font-medium text-slate-600">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
