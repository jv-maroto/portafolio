export function Button({ href, children, primary }) {
  const baseClasses = "px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105";
  const primaryClasses = primary 
    ? "bg-blue-500 hover:bg-blue-600 text-white"
    : "border border-blue-400 text-blue-400 hover:bg-blue-400/10";

  return (
    <a 
      href={href}
      className={`${baseClasses} ${primaryClasses}`}
    >
      {children}
    </a>
  );
}