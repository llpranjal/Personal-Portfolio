import projectsData from "../../projects.json";
import ProjectsCard from "../ProjectsCard";

export default function Projects() {
  const categoryOrder = ["Experience", "Side Projects"];

  const groupedProjects = projectsData.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  for (const category in groupedProjects) {
    groupedProjects[category].sort((a, b) => {
      if (a.title.includes("US News and World Report")) return -1;
      if (b.title.includes("US News and World Report")) return 1;
      return b.id - a.id;
    });
  }

  const sortedCategories = categoryOrder.filter((category) => groupedProjects[category]);

  return (
    <section className="mt-32 flex flex-col justify-center">
      <div className="flex w-full flex-col items-center gap-8 rounded-t-md p-4">
      <h3 className="text-center font-mono text-5xl font-bold text-black drop-shadow-lg transition-transform duration-300 hover:scale-105">
          Work
        </h3>        <div className="flex flex-col gap-6">
          {sortedCategories.map((category) => (
            <div key={category} className="w-full">
              <h4 className="mb-4 text-lg italic md:text-xl">{category}</h4>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {groupedProjects[category].map((project) => (
                  <ProjectsCard key={project.id} p={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}