import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, ArrowRight, BarChart3, Bell, CheckCircle2, ChevronDown, 
  Cpu, Layers, LineChart, Lock, Target, TrendingDown, TrendingUp,
  ShieldAlert, Zap, Network, Crosshair
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// --- Fade In Wrapper for Scroll Animations ---
const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "left" | "right" | "none" }) => {
  const yOffset = direction === "up" ? 30 : 0;
  const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Navbar Component ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
            <Activity size={18} strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">MDF</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('problem')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">The Problem</button>
          <button onClick={() => scrollTo('how-it-works')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</button>
          <button onClick={() => scrollTo('features')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Benefits</button>
          <button onClick={() => scrollTo('faq')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</button>
        </nav>
        
        <Button onClick={() => scrollTo('waitlist')} size="sm" className="hidden md:flex shadow-lg shadow-primary/20">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent blur-[100px] rounded-full mix-blend-screen" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <FadeIn>
              <Badge variant="outline" className="mb-6 bg-card/50 backdrop-blur-sm border-primary/30 text-primary py-1 px-3">
                <span className="flex w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                Market Decision Framework
              </Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6 tracking-tight">
                Turn Market Noise Into <br />
                <span className="text-gradient-primary">Portfolio Decisions</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Market Decision Framework reads your portfolio recommendations and converts normalized, near real-time price indicators into structured buy and sell notifications — so you know when to act.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/20 text-base" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                Join Waitlist
              </Button>
              <Button size="lg" variant="glass" className="w-full sm:w-auto text-base" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                See How It Works
              </Button>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left" className="relative lg:ml-auto w-full max-w-lg">
            {/* Dashboard Mockup */}
            <div className="glass-panel rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/50 bg-card/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Live Decision Pipeline</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
              </div>
              
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground bg-background/50 uppercase border-b border-border/50">
                    <tr>
                      <th className="px-4 py-3 font-medium">Symbol</th>
                      <th className="px-4 py-3 font-medium">Signal</th>
                      <th className="px-4 py-3 font-medium hidden sm:table-cell">Score</th>
                      <th className="px-4 py-3 font-medium text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    <tr className="bg-success/5 hover:bg-success/10 transition-colors">
                      <td className="px-4 py-3 font-semibold flex items-center gap-2">
                        AAPL
                      </td>
                      <td className="px-4 py-3"><Badge variant="success">BUY</Badge></td>
                      <td className="px-4 py-3 font-mono text-muted-foreground hidden sm:table-cell">0.82</td>
                      <td className="px-4 py-3 text-right text-xs text-muted-foreground">Sent ✓</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-semibold">MSFT</td>
                      <td className="px-4 py-3"><Badge variant="warning">HOLD</Badge></td>
                      <td className="px-4 py-3 font-mono text-muted-foreground hidden sm:table-cell">0.61</td>
                      <td className="px-4 py-3 text-right text-xs text-muted-foreground">Monitoring</td>
                    </tr>
                    <tr className="bg-destructive/5 hover:bg-destructive/10 transition-colors">
                      <td className="px-4 py-3 font-semibold">TSLA</td>
                      <td className="px-4 py-3"><Badge variant="destructive">SELL</Badge></td>
                      <td className="px-4 py-3 font-mono text-muted-foreground hidden sm:table-cell">0.79</td>
                      <td className="px-4 py-3 text-right text-xs text-muted-foreground">Sent ✓</td>
                    </tr>
                    <tr className="bg-success/5 hover:bg-success/10 transition-colors">
                      <td className="px-4 py-3 font-semibold">NVDA</td>
                      <td className="px-4 py-3"><Badge variant="success">BUY</Badge></td>
                      <td className="px-4 py-3 font-mono text-muted-foreground hidden sm:table-cell">0.88</td>
                      <td className="px-4 py-3 text-right text-xs text-muted-foreground">Sent ✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -left-6 -top-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
};

// --- Problem Section ---
const ProblemSection = () => {
  const problems = [
    {
      icon: <Network className="w-6 h-6 text-destructive" />,
      title: "Information Overload",
      desc: "Raw price feeds are relentless and hard to parse into structured action."
    },
    {
      icon: <Layers className="w-6 h-6 text-destructive" />,
      title: "Fragmented Recommendations",
      desc: "Portfolio signals come from multiple sources with no unified, centralized view."
    },
    {
      icon: <Target className="w-6 h-6 text-destructive" />,
      title: "Timing Is Everything",
      desc: "Miss the exact window and even a great signal becomes a missed opportunity."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-destructive" />,
      title: "Inconsistent Discipline",
      desc: "Emotion and noise pull decisions off-track — again and again."
    },
    {
      icon: <LineChart className="w-6 h-6 text-destructive" />,
      title: "No Common Signal Language",
      desc: "Comparing raw indicators across symbols is an apples-to-oranges problem."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">The Problem</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Markets Move Fast. Your Decisions Shouldn't Lag.</h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {problems.map((prob, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="h-full bg-background/50 hover:bg-card hover:border-destructive/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    {prob.icon}
                  </div>
                  <CardTitle className="text-xl">{prob.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{prob.desc}</CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Solution Section ---
const SolutionSection = () => {
  const solutions = [
    {
      icon: <Crosshair className="w-6 h-6 text-primary" />,
      title: "Reads Recommendation Inputs",
      desc: "Ingests your portfolio watchlist and recommendation streams as structured inputs."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Normalizes Indicators",
      desc: "Every signal is scored on a predictable, consistent scale — across symbols and conditions."
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "Detects Actionable Conditions",
      desc: "Clear buy/sell decision conditions are evaluated by the core rules engine."
    },
    {
      icon: <Bell className="w-6 h-6 text-primary" />,
      title: "Delivers Notifications",
      desc: "Outputs are formatted and delivered as clear, actionable alerts to your channels."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn>
              <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">The Solution</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">Structured Intelligence. <br/>Decision-Ready Outputs.</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Market Decision Framework processes your portfolio recommendation inputs through a normalized indicator pipeline and delivers structured buy/sell notifications — consistently, without the noise.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative group p-6 rounded-2xl border border-border/50 bg-card/40 hover:bg-card/80 transition-all duration-300 hover:border-primary/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                      {sol.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{sol.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

// --- How It Works Section ---
const HowItWorksSection = () => {
  const steps = [
    { title: "Ingest Inputs", desc: "Portfolio recommendation sources are structured and ingested." },
    { title: "Monitor Indicators", desc: "Near real-time price data streams are continuously observed." },
    { title: "Normalize Features", desc: "Raw indicators are scored into a consistent, comparable schema." },
    { title: "Evaluate Conditions", desc: "Decision rules assess opportunity and risk across the portfolio." },
    { title: "Generate Signals", desc: "Buy, Hold, or Sell signals are produced with confidence scores." },
    { title: "Deliver Notifications", desc: "Structured alerts reach users through configured channels." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Six Steps From Input to Action</h3>
        </FadeIn>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/5 via-primary/30 to-primary/5 md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`relative flex items-center md:justify-between ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center md:-translate-x-1/2 -translate-x-3.5 z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                    <span className="text-xs font-bold text-primary">{i + 1}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pl-10" : "md:pr-10 text-left md:text-right"}`}>
                    <div className="p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/40 transition-colors shadow-lg shadow-black/20">
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                  
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Benefits Section ---
const BenefitsSection = () => {
  const benefits = [
    "Less Noise, More Clarity",
    "Consistent Buy/Sell Decisioning",
    "Near Real-Time Monitoring",
    "Portfolio-Aware Delivery",
    "Modular Architecture",
    "Faster Reaction, More Discipline"
  ];
  
  const desc = [
    "Signal-only outputs cut through market chatter.",
    "Rules-based framework removes emotional drift.",
    "Indicators are evaluated continuously, not end-of-day.",
    "Signals are tied to your specific recommendations, not generic alerts.",
    "Each layer of the pipeline is independently testable and extendable.",
    "Know when conditions are met — every time."
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Benefits</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Built for Disciplined Portfolio Monitoring</h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((title, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50">
                <div className="mt-1">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc[i]}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Architecture Section ---
const ArchitectureSection = () => {
  const nodes = [
    { title: "Signal", desc: "Captures relevant inputs" },
    { title: "Pulse", desc: "Scores current conditions" },
    { title: "Core", desc: "Applies decision rules" },
    { title: "Action", desc: "Translates to intent" },
    { title: "Adaptor", desc: "Publishes outputs" }
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.08),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Under the Hood</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">A Modular Decision Pipeline</h3>
          <p className="text-muted-foreground">Five purpose-built layers work together to transform raw market data into decision-ready signals.</p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
          {nodes.map((node, i) => (
            <React.Fragment key={i}>
              <FadeIn delay={i * 0.1} className="w-full lg:w-1/5">
                <div className="relative p-5 rounded-xl border border-primary/30 bg-background/80 backdrop-blur-sm text-center shadow-[0_0_30px_rgba(var(--primary),0.1)] hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <h4 className="font-bold text-lg mb-1">{node.title}</h4>
                  <p className="text-xs text-muted-foreground">{node.desc}</p>
                </div>
              </FadeIn>
              {i < nodes.length - 1 && (
                <FadeIn delay={i * 0.1 + 0.05} className="hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-primary/50" />
                </FadeIn>
              )}
              {i < nodes.length - 1 && (
                <FadeIn delay={i * 0.1 + 0.05} className="block lg:hidden my-2">
                  <div className="w-px h-8 bg-primary/30" />
                </FadeIn>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Example Signal Section ---
const ExampleSignalSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Signal in Action</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">See What a Signal Looks Like</h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <FadeIn direction="up" delay={0.1}>
            <Card className="border-success/30 bg-success/5 shadow-[0_8px_30px_rgba(var(--success),0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/20 rounded-full blur-3xl" />
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl tracking-tight mb-1">AAPL</CardTitle>
                    <CardDescription>Source: Portfolio Watchlist</CardDescription>
                  </div>
                  <Badge variant="success" className="px-3 py-1 text-sm">BUY</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Normalized Momentum</span>
                    <span className="font-mono font-medium">0.82</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '82%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Normalized Volatility</span>
                    <span className="font-mono font-medium">0.34</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-success/50 h-2 rounded-full" style={{ width: '34%' }} />
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-success/20 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Opportunity Score</span>
                    <span className="font-medium text-success">High</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Notification</span>
                    <span className="flex items-center gap-1 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-success" /> Sent</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn direction="up" delay={0.2}>
            <Card className="border-destructive/30 bg-destructive/5 shadow-[0_8px_30px_rgba(var(--destructive),0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/20 rounded-full blur-3xl" />
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl tracking-tight mb-1">TSLA</CardTitle>
                    <CardDescription>Source: Portfolio Watchlist</CardDescription>
                  </div>
                  <Badge variant="destructive" className="px-3 py-1 text-sm">SELL</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Normalized Momentum</span>
                    <span className="font-mono font-medium">0.21</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-destructive h-2 rounded-full" style={{ width: '21%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Normalized Volatility</span>
                    <span className="font-mono font-medium">0.78</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-destructive/50 h-2 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-destructive/20 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Opportunity Score</span>
                    <span className="font-medium text-destructive">Low</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Notification</span>
                    <span className="flex items-center gap-1 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-success" /> Sent</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// --- Social Proof Section ---
const SocialProofSection = () => {
  return (
    <section className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Why MDF</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Built for Precision. Designed for Discipline.</h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FadeIn delay={0.1} className="text-center border-r border-transparent md:border-border/50">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-2">Modular Framework</h4>
            <p className="text-sm text-muted-foreground px-4">Built on a layered Signal → Pulse → Core → Action → Adaptor pipeline.</p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="text-center border-r border-transparent md:border-border/50">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-2">Normalized Indicators</h4>
            <p className="text-sm text-muted-foreground px-4">Every score is computed on a consistent, symbol-agnostic scale.</p>
          </FadeIn>
          
          <FadeIn delay={0.3} className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-2">MVP Early Access</h4>
            <p className="text-sm text-muted-foreground px-4">Join a group of early adopters helping shape the platform.</p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FadeIn delay={0.4}>
            <Card className="bg-background/50 italic">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">"It removed the emotion from my portfolio monitoring entirely. The signals are clear, structured, and consistent."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">EA</div>
                  <div className="text-sm font-medium">— Early Adopter</div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.5}>
            <Card className="bg-background/50 italic">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">"The normalized scoring framework is what drew me in. Finally, I can compare opportunity strength across totally different assets."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">QA</div>
                  <div className="text-sm font-medium">— Quantitative Analyst</div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// --- Custom Accordion Component ---
const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-border/50">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
        onClick={onClick}
      >
        <span className="font-semibold text-lg pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-primary" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- FAQ Section ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does Market Decision Framework do?",
      a: "MDF monitors your portfolio stock recommendations and uses normalized, near real-time price indicators to generate structured buy and sell notifications. It helps you act with more consistency and less guesswork."
    },
    {
      q: "Is this automatic trading?",
      a: "No. MDF is a decision-support system. It surfaces structured signals and sends notifications — but all execution decisions remain with you. It is not a broker, robo-advisor, or automated trading platform."
    },
    {
      q: "How are signals generated?",
      a: "Signals are generated by evaluating normalized indicator scores against a configurable rules engine. The framework processes momentum, volatility, and other features through a consistent pipeline and outputs buy/hold/sell conditions."
    },
    {
      q: "What markets or assets will be supported?",
      a: "The initial focus is equity markets and individual stock recommendations. Broader asset class support is planned based on early adopter feedback."
    },
    {
      q: "How real-time is the monitoring?",
      a: "MDF is designed for near real-time indicator processing. Latency depends on data source integration, but the framework evaluates conditions on a continuous basis — not end-of-day batch runs."
    },
    {
      q: "Is this financial advice?",
      a: "No. Market Decision Framework provides informational decision support only. It does not constitute financial advice, investment recommendations, or a solicitation to buy or sell any security. Always consult a qualified financial professional before making investment decisions."
    },
    {
      q: "Who is this for?",
      a: "MDF is designed for investors, analysts, and technically-minded users who want a more structured, signal-driven approach to managing their portfolio watch lists and recommendation streams."
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Frequently Asked Questions</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold">Your Questions, Answered</h3>
        </FadeIn>
        
        <FadeIn delay={0.2} className="bg-card/50 border border-border/50 rounded-2xl p-2 sm:p-6 shadow-xl">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              question={faq.q} 
              answer={faq.a} 
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

// --- Final CTA Section ---
const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <FadeIn className="glass-panel p-8 sm:p-12 rounded-3xl text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">Be First to Access the Framework</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join the waitlist for early access to Market Decision Framework. Shape the product and get in before public launch.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background"
                disabled={loading}
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/25" disabled={loading}>
                {loading ? "Submitting..." : "Request Early Access"}
              </Button>
              {error && <p className="w-full text-sm text-red-400 mt-1">{error}</p>}
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-success/10 border border-success/30 rounded-xl p-6 mb-6 max-w-md mx-auto flex flex-col items-center"
            >
              <CheckCircle2 className="w-10 h-10 text-success mb-3" />
              <h4 className="font-bold text-lg mb-1">You're on the list.</h4>
              <p className="text-muted-foreground text-sm">We'll be in touch soon with access details.</p>
            </motion.div>
          )}
          
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground max-w-md mx-auto">
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <p>Market Decision Framework provides informational decision support only and does not constitute financial advice.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <Activity size={18} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Market Decision Framework</span>
            </div>
            <p className="text-muted-foreground max-w-xs mb-6">
              Clear signals. Structured decisions. Consistent discipline.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-start">
            <h4 className="font-bold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3 md:items-end">
              <button onClick={() => scrollTo('features')} className="text-muted-foreground hover:text-primary transition-colors text-left md:text-right">Benefits</button>
              <button onClick={() => scrollTo('how-it-works')} className="text-muted-foreground hover:text-primary transition-colors text-left md:text-right">How It Works</button>
              <button onClick={() => scrollTo('faq')} className="text-muted-foreground hover:text-primary transition-colors text-left md:text-right">FAQ</button>
              <button onClick={() => scrollTo('waitlist')} className="text-primary hover:underline transition-colors text-left md:text-right font-medium">Join Waitlist</button>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2025 Market Decision Framework. All rights reserved.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/10 text-xs text-muted-foreground/60 text-center md:text-left leading-relaxed">
          <p>
            Disclaimer: Market Decision Framework is an informational decision-support platform. It does not provide financial advice, investment recommendations, or solicitations to buy or sell securities. All investment strategies involve risk of loss. Always consult a qualified financial professional before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Mobile CTA Bar ---
const MobileCTABar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-background/90 backdrop-blur-xl border-t border-border/50 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
      <Button 
        className="w-full shadow-lg shadow-primary/20" 
        size="lg"
        onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Join Waitlist
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ArchitectureSection />
        <ExampleSignalSection />
        <SocialProofSection />
        <FAQSection />
        <CTASection />
      </main>
      
      <Footer />
      <MobileCTABar />
    </div>
  );
}
