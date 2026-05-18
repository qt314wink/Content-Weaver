import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Sparkles, FileText, Layout, Presentation, Search, 
  Clock, Plus, Settings, Users, FolderOpen, MoreVertical,
  ArrowRight, Play
} from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('all');

  const createNew = () => {
    setLocation('/editor');
  };

  const goHome = () => {
    setLocation('/');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-border/40 bg-card/30 flex flex-col shrink-0">
        <div className="p-4 md:p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-md shadow-primary/20">
            <span className="font-display font-bold text-lg">G</span>
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">Loom Workspace</span>
        </div>

        <div className="px-4 pb-4">
          <Button onClick={createNew} className="w-full justify-start gap-2 shadow-sm h-10 group" size="sm">
            <Plus size={16} className="group-hover:rotate-90 transition-transform" /> 
            New with AI
          </Button>
        </div>

        <ScrollArea className="flex-1 px-4 py-2">
          <div className="space-y-1">
            <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">My Content</p>
            <NavItem icon={Clock} label="Recent" active onClick={goHome} />
            <NavItem icon={FolderOpen} label="Projects" onClick={goHome} />
            <NavItem icon={Presentation} label="Presentations" onClick={createNew} />
            <NavItem icon={Layout} label="Websites" onClick={createNew} />
            <NavItem icon={FileText} label="Documents" onClick={createNew} />
          </div>

          <div className="space-y-1 mt-8">
            <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Team</p>
            <NavItem icon={Users} label="Shared with me" onClick={goHome} />
            <NavItem icon={Settings} label="Settings" onClick={goHome} />
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t border-border/40 mt-auto">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-orange-400 p-0.5">
              <div className="w-full h-full rounded-full bg-card border border-background flex items-center justify-center">
                <span className="text-xs font-bold text-foreground">JD</span>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">Jane Doe</p>
              <p className="text-xs text-muted-foreground truncate">Free Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 bg-secondary/10">
        <header className="h-16 border-b border-border/40 px-6 md:px-10 flex items-center justify-between shrink-0 bg-background/50 backdrop-blur-md sticky top-0 z-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input 
              placeholder="Search your workspace..." 
              className="pl-9 bg-card border-border/50 h-9 text-sm focus-visible:ring-primary/20 rounded-full shadow-sm"
            />
          </div>
          
          <Button variant="outline" size="sm" className="hidden sm:flex gap-2 rounded-full border-border/50 shadow-sm bg-card hover:bg-secondary/80">
            <Sparkles size={14} className="text-primary" />
            Upgrade to Pro
          </Button>
        </header>

        <ScrollArea className="flex-1 p-6 md:p-10">
          <div className="max-w-6xl mx-auto space-y-10">
            
            {/* Create Banner */}
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-secondary/30 border border-border/50 shadow-lg shadow-black/5 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center group">
              <div className="absolute inset-0 bg-[url('https://gamma.app/_next/static/media/large-white-sparkle.01r21dx508x54.svg')] bg-[length:400px_400px] bg-no-repeat bg-[center_right_-100px] opacity-10 mix-blend-overlay pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="flex-1 space-y-4 relative z-10">
                <h1 className="text-3xl md:text-4xl font-display font-semibold tracking-tight">Create brilliance in a flash.</h1>
                <p className="text-muted-foreground text-base max-w-md leading-relaxed">Turn any idea into a polished slide deck, document, or webpage in seconds using AI.</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button onClick={createNew} className="gap-2 shadow-md shadow-primary/20 rounded-full hover:scale-105 transition-transform" size="sm">
                    <Sparkles size={14} /> Generate
                  </Button>
                  <Button onClick={createNew} variant="secondary" className="gap-2 rounded-full bg-background border border-border/50 hover:scale-105 transition-transform shadow-sm" size="sm">
                    Paste text
                  </Button>
                  <Button onClick={createNew} variant="secondary" className="gap-2 rounded-full bg-background border border-border/50 hover:scale-105 transition-transform shadow-sm" size="sm">
                    Import file
                  </Button>
                </div>
              </div>
              
              <div className="shrink-0 relative z-10 w-full md:w-64 aspect-[4/3] bg-background border border-border/40 rounded-xl shadow-xl p-4 transform rotate-2 hover:rotate-0 transition-all duration-300">
                <div className="w-full h-3 bg-secondary rounded-full mb-3"></div>
                <div className="w-3/4 h-3 bg-secondary rounded-full mb-6"></div>
                <div className="flex gap-2">
                  <div className="w-1/2 h-20 bg-primary/10 rounded-lg"></div>
                  <div className="w-1/2 h-20 bg-secondary rounded-lg"></div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary rounded-full shadow-lg flex items-center justify-center text-primary-foreground border-2 border-background animate-bounce">
                  <Sparkles size={16} />
                </div>
              </div>
            </section>

            {/* Recents */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-medium tracking-tight flex items-center gap-2">
                  <Clock size={18} className="text-muted-foreground" /> 
                  Recent Documents
                </h2>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="cursor-pointer bg-card hover:bg-secondary border border-border/40 font-medium px-3 py-1">All</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-secondary border border-transparent hover:border-border/40 text-muted-foreground font-medium px-3 py-1">Drafts</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <DocumentCard 
                  title="Q3 Marketing Strategy" 
                  type="Presentation"
                  time="Updated 2 hours ago"
                  gradient="from-blue-500/20 to-purple-500/20"
                  icon={Presentation}
                  onClick={createNew}
                />
                <DocumentCard 
                  title="Product Roadmap 2026" 
                  type="Document"
                  time="Updated yesterday"
                  gradient="from-emerald-500/20 to-teal-500/20"
                  icon={FileText}
                  onClick={createNew}
                />
                <DocumentCard 
                  title="Landing Page Redesign" 
                  type="Website"
                  time="Updated 3 days ago"
                  gradient="from-orange-500/20 to-red-500/20"
                  icon={Layout}
                  onClick={createNew}
                />
              </div>
            </section>

            {/* Templates */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-medium tracking-tight">Templates</h2>
                <Button variant="link" className="text-primary gap-1">View all <ArrowRight size={14} /></Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <TemplateCard title="Pitch Deck" desc="For startups" />
                <TemplateCard title="Company Wiki" desc="Internal knowledge" />
                <TemplateCard title="Portfolio" desc="Personal website" />
                <TemplateCard title="Project Proposal" desc="Agency pitches" />
              </div>
            </section>
            
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false, onClick }: any) {
  return (
    <div onClick={onClick} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm font-medium ${active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'}`}>
      <Icon size={16} />
      {label}
    </div>
  );
}

function DocumentCard({ title, type, time, gradient, icon: Icon, onClick }: any) {
  return (
    <div onClick={onClick} className="group relative bg-card border border-border/40 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
      <div className={`h-32 w-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <Icon size={32} className="text-foreground/20 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        
        {/* Play button overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Play size={16} className="ml-1" />
          </div>
        </div>
      </div>
      <div className="p-4 bg-card flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 rounded-sm font-mono uppercase bg-secondary/50 text-muted-foreground border-border/40">{type}</Badge>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">{time}</p>
      </div>
    </div>
  );
}

function TemplateCard({ title, desc }: any) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] rounded-lg bg-secondary/40 border border-border/50 mb-3 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 h-1/2 bg-card rounded-t-md shadow-sm border border-border/50 border-b-0 transform translate-y-2 group-hover:translate-y-0 transition-transform"></div>
      </div>
      <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  );
}