import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Users, Trophy } from "lucide-react";

export default function Events() {
  useEffect(() => {
    document.title = "Events & Activities | Shree Reva MSW College";
  }, []);

  const events = [
    {
      title: "Annual Social Work Seminar 2024",
      date: "March 15, 2024",
      type: "Seminar",
      icon: Users,
      desc: "A state-level seminar on 'Rural Development Challenges in Gujarat' featuring prominent sociologists."
    },
    {
      title: "NSS Camp at Dantiwada",
      date: "February 10-17, 2024",
      type: "Field Camp",
      icon: CalendarDays,
      desc: "7-day residential camp focusing on health awareness and cleanliness drives in rural areas."
    },
    {
      title: "World Social Work Day Celebration",
      date: "March 19, 2024",
      type: "Celebration",
      icon: Trophy,
      desc: "Honoring outstanding alumni and celebrating the spirit of social work with cultural performances."
    }
  ];

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Campus Life</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Events & Activities</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the vibrant academic and cultural life at Shree Reva MSW College.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <Card key={i} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary">{event.type}</Badge>
                    <span className="text-sm font-medium text-muted-foreground flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1.5" />
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}