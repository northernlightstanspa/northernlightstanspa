import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSections from "@/components/ServicesSections";
import HoursAndNews from "@/components/HoursAndNews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSections />
        <HoursAndNews />
      </main>
      <Footer />
    </div>
  );
}
