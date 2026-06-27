import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send, GraduationCap } from "lucide-react";

const WA_NUMBER = "919876543210";

interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
}

export function ApplyModal({ open, onClose }: ApplyModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    qualification: "",
    course: "Master of Social Work (MSW)",
    query: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length < 2) e.name = "Enter your full name";
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter a valid 10-digit mobile number";
    if (!form.city.trim()) e.city = "Enter your city";
    if (!form.qualification) e.qualification = "Select your qualification";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `*Admission Inquiry — Shree Reva MSW College*

*Name:* ${form.name}
*Mobile:* ${form.phone}
*City:* ${form.city}
*Qualification:* ${form.qualification}
*Course Interested:* ${form.course}
${form.query ? `*Message:* ${form.query}` : ""}

_(Sent from College Website)_`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
    setForm({ name: "", phone: "", city: "", qualification: "", course: "Master of Social Work (MSW)", query: "" });
    setErrors({});
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-primary px-6 py-5 text-white">
          <div className="flex items-center gap-3 mb-1">
            <GraduationCap className="h-6 w-6 text-secondary" />
            <DialogTitle className="text-white text-xl font-bold" style={{ fontFamily: 'Poppins' }}>
              Apply for Admission 2025
            </DialogTitle>
          </div>
          <p className="text-white/70 text-sm">Fill the form — we'll contact you on WhatsApp instantly</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-card">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wide">Full Name *</Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="bg-background"
              />
              {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-xs font-semibold text-foreground uppercase tracking-wide">Mobile No. *</Label>
              <Input
                id="phone"
                placeholder="10-digit mobile"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value.replace(/\D/, '') })}
                maxLength={10}
                className="bg-background"
              />
              {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="city" className="text-xs font-semibold text-foreground uppercase tracking-wide">City *</Label>
              <Input
                id="city"
                placeholder="Your city"
                value={form.city}
                onChange={e => setForm({ ...form, city: e.target.value })}
                className="bg-background"
              />
              {errors.city && <p className="text-destructive text-xs">{errors.city}</p>}
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-foreground uppercase tracking-wide">Qualification *</Label>
              <Select value={form.qualification} onValueChange={v => setForm({ ...form, qualification: v })}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BA">BA (Any Stream)</SelectItem>
                  <SelectItem value="BSc">BSc</SelectItem>
                  <SelectItem value="BCom">BCom</SelectItem>
                  <SelectItem value="BSW">BSW</SelectItem>
                  <SelectItem value="BBA">BBA</SelectItem>
                  <SelectItem value="Other Graduation">Other Graduation</SelectItem>
                </SelectContent>
              </Select>
              {errors.qualification && <p className="text-destructive text-xs">{errors.qualification}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-xs font-semibold text-foreground uppercase tracking-wide">Course</Label>
            <Input value="Master of Social Work (MSW)" readOnly className="bg-muted text-muted-foreground" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="query" className="text-xs font-semibold text-foreground uppercase tracking-wide">Any Question? (Optional)</Label>
            <Input
              id="query"
              placeholder="e.g. Fee structure, hostel, scholarships..."
              value={form.query}
              onChange={e => setForm({ ...form, query: e.target.value })}
              className="bg-background"
            />
          </div>

          <Button type="submit" className="w-full font-bold bg-[#25D366] hover:bg-[#128C7E] text-white h-12 text-base rounded-lg border-0 gap-2">
            <MessageCircle className="h-5 w-5" />
            Send on WhatsApp
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Your details will be sent to our admissions team via WhatsApp
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
