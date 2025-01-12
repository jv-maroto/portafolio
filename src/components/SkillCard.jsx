export function SkillCard({ icon, title, description, color }) {
    return (
      <div className="group relative bg-gray-800 p-6 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        <div className="relative z-10">
          <div className="text-blue-400 mb-4 transform transition-transform group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    );
  }