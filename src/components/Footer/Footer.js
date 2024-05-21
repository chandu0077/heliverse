const Footer = () => {
  return (
    <div>
      <div
        className="relative w-full h-auto mt-[72px] flex flex-col items-center gap-y-4 lg:gap-0 lg:flex-row justify-between p-[12px]"
        style={{
          background: "linear-gradient(90deg, #5E11FF 16%, #F87516 43%)",
        }}
      >
        <div className="flex justify-between flex-col lg:flex-row w-auto lg:w-[1280px] mx-auto">
          <div className="flex justify-center lg:justify-end gap-x-8">
            <a
              className="text-white text-[14px] font-normal"
              href="https://qodematrix.com/docs/motion-art-for-elementor/"
              target="_blank"
            >
              <span>Documentation</span>
            </a>

            <a
              className="text-white text-[14px] font-normal"
              href="https://support.qodematrix.com/"
              target="_blank"
            >
              <span>Support</span>
            </a>
          </div>
          <div>
            <p className="text-center text-white text-[14px] font-normal">
              © 2023 Copywrite. All rights reserved by QodeMatrix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
