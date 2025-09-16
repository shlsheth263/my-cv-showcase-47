import { Hero } from "@/components/portfolio/Hero";
import { WorkExperience } from "@/components/portfolio/WorkExperience";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Achievements } from "@/components/portfolio/Achievements";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gradient">Sahil Sheth</h1>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
              <a href="#education" className="text-sm hover:text-primary transition-colors">Education</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <WorkExperience />
        <Skills />
        <Achievements />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;