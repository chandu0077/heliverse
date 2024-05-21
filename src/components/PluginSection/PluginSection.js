const PluginSection = () => {
  return (
    <div>
      <div className="mt-[92px] px-[14px] w-full h-auto relative pointer-events-none">
        <div className="flex flex-col items-center">
          <p className="text-center text-[#EEE5FF] text-[25px] sm:text-[32px] leading-12">
            An All-Round Plugin With <br /> Powerful Features
          </p>
          <p className="text-[#b5adc6] text-[14px] sm:text-[16px] leading-7 text-center font-normal">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for <br /> Elementor seamlessly integrates with the Elementor
            platform, providing you <br />
            with a seamless and intuitive experience.
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-4 lg:flex-row lg:gap-x-4 mt-[24px]">
          <div className="w-full lg:w-1/3 border-[2px] border-[#FFFFFF10] bg-[#171028] h-[340px] p-[18px] rounded-xl">
            <img src="img/power.png" alt="power" className="mb-3" />
            <div>
              <p className="text-[#EEE5FF] text-[20px] sm:text-[25px] font-medium">
                Light Weight
              </p>
              <p className="text-[#b5adc6] text-[16px] font-normal mt-4">
                Motion Art for Elementor is designed to be lightweight.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 border-[2px] border-[#FFFFFF10] bg-[#171028] h-[340px] p-[18px] rounded-xl">
            <img src="img/one.png" alt="one" className="mb-3" />
            <div>
              <p className="text-[#EEE5FF] text-[20px] sm:text-[25px] font-medium">
                100% Responsive
              </p>
              <p className="text-[#b5adc6] text-[16px] font-normal mt-4 mb-4">
                Create a consistent visual experience across all devices.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 border-[2px] border-[#FFFFFF10] bg-[#171028] h-[340px] p-[18px] rounded-xl">
            <img src="img/moon.png" alt="moon" className="mb-3" />
            <div>
              <p className="text-[#EEE5FF] text-[20px] sm:text-[25px] font-medium">
                User Friendly Interface
              </p>
              <p className="text-[#b5adc6] text-[16px] font-normal mt-4">
                Ensure a smooth experience for both applicants and
                administrators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PluginSection;
