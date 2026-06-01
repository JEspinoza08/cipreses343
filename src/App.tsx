import { Loader } from "@/components/site/Loader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Architect } from "@/components/site/Architect";
import { Interior } from "@/components/site/Interior";
import { Apartments } from "@/components/site/Apartments";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsApp";

export default function App() {
  return (
    <main className="relative min-h-screen bg-ink text-bone">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Architect />
      <Interior />
      {/* <Apartments /> */}
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
