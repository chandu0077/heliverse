const Navbar = () => {
  return (
    <div className="flex justify-between py-[14px] px-[16px]">
      <img
        className="w-[151px] sm:w-[220px] h-[35px] sm:h-[52px] relative pointer-events-none"
        src="img/MotionArtEffect-logo.png"
        alt="MotionArtEffect-logo"
      />
      <button className="hidden lg:block bg-white text-black w-[152px] h-[52px] text-[18px] p-2 rounded-md relative hover:bg-transparent hover:border-white hover:border-2 hover:text-white">
        Purchase Now
      </button>
    </div>
  );
};
export default Navbar;
