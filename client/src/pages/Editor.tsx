import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Sparkles, Type, Image as ImageIcon, Layout, Columns, 
  Settings2, Download, Search, Command, ChevronDown, AlignLeft,
  MousePointer2, Move, Smartphone, Monitor, Sun, Moon,
  Palette, Library, Share, UploadCloud, Link as LinkIcon
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import CanvasView from "@/components/editor/CanvasView";
import RightSidebar from "@/components/editor/RightSidebar";

// Available themes
const THEMES = [
  { id: 'light', name: 'Gamma Clean', icon: Sun },
  { id: 'dark', name: 'Dark Mode', icon: Moon },
  { id: 'sepia', name: 'Editorial Sepia', icon: Library },
  { id: 'cyberpunk', name: 'Cyberpunk', icon: Command }
];

export default function Editor() {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTheme, setActiveTheme] = useState('light');
  const [isPublishing, setIsPublishing] = useState(false);
  const [activeTab, setActiveTab] = useState('blocks');

  // Theme switcher logic
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark', 'theme-sepia', 'theme-cyberpunk');
    
    if (activeTheme === 'dark') {
      root.classList.add('dark');
    } else if (activeTheme === 'sepia') {
      root.classList.add('theme-sepia');
    } else if (activeTheme === 'cyberpunk') {
      root.classList.add('theme-cyberpunk');
    }
  }, [activeTheme]);

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => setIsPublishing(false), 2000);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden text-foreground selection:bg-primary/20">
      {/* Top Header Bar */}
      <header className="h-14 border-b flex items-center justify-between px-4 bg-card/80 backdrop-blur-md shrink-0 shadow-sm z-30 relative">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 pr-4 border-r border-border">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
              <span className="font-display font-bold text-xs">G</span>
            </div>
            <span className="font-display font-semibold tracking-tight">Gamma Clone</span>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button variant="ghost" size="sm" className="text-muted-foreground font-medium h-8">
              My Workspace
            </Button>
            <span className="text-muted-foreground/50 mx-1">/</span>
            <Button variant="ghost" size="sm" className="font-medium h-8">
              Untitled Document
            </Button>
            <Badge variant="outline" className="ml-2 bg-secondary/50 font-mono text-[10px] uppercase">Draft</Badge>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Device Toggle */}
          <div className="hidden lg:flex items-center bg-secondary/50 rounded-md p-0.5 border border-border/50">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`h-7 w-7 rounded-sm ${deviceView === 'desktop' ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'}`}
                  onClick={() => setDeviceView('desktop')}
                >
                  <Monitor size={14} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Desktop View</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`h-7 w-7 rounded-sm ${deviceView === 'mobile' ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'}`}
                  onClick={() => setDeviceView('mobile')}
                >
                  <Smartphone size={14} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Mobile View</TooltipContent>
            </Tooltip>
          </div>

          <Separator orientation="vertical" className="h-6 mx-2 hidden lg:block" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-2 border-border/50">
                <Palette size={14} />
                <span className="hidden sm:inline">Theme</span>
                <ChevronDown size={14} className="opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 animate-in slide-in-from-top-2">
              <DropdownMenuLabel className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {THEMES.map((theme) => {
                const Icon = theme.icon;
                return (
                  <DropdownMenuItem 
                    key={theme.id}
                    onClick={() => setActiveTheme(theme.id)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Icon size={14} className={activeTheme === theme.id ? 'text-primary' : 'text-muted-foreground'} />
                    <span className={activeTheme === theme.id ? 'font-medium' : ''}>{theme.name}</span>
                    {activeTheme === theme.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm" className="h-8 gap-2 text-muted-foreground hover:text-foreground hidden sm:flex">
            <Share size={14} />
            Share
          </Button>

          <Button 
            size="sm" 
            className="h-8 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all"
            onClick={handlePublish}
            disabled={isPublishing}
          >
            {isPublishing ? (
              <span className="flex items-center gap-2"><Sparkles size={14} className="animate-spin" /> Publishing...</span>
            ) : (
              <span className="flex items-center gap-2">Publish <ChevronDown size={14} className="opacity-70" /></span>
            )}
          </Button>
        </div>
      </header>

      {/* Main Workspace Area */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Toolbar (Tools) */}
        <aside className="w-16 border-r border-border/50 bg-card/50 backdrop-blur-xl flex flex-col items-center py-4 gap-4 z-20 shrink-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-secondary/80 text-foreground">
                <MousePointer2 size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Select (V)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                <Type size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Text Block (T)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                <ImageIcon size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Image / Media (I)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                <Columns size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Layouts (L)</TooltipContent>
          </Tooltip>

          <Separator className="w-8 opacity-50" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-primary hover:bg-primary/10 transition-colors">
                <Sparkles size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">AI Assistant (Cmd+J)</TooltipContent>
          </Tooltip>
        </aside>

        {/* Center Canvas Area */}
        <main className="flex-1 relative bg-secondary/30 overflow-hidden flex flex-col items-center">
          {/* Subtle grid background for the canvas container */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>
          
          <ScrollArea className="w-full h-full p-4 lg:p-8" id="canvas-scroll-container">
            <div className="flex justify-center pb-32 pt-8">
              <CanvasView device={deviceView} theme={activeTheme} />
            </div>
          </ScrollArea>
          
          {/* Quick AI Bar at bottom center */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 animate-in slide-in-from-bottom-4">
            <div className="bg-card shadow-xl border border-border rounded-full flex items-center p-2 gap-2 backdrop-blur-xl bg-card/80">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles size={16} className="text-primary" />
              </div>
              <Input 
                placeholder="Ask AI to write, design, or generate an image..." 
                className="border-0 focus-visible:ring-0 shadow-none bg-transparent h-10"
              />
              <div className="shrink-0 flex gap-2 pr-2">
                <Badge variant="outline" className="hidden sm:flex font-mono text-[10px] text-muted-foreground border-border/50">⌘K</Badge>
                <Button size="icon" className="w-8 h-8 rounded-full rounded-l-md bg-primary hover:bg-primary/90">
                  <Move size={14} className="rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar (Properties & Assets) */}
        <RightSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}