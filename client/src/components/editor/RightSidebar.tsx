import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Layout, Type, Image as ImageIcon, Video, Grid2X2, 
  Table, List, AlignLeft, Bold, Italic, 
  Palette, UploadCloud, Link as LinkIcon, Smile,
  AlignRight, AlignCenter, FileText, Search, Plus
} from "lucide-react";

export default function RightSidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <aside className="w-[300px] border-l border-border/40 bg-card/50 backdrop-blur-2xl flex flex-col z-20 shrink-0 shadow-sm hidden md:flex">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-1 flex flex-col h-full">
        
        <div className="px-4 pt-4 pb-2">
          <TabsList className="w-full bg-secondary/60 p-1 h-9 rounded-lg">
            <TabsTrigger value="blocks" className="flex-1 text-xs font-medium rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm">Blocks</TabsTrigger>
            <TabsTrigger value="design" className="flex-1 text-xs font-medium rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm">Design</TabsTrigger>
            <TabsTrigger value="sources" className="flex-1 text-xs font-medium rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm">Sources</TabsTrigger>
          </TabsList>
        </div>

        {/* Blocks Tab */}
        <TabsContent value="blocks" className="flex-1 m-0 overflow-hidden outline-none data-[state=active]:flex flex-col h-full">
          <div className="px-4 pb-4">
            <div className="relative">
              <Input placeholder="Search blocks..." className="pl-8 h-9 text-xs bg-secondary/30 border-border/50 rounded-full focus-visible:ring-1" />
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted-foreground" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="px-4 pb-6 space-y-6 pt-4">
              <BlockSection title="Basic" items={[
                { icon: Type, label: "Text", color: "text-blue-500" },
                { icon: AlignLeft, label: "Heading", color: "text-blue-500" },
                { icon: List, label: "List", color: "text-blue-500" },
                { icon: ImageIcon, label: "Image", color: "text-emerald-500" }
              ]} />
              <BlockSection title="Layout" items={[
                { icon: ColumnsIcon, label: "Columns", color: "text-purple-500" },
                { icon: Grid2X2, label: "Grid", color: "text-purple-500" },
                { icon: Table, label: "Table", color: "text-purple-500" },
                { icon: Layout, label: "Card", color: "text-purple-500" }
              ]} />
              <BlockSection title="Media & Embeds" items={[
                { icon: Video, label: "Video", color: "text-rose-500" },
                { icon: Smile, label: "Sticker", color: "text-amber-500" },
                { icon: FileText, label: "File PDF", color: "text-rose-500" },
              ]} />
            </div>
          </ScrollArea>
        </TabsContent>

        {/* Design Tab */}
        <TabsContent value="design" className="flex-1 m-0 overflow-hidden outline-none data-[state=active]:flex flex-col h-full">
          <ScrollArea className="flex-1">
            <div className="p-5 space-y-8">
              
              {/* Theme Settings */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium">Card Layout</Label>
                  <Switch id="cards" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium">Reader Mode</Label>
                  <Switch id="reader" />
                </div>
              </div>

              <Separator className="opacity-50" />
              
              {/* Text Alignment */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Typography</h4>
                <div className="flex bg-secondary/50 rounded-lg p-1 border border-border/40">
                  <Button variant="ghost" className="flex-1 rounded-md h-8 text-foreground bg-background shadow-sm"><AlignLeft size={14} /></Button>
                  <Button variant="ghost" className="flex-1 rounded-md h-8 text-muted-foreground hover:text-foreground"><AlignCenter size={14} /></Button>
                  <Button variant="ghost" className="flex-1 rounded-md h-8 text-muted-foreground hover:text-foreground"><AlignRight size={14} /></Button>
                </div>
              </div>

              {/* Slider Tweak */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium">Line Spacing</Label>
                  <span className="text-[10px] font-mono text-muted-foreground border border-border/50 px-1.5 py-0.5 rounded">1.5</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} className="py-2" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium">Border Radius</Label>
                  <span className="text-[10px] font-mono text-muted-foreground border border-border/50 px-1.5 py-0.5 rounded">8px</span>
                </div>
                <Slider defaultValue={[20]} max={100} step={1} className="py-2" />
              </div>
              
              <Separator className="opacity-50" />
              
              {/* Color Palette */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Brand Colors</h4>
                <div className="grid grid-cols-5 gap-2.5">
                  {['#0858F7', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4', '#8b5cf6', '#a855f7', '#d946ef', '#f43f5e'].map((color, i) => (
                    <div 
                      key={color} 
                      className={`w-full aspect-square rounded-full cursor-pointer hover:scale-110 transition-transform shadow-sm border border-black/10 dark:border-white/10 ${i===0 ? 'ring-2 ring-offset-2 ring-background ring-offset-foreground/20' : ''}`} 
                      style={{ backgroundColor: color }} 
                    />
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs h-8 mt-2 border-dashed">
                  <Plus size={12} className="mr-1" /> Add Custom Color
                </Button>
              </div>

              <Separator className="opacity-50" />

              {/* Toggles */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="dropcap" className="text-sm cursor-pointer">Drop Cap</Label>
                  <Switch id="dropcap" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations" className="text-sm cursor-pointer">Scroll Animations</Label>
                  <Switch id="animations" defaultChecked />
                </div>
              </div>

            </div>
          </ScrollArea>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="flex-1 m-0 overflow-hidden outline-none data-[state=active]:flex flex-col h-full">
          <ScrollArea className="flex-1">
            <div className="p-5 space-y-6">
              
              <div className="space-y-3">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Add Context</h4>
                <div className="p-6 border border-dashed border-primary/30 rounded-xl bg-primary/5 flex flex-col items-center justify-center text-center gap-3 cursor-pointer hover:bg-primary/10 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <UploadCloud size={18} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-primary">Upload File</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">PDF, DOCX, CSV</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-xs">Or paste URL</Label>
                <div className="flex gap-2">
                  <Input placeholder="https://..." className="h-8 text-xs bg-secondary/30" />
                  <Button size="sm" variant="secondary" className="px-3 h-8 shadow-sm"><LinkIcon size={14} /></Button>
                </div>
              </div>

              <Separator className="opacity-50" />

              <div className="space-y-3">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                  Active Sources
                  <Badge variant="outline" className="text-[9px] px-1 py-0 h-4">2</Badge>
                </h4>
                
                <div className="text-sm p-3 bg-card rounded-lg border border-border/60 flex items-start gap-3 shadow-sm group hover:border-primary/40 transition-colors cursor-pointer">
                  <FileText size={16} className="mt-0.5 text-blue-500 shrink-0" />
                  <div className="flex-1">
                    <p className="text-foreground font-medium text-xs line-clamp-1 group-hover:text-primary">Q3_Marketing_Strategy.pdf</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Parsed • 24 pages</p>
                  </div>
                </div>

                <div className="text-sm p-3 bg-card rounded-lg border border-border/60 flex items-start gap-3 shadow-sm group hover:border-primary/40 transition-colors cursor-pointer">
                  <LinkIcon size={16} className="mt-0.5 text-emerald-500 shrink-0" />
                  <div className="flex-1">
                    <p className="text-foreground font-medium text-xs line-clamp-1 group-hover:text-primary">Competitor Analysis URL</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Scraped • 1,204 words</p>
                  </div>
                </div>
              </div>

            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </aside>
  );
}

function ColumnsIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/>
    </svg>
  );
}

function BlockSection({ title, items }: { title: string, items: any[] }) {
  return (
    <div className="space-y-3">
      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground pl-1">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-4 gap-2.5 rounded-xl border border-border/40 bg-card/50 hover:bg-card hover:border-border hover:shadow-sm cursor-pointer transition-all active:scale-[0.98] group">
            <item.icon size={18} className={`${item.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`} />
            <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}