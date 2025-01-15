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
    <section className="mt-24 flex flex-col justify-center">
      <div className="flex w-full flex-col items-center gap-8 rounded-t-md p-4">
        <h3 className="mb-8 text-center font-mono text-6xl font-bold text-black drop-shadow-lg transition-transform duration-300 hover:scale-110">Work</h3>
        <div className="flex flex-col gap-6">
          {sortedCategories.map((category) => (
            <div key={category} className="w-full">
              <h4 className="mb-4 text-2xl italic text-gray-700 md:text-3xl">{category}</h4>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {groupedProjects[category].map((project) => (
                  <div
                    key={project.id}
                    className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
                    style={{
                      boxShadow: `
                        0 4px 6px -1px rgba(252, 176, 188, 0.3),
                        0 2px 4px -1px rgba(252, 176, 188, 0.3),
                        0 10px 15px -3px rgba(252, 176, 188, 0.3),
                        0 4px 6px -2px rgba(252, 176, 188, 0.3)
                      `,
                    }}
                  >
                    <ProjectsCard p={project} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}