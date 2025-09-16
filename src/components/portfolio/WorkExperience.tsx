import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp } from "lucide-react";

const workExperience = [
  {
    title: "Entrepreneur in Residence, CEO's Office",
    company: "WorkIndia",
    period: "Mar'23 - Jun'23",
    achievements: [
      "Increased Net Promoter Score by 6% through 'Relationship Manager' initiative",
      "Achieved 8.7% increase in average ticket size (₹2,300 to ₹2,500) & 1.7% rise in renewals",
      "Boosted Google My Business rating from 3.8 to 4.3",
      "Reduced TAT by 2.5 hours through SOP improvements",
      "Amplified 'say-do' ratio by 18% across teams"
    ],
    highlight: "6% NPS Increase"
  },
  {
    title: "Investor Relations Manager",
    company: "WorkIndia",
    period: "Sep'22 – Feb'23",
    achievements: [
      "Raised $10.9M equity, $1.5M venture debt; $62M valuation 13% higher than previous Series A",
      "Engaged with 45+ VCs & investors and their legal teams",
      "Supported CEO in 25+ investor meetings",
      "Oversaw setup of 350 systems and established 6-member admin team",
      "Won Shining Star Award (1 out of 120 employees)"
    ],
    highlight: "$10.9M Raised"
  },
  {
    title: "Data & Infrastructure Team Lead",
    company: "WorkIndia",
    period: "Feb'22 - Aug'22",
    achievements: [
      "Reduced server cost by 17% annually through AWS optimizations",
      "Achieved ₹50K/month cost savings through internal tool development",
      "Reduced downtime by 2 hours per week",
      "Attained 7% reduction in redundant code",
      "Won Tech Ninja Award (1st out of 41 members)"
    ],
    highlight: "17% Cost Savings"
  },
  {
    title: "Data Engineer",
    company: "WorkIndia",
    period: "May'21 – Jan'22",
    achievements: [
      "Achieved 6.5% cost saving through proprietary enhancements",
      "Improved data pipeline processing speed by 1 hour",
      "Developed one-click Backup & Restore mechanism",
      "Streamlined database recovery time from 4 hours to 1 hour"
    ],
    highlight: "6.5% Cost Savings"
  }
];

export const WorkExperience = () => {
  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of growth from Data Engineer to Product Leadership, driving impact across multiple domains
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div 
                key={index} 
                className="relative pl-20 animate-slide-up card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {job.period}
                        </div>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
                        <TrendingUp className="h-4 w-4" />
                        {job.highlight}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};