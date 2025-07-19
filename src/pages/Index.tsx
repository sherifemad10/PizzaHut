import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import QuickOrderSection from "@/components/QuickOrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <HeroSection />
      <MenuSection />
      <QuickOrderSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
