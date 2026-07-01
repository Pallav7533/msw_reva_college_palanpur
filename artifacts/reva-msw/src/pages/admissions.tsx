import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, Calendar, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Admissions() {
  useEffect(() => {
    document.title = "Admissions | Shree Reva MSW College";
  }, []);

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">Admissions Open 2026-27</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Admission Process</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join North Gujarat's premier MSW institution. Follow the simple steps below to secure your admission.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold mb-6 font-display flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" /> Eligibility Criteria
              </h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 shrink-0 mt-0.5" />
                      <span>Candidates must possess a Bachelor's Degree (BA, B.Com, B.Sc, BBA, BCA, etc.) from any recognized university.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 shrink-0 mt-0.5" />
                      <span>Minimum percentage as per HNGU university norms.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 shrink-0 mt-0.5" />
                      <span>Final year students awaiting results may apply provisionally.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 font-display flex items-center">
                <FileText className="mr-3 h-6 w-6 text-primary" /> Required Documents
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "10th Marksheet & Certificate",
                  "12th Marksheet & Certificate",
                  "Graduation Marksheets (All Semesters)",
                  "Graduation Degree Certificate",
                  "School Leaving Certificate (LC)",
                  "Aadhar Card Copy",
                  "Passport Size Photographs (4)",
                  "Caste Certificate (If applicable)"
                ].map((doc, i) => (
                  <div key={i} className="bg-muted p-3 rounded text-sm font-medium border border-border/50">
                    {i + 1}. {doc}
                  </div>
                ))}
              </div>
            </section>

          </div>

          <div className="col-span-1">
            <Card className="border-primary shadow-sm sticky top-28">
              <CardHeader className="bg-primary/5 border-b border-border">
                <CardTitle className="text-lg">Admission Steps</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                    <div className="h-full w-px bg-border my-2"></div>
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-sm">Inquiry</h4>
                    <p className="text-xs text-muted-foreground mt-1">Fill the inquiry form or visit campus</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                    <div className="h-full w-px bg-border my-2"></div>
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-sm">Counseling</h4>
                    <p className="text-xs text-muted-foreground mt-1">Meet faculty for course briefing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Document Submission</h4>
                    <p className="text-xs text-muted-foreground mt-1">Submit documents & pay fees</p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-border">
                  <Link href="/contact">
                    <Button className="w-full font-bold">Apply Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}