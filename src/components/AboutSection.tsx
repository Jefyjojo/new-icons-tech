import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Users,
  Clock,
  BadgeCheck,
  Wrench,
  Car,
  MapPin,
  DollarSign,
  Cpu,
} from "lucide-react";

const trustPoints = [
  { icon: Award, text: "10+ years of industry experience" },
  { icon: Users, text: "Skilled and certified hardware engineers" },
  { icon: Clock, text: "Accurate diagnosis & fast turnaround" },
  { icon: DollarSign, text: "Affordable and transparent pricing" },
  { icon: BadgeCheck, text: "Quality spare parts and long-lasting fixes" },
  { icon: Car, text: "Specialized ECM vehicle module repair" },
  { icon: MapPin, text: "Two service centers for easy access" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
              <Cpu className="w-4 h-4" />
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-gradient-cyber">NEW ICONS</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              NEW ICONS is a professional hardware engineering service provider
              with more than 10 years of hands-on experience in laptop repairs,
              ECM repairs, system upgrades, and complete hardware maintenance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We deliver fast, accurate, and affordable repair solutions with
              high customer satisfaction and long-term reliability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "10+", label: "Years Experience", color: "primary" },
                { value: "2", label: "Service Centers", color: "secondary" },
                { value: "5000+", label: "Happy Clients", color: "accent" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-lg border border-border bg-card/50"
                >
                  <div className={`text-3xl md:text-4xl font-heading font-bold text-${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 relative overflow-hidden"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary/50 rounded-br-2xl" />
            
            <h3 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2 tracking-wider">
              <div className="p-2 rounded-lg bg-secondary/20 border border-secondary/30">
                <Wrench className="w-5 h-5 text-secondary" />
              </div>
              Why Customers Trust Us
            </h3>
            <div className="space-y-3">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-neon-cyan transition-all duration-300">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;