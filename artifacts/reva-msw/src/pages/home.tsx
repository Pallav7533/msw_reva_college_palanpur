import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ArrowRight, PhoneCall, BookOpen, Users, 
  Briefcase, Award, Library, Laptop, Mic, 
  MapPin, ChevronRight, Activity, Calendar,
  Instagram
} from "lucide-react";
import { useGetNotices } from "@workspace/api-client-react";
import { format } from "date-fns";

export default function Home() {
  useEffect(() => {
    document.title = "Shree Reva MSW College | Master of Social Work Palanpur";
  }, []);

  const { data: notices, isLoading: noticesLoading } = useGetNotices();
  const recentNotices = notices?.slice(0, 3) || [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary/95 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80 z-0"></div>
        
        {/* Abstract pattern overlay instead of Unsplash */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay z-0" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 pt-20 pb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm"
          >
            <Badge variant="secondary" className="mr-2">Admission 2025</Badge>
            Applications are now open for MSW Batch 2025-27
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight mb-6"
          >
            Shaping Tomorrow's <span className="text-secondary">Social Workers</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10"
          >
            A premier institution in Palanpur dedicated to professional social work education, field research, and community empowerment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link href="/admissions" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg h-14 px-8 rounded-full shadow-lg">
                Admission 2025
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="flex gap-4 w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10 h-14 rounded-full">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Us
              </Button>
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#128C7E] h-14 rounded-full border-0">
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-border relative z-20 shadow-sm -mt-8 mx-4 md:mx-auto md:max-w-5xl rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8">
          {[
            { value: "15+", label: "Years Excellence" },
            { value: "500+", label: "Successful Graduates" },
            { value: "95%", label: "Placement Rate" },
            { value: "NAAC", label: "Recognized Institution" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-4 border-r last:border-r-0 border-border/50"
            >
              <h3 className="font-mono text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Overview */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">About Our College</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Committed to Creating <span className="text-primary">Social Change Leaders</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Shree Reva MSW College is a pioneering institution affiliated with Hemchandracharya North Gujarat University (HNGU). We blend rigorous academic coursework with immersive field practice to prepare students for impactful careers in social work.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "UGC recognized curriculum",
                  "Expert faculty with field experience",
                  "Strong NGO & CSR placement network",
                  "Focus on rural development & human rights"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-3 rounded-full bg-primary/10 p-1">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-block mt-4">
                <Button variant="link" className="text-primary px-0 font-semibold text-base hover:no-underline hover:text-primary/80 group">
                  Read our full history <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary/5 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent flex items-end p-8">
                  <h3 className="text-white font-display text-2xl font-bold max-w-sm">
                    Empowering communities through dedicated social service since 2008.
                  </h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Top Ranked</p>
                    <p className="text-xs text-muted-foreground">MSW College in North Gujarat</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Shree Reva?</h2>
            <p className="text-muted-foreground">We provide a holistic educational environment that transforms compassionate individuals into skilled social work professionals.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Expert Faculty", desc: "Learn from academicians and seasoned social work practitioners." },
              { icon: MapPin, title: "Field Training", desc: "Extensive concurrent field work across various social agencies." },
              { icon: Briefcase, title: "Placement Support", desc: "Dedicated cell connecting students with top NGOs and CSR bodies." },
              { icon: Award, title: "NAAC Affiliated", desc: "Quality education conforming to national accreditation standards." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow group">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Campus Facilities</h2>
              <p className="text-muted-foreground">Modern infrastructure designed to support comprehensive academic learning and research.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Library, title: "Rich Library", desc: "Extensive collection of books, journals, and digital resources." },
              { icon: Laptop, title: "Computer Lab", desc: "Modern IT infrastructure for research and data analysis." },
              { icon: Mic, title: "Seminar Hall", desc: "Well-equipped hall for guest lectures and workshops." },
              { icon: Activity, title: "Sports & NSS", desc: "Facilities promoting physical well-being and community service." }
            ].map((facility, i) => (
              <Card key={i} className="overflow-hidden group">
                <div className="h-48 bg-muted relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                  <facility.icon className="h-16 w-16 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Notices */}
      <section className="py-20 bg-muted/50 px-4 border-y border-border">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground">Latest Announcements</h2>
            <Link href="/notices">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          
          {noticesLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card h-48 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : recentNotices.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {recentNotices.map((notice, i) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:border-primary/50 transition-colors">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="secondary" className="capitalize">
                          {notice.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {format(new Date(notice.createdAt), 'MMM d, yyyy')}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{notice.title}</h3>
                      {notice.description && (
                        <p className="text-sm text-muted-foreground line-clamp-3 flex-grow">{notice.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-xl border border-border">
              <p className="text-muted-foreground">No recent announcements.</p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram Embed Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Life at Reva MSW</h2>
            <p className="text-muted-foreground mb-6">Follow our journey, events, and field work on Instagram.</p>
            <a 
              href="https://www.instagram.com/revamswcollege/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white border-0 hover:opacity-90">
                <Instagram className="mr-2 h-5 w-5" />
                @revamswcollege
              </Button>
            </a>
          </div>
          
          <div className="bg-muted rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
            <p className="text-muted-foreground mb-4">Instagram gallery preview requires authentication.</p>
            <p className="font-medium">Visit our official Instagram page to see campus life, student activities, and events.</p>
          </div>
        </div>
      </section>

    </Layout>
  );
}