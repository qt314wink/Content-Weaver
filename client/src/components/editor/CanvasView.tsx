import { useState } from "react";
import { 
  Sparkles, Image as ImageIcon, Video, FileText, GripHorizontal, 
  Plus, Settings2, Code, Quote, Layout, Hash
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Popover, PopoverContent, PopoverTrigger 
} from "@/components/ui/popover";

import bannerAbstract from "@/assets/images/banner-abstract.jpg";
import bannerCyberpunk from "@/assets/images/banner-cyberpunk.jpg";
import bannerMinimal from "@/assets/images/banner-minimal.jpg";

export default function CanvasView({ device, theme }: { device: 'desktop' | 'mobile', theme: string }) {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  // Determine container width based on device
  const containerWidth = device === 'mobile' ? 'w-[375px]' : 'w-full max-w-[850px]';
  const isMobile = device === 'mobile';

  // Select banner based on theme
  let bannerImg = bannerAbstract;
  if (theme === 'cyberpunk') bannerImg = bannerCyberpunk;
  if (theme === 'sepia') bannerImg = bannerMinimal;

  return (
    <div 
      className={`${containerWidth} bg-card rounded-2xl shadow-2xl shadow-black/5 border border-border/40 overflow-hidden min-h-[800px] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative pb-20 group/canvas`}
    >
      {/* AI Header Generator Strip */}
      <div className="absolute top-0 w-full h-[3px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 opacity-70"></div>

      {/* Hero Banner Area */}
      <div 
        className="w-full h-48 md:h-72 relative group/hero"
        onMouseEnter={() => setHoveredBlock('hero')}
        onMouseLeave={() => setHoveredBlock(null)}
      >
        <img src={bannerImg} alt="Hero banner" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover/hero:scale-105" />
        
        {/* Generative Banner Controls */}
        <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${hoveredBlock === 'hero' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <Button size="sm" variant="secondary" className="h-8 gap-1.5 bg-black/50 text-white hover:bg-black/70 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
            <Sparkles size={14} className="text-yellow-300" />
            <span className="text-xs font-medium">Magic Create</span>
          </Button>
          <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-black/50 text-white hover:bg-black/70 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
            <ImageIcon size={14} />
          </Button>
        </div>
      </div>

      <div className={`px-8 md:px-20 pt-16 pb-12 ${isMobile ? 'px-6 pt-10' : ''}`}>
        
        {/* Title Block */}
        <div 
          className="relative group/block mb-10"
          onMouseEnter={() => setHoveredBlock('title')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'title'} />
          <h1 
            className="text-4xl md:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-foreground leading-[1.1] outline-none"
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Untitled Document"
          >
            Product Launch: Q3 Next-Gen Editor
          </h1>
        </div>

        {/* Subtitle Block */}
        <div 
          className="relative group/block mb-14"
          onMouseEnter={() => setHoveredBlock('subtitle')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'subtitle'} />
          <p 
            className="text-xl md:text-2xl text-muted-foreground/80 font-serif leading-relaxed outline-none italic"
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Write a brief description..."
          >
            A comprehensive overview of our upcoming features, generative AI capabilities, and target market positioning for the highly anticipated Q3 release.
          </p>
        </div>

        {/* Dynamic Widget Area - Columns */}
        <div 
          className="relative group/block mb-12"
          onMouseEnter={() => setHoveredBlock('columns')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'columns'} />
          
          <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
            <InfoCard 
              title="Generative AI" 
              desc="Deep integration of LLMs for writing, image generation, and layout construction."
              icon={Sparkles}
              color="text-amber-500"
              bg="bg-amber-500/10"
            />
            <InfoCard 
              title="Spatial Layouts" 
              desc="Fluid, snap-to-grid spatial mechanics for intuitive component placement."
              icon={Layout}
              color="text-blue-500"
              bg="bg-blue-500/10"
            />
          </div>
        </div>

        {/* Heading 2 */}
        <div 
          className="relative group/block mb-6 mt-16"
          onMouseEnter={() => setHoveredBlock('h2')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'h2'} />
          <h2 
            className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-foreground outline-none flex items-center gap-2"
            contentEditable
            suppressContentEditableWarning
          >
            <Hash size={24} className="text-muted-foreground/30 select-none" />
            Core Philosophy
          </h2>
        </div>

        {/* Rich Text Paragraph */}
        <div 
          className="relative group/block mb-8"
          onMouseEnter={() => setHoveredBlock('p1')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'p1'} />
          <p 
            className="text-[1.05rem] md:text-[1.1rem] text-foreground/90 leading-[1.8] outline-none font-sans"
            contentEditable
            suppressContentEditableWarning
          >
            We believe that modern document creation shouldn't feel like operating a word processor from 1995. The tool should adapt to the thought, not the other way around. By combining unstructured spatial canvases with structured, AI-assisted layout engines, we provide the best of both worlds.
          </p>
        </div>

        {/* Quote Block */}
        <div 
          className="relative group/block mb-10"
          onMouseEnter={() => setHoveredBlock('quote')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'quote'} />
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-gradient-to-r from-primary/5 to-transparent rounded-r-xl">
            <p 
              className="text-xl md:text-2xl font-serif text-foreground/80 leading-relaxed outline-none"
              contentEditable
              suppressContentEditableWarning
            >
              "The interface disappears, leaving only the pure expression of the user's intent."
            </p>
          </blockquote>
        </div>

        {/* Code Block */}
        <div 
          className="relative group/block mb-8"
          onMouseEnter={() => setHoveredBlock('code')}
          onMouseLeave={() => setHoveredBlock(null)}
        >
          <BlockControls isHovered={hoveredBlock === 'code'} />
          <div className="bg-[#0d1117] rounded-xl border border-[#30363d] overflow-hidden shadow-lg">
            <div className="flex items-center px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="ml-4 text-xs font-mono text-muted-foreground/60">layoutEngine.ts</span>
            </div>
            <div className="p-5 overflow-x-auto text-[13px] leading-loose font-mono text-[#e6edf3]">
              <pre>
                <code>
                  <span className="text-[#ff7b72]">export</span> <span className="text-[#ff7b72]">async</span> <span className="text-[#ff7b72]">function</span> <span className="text-[#d2a8ff]">generateLayout</span>(content: <span className="text-[#79c0ff]">Block</span>[]) {'{\n'}
                  {'  '}<span className="text-[#ff7b72]">const</span> context = <span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">ai</span>.<span className="text-[#d2a8ff]">analyze</span>(content);\n
                  {'  '}<span className="text-[#ff7b72]">return</span> <span className="text-[#79c0ff]">gridSystem</span>.<span className="text-[#d2a8ff]">snap</span>(context.optimalArrangement);\n
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Add new block button - Hover Line */}
        <div className="relative mt-12 py-4 opacity-0 hover:opacity-100 transition-opacity flex justify-center group/add cursor-pointer">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20 -translate-y-1/2" />
          
          <Popover>
            <PopoverTrigger asChild>
              <div className="bg-card border border-border shadow-sm text-muted-foreground hover:text-foreground hover:border-primary/50 w-10 h-10 rounded-full flex items-center justify-center relative z-10 hover:shadow-md hover:scale-105 transition-all duration-300">
                <Plus size={18} />
              </div>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="center" className="w-64 p-2 rounded-xl border-border/40 shadow-xl bg-card/95 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-1">
                <MenuOption icon={Type} label="Text" />
                <MenuOption icon={ImageIcon} label="Image" />
                <MenuOption icon={Quote} label="Quote" />
                <MenuOption icon={Code} label="Code" />
                <MenuOption icon={Layout} label="Layout" />
                <MenuOption icon={Sparkles} label="Magic AI" isPrimary />
              </div>
            </PopoverContent>
          </Popover>
        </div>

      </div>
    </div>
  );
}

function MenuOption({ icon: Icon, label, isPrimary }: any) {
  return (
    <div className={`flex flex-col items-center justify-center p-3 gap-2 rounded-lg cursor-pointer transition-colors ${isPrimary ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'hover:bg-secondary text-muted-foreground hover:text-foreground'}`}>
      <Icon size={18} />
      <span className="text-xs font-medium">{label}</span>
    </div>
  )
}

function InfoCard({ title, desc, icon: Icon, color, bg }: any) {
  return (
    <div className="bg-secondary/20 border border-border/40 rounded-2xl p-5 hover:bg-secondary/40 hover:border-border transition-all cursor-text group/card">
      <div className={`w-10 h-10 rounded-xl ${bg} ${color} flex items-center justify-center mb-4 shadow-sm group-hover/card:scale-110 transition-transform`}>
        <Icon size={18} />
      </div>
      <h3 
        className="font-semibold text-lg mb-2 text-foreground outline-none"
        contentEditable suppressContentEditableWarning
      >
        {title}
      </h3>
      <p 
        className="text-sm text-muted-foreground leading-relaxed outline-none"
        contentEditable suppressContentEditableWarning
      >
        {desc}
      </p>
    </div>
  );
}

// Side controls that appear when hovering over a block
function BlockControls({ isHovered }: { isHovered: boolean }) {
  return (
    <div className={`absolute -left-12 md:-left-16 top-0 h-full flex flex-col items-center justify-start pt-1 gap-1 transition-all duration-200 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
      <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md cursor-grab active:cursor-grabbing shadow-sm border border-transparent hover:border-border/50">
        <Plus size={14} className="text-muted-foreground/50 mb-px absolute -top-3" />
        <GripHorizontal size={14} />
      </Button>
    </div>
  );
}