import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useGetNotices } from "@workspace/api-client-react";
import { format } from "date-fns";
import { Calendar, Bell, FileText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Notices() {
  useEffect(() => {
    document.title = "Notices & Announcements | Shree Reva MSW College";
  }, []);

  const { data: notices, isLoading } = useGetNotices();

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Updates</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Notices & Announcements</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stay updated with the latest news, exam schedules, events, and important circulars.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-6">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="border-border">
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-1/4 mb-4" />
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))
            ) : Array.isArray(notices) && notices.length > 0 ? (
            notices.map((notice) => (
              <Card key={notice.id} className="border-border hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3 items-center mb-3">
                    <Badge variant={notice.category === 'admission' ? 'secondary' : 'outline'} className="capitalize">
                      {notice.category}
                    </Badge>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      {format(new Date(notice.createdAt), "MMMM d, yyyy")}
                    </div>
                    {notice.isNew && (
                      <Badge variant="destructive" className="animate-pulse">NEW</Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold font-display mb-2">{notice.title}</h3>
                  
                  {notice.description && (
                    <p className="text-muted-foreground text-sm mt-3">{notice.description}</p>
                  )}
                  
                  {notice.fileUrl && (
                    <div className="mt-4">
                      <a href={notice.fileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                        <FileText className="h-4 w-4 mr-1.5" />
                        Download Attachment
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-20 bg-muted/30 rounded-xl border border-border border-dashed">
              <Bell className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-1">No Notices Yet</h3>
              <p className="text-muted-foreground">There are currently no active notices or announcements.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}