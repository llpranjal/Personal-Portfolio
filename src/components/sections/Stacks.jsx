import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss, SiPostgresql, SiTypescript, SiOcaml } from "react-icons/si";
import cIcon from "../../images/c.png";

export default function Stacks() {
  const stacks = {
    langs: [
      { name: "React", icon: <FaReact className="h-6 w-6 text-gray-800" /> },
      { name: "Typescript", icon: <SiTypescript className="h-6 w-6 text-gray-800" /> },
      { name: "Python", icon: <FaPython className="h-6 w-6 text-gray-800" /> },
      { name: "C", icon: <img src={cIcon} alt="C" className="h-6 w-6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6 text-gray-800" /> },
      { name: "Java", icon: <FaJava className="h-6 w-6 text-gray-800" /> },
      { name: "OCaml", icon: <SiOcaml className="h-6 w-6 text-gray-800" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="h-6 w-6 text-gray-800" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6 text-gray-800" /> },
    ],
    misc: [
      { name: "Git", icon: <FaGitAlt className="h-6 w-6 text-gray-800" /> },
      { name: "GitHub", icon: <FaGithub className="h-6 w-6 text-gray-800" /> },
      { name: "Figma", icon: <FiFigma className="h-6 w-6 text-gray-800" /> },
    ],
  };

  return (
    <section className="flex w-full justify-center bg-transparent py-32">
      <div className="w-full max-w-screen-xl px-4">
        <h3 className="mb-12 text-center font-mono text-6xl font-bold text-black drop-shadow-lg transition-transform duration-300 hover:scale-110">Stacks/Tools</h3>
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {Object.keys(stacks).map((category) => (
            <div key={category} className="flex flex-wrap justify-center gap-4 md:justify-start md:gap-6">
              {stacks[category].map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex transform select-none items-center gap-2 rounded-md border border-black bg-white px-3 py-2 text-center text-lg font-medium text-black shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-2 hover:shadow-lg"
                >
                  {icon}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
