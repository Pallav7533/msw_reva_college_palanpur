import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, GraduationCap, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-slate-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 inline-block mb-2">
              <div className="bg-primary/20 text-primary p-2 rounded-full">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white">Shree Reva</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">MSW College</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Shaping tomorrow's social workers through comprehensive education, practical field training, and a commitment to community service.
            </p>
            <p className="text-xs text-slate-400">
              Affiliated to Hemchandracharya North Gujarat University (HNGU), Patan
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg border-b border-slate-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Admissions", href: "/admissions" },
                { label: "Faculty", href: "/faculty" },
                { label: "Notices", href: "/notices" },
                { label: "Events", href: "/events" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1 text-slate-600 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg border-b border-slate-700 pb-2 inline-block">Programme</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm hover:text-primary transition-colors flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 text-slate-600 group-hover:text-primary transition-colors" />
                  Master of Social Work (MSW)
                </Link>
              </li>
              <li>
                <Link href="/courses#field-work" className="text-sm hover:text-primary transition-colors flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 text-slate-600 group-hover:text-primary transition-colors" />
                  Field Work
                </Link>
              </li>
              <li>
                <Link href="/courses#syllabus" className="text-sm hover:text-primary transition-colors flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 text-slate-600 group-hover:text-primary transition-colors" />
                  Syllabus
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg border-b border-slate-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Palanpur, Banaskantha District, Gujarat - 385001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-sm">info@revamswcollege.edu.in</span>
              </li>
            </ul>
            <div className="pt-2">
              <a 
                href="https://www.instagram.com/revamswcollege/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-primary text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Shree Reva MSW College. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}