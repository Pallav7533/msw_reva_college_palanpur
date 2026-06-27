import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Clock, Search, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetLatestNotices } from "@workspace/api-client-react";
import { ApplyModal } from "@/components/ApplyModal";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the College", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Principal's Message", href: "/about#principal" },
      { label: "Governing Body", href: "/about#governing" },
      { label: "Infrastructure", href: "/about#infra" },
      { label: "HNGU Affiliation", href: "/about#hngu" },
    ],
  },
  {
    label: "Programme",
    href: "/courses",
    children: [
      { label: "MSW Overview", href: "/courses" },
      { label: "Semester I & II", href: "/courses#sem1" },
      { label: "Semester III & IV", href: "/courses#sem3" },
      { label: "Specialisations", href: "/courses#spec" },
      { label: "Field Work", href: "/courses#field" },
      { label: "Research Project", href: "/courses#research" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "How to Apply", href: "/admissions" },
      { label: "Eligibility Criteria", href: "/admissions#eligibility" },
      { label: "Fee Structure", href: "/admissions#fees" },
      { label: "Scholarships", href: "/admissions#scholarship" },
      { label: "Important Dates", href: "/admissions#dates" },
    ],
  },
  {
    label: "Faculty",
    href: "/faculty",
    children: [
      { label: "Teaching Faculty", href: "/faculty" },
      { label: "Guest Lecturers", href: "/faculty#guest" },
      { label: "Support Staff", href: "/faculty#staff" },
    ],
  },
  {
    label: "Student Zone",
    href: "/events",
    children: [
      { label: "Events & Activities", href: "/events" },
      { label: "Notices / Circulars", href: "/notices" },
      { label: "Photo Gallery", href: "/gallery" },
      { label: "NSS / Social Work", href: "/events#nss" },
      { label: "Grievance Cell", href: "/contact#grievance" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: notices } = useGetLatestNotices();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const tickerItems = notices?.length
    ? notices.map((n) => n.title)
    : ["Admissions Open 2025-26 for MSW Programme", "Guest Lecture on Social Policy", "NSS Camp Registration Open"];

  return (
    <>
      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />

      {/* ── TOP UTILITY BAR ── */}
      <div className="bg-primary text-white text-xs hidden md:block">
        <div className="max-w-[1200px] mx-auto px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone className="h-3 w-3" /> +91 98765 43210
            </a>
            <a href="mailto:info@revamswcollege.edu.in" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Mail className="h-3 w-3" /> info@revamswcollege.edu.in
            </a>
            <span className="flex items-center gap-1.5 text-white/70">
              <Clock className="h-3 w-3" /> Mon–Sat: 9:00 AM – 5:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/notices" className="hover:text-secondary transition-colors font-medium">Notices / Circulars</Link>
            <span className="text-white/30">|</span>
            <a href="https://hngu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">HNGU Portal</a>
            <span className="text-white/30">|</span>
            <Link href="/contact" className="hover:text-secondary transition-colors">RTI / Grievance</Link>
          </div>
        </div>
      </div>

      {/* ── LOGO / BRAND BAR ── */}
      <div className="bg-[#FFFDF8] border-b border-border hidden md:block">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-6">
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="h-8 w-8 text-secondary" />
            </div>
            <div>
              <div className="text-primary font-bold text-xl leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                Shree Reva MSW College
              </div>
              <div className="text-muted-foreground text-xs mt-0.5">
                Affiliated to Hemchandracharya North Gujarat University (HNGU), Patan
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded">NAAC Recognised</span>
                <span className="bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5 rounded">Est. 2009</span>
                <span className="text-muted-foreground text-[10px]">Palanpur, Banaskantha, Gujarat 385001</span>
              </div>
            </div>
          </Link>

          {/* Live ticker */}
          <div className="flex-1 border border-primary/20 rounded bg-primary/5 px-3 py-2 overflow-hidden">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold bg-secondary text-secondary-foreground px-2 py-0.5 rounded shrink-0 uppercase tracking-wide">
                Latest
              </span>
              <div className="overflow-hidden flex-1">
                <div className="animate-marquee whitespace-nowrap text-xs text-foreground">
                  {[...tickerItems, ...tickerItems].map((item, i) => (
                    <span key={i} className="inline-flex items-center mr-12">
                      <span className="text-secondary mr-2">◆</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button className="p-2 rounded hover:bg-muted transition-colors text-muted-foreground" title="Search">
              <Search className="h-4 w-4" />
            </button>
            <Button
              onClick={() => setApplyOpen(true)}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-5 h-10 text-sm shadow rounded"
            >
              Apply Now 2025
            </Button>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <header
        className={`sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-lg" : ""}`}
        ref={dropdownRef}
      >
        <nav className="bg-primary">
          <div className="max-w-[1200px] mx-auto px-4">
            {/* Desktop */}
            <div className="hidden md:flex items-center h-12">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => { if (item.children) e.preventDefault(); }}
                    className={`flex items-center gap-1 px-3.5 h-12 text-sm font-medium transition-all whitespace-nowrap border-b-2
                      ${location === item.href
                        ? "text-secondary border-secondary"
                        : "text-white/90 hover:text-white hover:bg-white/10 border-transparent"
                      }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3 w-3 opacity-70" />}
                  </Link>

                  {item.children && (
                    <div className={`absolute top-full left-0 w-52 bg-white shadow-xl border border-border z-50 transition-all duration-150
                        ${openDropdown === item.label ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary border-b border-border/40 last:border-b-0 transition-colors"
                        >
                          <span className="text-secondary text-xs">▸</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center justify-between h-12">
              <Link href="/" className="flex items-center gap-2 text-white font-bold text-sm">
                <GraduationCap className="h-5 w-5 text-secondary" />
                Shree Reva MSW
              </Link>
              <div className="flex items-center gap-2">
                <Button size="sm" onClick={() => setApplyOpen(true)}
                  className="bg-secondary text-secondary-foreground font-bold text-xs h-8 px-3 rounded">
                  Apply Now
                </Button>
                <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-1.5 rounded hover:bg-white/10">
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b shadow-lg overflow-hidden"
            >
              <div className="px-4 py-3 bg-primary/5 border-b border-border flex gap-4">
                <a href="tel:+919876543210" className="flex items-center gap-1.5 text-xs text-primary font-medium">
                  <Phone className="h-3 w-3" /> +91 98765 43210
                </a>
                <a href="mailto:info@revamswcollege.edu.in" className="flex items-center gap-1.5 text-xs text-primary font-medium">
                  <Mail className="h-3 w-3" /> Email Us
                </a>
              </div>
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-border/40">
                  <Link href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted">
                    {item.label}
                    {item.children && <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                  </Link>
                  {item.children && (
                    <div className="bg-muted/50">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}
                          className="flex items-center gap-2 pl-8 pr-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted border-t border-border/30">
                          <span className="text-secondary text-xs">▸</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4">
                <Button onClick={() => setApplyOpen(true)} className="w-full bg-primary text-primary-foreground font-bold">
                  Apply Now 2025
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
