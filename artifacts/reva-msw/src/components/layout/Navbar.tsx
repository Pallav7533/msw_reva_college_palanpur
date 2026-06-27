import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Clock, GraduationCap } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 5);
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

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const tickerItems = notices?.length
    ? notices.map((n) => n.title)
    : ["Admissions Open 2025-26 for MSW Programme", "Guest Lecture on Social Policy", "NSS Camp Registration Open"];

  return (
    <>
      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />

      {/* ─── TOP UTILITY BAR ─── */}
      <div className="bg-primary text-primary-foreground text-xs hidden md:block">
        <div className="max-w-[1200px] mx-auto px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone className="h-3 w-3" /> +91 98765 43210
            </a>
            <a href="mailto:info@revamswcollege.edu.in" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Mail className="h-3 w-3" /> info@revamswcollege.edu.in
            </a>
            <span className="flex items-center gap-1.5 opacity-70">
              <Clock className="h-3 w-3" /> Mon–Sat: 9:00 AM – 5:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <Link href="/notices" className="hover:text-secondary transition-colors font-medium">Notices / Circulars</Link>
            <span className="opacity-40">|</span>
            <a href="https://hngu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">HNGU Portal</a>
            <span className="opacity-40">|</span>
            <Link href="/contact" className="hover:text-secondary transition-colors">RTI / Grievance</Link>
          </div>
        </div>
      </div>

      {/* ─── LOGO / BRAND BAR ─── */}
      <div className="bg-background border-b border-border hidden md:block">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-6">
          {/* Logo + name */}
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <div className="w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center shadow group-hover:shadow-md transition-shadow">
              <GraduationCap className="h-7 w-7 text-secondary" />
            </div>
            <div>
              <div className="text-primary font-bold text-[1.15rem] leading-tight" style={{ fontFamily: "Poppins,sans-serif" }}>
                Shree Reva MSW College
              </div>
              <div className="text-muted-foreground text-[11px] mt-0.5">
                Affiliated to Hemchandracharya North Gujarat University (HNGU), Patan
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-sm">NAAC Recognised</span>
                <span className="border border-primary/25 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-sm">Est. 2009</span>
                <span className="text-muted-foreground text-[10px]">Palanpur, Banaskantha, Gujarat 385001</span>
              </div>
            </div>
          </Link>

          {/* Scrolling ticker */}
          <div className="flex-1 border border-border rounded bg-muted px-3 py-2 overflow-hidden">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold bg-secondary text-secondary-foreground px-2 py-0.5 rounded-sm shrink-0 uppercase tracking-wide">
                Latest
              </span>
              <div className="overflow-hidden flex-1">
                <div className="animate-marquee whitespace-nowrap text-xs text-foreground">
                  {[...tickerItems, ...tickerItems].map((item, i) => (
                    <span key={i} className="inline-flex items-center mr-12">
                      <span className="text-secondary mr-2">◆</span>{item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Apply Now */}
          <Button
            onClick={() => setApplyOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5 h-10 text-sm shadow shrink-0"
          >
            Apply Now 2025
          </Button>
        </div>
      </div>

      {/* ─── MAIN NAV ─── */}
      <header
        className={`sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-md" : ""}`}
        ref={dropdownRef}
      >
        <nav className="bg-primary">
          <div className="max-w-[1200px] mx-auto px-4">

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center h-11">
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
                    className={`flex items-center gap-1 px-3.5 h-11 text-sm font-medium transition-all whitespace-nowrap border-b-2
                      ${location === item.href
                        ? "text-secondary border-secondary"
                        : "text-primary-foreground/90 hover:text-secondary hover:bg-white/10 border-transparent"
                      }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3 w-3 opacity-60" />}
                  </Link>

                  {item.children && (
                    <div className={`absolute top-full left-0 w-52 bg-white border border-border shadow-lg z-50 transition-all duration-150
                        ${openDropdown === item.label ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary border-b border-border/40 last:border-b-0 transition-colors"
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

            {/* Mobile: logo + hamburger */}
            <div className="md:hidden flex items-center justify-between h-14">
              <Link href="/" className="flex items-center gap-2 text-primary-foreground font-bold text-sm">
                <GraduationCap className="h-6 w-6 text-secondary" />
                <div>
                  <div className="leading-tight text-sm">Shree Reva MSW</div>
                  <div className="text-[10px] opacity-70 leading-tight">Palanpur, Gujarat</div>
                </div>
              </Link>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => setApplyOpen(true)}
                  className="bg-secondary text-secondary-foreground font-bold text-xs h-8 px-3 border-0"
                >
                  Apply Now
                </Button>
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="text-primary-foreground p-1.5 rounded hover:bg-white/15 transition-colors"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                  {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* ─── MOBILE MENU OVERLAY ─── */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-black/40 z-40"
                onClick={() => setMobileOpen(false)}
              />

              {/* Drawer sliding from right */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25 }}
                className="md:hidden fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-background z-50 overflow-y-auto shadow-2xl flex flex-col"
              >
                {/* Drawer header */}
                <div className="bg-primary px-5 py-4 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <GraduationCap className="h-5 w-5 text-secondary" />
                    <span className="font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>Shree Reva MSW</span>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground p-1">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Contact quick bar */}
                <div className="bg-muted border-b border-border px-5 py-3 flex flex-col gap-1.5">
                  <a href="tel:+919876543210" className="flex items-center gap-2 text-xs text-primary font-medium">
                    <Phone className="h-3 w-3" /> +91 98765 43210
                  </a>
                  <a href="mailto:info@revamswcollege.edu.in" className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Mail className="h-3 w-3" /> info@revamswcollege.edu.in
                  </a>
                </div>

                {/* Nav items */}
                <div className="flex-1 overflow-y-auto">
                  {navItems.map((item) => (
                    <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
                  ))}
                </div>

                {/* Apply CTA */}
                <div className="p-4 border-t border-border shrink-0">
                  <Button
                    onClick={() => { setApplyOpen(true); setMobileOpen(false); }}
                    className="w-full bg-primary text-primary-foreground font-bold h-11"
                  >
                    Apply Now 2025
                  </Button>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 w-full h-10 rounded bg-[#25D366] text-white text-sm font-semibold"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.535 5.847L.057 23.776a.5.5 0 0 0 .602.619l6.109-1.604A11.932 11.932 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.021-1.381l-.36-.214-3.73.979.993-3.63-.234-.374A9.779 9.779 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

// Collapsible mobile nav item
function MobileNavItem({ item, onClose }: { item: typeof navItems[0]; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="border-b border-border">
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={() => { if (!item.children) onClose(); }}
          className={`flex-1 px-5 py-3.5 text-sm font-semibold transition-colors
            ${location === item.href ? "text-primary" : "text-foreground hover:text-primary"}`}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-3.5 text-muted-foreground hover:text-primary"
          >
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {item.children && open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-muted"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="flex items-center gap-2 pl-8 pr-5 py-2.5 text-sm text-muted-foreground hover:text-primary border-t border-border/40 transition-colors"
              >
                <span className="text-secondary text-xs">▸</span>
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
