const TrustedSection = () => {
  return (
    <div>
      <div className="w-full h-auto py-2 px-[14px]">
        <p className="text-[22px] text-center font-normal mb-4 text-[#EEE5FF]">
          Trusted by thousands of users around the world
        </p>
        <div className="w-full flex flex-col items-center gap-y-4 lg:gap-0 lg:flex-row justify-between mt-[52px]">
          <div className="w-full lg:w-1/3 flex justify-center lg:flex lg:justify-start">
            <div className="w-[88px] h-[88px] bg-[#0D061F] rounded-full">
              <img
                src="img/motionarteffect-img.png"
                alt="motionarteffect-img"
              />
            </div>
            <div className="ms-4 mt-4">
              <img
                src="img/motionarteffect-star1.png"
                alt="motionarteffect-star1"
              />
              <p className="text-[#EEE5FF] font-sans mt-4 text-[14px] leading-[22.4px]">
                {" "}
                <span className="font-bold">4.5</span> Score, 9 Reviews
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:flex lg:justify-center">
            <div className="w-[88px] h-[88px] bg-[#0D061F] rounded-full">
              <img
                src="img/motionarteffect-img1.png"
                alt="motionarteffect-img"
              />
            </div>
            <div className="ms-4 mt-4">
              <img
                src="img/motionarteffect-star1.png"
                alt="motionarteffect-star1"
              />
              <p className="text-[#EEE5FF] font-sans mt-4 text-[14px] leading-[22.4px]">
                {" "}
                <span className="font-bold">4.5</span> Score, 9 Reviews
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:flex lg:justify-end">
            <div className="w-[88px] h-[88px] bg-[#0D061F] rounded-full">
              <img
                src="img/motionarteffect-img2.png"
                alt="motionarteffect-img"
              />
            </div>
            <div className="ms-4 mt-4">
              <img
                src="img/motionarteffect-star1.png"
                alt="motionarteffect-star1"
              />
              <p className="text-[#EEE5FF] font-sans mt-4 text-[14px] leading-[22.4px]">
                {" "}
                <span className="font-bold">4.5</span> Score, 9 Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrustedSection;
