const HeroSection = () => {
  return (
    <div className="w-full mt-[62px] gap-y-3 lg:gap-0 flex flex-col lg:flex-row  mb-[72px] px-[16px] relative pointer-events-none">
      <div className="w-auto lg:w-1/5">
        <div className="sm:max-w-[140px]">
          <p
            className="text-[20px] lg:text-[18px] text-black font-medium leading-7 break-all text-center sm:text-left"
            style={{
              background: "linear-gradient(90deg, #F87516 16%, #5E11FF 43%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Transform Your Website
          </p>
          <div className="text-[#c9c1d9] text-center sm:text-left mt-[12px]">
            <p className="text-[18px] text-[18px] lg:text-[20px] font-light leading-6">
              With Motion
            </p>
            <p className="text-[18px] text-[18px] lg:text-[20px] font-light leading-6">
              Art Effect
            </p>
          </div>
        </div>
      </div>
      <div className="w-auto lg:w-3/5">
        <h1 className="text-[#EEE5FF] text-center lg:text-start text-[32px] lg:text-[55px] break-words font-medium leading-[52px] lg:leading-[75px]">
          Attract Your Visitors <br /> Attention with <br /> Colorful
        </h1>
        <p
          className="text-[32px] lg:text-[55px] leading-[65px] font-normal mb-4 text-center lg:text-start"
          style={{
            background: "linear-gradient(90deg, #F87516 16%, #5E11FF 43%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Motion Art Effect
        </p>
        <div>
          <p className="font-sans text-[16px] text-center lg:text-start lg:text-[18px] font-light leading-6 text-[#EEE5FFBD] ">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate <br /> solution for seamlessly integrating captivating
            animations into your website.{" "}
          </p>
        </div>
      </div>
      <div className="w-auto lg:w-1/5"></div>
    </div>
  );
};
export default HeroSection;
