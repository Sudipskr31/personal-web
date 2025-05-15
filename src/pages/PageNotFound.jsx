import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";

const PageNotFound = () => {
  return (
    <div className={"min-h-screen bg-black p-8 sm:p-14 font-[Inter]"}>
      <div className={"max-w-[700px] mx-auto w-full"}>
        <Link to={"/"}>
          <Navigation />
        </Link>
      </div>
      <div>
        <h1
          className={
            "flex justify-center mt-70 text-indigo-500 text-2xl font-bold"
          }
        >
          404
        </h1>
        <p className={"flex justify-center text-white text-xl font-bold"}>
          Page Not Found !
        </p>
        <p
          className={
            "flex justify-center items-center text-center gap-1 text-white"
          }
        >
          The page you're looking for is not found
          <IoIosWarning className={"text-yellow-300"} />
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
