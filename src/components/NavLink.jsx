export function NavLink({ href, children, mobile, onClick }) {
  const baseClasses = "text-gray-300 hover:text-blue-400 transition-colors";
  const mobileClasses = mobile ? "block" : "";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${mobileClasses}`}
    >
      {children}
    </a>
  );
}