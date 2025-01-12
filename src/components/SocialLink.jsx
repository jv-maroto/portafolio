export function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      className="hover:text-blue-400 transition-all transform hover:scale-110"
    >
      {icon}
    </a>
  );
}