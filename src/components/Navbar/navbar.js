const Navbar = () => {
  return (
    <div className="flex justify-between py-[14px] px-[16px]">
      <img
        className="w-[220px] h-[52px]"
        src="img/MotionArtEffect-logo.png"
        alt="MotionArtEffect-logo"
      />
      <button className="hidden lg:block bg-white text-black w-[152px] h-[52px] text-[18px] p-2 rounded-md">
        Purchase Now
      </button>
    </div>
  );
};
export default Navbar;
