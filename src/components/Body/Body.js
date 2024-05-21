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
    <div className="w-full h-auto">
      <div className="max-w-[1280px] mx-auto">
        <Navbar />
        <HeroSection />
        <TrustedSection />
        <ColorfulSection />
        <ApplySection />
        <BrowsersSection />
        <PluginSection />
      </div>
      <Footer />
    </div>
  );
};
export default Body;
