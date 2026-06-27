import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Instagram } from "lucide-react";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Shree Reva MSW College";
  }, []);

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Campus Life</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Gallery</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Glimpses of campus events, field work, seminars, and student life at Shree Reva MSW College.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="bg-muted rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[500px] border border-border">
          <div className="h-20 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <Instagram className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold font-display mb-4">Follow us on Instagram</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Our latest updates, event photos, and field work activities are regularly posted on our official Instagram page.
          </p>
          <a 
            href="https://www.instagram.com/revamswcollege/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            <Instagram className="mr-2 h-5 w-5" />
            View @revamswcollege
          </a>
        </div>
      </div>
    </Layout>
  );
}