import Blogs from "../components/Blogs.jsx";
import Navigation from "../components/Navigation.jsx";
import { Link } from "react-router-dom";

const BlogsPosts = () => {
  return (
    <div className={"min-h-screen bg-black p-8 sm:p-14 font-[Inter]"}>
      <div className={"max-w-[700px] mx-auto w-full"}>
        <Link to={"/"}>
          <Navigation />
        </Link>
        <Blogs />
      </div>
    </div>
  );
};

export default BlogsPosts;
