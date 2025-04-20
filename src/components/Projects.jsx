import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={"flex items-center gap-1 my-4 cursor-default"}>
      <Link to={"*"}>
        <h1
          className={"text-xl font-medium text-white/85 py-5 hover:text-white"}
        >
          My Projects
        </h1>
      </Link>
    </div>
  );
};

export default Projects;
