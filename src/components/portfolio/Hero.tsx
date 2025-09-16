import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Status Badge */}
            <Badge variant="secondary" className="px-4 py-2 text-sm animate-pulse-slow">
              MBA Student • Product Manager • Data Engineer
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-gradient">Sahil Sheth</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-none">
                Product Manager & Data Engineer with a track record of raising <span className="text-primary font-semibold">$10.9M</span> in funding and driving <span className="text-accent font-semibold">17% cost savings</span> through innovative solutions
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-2xl md:text-3xl font-bold text-primary">$10.9M</div>
                <div className="text-xs md:text-sm text-muted-foreground">Equity Raised</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl md:text-3xl font-bold text-accent">17%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-2xl md:text-3xl font-bold text-primary">6%</div>
                <div className="text-xs md:text-sm text-muted-foreground">NPS Increase</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl md:text-3xl font-bold text-accent">3rd</div>
                <div className="text-xs md:text-sm text-muted-foreground">IIT Hackathon</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-4">
              <Button size="lg" className="btn-primary">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="hover:border-primary hover:text-primary">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right side - Professional Photo */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl scale-110"></div>
              
              {/* Photo container */}
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-1 rounded-2xl">
                <img 
                  src="/assets/sahil-photo.jpg" 
                  alt="Sahil Sheth - Product Manager & Data Engineer"
                  className="w-80 h-96 md:w-96 md:h-[500px] object-cover object-center rounded-xl shadow-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-md animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};