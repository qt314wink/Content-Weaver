import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, 
  DialogTitle, DialogTrigger, DialogFooter
} from "@/components/ui/dialog";
import { 
  Sparkles, Type, Image as ImageIcon, Columns, 
  Settings2, ChevronDown, MousePointer2, Move,
  Smartphone, Monitor, Sun, Moon, Palette,
  Library, Command, Share, Home, Link2, Copy, Check
} from "lucide-react";

import CanvasView from "@/components/editor/CanvasView";
import RightSidebar from "@/components/editor/RightSidebar";

const THEMES = [
  { id: 'light', name: 'Gamma Clean', icon: Sun },
  { id: 'dark', name: 'Dark Mode', icon: Moon },
  { id: 'sepia', name: 'Editorial Sepia', icon: Library },
  { id: 'cyberpunk', name: 'Cyberpunk', icon: Command }
];

export default function Editor() {
  const [, setLocation] = useLocation();
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTheme, setActiveTheme] = useState('light');
  const [isPublishing, setIsPublishing] = useState(false);
  const [activeTab, setActiveTab] = useState('blocks');
  const [copied, setCopied] = useState(false);

  // Theme switcher logic
  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    const root = window.document.documentElement;
    root.classList.remove('dark', 'theme-sepia', 'theme-cyberpunk');
    if (themeId === 'dark') root.classList.add('dark');
    if (themeId === 'sepia') root.classList.add('theme-sepia');
    if (themeId === 'cyberpunk') root.classList.add('theme-cyberpunk');
  };

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => setIsPublishing(false), 1500);
  };

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden text-foreground selection:bg-primary/20 font-sans transition-colors duration-500">
      
      {/* Top Header Bar */}
      <header className="h-14 border-b border-border/40 flex items-center justify-between px-4 bg-card/80 backdrop-blur-md shrink-0 shadow-sm z-30 relative">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 pr-4 border-r border-border/40">
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg hover:bg-secondary" onClick={() => setLocation('/')}>
              <Home size={16} className="text-muted-foreground" />
            </Button>
          </div>
          
          <div className="hidden md:flex items-center">
            <Button variant="ghost" size="sm" className="text-muted-foreground font-medium h-8" onClick={() => setLocation('/')}>
              My Workspace
            </Button>
            <span className="text-muted-foreground/30 mx-1">/</span>
            <Button variant="ghost" size="sm" className="font-medium h-8 text-foreground hover:bg-secondary">
              Product Launch Outline
            </Button>
            <Badge variant="outline" className="ml-2 bg-secondary/50 font-mono text-[10px] uppercase border-border/40">Draft</Badge>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Device Toggle */}
          <div className="hidden lg:flex items-center bg-secondary/50 rounded-md p-0.5 border border-border/40">
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
              <TooltipContent side="bottom" className="text-xs">Desktop View</TooltipContent>
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
              <TooltipContent side="bottom" className="text-xs">Mobile View</TooltipContent>
            </Tooltip>
          </div>

          <Separator orientation="vertical" className="h-6 mx-2 hidden lg:block border-border/40" />

          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-2 border-border/40 shadow-sm bg-card hover:bg-secondary">
                <Palette size={14} className="text-muted-foreground" />
                <span className="hidden sm:inline font-medium">Theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 p-2 rounded-xl border-border/40 shadow-xl">
              <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-1">Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border/40" />
              {THEMES.map((theme) => {
                const Icon = theme.icon;
                return (
                  <DropdownMenuItem 
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    className={`flex items-center gap-2 cursor-pointer rounded-lg px-2 py-2 my-0.5 ${activeTheme === theme.id ? 'bg-primary/10 text-primary focus:bg-primary/15' : 'text-muted-foreground focus:text-foreground focus:bg-secondary'}`}
                  >
                    <Icon size={14} />
                    <span className="font-medium text-sm">{theme.name}</span>
                    {activeTheme === theme.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Share Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 gap-2 text-muted-foreground hover:text-foreground hidden sm:flex font-medium">
                <Share size={14} />
                Share
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md border-border/40 bg-card/95 backdrop-blur-xl shadow-2xl rounded-2xl">
              <DialogHeader>
                <DialogTitle className="font-display font-semibold">Share Document</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Anyone with the link can view this document.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2 py-4">
                <div className="grid flex-1 gap-2">
                  <div className="relative">
                    <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      readOnly
                      className="pl-9 bg-secondary/50 border-border/50 text-sm font-mono"
                      value="https://gamma.clone/doc/p-launch-out"
                    />
                  </div>
                </div>
                <Button size="sm" onClick={handleCopyLink} className="px-3">
                  <span className="sr-only">Copy</span>
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <p className="text-xs text-muted-foreground">This document is currently private to your workspace.</p>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Publish Button */}
          <Button 
            size="sm" 
            className="h-8 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all rounded-md font-medium px-4 ml-1"
            onClick={handlePublish}
            disabled={isPublishing}
          >
            {isPublishing ? (
              <span className="flex items-center gap-2"><Sparkles size={14} className="animate-spin" /> Publishing</span>
            ) : (
              <span className="flex items-center gap-2">Publish <ChevronDown size={14} className="opacity-70" /></span>
            )}
          </Button>
        </div>
      </header>

      {/* Main Workspace Area */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Toolbar (Tools) */}
        <aside className="w-16 border-r border-border/40 bg-card/30 backdrop-blur-xl flex flex-col items-center py-6 gap-5 z-20 shrink-0 shadow-sm">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl bg-secondary/80 text-foreground shadow-sm border border-border/50">
                <MousePointer2 size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-mono text-xs">Select (V)</TooltipContent>
          </Tooltip>

          <div className="w-8 h-[1px] bg-border/40" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors" onClick={() => setActiveTab('blocks')}>
                <Type size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-mono text-xs">Text Blocks</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors" onClick={() => setActiveTab('blocks')}>
                <ImageIcon size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-mono text-xs">Media Blocks</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors" onClick={() => setActiveTab('blocks')}>
                <Columns size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-mono text-xs">Layouts</TooltipContent>
          </Tooltip>

          <div className="mt-auto pb-4 space-y-4 flex flex-col items-center">
            <div className="w-8 h-[1px] bg-border/40" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-primary bg-primary/10 hover:bg-primary/20 hover:text-primary transition-colors border border-primary/20">
                  <Sparkles size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="font-mono text-xs">AI Assistant</TooltipContent>
            </Tooltip>
          </div>
        </aside>

        {/* Center Canvas Area */}
        <main className="flex-1 relative bg-secondary/20 overflow-hidden flex flex-col items-center">
          {/* Subtle grid background for the canvas container */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]" 
               style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>
          
          <ScrollArea className="w-full h-full p-4 lg:p-10" id="canvas-scroll-container">
            <div className="flex justify-center pb-40 pt-4">
              <CanvasView device={deviceView} theme={activeTheme} />
            </div>
          </ScrollArea>
          
          {/* Quick AI Bar at bottom center */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 animate-in slide-in-from-bottom-6 duration-500 z-10 pointer-events-none">
            <div className="bg-card/90 shadow-2xl border border-border/50 rounded-full flex items-center p-2 gap-2 backdrop-blur-xl pointer-events-auto ring-1 ring-black/5 dark:ring-white/5">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles size={16} className="text-primary" />
              </div>
              <Input 
                placeholder="Ask AI to write, edit, or generate..." 
                className="border-0 focus-visible:ring-0 shadow-none bg-transparent h-10 text-base font-medium placeholder:font-normal placeholder:text-muted-foreground/70"
              />
              <div className="shrink-0 flex gap-2 pr-1">
                <div className="hidden sm:flex items-center justify-center h-8 px-2 bg-secondary/80 rounded border border-border/50">
                  <span className="font-mono text-[10px] text-muted-foreground font-semibold">⌘K</span>
                </div>
                <Button size="icon" className="w-9 h-9 rounded-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform shadow-md shadow-primary/20">
                  <Move size={14} className="rotate-90 text-primary-foreground" />
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