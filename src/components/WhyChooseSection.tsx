import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Laptop,
  Car,
  Package,
  Zap,
  HeadphonesIcon,
  DollarSign,
  Users,
  Hexagon,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "10+ Years Trusted",
    description: "Over a decade of industry experience serving customers",
  },
  {
    icon: Laptop,
    title: "Laptop Expertise",
    description: "Specialized in all laptop brands and models",
  },
  {
    icon: Car,
    title: "Vehicle ECM Systems",
    description: "Advanced ECM diagnostics and repairs",
  },
  {
    icon: Package,
    title: "Quality Parts",
    description: "High-quality spare parts for lasting fixes",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: HeadphonesIcon,
    title: "Strong Support",
    description: "Dedicated customer support team",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent and competitive pricing",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled technicians: Jaimon, Joice & Raju",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-6">
            <Hexagon className="w-4 h-4" />
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">NEW ICONS</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine expertise, quality, and affordability to deliver the best
            repair experience
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/20 rounded-tr-2xl" />
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-neon-cyan group-hover:bg-primary/20 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2 tracking-wider">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
              
              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;