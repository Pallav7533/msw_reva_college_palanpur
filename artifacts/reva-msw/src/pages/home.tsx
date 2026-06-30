import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight, BookOpen, Users, Briefcase, Award,
  Library, Laptop, Mic, MapPin, ChevronRight,
  Calendar, Star, Bell, Phone, MessageCircle,
  GraduationCap, HeartHandshake, Building2, FileText,
  FlaskConical, Trophy, Globe2, Landmark
} from "lucide-react";
import { useGetNotices } from "@workspace/api-client-react";
import { ApplyModal } from "@/components/ApplyModal";
import { format } from "date-fns";

const heroSlides = [
  {
    title: "Shaping Tomorrow's Social Workers",
    sub: "A premier MSW institution in Palanpur, North Gujarat — HNGU affiliated. Blending academic rigour with immersive field practice.",
    cta: "Apply for MSW 2026",
    bg: "from-primary via-primary/95 to-primary/80",
  },
  {
    title: "Excellence in Social Work Education",
    sub: "Transforming compassionate individuals into skilled professionals who drive social change across Gujarat and beyond.",
    cta: "Explore Programme",
    bg: "from-primary/90 via-primary to-primary/85",
  },
  {
    title: "Field Practice. Research. Leadership.",
    sub: "Our graduates lead in NGOs, government agencies, CSR bodies and international organisations across India.",
    cta: "View Placements",
    bg: "from-primary/80 via-primary/95 to-primary",
  },
];

const stats = [
  { value: "2+", label: "Years of Excellence", icon: Trophy },
  { value: "500+", label: "Successful Graduates", icon: GraduationCap },
  { value: "100%", label: "Placement Rate", icon: Briefcase },
  { value: "5+", label: "Partner Organisations", icon: Globe2 },
];

const quickLinks = [
  { label: "Explore MSW Programme", sub: "Curriculum, Subjects, Specialisations", href: "/courses", icon: BookOpen, color: "bg-primary" },
  { label: "Admission 2026–27", sub: "Eligibility, Fees, How to Apply", href: "/admissions", icon: FileText, color: "bg-secondary" },
  { label: "Notices & Circulars", sub: "Academic Announcements & Alerts", href: "/notices", icon: Bell, color: "bg-primary" },
  { label: "Events & Activities", sub: "NSS, Guest Lectures, Field Camps", href: "/events", icon: Calendar, color: "bg-secondary" },
];

const whyChoose = [
  { icon: Users, title: "Expert Faculty", desc: "Learn from PhDs, academicians and seasoned social work practitioners with 15+ years field experience." },
  { icon: MapPin, title: "Extensive Field Work", desc: "Mandatory concurrent field placements at 40+ partner NGOs, hospitals, and government agencies." },
  { icon: Briefcase, title: "Placement Support", desc: "Dedicated cell connecting graduates with top NGOs, CSR foundations, UNICEF, and UN bodies." },
  { icon: Award, title: "HNGU", desc: "Quality-assured education under Hemchandracharya North Gujarat University, Patan's framework." },
  { icon: Library, title: "Rich Library", desc: "Extensive social work literature, journals, dissertations, and digital resources for deep research." },
  { icon: Laptop, title: "Modern Campus", desc: "Fully equipped classrooms, computer lab, seminar hall, and digital learning facilities." },
  { icon: HeartHandshake, title: "Community Focus", desc: "Real-world projects in tribal, rural, and urban communities of North Gujarat." },
  { icon: Mic, title: "Guest Lectures", desc: "Regular sessions by IAS officers, NGO leaders, UNICEF officials, and social entrepreneurs." },
];

const courses = [
  { sem: "Sem I", subjects: ["Social Work: History & Philosophy", "Human Behaviour & Social Environment", "Social Research Methods", "Community Organisation", "Concurrent Field Work I"] },
  { sem: "Sem II", subjects: ["Social Policy & Planning", "Family & Child Welfare", "Medical & Psychiatric SW", "Industrial Social Work", "Concurrent Field Work II"] },
  { sem: "Sem III", subjects: ["Specialisation Paper I & II", "Administration in Social Work", "Tribal & Rural Development", "Concurrent Field Work III"] },
  { sem: "Sem IV", subjects: ["Specialisation Paper III & IV", "Block Field Placement", "Research Project / Dissertation", "Seminar & Viva Voce"] },
];

