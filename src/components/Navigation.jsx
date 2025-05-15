import { FaArrowLeftLong } from "react-icons/fa6";

const Navigation = () => {
  return (
    <div className={"flex items-center justify-start bg-black w-full"}>
      <FaArrowLeftLong className={"text-white mr-1"} />
      <h1 className={"text-white"}>Home</h1>
    </div>
  );
};

export default Navigation;
