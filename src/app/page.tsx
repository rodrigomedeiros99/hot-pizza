import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
