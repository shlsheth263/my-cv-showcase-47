import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Database, Users, ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "S.P.I.T. App",
    description: "Official College Mobile Application developed using Flutter and Firebase, featuring announcements and student updates",
    tech: ["Flutter", "Firebase", "Mobile Development"],
    achievements: [
      "1000+ downloads on Google Play Store",
      "4.6/5 star rating from users",
      "Used by students and parents"
    ],
    icon: Smartphone,
    period: "Jan'20 - Mar'20",
    category: "Mobile Development"
  },
  {
    title: "Database Backup & Restore System",
    description: "One-click Backup & Restore mechanism designed for MySQL, PostgreSQL, and MongoDB databases",
    tech: ["Python", "MySQL", "PostgreSQL", "MongoDB"],
    achievements: [
      "Reduced database recovery time from 4 hours to 1 hour",
      "Automated backup processes",
      "Cross-platform database support"
    ],
    icon: Database,
    period: "WorkIndia Project",
    category: "Data Engineering"
  },
  {
    title: "TEDxSPIT Events",
    description: "Organized and managed two TEDx events with comprehensive event planning and execution",
    tech: ["Event Management", "Team Leadership", "Stakeholder Coordination"],
    achievements: [
      "300+ attendees per event",
      "23 inspiring talks curated",
      "Led 15-member organizing team"
    ],
    icon: Users,
    period: "2020",
    category: "Leadership"
  }
];

const responsibilities = [
  {
    title: "TEDxSPIT Licensee",
    description: "Led a 15-member team for TEDxSPIT, organizing two events with 300+ attendees each and curating 23 inspiring talks",
    year: "2020"
  },
  {
    title: "S.P.I.T. Marathon Event Manager",
    description: "Managed operations for the college marathon with 1,500 runners, ensuring smooth event execution",
    year: "2020"
  },
  {
    title: "Asha Kiran Trust Volunteer",
    description: "Taught mathematics to 120 class 5 students, improving pass rate from 65% to 77%",
    year: "2020"
  },
  {
    title: "Marketing Head - Oculus Festival",
    description: "Secured ₹2.5 lakhs in sponsorships by approaching 80+ potential sponsors and converting 4 of them",
    year: "2019"
  }
];

export const Projects = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects & Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key projects and leadership roles that demonstrate technical skills and social impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-hover bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <project.icon className="h-8 w-8 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Star className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Positions */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Positions of Responsibility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((role, index) => (
              <Card 
                key={index}
                className="card-hover bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">{role.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {role.year}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};