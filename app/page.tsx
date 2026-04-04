import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { AppDownload } from "./components/AppDownload";
import { Press } from "./components/Press";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <AppDownload />
      <Press />
      <Footer />
    </main>
  );
}
