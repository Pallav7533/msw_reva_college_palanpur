import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Shree Reva MSW College";
  }, []);

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Institution Profile</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">About Shree Reva MSW College</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dedicated to fostering excellence in social work education since 2008, shaping compassionate leaders for a better tomorrow.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
          
          <div className="md:col-span-8 space-y-12">
            <section>
              <h2 className="text-3xl font-display font-bold mb-6 text-foreground">Our History</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Shree Reva MSW College was established in Palanpur with a singular vision: to create a premier institution for social work education in North Gujarat. Affiliated with Hemchandracharya North Gujarat University (HNGU), Patan, the college has grown into a hub of academic excellence and community service.
                </p>
                <p>
                  Recognizing the growing need for trained professional social workers in the region, the institution was founded to bridge the gap between academic theory and grassroots realities. Over the years, we have built strong partnerships with leading NGOs, government departments, and CSR initiatives, ensuring our students receive robust field training.
                </p>
              </div>
            </section>

            <section className="grid sm:grid-cols-2 gap-8">
              <Card className="bg-primary text-primary-foreground border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 font-display">Our Vision</h3>
                  <p className="leading-relaxed opacity-90">
                    To be a center of excellence in social work education that empowers individuals to build an equitable, inclusive, and sustainable society through knowledge, compassion, and dedicated action.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary text-secondary-foreground border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
                  <ul className="space-y-3 opacity-90">
                    <li className="flex items-start"><span className="mr-2">•</span> Provide rigorous academic training in social work</li>
                    <li className="flex items-start"><span className="mr-2">•</span> Facilitate impactful field-based learning</li>
                    <li className="flex items-start"><span className="mr-2">•</span> Promote research on relevant social issues</li>
                    <li className="flex items-start"><span className="mr-2">•</span> Inculcate ethical values and professional standards</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>

          <div className="md:col-span-4 space-y-8">
            <Card className="border-border shadow-sm overflow-hidden">
              <div className="h-2 bg-primary w-full"></div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Key Information</h3>
                <ul className="space-y-4 text-sm">
                  <li className="border-b border-border pb-3">
                    <span className="text-muted-foreground block mb-1">Established</span>
                    <span className="font-medium text-foreground">2008</span>
                  </li>
                  <li className="border-b border-border pb-3">
                    <span className="text-muted-foreground block mb-1">Affiliation</span>
                    <span className="font-medium text-foreground">HNGU, Patan</span>
                  </li>
                  <li className="border-b border-border pb-3">
                    <span className="text-muted-foreground block mb-1">Recognition</span>
                    <span className="font-medium text-foreground">Govt. of Gujarat</span>
                  </li>
                  <li>
                    <span className="text-muted-foreground block mb-1">Location</span>
                    <span className="font-medium text-foreground">Palanpur, Banaskantha</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted border-none">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold">
                  PR
                </div>
                <h3 className="font-bold text-lg mb-1">Principal's Message</h3>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "Education in social work is not just about a career; it's a commitment to human welfare. At Reva, we nurture that commitment."
                </p>
                <div className="text-sm font-semibold text-primary">Read Full Message &rarr;</div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </Layout>
  );
}