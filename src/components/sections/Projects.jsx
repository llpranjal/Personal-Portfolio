import ProjectsCard from "../ProjectsCard";
import adcImage from "../../images/adc.png";
import nihImage from "../../images/nih.png";
import portfolioImage from "../../images/portfolio.png";
import notesImage from "../../images/notes.jpeg";
import facialImage from "../../images/facial.png";
import catImage from "../../images/blawg.png";

const projectsData = [
  {
    id: "1",
    title: "Software Engineer @ US News and World Report",
    short_desc: "Learn more about UMD App Dev Club!",
    stacks: ["react.js", "python", "tailwindcss", "data-analysis"],
    link: "https://appdevclub.com",
    card_img_src: adcImage,
    type: "Website",
    category: "Experience",
  },
  {
    id: "2",
    title: "Data Scientist Intern @ National Institutes of Health",
    short_desc: "Learn more about data science developments at NIH!",
    stacks: ["flask", "java-script", "model-deployment"],
    link: "https://datascience.nih.gov",
    card_img_src: nihImage,
    type: "Website",
    category: "Experience",
  },
  {
    id: "3",
    title: "Personal Website",
    short_desc: "Learn more on how I created my personal website.",
    stacks: ["react", "tailwind-css", "post-css", "git"],
    link: "https://github.com/llpranjal/Personal-Portfolio",
    card_img_src: portfolioImage,
    type: "Website",
    category: "Side Projects",
  },
  {
    id: "4",
    title: "AI Facial Attendance App",
    short_desc: "Recognize faces and mark attendance.",
    stacks: ["tensorflow", "opencv", "keras"],
    link: "https://github.com/llpranjal/Facial-Attendance",
    card_img_src: facialImage,
    type: "Website",
    category: "Side Projects",
  },
  {
    id: "5",
    title: "Cat Project",
    short_desc: "A fun cat generator(what else do you need?).",
    stacks: ["react", "css", "apis"],
    link: "https://github.com/llpranjal/Cat-Generator",
    card_img_src: catImage,
    type: "Website",
    category: "Side Projects",
  },
  {
    id: "6",
    title: "FlowNote",
    short_desc: "Full-stack note-taking app with UX in mind.",
    stacks: ["react", "type-script", "tailwind-css", "postgresql"],
    link: "https://github.com/llpranjal/notes-app",
    card_img_src: notesImage,
    type: "Website",
    category: "Side Projects",
  },
];

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
