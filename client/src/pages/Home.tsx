import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Wand2, LayoutTemplate, Settings2, PenTool, Type, Image as ImageIcon, Code, Eye, BarChart, Download } from "lucide-react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import PreviewArticle from "@/components/PreviewArticle";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreview(true);
    }, 2000);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden text-foreground">
      {/* Header */}
      <header className="h-14 border-b flex items-center justify-between px-6 bg-card shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
            <LayoutTemplate size={16} />
          </div>
          <h1 className="font-serif font-medium text-xl tracking-tight">Narrative Loom</h1>
          <Badge variant="outline" className="ml-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground border-muted-foreground/30">Beta</Badge>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Settings2 size={16} className="mr-2" />
            Settings
          </Button>
          <Button size="sm" variant="outline" className="gap-2">
            <Download size={16} /> Export
          </Button>
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all" 
            onClick={handleGenerate} 
            disabled={isGenerating}
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <Wand2 size={16} className="animate-spin" /> Weaving...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Wand2 size={16} /> Reconstruct Content
              </span>
            )}
          </Button>
        </div>
      </header>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Left Panel - Inputs */}
        <ResizablePanel defaultSize={35} minSize={25} maxSize={50} className="bg-card flex flex-col z-0">
          <ScrollArea className="h-full">
            <div className="p-8 space-y-10">
              {/* Research & Draft */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 text-foreground/80 mb-4 border-b pb-2">
                  <PenTool size={18} className="text-primary" />
                  <h2 className="font-sans font-medium text-sm uppercase tracking-widest">Source Material</h2>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="research" className="text-muted-foreground font-medium">Research & Raw Notes</Label>
                  <Textarea
                    id="research"
                    placeholder="Paste your unorganized research, raw facts, and disjointed notes here..."
                    className="min-h-[180px] resize-none focus-visible:ring-primary font-mono text-sm leading-relaxed bg-muted/30 border-muted-foreground/20"
                    defaultValue="Digital typography has evolved rapidly. Early web safe fonts were limited to Arial, Times New Roman. Web fonts (Google Fonts, Typekit) revolutionized design. Now variable fonts provide immense flexibility. Key stats: 85% of websites now use custom web fonts. Variable font adoption grew 40% last year. Need to discuss the emotional impact of typography on branding."
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="voice" className="text-muted-foreground font-medium">Voice Sample</Label>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Optional</span>
                  </div>
                  <Textarea
                    id="voice"
                    placeholder="Paste a snippet of your writing to teach the AI your tone and cadence..."
                    className="min-h-[100px] resize-none focus-visible:ring-primary text-sm leading-relaxed bg-muted/30 border-muted-foreground/20"
                    defaultValue="When we talk about design, we're really talking about human connection. It's not just about what looks pretty; it's about what makes us feel something deep in our bones when we interact with a digital space."
                  />
                </div>
              </section>

              {/* Modifiers */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 text-foreground/80 border-b pb-2">
                  <Settings2 size={18} className="text-primary" />
                  <h2 className="font-sans font-medium text-sm uppercase tracking-widest">Art Direction</h2>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="font-medium text-muted-foreground">Tone</Label>
                    <Select defaultValue="editorial">
                      <SelectTrigger className="bg-muted/30 border-muted-foreground/20">
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic & Precise</SelectItem>
                        <SelectItem value="conversational">Conversational</SelectItem>
                        <SelectItem value="editorial">Editorial & Elevated</SelectItem>
                        <SelectItem value="journalistic">Journalistic</SelectItem>
                        <SelectItem value="poetic">Poetic & Evocative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="font-medium text-muted-foreground">Aesthetic Theme</Label>
                    <Select defaultValue="luxury">
                      <SelectTrigger className="bg-muted/30 border-muted-foreground/20">
                        <SelectValue placeholder="Select aesthetic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimalist">Clean Minimalist</SelectItem>
                        <SelectItem value="brutalist">Digital Brutalism</SelectItem>
                        <SelectItem value="luxury">Luxury Serif</SelectItem>
                        <SelectItem value="cyberpunk">Cyberpunk / Tech</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <Label className="font-medium text-muted-foreground">Pacing & Reading Level</Label>
                    <span className="text-xs text-foreground font-mono bg-muted px-2 py-0.5 rounded">Accessible</span>
                  </div>
                  <Slider defaultValue={[30]} max={100} step={1} className="w-full py-2" />
                </div>

                <div className="space-y-4 pt-2">
                  <Label className="font-medium text-muted-foreground">Include Elements</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="cursor-pointer bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 transition-colors"><ImageIcon size={12} className="mr-1.5"/> Hero Image</Badge>
                    <Badge variant="secondary" className="cursor-pointer bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 transition-colors"><BarChart size={12} className="mr-1.5"/> Data Charts</Badge>
                    <Badge variant="secondary" className="cursor-pointer bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 transition-colors"><Code size={12} className="mr-1.5"/> Code Snippets</Badge>
                    <Badge variant="outline" className="cursor-pointer text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"><Type size={12} className="mr-1.5"/> Pull Quotes</Badge>
                  </div>
                </div>
              </section>
            </div>
          </ScrollArea>
        </ResizablePanel>

        <ResizableHandle withHandle className="bg-border/50 hover:bg-primary/50 transition-colors" />

        {/* Right Panel - Output Preview */}
        <ResizablePanel defaultSize={65} className="bg-muted/40 relative flex flex-col">
          <div className="h-12 border-b bg-card/50 backdrop-blur-sm flex items-center px-6 justify-between shrink-0 sticky top-0 z-10">
            <Tabs defaultValue="preview" className="w-full">
              <div className="flex items-center justify-between w-full">
                <TabsList className="bg-transparent h-auto p-0 space-x-6">
                  <TabsTrigger value="preview" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground rounded-none px-0 py-3 font-medium transition-all">
                    <Eye size={14} className="mr-2" />
                    Live Output
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground rounded-none px-0 py-3 font-medium transition-all">
                    <Code size={14} className="mr-2" />
                    React / HTML
                  </TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 border border-border/60 bg-card rounded-md px-2 py-1 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[11px] text-muted-foreground font-mono font-medium uppercase tracking-wider">Ready to Embed</span>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>

          <div className="flex-1 overflow-auto p-8 lg:p-12 relative scroll-smooth">
            {isGenerating ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-md z-20 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-card shadow-xl flex items-center justify-center mb-6 border border-border/50">
                  <Wand2 size={32} className="text-primary animate-pulse" />
                </div>
                <h3 className="font-serif text-3xl font-medium mb-3 text-foreground tracking-tight">Weaving your narrative...</h3>
                <p className="text-muted-foreground font-medium max-w-md text-center">Applying architectural layout, synthesizing research, and generating editorial typography patterns.</p>
              </div>
            ) : null}

            {showPreview && (
              <div className="max-w-4xl mx-auto bg-card shadow-xl shadow-black/5 border border-border/40 rounded-sm overflow-hidden animate-in slide-in-from-bottom-8 duration-700 fade-in zoom-in-95 origin-top">
                <PreviewArticle />
              </div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}