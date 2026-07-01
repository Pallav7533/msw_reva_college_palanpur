import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, GraduationCap, ExternalLink, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-0 border-t-4 border-secondary">

      {/* ── QUICK ACCESS TILES ── */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Apply Online", sub: "MSW Admission 2026", href: "/admissions", badge: "Open" },
              { label: "Notices & Circulars", sub: "Academic & Admin", href: "/notices", badge: "NEW" },
              { label: "Results / Exams", sub: "HNGU Result Portal", href: "https://ngu.ac.in", badge: null },
              { label: "ERP / Student Login", sub: "University Portal", href: "https://ngu.ac.in", badge: null },
            ].map((tile, i) => (
              <a
                key={i}
                href={tile.href}
                target={tile.href.startsWith("http") ? "_blank" : undefined}
                rel={tile.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center justify-center py-4 hover:bg-white/10 transition-colors text-center group"
              >
                {tile.badge && (
                  <span className="text-[10px] font-bold bg-secondary text-secondary-foreground px-2 py-0.5 rounded-sm mb-1">
                    {tile.badge}
                  </span>
                )}
                <span className="text-primary-foreground font-semibold text-sm group-hover:text-secondary transition-colors">
                  {tile.label}
                </span>
                <span className="text-primary-foreground/50 text-xs mt-0.5">{tile.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER COLUMNS ── */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-secondary bg-white p-0.5">
  <img src="/reva-logo.jpg" alt="Logo" className="w-full h-full object-contain rounded-full" />
</div>
              <div>
                <div className="text-primary-foreground font-bold text-sm leading-tight" style={{ fontFamily: "Poppins,sans-serif" }}>
                  Shree Reva MSW College
                </div>
                <div className="text-primary-foreground/50 text-xs">Palanpur, Gujarat</div>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5">
              A premier institution for Master of Social Work education in North Gujarat, affiliated to HNGU Patan. Shaping compassionate social work professionals since 2024.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-primary-foreground/60">
                <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span> Shree Reva MSW College, Upasana Vidhyalaya Campus, Akesan Rd, next to Akshatam Bangalows, Laxmipura, Palanpur, Gujarat 385001</span>
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4 text-secondary shrink-0" />+91 93130 59676
              </a>
              <a href="mailto:revamswcollege@gmail.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 text-secondary shrink-0" />revamswcollege@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 mt-5">
              {[
                { icon: Instagram, href: "https://www.instagram.com/revamswcollege/" },
                { icon: Facebook, href: "https://www.instagram.com/revamswcollege/" },
                { icon: Youtube, href: "https://www.instagram.com/revamswcollege/" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-white/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/15">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About the College", href: "/about" },
                { label: "MSW Programme", href: "/courses" },
                { label: "Admissions 2026", href: "/admissions" },
                { label: "Notices & Circulars", href: "/notices" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Events", href: "/events" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="flex items-center gap-1.5 text-primary-foreground/60 hover:text-secondary text-sm transition-colors group">
                    <ChevronRight className="h-3 w-3 text-secondary/50 group-hover:text-secondary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/15">Academics</h4>
            <ul className="space-y-2">
              {[
                { label: "MSW Curriculum", href: "/courses" },
                { label: "Semester I & II", href: "/courses#sem1" },
                { label: "Semester III & IV", href: "/courses#sem3" },
                { label: "Field Work Placements", href: "/courses#field" },
                { label: "Specialisations", href: "/courses#spec" },
                { label: "Research & Dissertations", href: "/courses#research" },
                { label: "Examination Schedule", href: "/notices" },
                { label: "HNGU Ordinances", href: "https://ngu.ac.in" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1.5 text-primary-foreground/60 hover:text-secondary text-sm transition-colors group">
                    <ChevronRight className="h-3 w-3 text-secondary/50 group-hover:text-secondary" />
                    {link.label}
                    {link.href.startsWith("http") && <ExternalLink className="h-3 w-3 opacity-40" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links + Map */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/15">Important Links</h4>
            <ul className="space-y-2 mb-5">
              {[
                { label: "HNGU Official Website", href: "https://ngu.ac.in" },
                { label: "UGC – University Grants", href: "https://www.ugc.gov.in/" },
                { label: "NAAC Accreditation", href: "https://naac.gov.in" },
                { label: "Ministry of Education", href: "https://education.gov.in" },
                { label: "National Service Scheme", href: "https://nss.gov.in" },
                { label: "Swayam Online Courses", href: "https://swayam.gov.in" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary-foreground/60 hover:text-secondary text-sm transition-colors group">
                    <ChevronRight className="h-3 w-3 text-secondary/50 group-hover:text-secondary" />
                    {link.label}
                    <ExternalLink className="h-3 w-3 opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="rounded overflow-hidden border border-white/15 h-28">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.5!2d72.4356!3d24.1717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cbc!2sPalanpur!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Palanpur location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40">
        <p>© {new Date().getFullYear()} Shree Reva MSW College, Palanpur. All rights reserved. | Developed by <a href="https://github.com/Pallav7533" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors underline">Pallav</a></p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-secondary transition-colors">Disclaimer</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-secondary transition-colors">Sitemap</Link>
            <span>|</span>
            <a href="https://ngu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">HNGU, Patan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
