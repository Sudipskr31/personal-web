import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import Marquee from "react-fast-marquee";

const Technologies = () => {
  return (
    <>
      <h1 className={"text-xl font-medium text-white/85 py-6 cursor-default"}>
        Technologies
      </h1>
      <Marquee
        speed={50}
        gradient={true}
        gradientWidth={50}
        gradientColor={"black"}
        pauseOnHover={true}
      >
        <div
          className={
            "flex justify-evenly space-x-5 border-1 pt-2 flex-wrap whitespace-nowrap pb-4 cursor-default"
          }
        >
          <h1 className={"flex items-center gap-1 font-light text-white/85"}>
            <FaReact className={"text-white text-2xl"} /> React
          </h1>
          <h1 className={"flex items-center gap-1 font-light text-white/85"}>
            <RiTailwindCssFill className={"text-white text-2xl"} /> Tailwind CSS
          </h1>
          <h1 className={"flex items-center gap-1 font-light text-white/85"}>
            <FaCss3 className={"text-white text-2xl"} /> CSS3
          </h1>
          <h1 className={"flex items-center gap-1 font-light text-white/85"}>
            <FaHtml5 className={"text-white text-2xl"} /> HTML5
          </h1>
          <h1 className={"flex items-center gap-1 font-light text-white/85"}>
            <IoLogoJavascript className={"text-white text-2xl"} /> JavaScript
          </h1>
          <h1 className={"flex items-center gap-1 font-light text-white/85"}>
            <TbBrandVite className={"text-white text-2xl"} /> Vite
          </h1>
          <h1 className={"flex items-center gap-1 font-light text-white/85"}>
            <FaGithub className={"text-white text-2xl"} /> Github
          </h1>
          <h1 className={"flex items-center gap-1 font-light text-white/85"}>
            <FaGitAlt className={"text-white text-2xl"} /> Git
          </h1>
          <h1 className={"flex items-center gap-1 font-light text-white/85"}>
            <SiTypescript className={"text-white text-2xl"} /> TypeScript
          </h1>
          <h1
            className={"flex items-center gap-1 mr-5 font-light text-white/85"}
          >
            <IoLogoFirebase className={"text-white text-2xl"} /> Firebase
          </h1>
        </div>
      </Marquee>
    </>
  );
};

export default Technologies;
