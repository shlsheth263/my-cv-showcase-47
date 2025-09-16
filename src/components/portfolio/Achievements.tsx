import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target, TrendingUp, Users, DollarSign } from "lucide-react";

const achievements = [
  {
    title: "Fundraising Excellence",
    description: "Successfully raised $10.9M in equity and $1.5M in venture debt, achieving 13% higher valuation than previous Series A",
    icon: DollarSign,
    value: "$10.9M",
    category: "Business Impact"
  },
  {
    title: "Cost Optimization Leader",
    description: "Delivered 17% annual server cost reduction through AWS optimizations, increasing contribution margin by 1.5%",
    icon: TrendingUp,
    value: "17%",
    category: "Technical Excellence"
  },
  {
    title: "Customer Experience Champion",
    description: "Increased Net Promoter Score by 6% and boosted Google My Business rating from 3.8 to 4.3",
    icon: Target,
    value: "6%",
    category: "Product Impact"
  },
  {
    title: "IIT Hackathon Winner",
    description: "Secured 3rd rank in IIT-Dharwad hackathon by integrating Google-Speech API for the visually impaired",
    icon: Trophy,
    value: "3rd",
    category: "Innovation"
  },
  {
    title: "IEEEXtreme Global Ranking",
    description: "Secured 1st rank in Mumbai, 17th nationally, & 213/2781 globally in 24-hour coding hackathon",
    icon: Award,
    value: "213/2781",
    category: "Technical Competition"
  },
  {
    title: "TEDx Event Leadership",
    description: "Led 15-member team for TEDxSPIT, organizing two events with 300+ attendees each",
    icon: Users,
    value: "600+",
    category: "Leadership"
  }
];

export const Achievements = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Key Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognized accomplishments across business strategy, technical innovation, and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="card-hover bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <achievement.icon className="h-8 w-8 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {achievement.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-gradient">
                    {achievement.value}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="card-hover bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Shining Star Award</h4>
                <p className="text-sm text-muted-foreground">
                  1 out of 120 employees to win for contribution to Series B fundraising
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Tech Ninja Award</h4>
                <p className="text-sm text-muted-foreground">
                  1st position out of 41 members for leading cost-saving initiatives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};