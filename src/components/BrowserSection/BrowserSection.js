const BrowsersSection = () => {
  return (
    <div className="px-[32px]">
      <div className="mt-[72px] w-full rounded-xl  h-auto border-[2px] border-[#FFFFFF10] bg-[#171028] p-[32px]">
        <p className="text-[#EEE5FF] text-[25px] text-center font-medium">
          Support by All Popular Browsers
        </p>
        <p className="text-[#b5adc6] text-[18px] font-light leading-7 text-center mt-[12px]">
          Rest assured, Motion Art is designed to be compatible <br />
          with all major web browsers.
        </p>
        <div className="mt-[32px] flex justify-center">
          <img src="img/browsers.png" alt="browsers" />
        </div>
      </div>
    </div>
  );
};
export default BrowsersSection;
