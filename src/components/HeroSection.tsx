import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Laptop, Car, Clock, MapPin, Shield, Zap, Cpu, CircuitBoard } from "lucide-react";
import heroTechLeft from "@/assets/hero-tech-left.png";
import heroTechRight from "@/assets/hero-tech-right.png";

const highlights = [
  { icon: Laptop, text: "Laptop Repair Experts" },
  { icon: Car, text: "Vehicle ECM Repairing" },
  { icon: Zap, text: "Fast, Affordable, Trusted" },
  { icon: MapPin, text: "Two Service Centers in Kochi" },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-gradient"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1440 900">
          <motion.path
            d="M0 300 Q 200 250, 400 300 T 800 280 T 1200 320 T 1440 300"
            stroke="url(#cyan-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 500 Q 300 450, 600 500 T 1000 480 T 1440 520"
            stroke="url(#orange-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(200 100% 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(200 100% 50%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(200 100% 50%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(25 100% 55%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(25 100% 55%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(25 100% 55%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Left Tech Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative">
          <img
            src={heroTechLeft}
            alt="Laptop motherboard technology"
            className="w-80 h-auto opacity-60 mask-gradient-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
          {/* Neon border effect */}
          <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
        </div>
      </motion.div>

      {/* Right Tech Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative">
          <img
            src={heroTechRight}
            alt="Vehicle ECM dashboard technology"
            className="w-80 h-auto opacity-60 mask-gradient-left"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
          {/* Neon border effect */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-50" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cyber Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/50 backdrop-blur-md mb-8 bg-primary/10 pulse-glow"
          >
            <CircuitBoard className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              10+ Years of Trusted Service
            </span>
            <CircuitBoard className="w-4 h-4 text-primary" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6"
          >
            <span className="block">Reliable Hardware Engineering &</span>
            <span className="text-gradient-cyber">Laptop Repair Services</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium"
          >
            Your trusted destination for laptop repairs, ECM services for all
            vehicles, hardware maintenance, upgrades, and data recovery.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              variant="hero"
              onClick={() => scrollToSection("#services")}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                View Services
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-circuit-flow opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              size="lg"
              variant="heroOutline"
              onClick={() => scrollToSection("#contact")}
              className="border-primary/50 hover:border-primary hover:shadow-neon-cyan transition-all duration-300"
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group flex flex-col items-center gap-3 p-5 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:shadow-neon-cyan transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground text-center tracking-wide">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="glow-line w-full" />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            top: ["-2%", "102%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;