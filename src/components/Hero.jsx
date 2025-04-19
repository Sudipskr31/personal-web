import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={"cursor-default relative"}>
      <h1
        className={
          "flex items-center justify-between text-xl font-semibold text-white/85 py-6"
        }
      >
        Sudip Sarkar
      </h1>
      <a
        href="https://x.com/Sudipskr321"
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <h1 className={"text-white/90 absolute top-7 right-2 text-2xl"}>
          <FaSquareXTwitter />
        </h1>
      </a>
      <a
        href="https://github.com/Sudipskr31"
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <h1 className={"text-white/90 absolute top-7 right-10 text-2xl"}>
          <FaGithubSquare />
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
