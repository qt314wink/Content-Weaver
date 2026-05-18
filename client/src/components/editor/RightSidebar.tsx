import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Layout, Type, Image as ImageIcon, Video, Grid2X2, 
  Table, List, AlignLeft, Bold, Italic, 
  Palette, UploadCloud, Link as LinkIcon, Smile,
  AlignRight, AlignCenter, FileText
} from "lucide-react";

export default function RightSidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <aside className="w-80 border-l border-border/50 bg-card/80 backdrop-blur-xl flex flex-col z-20 shrink-0 shadow-xl shadow-black/5 hidden md:flex">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-1 flex flex-col">
        <div className="px-4 pt-3 border-b border-border/50">
          <TabsList className="w-full bg-secondary/50 p-1">
            <TabsTrigger value="blocks" className="flex-1 text-xs">Blocks</TabsTrigger>
            <TabsTrigger value="design" className="flex-1 text-xs">Design</TabsTrigger>
            <TabsTrigger value="sources" className="flex-1 text-xs">Sources</TabsTrigger>
          </TabsList>
        </div>

        {/* Blocks Tab */}
        <TabsContent value="blocks" className="flex-1 m-0 overflow-hidden outline-none data-[state=active]:flex flex-col">
          <div className="p-4 border-b border-border/50">
            <div className="relative">
              <Input placeholder="Search blocks..." className="pl-8 h-9 text-sm bg-secondary/30" />
              <SearchIcon className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-6">
              <BlockSection title="Basic" items={[
                { icon: Type, label: "Text" },
                { icon: AlignLeft, label: "Heading" },
                { icon: List, label: "List" },
                { icon: ImageIcon, label: "Image" }
              ]} />
              <BlockSection title="Layout" items={[
                { icon: ColumnsIcon, label: "Columns" },
                { icon: Grid2X2, label: "Grid" },
                { icon: Table, label: "Table" },
                { icon: Layout, label: "Card" }
              ]} />
              <BlockSection title="Media" items={[
                { icon: Video, label: "Video" },
                { icon: Smile, label: "Sticker" },
                { icon: FileText, label: "File" },
              ]} />
            </div>
          </ScrollArea>
        </TabsContent>

        {/* Design Tab */}
        <TabsContent value="design" className="flex-1 m-0 overflow-hidden outline-none data-[state=active]:flex flex-col">
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Typography</h4>
                <div className="space-y-2">
                  <div className="flex border border-border/50 rounded-md overflow-hidden">
                    <Button variant="ghost" className="flex-1 rounded-none h-8"><Bold size={14} /></Button>
                    <Separator orientation="vertical" />
                    <Button variant="ghost" className="flex-1 rounded-none h-8"><Italic size={14} /></Button>
                    <Separator orientation="vertical" />
                    <Button variant="ghost" className="flex-1 rounded-none h-8"><AlignLeft size={14} /></Button>
                    <Separator orientation="vertical" />
                    <Button variant="ghost" className="flex-1 rounded-none h-8"><AlignCenter size={14} /></Button>
                  </div>
                </div>
              </div>
              
              <Separator className="opacity-50" />
              
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Colors</h4>
                <div className="grid grid-cols-5 gap-2">
                  {['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6'].map(color => (
                    <div key={color} className="w-full aspect-square rounded-md cursor-pointer hover:scale-110 transition-transform shadow-sm" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="flex-1 m-0 overflow-hidden outline-none data-[state=active]:flex flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="p-4 border border-dashed border-border rounded-xl bg-secondary/20 flex flex-col items-center justify-center text-center gap-2 cursor-pointer hover:bg-secondary/40 transition-colors">
                <UploadCloud size={24} className="text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Upload File</p>
                  <p className="text-xs text-muted-foreground">PDF, Word, TXT, CSV</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Input placeholder="Paste URL..." className="h-9 text-sm" />
                <Button size="sm" variant="secondary" className="px-3"><LinkIcon size={14} /></Button>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recent Sources</h4>
                <div className="text-sm text-muted-foreground p-3 bg-secondary/30 rounded-lg border border-border/50 flex items-start gap-3">
                  <FileText size={16} className="mt-0.5 text-primary shrink-0" />
                  <div>
                    <p className="text-foreground font-medium line-clamp-1">Q3 Marketing Strategy.pdf</p>
                    <p className="text-xs">Added 2 hours ago</p>
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

function SearchIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
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
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-3 gap-2 rounded-xl border border-border/40 bg-card hover:bg-secondary hover:border-border cursor-pointer transition-all active:scale-95 group">
            <item.icon size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}