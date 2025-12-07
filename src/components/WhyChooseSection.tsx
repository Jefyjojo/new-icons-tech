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
    <section id="why-us" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="text-secondary">NEW ICONS</span>?
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
              className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
