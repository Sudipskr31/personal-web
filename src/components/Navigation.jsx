import { FaArrowLeftLong } from "react-icons/fa6";

const Navigation = () => {
  return (
    <div className={"flex items-center justify-start bg-black w-full"}>
      <FaArrowLeftLong className={"text-white ml-1.5 animate-arrow-mov"} />
      <h1 className={"text-white"}>Home</h1>
    </div>
  );
};

export default Navigation;
