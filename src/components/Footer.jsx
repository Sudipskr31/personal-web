import { FaGithub } from "react-icons/fa";

const date = () => new Date().getFullYear();

const Footer = () => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center border-1 border-t-white/60 mt-5 cursor-default"
      }
    >
      <p className={"text-white/80 pt-5"}>
        © {date()} Sudip Sarkar | Created in India
      </p>
      <p className={"flex items-center gap-1 text-white/80 py-2"}>
        Check out my Github
        <span>
          <a href={"https://www.google.com"} target={"_blank"}>
            <FaGithub />
          </a>
        </span>{" "}
        Profile
      </p>
    </div>
  );
};

export default Footer;
