import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className={"flex items-center gap-1 mt-1 cursor-default"}>
      <Link to={"*"}>
        <h1
          className={"text-xl font-medium text-white/85 pt-2 hover:text-white"}
        >
          Experience
        </h1>
      </Link>
    </div>
  );
};

export default Experience;
