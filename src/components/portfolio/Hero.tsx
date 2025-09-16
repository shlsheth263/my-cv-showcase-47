import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container mx-auto text-center space-y-8 animate-fade-in">
        {/* Status Badge */}
        <Badge variant="secondary" className="px-4 py-2 text-sm animate-pulse-slow">
          MBA Student • Product Manager • Data Engineer
        </Badge>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-gradient">Sahil Sheth</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Product Manager & Data Engineer with a track record of raising <span className="text-primary font-semibold">$10.9M</span> in funding and driving <span className="text-accent font-semibold">17% cost savings</span> through innovative solutions
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto py-8">
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary">$10.9M</div>
            <div className="text-sm text-muted-foreground">Equity Raised</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-accent">17%</div>
            <div className="text-sm text-muted-foreground">Cost Reduction</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-primary">6%</div>
            <div className="text-sm text-muted-foreground">NPS Increase</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-accent">3rd</div>
            <div className="text-sm text-muted-foreground">IIT Hackathon</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button size="lg" className="btn-primary">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="hover:border-primary hover:text-primary">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};