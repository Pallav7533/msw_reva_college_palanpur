import { useEffect, useState } from "react";
import { X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => setOpen(true), 800);
    const closeTimer = setTimeout(() => setOpen(false), 5800); // 0.8s baad open + 5s dikha
    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.55)" }}>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 text-gray-500 hover:text-gray-800 transition-colors shadow"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="bg-primary px-6 pt-8 pb-6 text-white text-center">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            🎓 Admissions Open
          </div>
          <h2 className="text-2xl font-bold leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
            MSW Batch 2026–27
          </h2>
          <p className="text-white/80 text-sm mt-2">
            Shree Reva MSW College, Palanpur
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-5 text-center">
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            Limited seats available for the <strong>Master of Social Work (MSW)</strong> programme affiliated to HNGU, Patan. 
            Secure your admission today!
          </p>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-5">
            <p className="text-xs text-muted-foreground mb-1">Admission Enquiry</p>
            <a href="tel:+919313059676"
              className="text-primary font-bold text-xl flex items-center justify-center gap-2 hover:underline">
              <Phone className="h-5 w-5" /> +91 93130 59676
            </a>
          </div>

          <div className="flex gap-3">
            <a href="tel:+919313059676" className="flex-1">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11">
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/919313059676" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-11 gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}