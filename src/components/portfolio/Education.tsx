import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";

const educationData = [
  {
    degree: "Master of Business Administration",
    institution: "BITS School of Management (BITSoM), Mumbai",
    year: "2026",
    status: "Pursuing",
    description: "Class of 2026 - Focusing on Strategic Management and Business Operations",
    current: true
  },
  {
    degree: "B.Tech. Information Technology",
    institution: "Sardar Patel Institute of Technology, Mumbai",
    year: "2021",
    status: "8.8/10",
    description: "Strong foundation in software engineering, data structures, and system design",
    current: false
  },
  {
    degree: "12th HSC, Maharashtra Board",
    institution: "Prakash College of Commerce & Science, Mumbai",
    year: "2017",
    status: "86.3%",
    description: "Science stream with Mathematics and Computer Science",
    current: false
  },
  {
    degree: "10th SSC, Maharashtra Board",
    institution: "St. Francis D'Assisi High School, Mumbai",
    year: "2015",
    status: "91.4%",
    description: "Completed with distinction in Mathematics and Science",
    current: false
  }
];

const academicAchievements = [
  {
    title: "IEEE Research Publication",
    description: "Published 'Virtual assistant for the visually impaired people' in ICCES journal",
    year: "2020",
    icon: BookOpen
  },
  {
    title: "IIT-Dharwad Hackathon",
    description: "3rd rank for integrating Google-Speech API for accessibility solutions",
    year: "2020",
    icon: Award
  },
  {
    title: "IEEEXtreme Programming Competition",
    description: "1st in Mumbai, 17th nationally, 213/2781 globally in 24-hour coding contest",
    year: "2019",
    icon: Award
  }
];

export const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A strong academic foundation in technology and business management
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="relative pl-20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                
                <Card className={`card-hover ${edu.current ? 'bg-gradient-to-r from-primary/5 to-accent/5 border-primary/30' : 'bg-card border-border'}`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2 flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          {edu.degree}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.year}
                        </div>
                        <Badge 
                          variant={edu.current ? "default" : "secondary"}
                          className={edu.current ? "bg-primary" : ""}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Academic Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicAchievements.map((achievement, index) => (
              <Card 
                key={index}
                className="card-hover bg-card border-border text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <achievement.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {achievement.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};