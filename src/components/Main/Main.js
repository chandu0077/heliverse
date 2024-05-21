import { SiLeaflet } from "react-icons/si";
import Body from "../Body/Body";
const Main = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#262626] w-full h-auto p-[8px]">
        <div className="flex items-center">
          <SiLeaflet size={18} color="green" />
          <p className="text-white text-[18px]">
            envo <span className="text-[#81b441] text-[18px]">market</span>
          </p>
        </div>
        <button className="text-white  bg-[#82b440] p-2 rounded-lg">
          Buy now
        </button>
      </div>
      <Body />
    </div>
  );
};
export default Main;
