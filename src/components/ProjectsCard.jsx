import PropTypes from "prop-types";

const ProjectCard = ({ p }) => {
  const getBadgeStyle = (type) => {
    switch (type) {
      case "Website":
        return "bg-blue-100 text-blue-800";
      case "Design":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <a href={p.link} className="group relative flex flex-col gap-2 self-start rounded-md bg-gray-50 p-4 shadow-sm duration-150 hover:shadow-md md:hover:scale-[1.02]">
      <div
        className="relative h-28 w-full rounded-t-md bg-cover bg-center bg-no-repeat filter duration-150 group-hover:filter-none md:grayscale lg:h-36 xl:h-40"
        style={{ backgroundImage: `url(${p.card_img_src})` }}
      >
        <span className={`absolute right-2 top-2 rounded-full px-1.5 py-[1px] text-sm ${getBadgeStyle(p.type)}`}>{p.type}</span>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-bold">{p.title}</p>
        <p className="line-clamp-2">{p.short_desc}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {p.stacks.map((stack, index) => (
            <span key={index} className="dark:bg-gray-150 w-fit select-none rounded-full bg-gray-200 px-2 py-0.5 text-sm text-gray-600">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  p: PropTypes.shape({
    link: PropTypes.string,
    card_img_src: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    short_desc: PropTypes.string,
    stacks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
