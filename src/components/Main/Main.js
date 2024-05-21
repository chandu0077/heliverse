import { SiLeaflet } from "react-icons/si";
import Body from "../Body/Body";
const Main = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#262626] w-full h-auto p-[8px] relative">
        <div className="flex items-center">
          <SiLeaflet size={18} color="green" />
          <a href="/" className="text-white text-[20px]">
            <span className="font-semibold">envato</span>
            <span className="text-[#81b441] text-[20px]">market</span>
          </a>
        </div>
        <button className="text-white bg-[#82b440] px-4 py-2 text-[14px] rounded-md">
          Buy now
        </button>
      </div>
      <Body />
    </div>
  );
};
export default Main;
