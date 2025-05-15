import Hero from "../components/Hero.jsx";
import Technologies from "../components/Technologies.jsx";
import Projects from "../components/Projects.jsx";
import Blogs from "../components/Blogs.jsx";
import Experience from "../components/Experience.jsx";

const Home = () => {
  return (
    <div className={"min-h-screen bg-black p-5 sm:p-14 font-[Inter]"}>
      <main className={"max-w-[700px] mx-auto w-full"}>
        <Hero />
        <Technologies />
        <Experience />
        <Projects />
        <Blogs limit={5} />
      </main>
    </div>
  );
};

export default Home;
