import { RiTwitterXFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={"cursor-default relative"}>
      <Link to={"/"}>
        <h1
          className={
            "flex items-center justify-between text-xl font-semibold text-white/85 py-6 "
          }
        >
          Sudip Sarkar
        </h1>
      </Link>
      <a href="mailto:sudipskr321@gmail.com">
        <h1 className={"text-white/90 absolute top-7 right-18 text-xl"}>
          <TfiEmail />
        </h1>
      </a>
      <a
        href="https://x.com/Sudipskr321"
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <h1 className={"text-white/90 absolute top-7 right-2 text-xl"}>
          <RiTwitterXFill />
        </h1>
      </a>
      <a
        href="https://github.com/Sudipskr31"
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <h1 className={"text-white/90 absolute top-7 right-10 text-xl"}>
          <FiGithub />
        </h1>
      </a>
      <p className={"font-light text-white/80"}>
        I'm a 20 year old web developer, optimist, and community builder. I have
        been programming for over 1 year. This website was created using{" "}
        <a
          className={"text-white/60 underline hover:text-white/80"}
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
        </a>
      </p>
    </div>
  );
};

export default Hero;
