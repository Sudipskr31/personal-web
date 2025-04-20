import { FaGithub } from "react-icons/fa";

const date = () => new Date().getFullYear();

const Footer = () => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center border-t border-t-white/60 mt-5 cursor-default py-5"
      }
    >
      <p className={"text-white/80 text-sm"}>
        © {date()} Sudip Sarkar | Created in India ❤️
      </p>
      <p className={"text-white/80 text-sm"}>All rights reserved.</p>
    </div>
  );
};

export default Footer;
