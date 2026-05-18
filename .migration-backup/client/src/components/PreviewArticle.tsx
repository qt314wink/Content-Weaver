import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import editorialImage from "@/assets/images/editorial.jpg";

const data = [
  { year: '2019', adoption: 15 },
  { year: '2020', adoption: 28 },
  { year: '2021', adoption: 45 },
  { year: '2022', adoption: 68 },
  { year: '2023', adoption: 85 },
];

export default function PreviewArticle() {
  return (
    <article className="w-full text-foreground selection:bg-primary/20 bg-card">
      {/* Hero Section */}
      <div className="w-full h-[450px] relative overflow-hidden bg-muted group">
        <img
          src={editorialImage}
          alt="Editorial Abstract"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-12 lg:p-16">
          <div className="space-y-5 max-w-3xl text-white">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/90 font-semibold bg-primary/90 px-3 py-1.5 rounded backdrop-blur-md inline-block shadow-lg">
              Design & Typography
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-white drop-shadow-sm">
              The Emotional Resonance of Digital Typography
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              When we talk about design, we're really talking about human connection. How the evolution from web-safe fonts to variable typography changed the way we feel online.
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-8 py-16 md:px-16 lg:px-24 max-w-4xl mx-auto space-y-10 text-[1.1rem] leading-[1.85] text-foreground/90 font-sans">
        
        {/* Drop cap paragraph */}
        <p className="first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:text-primary first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest first-line:text-xs">
          <span className="font-semibold text-foreground">It wasn't long ago</span> that our digital landscapes were confined to the strict, uncompromising boundaries of Arial and Times New Roman. The web was functional, yes, but it lacked the nuanced emotional depth that print design had mastered centuries prior.
        </p>

        <p>
          Today, the landscape is radically different. With the advent of modern web typography, and more recently, the widespread adoption of variable fonts, designers finally have the palette needed to evoke true feeling in a digital space. We are no longer simply rendering text; we are architecting emotion.
        </p>

        {/* Generated Chart */}
        <figure className="my-16 bg-secondary/40 p-8 md:p-10 rounded-2xl border border-border/60 shadow-inner">
          <figcaption className="text-base font-medium text-foreground mb-8 font-serif flex items-center gap-3">
            <div className="w-1.5 h-6 bg-primary rounded-sm" />
            Variable Font Adoption Across Top 10,000 Websites (2019-2023)
          </figcaption>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAdoption" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c25e4c" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#c25e4c" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="currentColor" strokeOpacity={0.1} />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: 'currentColor', opacity: 0.6 }} dy={15} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: 'currentColor', opacity: 0.6 }} />
                <RechartsTooltip
                  contentStyle={{ borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', backgroundColor: 'var(--card)', color: 'var(--foreground)' }}
                  itemStyle={{ color: '#c25e4c', fontWeight: 600 }}
                  cursor={{ stroke: 'currentColor', strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.2 }}
                />
                <Area type="monotone" dataKey="adoption" stroke="#c25e4c" strokeWidth={3} fillOpacity={1} fill="url(#colorAdoption)" animationDuration={1500} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center font-mono uppercase tracking-widest opacity-80">Data synthesized from 2023 web typography research notes</p>
        </figure>

        <h3 className="text-3xl font-serif font-medium mt-16 mb-6 text-foreground tracking-tight">
          The Code Behind the Feeling
        </h3>

        <p>
          Implementing this level of fluidity requires a shift in how we write our stylesheets. Instead of calling multiple static font files for every weight and style, we define a single variable font and manipulate its axes dynamically. This results in significantly smaller payload sizes while unlocking infinite stylistic variations.
        </p>

        {/* Code Snippet */}
        <div className="my-10 bg-[#121212] rounded-xl p-6 overflow-x-auto shadow-2xl border border-[#2a2a2a] relative group">
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs font-mono text-white/40 bg-white/10 px-2 py-1 rounded">CSS</span>
          </div>
          <pre className="text-[13px] font-mono text-[#d4d4d4] leading-loose">
            <code>
              <span className="text-[#c586c0]">@font-face</span> {'{\n'}
              {'  '}font-family: <span className="text-[#ce9178]">'Playfair Variable'</span>;\n
              {'  '}src: url(<span className="text-[#ce9178]">'playfair-vf.woff2'</span>) format(<span className="text-[#ce9178]">'woff2-variations'</span>);\n
              {'  '}font-weight: <span className="text-[#b5cea8]">100 900</span>;\n
              {'}'}\n\n
              <span className="text-[#d7ba7d]">.hero-title</span> {'{\n'}
              {'  '}font-family: <span className="text-[#ce9178]">'Playfair Variable'</span>, serif;\n
              {'  '}font-variation-settings: <span className="text-[#ce9178]">'wght'</span> <span className="text-[#b5cea8]">650</span>, <span className="text-[#ce9178]">'opsz'</span> <span className="text-[#b5cea8]">48</span>;\n
              {'  '}transition: font-variation-settings <span className="text-[#b5cea8]">0.3s</span> ease-in-out;\n
              {'}'}\n\n
              <span className="text-[#d7ba7d]">.hero-title:hover</span> {'{\n'}
              {'  '}font-variation-settings: <span className="text-[#ce9178]">'wght'</span> <span className="text-[#b5cea8]">800</span>, <span className="text-[#ce9178]">'opsz'</span> <span className="text-[#b5cea8]">48</span>;\n
              {'}'}
            </code>
          </pre>
        </div>

        {/* Pull Quote */}
        <blockquote className="my-14 border-l-4 border-primary pl-8 py-2">
          <p className="text-2xl font-serif italic text-foreground/80 leading-relaxed">
            "This isn't just about what looks pretty; it's about what makes us feel something deep in our bones when we interact with a digital space. Typography is the voice of your interface."
          </p>
        </blockquote>

        <p>
          As we move forward, the tools we use will continue to adapt to our need for expressive storytelling. The rigid grids are breaking down, making way for layouts that breathe and typography that truly speaks.
        </p>

        {/* Footer/Author block */}
        <div className="mt-16 pt-8 border-t border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-serif font-semibold text-lg">
            A
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm uppercase tracking-wider">Generated by Narrative Loom</p>
            <p className="text-sm text-muted-foreground mt-0.5">Applied Aesthetic: Luxury Serif • Pace: Accessible</p>
          </div>
        </div>
      </div>
    </article>
  );
}