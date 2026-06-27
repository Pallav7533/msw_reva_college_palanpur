import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, Clock, GraduationCap, MapPin } from "lucide-react";

export default function Courses() {
  useEffect(() => {
    document.title = "MSW Programme | Shree Reva MSW College";
  }, []);

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Academic Programme</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Master of Social Work (MSW)</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive 2-year postgraduate degree program designed to prepare students for professional social work practice.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg"><Clock className="h-6 w-6" /></div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-bold">2 Years (4 Semesters)</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg"><GraduationCap className="h-6 w-6" /></div>
              <div>
                <p className="text-sm text-muted-foreground">Eligibility</p>
                <p className="font-bold">Any Graduate (BA/BCom/BSc etc)</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg"><BookOpen className="h-6 w-6" /></div>
              <div>
                <p className="text-sm text-muted-foreground">Medium</p>
                <p className="font-bold">Gujarati / English</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 font-display border-b pb-2">Programme Overview</h2>
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p>
                The Master of Social Work (MSW) is a professional degree that provides students with the necessary knowledge, values, and skills to work effectively with individuals, families, groups, and communities. The curriculum is perfectly balanced between classroom learning and concurrent field work.
              </p>
            </div>
          </section>

          <section id="field-work">
            <h2 className="text-2xl font-bold mb-6 font-display border-b pb-2">Field Work Practicum</h2>
            <p className="text-muted-foreground mb-6">
              Fieldwork is the signature pedagogy of social work education. Our students undergo rigorous training in various settings:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "NGOs and Community Based Organizations",
                "Healthcare Settings and Hospitals",
                "Corporate Social Responsibility (CSR) Foundations",
                "Rural Development Projects",
                "Correctional Facilities",
                "Women and Child Welfare Agencies"
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 bg-muted rounded-lg">
                  <MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="syllabus">
            <h2 className="text-2xl font-bold mb-6 font-display border-b pb-2">Course Structure Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Core Subjects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-2">
                    <li>History and Philosophy of Social Work</li>
                    <li>Human Growth and Behavior</li>
                    <li>Social Case Work</li>
                    <li>Social Group Work</li>
                    <li>Community Organization</li>
                    <li>Social Work Research & Statistics</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="text-lg">Specialization Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-2">
                    <li>Human Resource Management (HRM)</li>
                    <li>Medical and Psychiatric Social Work</li>
                    <li>Rural and Urban Community Development</li>
                    <li>Family and Child Welfare</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="bg-primary/5 rounded-2xl p-8 text-center mt-12 border border-primary/20">
            <h3 className="text-2xl font-bold font-display mb-4">Ready to start your journey?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Admissions for the upcoming academic year are currently open. Check the eligibility criteria and apply online.
            </p>
            <Link href="/admissions">
              <Button size="lg" className="font-bold">View Admission Process</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}