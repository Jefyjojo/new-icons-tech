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
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About <span className="text-secondary">NEW ICONS</span>
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
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  10+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                  2
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Service Centers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  5000+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Happy Clients
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <h3 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-secondary" />
              Why Customers Trust Us
            </h3>
            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
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