const facilities = [
  { icon: Library, label: "Well-Stocked Library" },
  { icon: Laptop, label: "Computer Lab" },
  { icon: Building2, label: "Seminar Hall" },
  { icon: FlaskConical, label: "Research Lab" },
  { icon: Landmark, label: "Hostel Guidance" },
  { icon: Globe2, label: "Internet & Wi-Fi" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [applyOpen, setApplyOpen] = useState(false);
  const { data } = useGetNotices();

const notices = Array.isArray(data)
  ? data
  : Array.isArray((data as any)?.data)
    ? (data as any).data
    : Array.isArray((data as any)?.items)
      ? (data as any).items
      : [];

const recentNotices = notices.slice(0, 6);

  useEffect(() => {
    document.title = "Shree Reva MSW College | Master of Social Work — Palanpur, Gujarat";
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />

      {/* ══ HERO BANNER ══ */}
      <section className="relative flex items-center overflow-hidden min-h-[560px] md:min-h-[580px]">
        {/* Real campus background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/herobg.jpg')" }} />
        {/* Dark maroon gradient overlay — heavy on left, lighter on right to show image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/97 via-primary/90 to-primary/65" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/80 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 pt-10 pb-12 w-full grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            key={slide}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Admissions Open — MSW Batch 2026–28
            </div>
            <h1 className="font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
              {heroSlides[slide].title.split("Social Workers").map((part, i, arr) =>
                i < arr.length - 1
                  ? <span key={i}>{part}<span className="text-secondary">Social Workers</span></span>
                  : <span key={i}>{part}</span>
              )}
              {!heroSlides[slide].title.includes("Social Workers") && heroSlides[slide].title}
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">{heroSlides[slide].sub}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setApplyOpen(true)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-12 px-7 rounded text-base shadow-lg"
              >
                Apply Now 2026 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/courses">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/15 h-12 px-6 rounded text-base">
                  Explore Programme
                </Button>
              </Link>
              <a href="https://wa.me/919313059676" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white border-0 h-12 px-5 rounded text-base gap-2">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <a href="tel:+919313059676" className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors">
                <Phone className="h-3.5 w-3.5" /> +91 93130 59676
              </a>
            </div>
          </motion.div>

          {/* Info card on right */}
          <motion.div
            key={`card-${slide}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Poppins" }}>
                Latest Notices & Announcements
              </h3>
              <div className="space-y-3">
                {(recentNotices.slice(0, 4).length > 0 ? recentNotices.slice(0, 4) : [
                  { id: 1, title: "Admission Open for MSW 2026–28", createdAt: new Date().toISOString(), isNew: true },
                  { id: 2, title: "Convocation Ceremony and Youth Conference — 17th April 2026", createdAt: new Date().toISOString(), isNew: true },
                  { id: 3, title: "NSS Camp Registration — Last Date 30 June", createdAt: new Date().toISOString(), isNew: false },
                  { id: 4, title: "Plastic Collection Camp-18th march 2026", createdAt: new Date().toISOString(), isNew: false },
                ]).map((notice: { id: number; title: string; createdAt: string; isNew?: boolean }) => (
                  <a href="https://www.instagram.com/revamswcollege/?hl=en" key={notice.id}
  target="_blank" rel="noopener noreferrer"
  className="flex items-start gap-2 hover:bg-white/10 rounded p-2 -mx-2 transition-colors group cursor-pointer block">
  <span className="text-secondary mt-1 shrink-0 text-xs">◆</span>
  <div className="flex-1 min-w-0">
    <span className="text-sm text-white/90 group-hover:text-white line-clamp-2 leading-snug">{notice.title}</span>
    <span className="text-white/40 text-xs block mt-0.5">
      {format(new Date(notice.createdAt), "d MMM yyyy")}
    </span>
  </div>
  {notice.isNew && (
    <span className="text-[9px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded shrink-0 mt-0.5">NEW</span>
  )}
</a>
                ))}
              </div>
              <Link href="/notices" className="flex items-center gap-1.5 text-secondary text-sm font-semibold mt-4 hover:underline">
                View All Notices <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all ${i === slide ? "w-8 bg-secondary" : "w-2 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <section className="bg-primary border-b border-primary/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-3 py-5 px-4 text-white"
              >
                <stat.icon className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <div className="font-bold text-2xl md:text-3xl text-secondary" style={{ fontFamily: "Poppins" }}>{stat.value}</div>
                  <div className="text-white/70 text-xs">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUICK ACCESS TILES ══ */}
      <section className="bg-background border-b border-border py-0">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border border-x border-border">
            {quickLinks.map((tile, i) => (
              <Link href={tile.href} key={i}
                className="flex items-start gap-3 p-5 hover:bg-primary/5 transition-colors group border-b md:border-b-0 border-border">
                <div className={`${tile.color} text-white rounded p-2.5 shrink-0 group-hover:scale-110 transition-transform shadow`}>
                  <tile.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight" style={{ fontFamily: "Poppins" }}>
                    {tile.label}
                  </div>
                  <div className="text-muted-foreground text-xs mt-0.5 leading-snug">{tile.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MAIN CONTENT: About + Notices Column ══ */}
      <section className="bg-background py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left 2/3: About + Principal Message */}
            <div className="lg:col-span-2 space-y-8">

              {/* About section */}
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-primary px-5 py-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-secondary rounded" />
                  <h2 className="text-white font-bold text-base" style={{ fontFamily: "Poppins" }}>About Shree Reva MSW College</h2>
                </div>
                <div className="p-5 grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Shree Reva MSW College</strong>, established in 2024, is a premier institution for Master of Social Work (MSW) education located in Palanpur, the district headquarters of Banaskantha, North Gujarat.
                    </p>
                    <p>
                      Affiliated to <strong className="text-primary">Hemchandracharya North Gujarat University (HNGU), Patan</strong>, the college offers a comprehensive two-year MSW programme designed to equip students with the knowledge, skills, and values essential for effective social work practice.
                    </p>
                    <p>
                      Our curriculum integrates classroom learning with intensive field placements across hospitals, NGOs, tribal development projects, and government agencies — ensuring graduates are practice-ready from Day 1.
                    </p>
                    <ul className="space-y-1.5 pt-1">
                      {["UGC recognized 2-year MSW programme", "HNGU affiliated & NAAC recognised", "40+ field placement partner organisations", "Dedicated NSS & social extension wing", "Strong alumni network across Gujarat & India"].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/about">
                      <Button variant="link" className="px-0 text-primary font-semibold text-sm group h-auto">
                        Read More About Us <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-sm">
                      <img
                        src="/herobg.jpg"
                        alt="Shree Reva MSW College Campus, Palanpur"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: "Established", value: "2024" },
                        { label: "Affiliation", value: "HNGU" },
                        { label: "Programme", value: "MSW (2 yr)" },
                        { label: "Intake", value: "100 Seats" },
                      ].map((item, i) => (
                        <div key={i} className="bg-primary/5 rounded p-3 text-center border border-primary/10">
                          <div className="font-bold text-primary text-base" style={{ fontFamily: "Poppins" }}>{item.value}</div>
                          <div className="text-muted-foreground text-xs">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Principal's Message */}
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-primary px-5 py-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-secondary rounded" />
                  <h2 className="text-white font-bold text-base" style={{ fontFamily: "Poppins" }}>Principal's Message</h2>
                </div>
                <div className="p-5 flex flex-col md:flex-row gap-5">
                  <div className="shrink-0">
                    <div className="w-28 h-28 rounded-lg overflow-hidden border-2 border-primary/20 shadow-sm">
                      <img
                        src="/founder.jpeg"
                        alt="Principal, Shree Reva MSW College"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <div className="font-bold text-sm text-foreground" style={{ fontFamily: "Poppins" }}> Dhaval Joshi</div>
                      <div className="text-muted-foreground text-xs">Founder</div>
                      <div className="text-muted-foreground text-xs">Shree Reva MSW College</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <p className="text-lg font-semibold text-foreground italic" style={{ fontFamily: "Georgia, serif" }}>
                      "Social work is not just a profession — it is a commitment to humanity."
                    </p>
                    <p>
                      Welcome to Shree Reva MSW College, where we believe in the transformative power of education combined with compassionate action. Since our establishment in 2024, we have been committed to nurturing social work professionals who make a tangible difference in communities across Gujarat and India.
                    </p>
                    <p>
                      Our institution provides an academically rigorous yet practically grounded programme under the esteemed HNGU, Patan framework. Our faculty, field supervisors, and partner organisations work together to ensure every student graduates equipped with both head and heart — ready to serve society with skill and integrity.
                    </p>
                    <Link href="/about#principal">
                      <Button variant="link" className="px-0 text-primary font-semibold text-sm group h-auto">
                        Read Full Message <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* MSW Highlights */}
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-primary px-5 py-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-secondary rounded" />
                  <h2 className="text-white font-bold text-base" style={{ fontFamily: "Poppins" }}>MSW Programme Highlights</h2>
                </div>
                <div className="p-5">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {courses.map((c, i) => (
                      <div key={i} className="border border-border rounded-lg overflow-hidden">
                        <div className="bg-primary/10 px-4 py-2 font-bold text-primary text-sm border-b border-border" style={{ fontFamily: "Poppins" }}>
                          {c.sem}
                        </div>
                        <ul className="p-3 space-y-1.5">
                          {c.subjects.map((subj, j) => (
                            <li key={j} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                              <ChevronRight className="h-3 w-3 text-primary shrink-0 mt-0.5" /> {subj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link href="/courses">
                    <Button className="mt-4 bg-primary text-primary-foreground font-semibold text-sm h-9 px-5 rounded">
                      Full Curriculum <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 1/3: Notices + Admission CTA */}
            <div className="space-y-5">

              {/* Admission CTA */}
              <div className="bg-primary rounded-lg p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                  <span className="text-secondary font-bold text-xs uppercase tracking-wider">Now Open</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Poppins" }}>Admission 2026–27</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">Applications are now open for the MSW Batch 2026–27. Limited seats available — apply early to secure your admission.</p>
                <ul className="space-y-1.5 mb-4">
                  {["Eligibility: Any Graduation (Min 50%)", "Duration: 2 Years (4 Semesters)", "Intake: 100 Seats", "Mode: Regular Full-Time"].map((pt, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-white/80 text-xs">
                      <ChevronRight className="h-3 w-3 text-secondary shrink-0" /> {pt}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setApplyOpen(true)}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-10 rounded text-sm">
                  Apply Now on WhatsApp
                </Button>
                <Link href="/admissions">
                  <Button variant="outline" className="w-full mt-2 border-white/30 text-white hover:bg-white/10 h-9 rounded text-sm">
                    View Full Details
                  </Button>
                </Link>
              </div>

              {/* Notices */}
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-primary px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-secondary rounded" />
                    <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins" }}>Notices & Circulars</h3>
                  </div>
                  <Link href="/notices" className="text-secondary text-xs hover:underline font-medium">View All</Link>
                </div>
                <div className="divide-y divide-border">
                  {(recentNotices.length > 0 ? recentNotices : [
                    { id: 1, title: "Admission Open — MSW Batch 2026-27", createdAt: new Date().toISOString(), isNew: true },
                    { id: 2, title: "Guest Lecture: Social Policy & Welfare — July 5", createdAt: new Date().toISOString(), isNew: true },
                    { id: 3, title: "NSS Camp Registration — Last Date June 30", createdAt: new Date().toISOString(), isNew: true },
                    { id: 4, title: "Blood Donation Camp — July 1, 2025", createdAt: new Date().toISOString(), isNew: false },
                    { id: 5, title: "Semester IV Result Declared on HNGU Portal", createdAt: new Date().toISOString(), isNew: false },
                    { id: 6, title: "Orientation Programme for New Students — July 15", createdAt: new Date().toISOString(), isNew: false },
                  ]).map((notice: { id: number; title: string; createdAt: string; isNew?: boolean }) => (
                    <Link href="/notices" key={notice.id}
                      className="flex items-start gap-2.5 px-4 py-3 hover:bg-muted/50 transition-colors group cursor-pointer block">
                      <span className="text-secondary shrink-0 mt-1 text-xs">◆</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground group-hover:text-primary leading-snug line-clamp-2">{notice.title}</p>
                        <span className="text-muted-foreground text-xs">{format(new Date(notice.createdAt), "d MMM yyyy")}</span>
                      </div>
                      {notice.isNew && (
                        <span className="text-[9px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded shrink-0 mt-0.5">NEW</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-primary px-4 py-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-secondary rounded" />
                  <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins" }}>Quick Contact</h3>
                </div>
                <div className="p-4 space-y-3">
                  <a href="tel:+919313059676"
                    className="flex items-center gap-3 p-3 rounded border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group">
                    <div className="bg-primary/10 rounded p-2 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="h-4 w-4 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Admissions Helpline</div>
                      <div className="font-semibold text-sm text-foreground">+91 93130 59676</div>
                    </div>
                  </a>
                  <a href="https://wa.me/919313059676" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded border border-border hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all group">
                    <div className="bg-[#25D366]/10 rounded p-2 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageCircle className="h-4 w-4 text-[#25D366] group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">WhatsApp Enquiry</div>
                      <div className="font-semibold text-sm text-foreground">Chat with Admissions</div>
                    </div>
                  </a>
                  <Link href="/contact"
                    className="flex items-center gap-3 p-3 rounded border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group">
                    <div className="bg-primary/10 rounded p-2 group-hover:bg-primary group-hover:text-white transition-colors">
                      <MapPin className="h-4 w-4 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">College Address</div>
                      <div className="font-semibold text-sm text-foreground">Palanpur, Gujarat 385001</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="bg-primary/5 border-t border-border py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-7 bg-secondary rounded" />
            <h2 className="font-bold text-2xl text-primary" style={{ fontFamily: "Poppins" }}>Why Choose Shree Reva MSW College?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChoose.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-card border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="h-5 w-5 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-bold text-sm text-foreground mb-2" style={{ fontFamily: "Poppins" }}>{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FACILITIES ══ */}
      <section className="bg-background border-t border-border py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-secondary rounded" />
            <h2 className="font-bold text-2xl text-primary" style={{ fontFamily: "Poppins" }}>Campus Facilities</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {facilities.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-2 hover:border-primary/30 hover:shadow-sm transition-all text-center group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <f.icon className="h-5 w-5 text-primary group-hover:text-white" />
                </div>
                <span className="text-xs font-medium text-foreground">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INSTAGRAM / GALLERY ══ */}
      <section className="bg-primary/5 border-t border-border py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 bg-secondary rounded" />
              <h2 className="font-bold text-2xl text-primary" style={{ fontFamily: "Poppins" }}>Campus Life & Activities</h2>
            </div>
            <a href="https://www.instagram.com/revamswcollege/" target="_blank" rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1.5 border border-primary/20 px-4 py-2 rounded hover:bg-primary/5 transition-all">
              <Star className="h-4 w-4" /> Follow @revamswcollege
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Camp & Social Service", img: "/camp ss.jpeg" },
              { label: "Guest Lectures & Seminars", img: "lecture.jpeg" },
              { label: "Field Work Presentations", img: "field.jpeg" },
              { label: "Cultural Events", img: "cultural.jpeg" },
              { label: "Dipotsav Program", img: "dipotsav.jpeg" },
              { label: "Navratri 2025", img: "navratri.jpeg" },
              { label: "Influencer award", img: "influencer.jpeg" },
              { label: "Alumni Meet & Networking", img: "meetup.jpeg" },
            ].map((item, i) => (
              <a key={i} href="https://www.instagram.com/revamswcollege/" target="_blank" rel="noopener noreferrer"
                className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer border border-border shadow-sm">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                <span className="absolute bottom-0 left-0 right-0 p-2 text-white text-[11px] font-semibold leading-snug text-center">{item.label}</span>
              </a>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-xs mt-4">
            📷 Visit our Instagram for real photos from campus — <a href="https://instagram.com/revamswcollege" target="_blank" rel="noopener noreferrer" className="text-primary underline">@revamswcollege</a>
          </p>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="bg-background border-t border-border py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-secondary rounded" />
            <h2 className="font-bold text-2xl text-primary" style={{ fontFamily: "Poppins" }}>What Our Alumni Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Priya Sharma", batch: "MSW Batch 2024–25",quote: "Shree Reva gave me both the academic foundation and practical field experience that directly led to my current role . The faculty's guidance was exceptional.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop&crop=face" },
              { name: "Rahul Patel", batch: "MSW Batch 2024–25", quote: "The field work placements at Shree Reva were invaluable. I worked with tribal communities in Banaskantha which built my understanding of ground-level social issues.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop&crop=face" },
              { name: "Kavita Joshi", batch: "MSW Batch 2024–25", quote: "The research methodology training and dissertation project at Shree Reva MSW College equipped me perfectly for CSR programme design and evaluation.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop&crop=face" },
            ].map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-3.5 w-3.5 fill-secondary text-secondary" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/20 shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">{t.name}</div>
                    <div className="text-primary text-xs font-medium">{t.batch}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MAP + CTA ROW ══ */}
      <section className="bg-primary/5 border-t border-border py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-secondary rounded" />
                <h2 className="font-bold text-2xl text-primary" style={{ fontFamily: "Poppins" }}>Find Us</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Shree Reva MSW College is centrally located near the Bus Stand, Palanpur — the district headquarters of Banaskantha, North Gujarat. Easily accessible by road, bus, and rail.
              </p>
              <div className="space-y-2 text-sm mb-5">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Shree Reva MSW College, Upasana Vidhyalaya Campus, Akesan Rd, next to Akshatam Bangalows, Laxmipura, Palanpur, Gujarat 385001
                </div>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary shrink-0" /> +91 93130 59676
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground font-semibold h-10 px-6 rounded text-sm">
                    Contact Us <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </Link>
                <Button onClick={() => setApplyOpen(true)}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-10 px-6 rounded text-sm">
                  Apply Now
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border shadow-sm h-64">
              <iframe
                src="https://maps.google.com/maps?q=Shree+Reva+MSW+College,+Upasana+Vidhyalaya+Campus,+Akesan+Rd,+Laxmipura,+Palanpur,+Gujarat+385001&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Shree Reva MSW College Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
