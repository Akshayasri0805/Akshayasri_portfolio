import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CaseStudies } from "./components/CaseStudies";
import { Services } from "./components/Services";
import { VisualGallery } from "./components/VisualGallery";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
// import { Testimonials } from "./components/Testimonials";
import { BeyondScreen } from "./components/BeyondScreen";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="light min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        {/* Background starts after Hero */}
        <div className="relative">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              backgroundImage: "url('/src/Media/background image.png')",
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
              backgroundPosition: 'top left',
              opacity: 0.25,
            }}
          />

          <CaseStudies />
          <Services />
          <VisualGallery />
          <Experience />
          <Skills />

          {/* <Testimonials /> */}
          
          <BeyondScreen />
          <About />
          <Contact />
        </div>
      </main>
    </div>
  );
}