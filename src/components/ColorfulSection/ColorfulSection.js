import { GoArrowRight } from "react-icons/go";

const ColorfulSection = () => {
  return (
    <div>
      <div className="w-full h-auto mt-[102px] flex flex-col items-center lg:flex-row px-[14px]">
        <div className="w-auto lg:w-3/4">
          <p className="text-[#EEE5FF] text-center lg:text-start text-[25px] lg:text-[40px] font-medium leading-[52px] lg:leading-[60px] relative pointer-events-none">
            Turn Your Cursor Into A Colorful Magic <br /> Wand & Charm Your
            Visitors
          </p>
          <p className="relative pointer-events-none text-[#EEE5FF] text-[16px] lg:text-[18px] font-light text-center lg:text-start  leading-[30px] mt-[16px]">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse <br /> your website with visually
            stunning motion art elements.
          </p>
          <button
            className="relative pointer-events-nonew-full w-full lg:w-[400px] h-auto rounded-3xl mt-[52px] p-[12px] lg:ps-[24pxp] lg:pe-[16px] lg:pt-[8px] lg:pb-[12px]"
            style={{
              background: "linear-gradient(90deg, #5E11FF 16%, #F87516 43%)",
            }}
          >
            <div className="flex justify-between items-center">
              <p className="text-white text-[20px] lg:text-[24px]">
                Purchase From Envato
              </p>
              <GoArrowRight size={42} color="white" />
            </div>
          </button>
        </div>
        <div className="mt-[32px] w-full flex justify-center lg:w-1/4 relative pointer-events-none">
          <img
            src="img/motionarteffect-codepen.png"
            alt="motionarteffect-codepen"
          />
        </div>
      </div>
    </div>
  );
};
export default ColorfulSection;
