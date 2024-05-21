import Navbar from "../Navbar/navbar";
import HeroSection from "../HeroSection/HeroSection";
import TrustedSection from "../TrustedSection/TrustedSection";
import ColorfulSection from "../ColorfulSection/ColorfulSection";
import ApplySection from "../ApplySection/ApplySection";
import BrowsersSection from "../BrowserSection/BrowserSection";
import PluginSection from "../PluginSection/PluginSection";
import Footer from "../Footer/Footer";
const Body = () => {
  return (
    <div>
      <div className="w-full h-auto bg-[#0e0f1b] backdrop-blur-sm ">
        <Navbar />
        <HeroSection />
        <TrustedSection />
        <ColorfulSection />
        <ApplySection />
        <BrowsersSection />
        <PluginSection />
        <Footer />
      </div>
    </div>
  );
};
export default Body;
