const ApplySection = () => {
  return (
    <div className="relative pointer-events-none">
      <div className="mt-[72px] w-full h-auto px-[14px]">
        <h2 className="w-full mb-[52px] lg:w-[2/3] text-center text-[#EEE5FF] text-[25px] lg:text-[36px] font-normal leading-12">
          Apply On Any Section Or Enable For <br /> Whole Page
        </h2>

        <div className="flex flex-col items-center lg:flex-row gap-x-4 gap-y-4 lg:gap-y-0 mb-[208px]">
          <div
            className="w-full lg:w-1/2 h-auto rounded-xl p-[30px] lg:p-[42px] border-[2px] border-[#FFFFFF10]"
            style={{
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
            }}
          >
            <p className="text-[24px] text-[#EEE5FF] font-normal leading-6 text-center lg:text-start">
              Apply On Section
            </p>
            <p className="text-[16px] mt-[12px] text-[#b5adc6] font-normal leading-6 text-center lg:text-start">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.{" "}
            </p>
            <div className="mt-[14px] flex justify-center">
              <img src="img/section-lock.png" alt="section-lock" />
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-auto rounded-xl p-[30px] lg:p-[42px] border-[2px] border-[#FFFFFF10] mb-[-158px]"
            style={{
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
            }}
          >
            <p className="text-[24px] text-[#EEE5FF] font-normal leading-6 text-center lg:text-start">
              Apply On Page
            </p>
            <p className="text-[16px] mt-[12px] text-[#b5adc6] font-normal leading-6 text-center lg:text-start">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.{" "}
            </p>
            <div className="mt-[14px] flex justify-center">
              <img src="img/page-lock.png" alt="page-lock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplySection;
