import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Database, 
  Cloud, 
  BarChart3, 
  Code, 
  Smartphone, 
  GitBranch,
  Users,
  TrendingUp,
  Target,
  Lightbulb
} from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    skills: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "SQL (MySQL, PostgreSQL)", level: 85, icon: "🗄️" },
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "Tableau", level: 85, icon: "📊" },
      { name: "Git", level: 80, icon: "📚" },
      { name: "Spark", level: 75, icon: "⚡" }
    ]
  },
  {
    title: "Product & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Data Engineering", level: 90, icon: "⚙️" },
      { name: "Product Management", level: 85, icon: "🎯" },
      { name: "Jira", level: 80, icon: "📋" },
      { name: "Dashboards & BI", level: 85, icon: "📈" },
      { name: "ETL Processes", level: 88, icon: "🔄" },
      { name: "Performance Optimization", level: 85, icon: "🚀" }
    ]
  },
  {
    title: "Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 75, icon: "📱" },
      { name: "Django", level: 70, icon: "🌐" },
      { name: "Java", level: 75, icon: "☕" },
      { name: "C", level: 70, icon: "💻" },
      { name: "Selenium", level: 70, icon: "🤖" }
    ]
  },
  {
    title: "Leadership & Business",
    icon: Users,
    skills: [
      { name: "Team Leadership", level: 90, icon: "👥" },
      { name: "Investor Relations", level: 85, icon: "💼" },
      { name: "Strategy & Planning", level: 85, icon: "🎯" },
      { name: "Process Optimization", level: 88, icon: "⚡" },
      { name: "Stakeholder Management", level: 80, icon: "🤝" }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skillset spanning technical development, data engineering, and product leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="card-hover bg-card border-border animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <span className="text-lg">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Core Strengths</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Engineering", "Product Strategy", "Team Leadership", "Cost Optimization",
              "Investor Relations", "Process Innovation", "Strategic Planning", "Cross-functional Collaboration"
            ].map((strength, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {strength}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};