import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useGetLatestNotices } from "@workspace/api-client-react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: latestNotices } = useGetLatestNotices();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Programme" },
    { href: "/admissions", label: "Admissions" },
    { href: "/faculty", label: "Faculty" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col transition-all duration-300">
      {/* Top Bar - Hidden on small mobile */}
      <div className="hidden md:flex bg-primary text-primary-foreground text-xs py-1 px-4 items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-3 w-3" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-3 w-3" />
            <span>info@revamswcollege.edu.in</span>
          </div>
        </div>
        <div className="flex-1 max-w-2xl overflow-hidden relative ml-8 flex items-center">
          <span className="font-semibold mr-2 whitespace-nowrap bg-primary z-10 px-2">Latest:</span>
          <div className="flex whitespace-nowrap animate-marquee">
            {latestNotices?.map((notice, i) => (
              <span key={notice.id} className="mx-4">
                {notice.title} {notice.isNew && <span className="bg-secondary text-secondary-foreground px-1 ml-1 rounded font-bold text-[10px]">NEW</span>}
              </span>
            ))}
            {(!latestNotices || latestNotices.length === 0) && (
              <span className="mx-4">Admissions open for MSW Batch 2025. Apply now!</span>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-background transition-shadow duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'} px-4 md:px-8 flex items-center justify-between`}>
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-full group-hover:bg-primary/90 transition-colors">
            <GraduationCap className="h-8 w-8 md:h-10 md:w-10" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-display font-bold text-xl md:text-2xl leading-tight text-foreground">
              Shree Reva
            </h1>
            <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
              MSW College
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-border flex items-center space-x-3">
            <Link href="/admissions">
              <Button variant="default" className="font-semibold rounded-full shadow-sm hover:shadow-md transition-all">
                Apply Now
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 text-base font-medium rounded-md ${
                location === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-border">
            <Link href="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full font-semibold">Apply Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}