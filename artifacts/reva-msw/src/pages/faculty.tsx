import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Faculty() {
  useEffect(() => {
    document.title = "Our Faculty | Shree Reva MSW College";
  }, []);

  const facultyData = [
    {
      name: "Dr. Ramesh Patel",
      designation: "Principal & Professor",
      qualification: "MSW, Ph.D, NET",
      specialization: "Community Development",
      initials: "RP"
    },
    {
      name: "Dr. Sonal Desai",
      designation: "Associate Professor",
      qualification: "MSW, Ph.D",
      specialization: "Medical & Psychiatric Social Work",
      initials: "SD"
    },
    {
      name: "Mr. Hitesh Chauhan",
      designation: "Assistant Professor",
      qualification: "MSW, GSET",
      specialization: "Human Resource Management",
      initials: "HC"
    },
    {
      name: "Ms. Neha Shah",
      designation: "Assistant Professor",
      qualification: "MSW",
      specialization: "Family & Child Welfare",
      initials: "NS"
    },
    {
      name: "Mr. Prakash Parmar",
      designation: "Field Work Coordinator",
      qualification: "MSW",
      specialization: "Rural Development",
      initials: "PP"
    },
    {
      name: "Ms. Arti Joshi",
      designation: "Assistant Professor",
      qualification: "MSW",
      specialization: "Tribal Welfare",
      initials: "AJ"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Academic Excellence</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Our Faculty</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Learn from experienced academicians and practitioners dedicated to mentoring the next generation of social workers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((faculty, i) => (
            <Card key={i} className="overflow-hidden border-border hover:shadow-md transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="bg-muted pt-8 pb-4 flex justify-center">
                  <div className="h-32 w-32 rounded-full bg-primary flex items-center justify-center border-4 border-white shadow-sm">
                    <span className="text-4xl font-display font-bold text-white">{faculty.initials}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-1">{faculty.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{faculty.designation}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mt-4 border-t pt-4">
                    <p><span className="font-semibold text-foreground/80">Qualification:</span> {faculty.qualification}</p>
                    <p><span className="font-semibold text-foreground/80">Specialization:</span> {faculty.specialization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}