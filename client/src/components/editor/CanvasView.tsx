import { useState, useRef, useEffect } from "react";
import { Sparkles, Image as ImageIcon, Video, FileText, GripHorizontal, Plus, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import bannerAbstract from "@/assets/images/banner-abstract.jpg";
import bannerCyberpunk from "@/assets/images/banner-cyberpunk.jpg";
import bannerMinimal from "@/assets/images/banner-minimal.jpg";

export default function CanvasView({ device, theme }: { device: 'desktop' | 'mobile', theme: string }) {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  // Determine container width based on device
  const containerWidth = device === 'mobile' ? 'w-[375px]' : 'w-full max-w-4xl';
  const isMobile = device === 'mobile';

  // Select banner based on theme
  let bannerImg = bannerAbstract;
  if (theme === 'cyberpunk') bannerImg = bannerCyberpunk;
  if (theme === 'sepia') bannerImg = bannerMinimal;

  return (
    <div 
      className={`${containerWidth} bg-card rounded-xl shadow-2xl border border-border/40 overflow-hidden min-h-[800px] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative pb-20`}
    >
      {/* AI Header Generator Strip */}
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-50"></div>

      {/* Hero Banner Area */}
      <div 
        className="w-full h-48 md:h-64 relative group"
        onMouseEnter={() => setHoveredBlock('hero')}
        onMouseLeave={() => setHoveredBlock(null)}
      >
        <img src={bannerImg} alt="Hero banner" className="w-full h-full object-cover" />
        
        {/* Generative Banner Controls (appear on hover) */}
        <div className={`absolute top-4 right-4 flex gap-2 transition-opacity duration-200 ${hoveredBlock === 'hero' ? 'opacity-100' : 'opacity-0'}`}>
          <Button size="sm" variant="secondary" className="h-8 gap-1 bg-black/40 text-white hover:bg-black/60 backdrop-blur-md border-0">
            <Sparkles size={14} className="text-yellow-300" />
            <span className="text-xs">Regenerate</span>
          </Button>
          <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-black/40 text-white hover:bg-black/60 backdrop-blur-md border-0">
            <ImageIcon size={14} />
          </Button>
        </div>
      </div>

      <div className={`px-8 md:px-16 pt-12 pb-8 ${isMobile ? 'px-6' : ''}`}>
        
        {/* Title Block */}
        <div 
          className="relative group mb-8"
          onMouseEnter={() => setHoveredBlock('title')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'title'} />
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground outline-none"
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Untitled Document"
          >
            Effortless AI design for presentations, websites, and more
          </h1>
        </div>

        {/* Subtitle / Description Block */}
        <div 
          className="relative group mb-12"
          onMouseEnter={() => setHoveredBlock('subtitle')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'subtitle'} />
          <p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed outline-none"
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Write a brief description..."
          >
            Your ideas are brilliant. The universe deserves to see them. A captivating pitch deck? Easy. A stunning website? Done. Make anything you can imagine almost as quickly as you can think it up.
          </p>
        </div>

        {/* Dynamic Widget Area - Columns */}
        <div 
          className="relative group mb-12"
          onMouseEnter={() => setHoveredBlock('columns')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'columns'} />
          
          {/* Smart Columns Grid */}
          <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3'}`}>
            <FeatureCard 
              title="Presentations" 
              desc="Turn any idea into a polished slide deck. Export to PPT, PDF, and more."
              icon={FileText}
            />
            <FeatureCard 
              title="Websites" 
              desc="Generate a shareable, hosted website in minutes — no developers needed."
              icon={Layout}
            />
            <FeatureCard 
              title="Social Media" 
              desc="Generate platform-ready social content — sized, styled, and ready to post."
              icon={ImageIcon}
            />
          </div>
        </div>

        {/* Rich Text Paragraph */}
        <div 
          className="relative group mb-6"
          onMouseEnter={() => setHoveredBlock('p1')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'p1'} />
          <p 
            className="text-base text-foreground leading-relaxed outline-none"
            contentEditable
            suppressContentEditableWarning
          >
            Beyond saving hours of manual formatting, the AI understands your content structure. It analyzes your source documents and automatically suggests the perfect layout, whether that's a timeline for historical data, a comparison table for product features, or an image grid for a portfolio.
          </p>
        </div>

        {/* Add new block button */}
        <div className="relative mt-8 py-4 opacity-0 hover:opacity-100 transition-opacity flex justify-center group/add cursor-pointer">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/30 -translate-y-1/2" />
          <div className="bg-background border border-primary/30 text-primary w-8 h-8 rounded-full flex items-center justify-center relative z-10 shadow-sm group-hover/add:bg-primary group-hover/add:text-primary-foreground group-hover/add:scale-110 transition-all">
            <Plus size={16} />
          </div>
        </div>

      </div>
    </div>
  );
}

function FeatureCard({ title, desc, icon: Icon }: any) {
  return (
    <div className="bg-secondary/40 border border-border/50 rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group/card">
      <div className="w-10 h-10 rounded-xl bg-card border border-border/80 flex items-center justify-center mb-4 shadow-sm group-hover/card:scale-110 group-hover/card:text-primary transition-all">
        <Icon size={18} />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

// Side controls that appear when hovering over a block
function BlockControls({ isHovered }: { isHovered: boolean }) {
  return (
    <div className={`absolute -left-12 top-0 h-full flex flex-col items-center justify-start pt-1 gap-1 transition-all duration-200 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
      <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing">
        <GripHorizontal size={14} />
      </Button>
      <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-primary">
        <Settings2 size={12} />
      </Button>
    </div>
  );
}

// Ensure Layout icon is available for the card
function Layout(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/>
    </svg>
  );
}