import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Laptop,
  Monitor,
  Keyboard,
  Battery,
  HardDrive,
  Zap,
  Download,
  RotateCw,
  Fan,
  Settings,
  Shield,
  Car,
  Gauge,
  RefreshCw,
  Wrench,
  Activity,
  CheckCircle,
  Cpu,
  CircuitBoard,
} from "lucide-react";

const laptopServices = [
  { icon: Laptop, text: "Laptop repairing (all brands)" },
  { icon: Monitor, text: "Screen repairing & replacement" },
  { icon: Keyboard, text: "Keyboard & battery replacement" },
  { icon: HardDrive, text: "Hard disk replacement" },
  { icon: Zap, text: "SSD upgrade (speed boosting)" },
  { icon: Download, text: "OS installation & optimization" },
  { icon: RotateCw, text: "Data recovery" },
  { icon: Settings, text: "Hinge repairing & replacement" },
  { icon: Fan, text: "Cooling system service" },
  { icon: Settings, text: "Laptop upgrade & maintenance" },
  { icon: Shield, text: "Virus removal & performance tuning" },
];

const ecmServices = [
  { icon: Gauge, text: "ECM diagnosis and troubleshooting" },
  { icon: RefreshCw, text: "ECM reprogramming" },
  { icon: Wrench, text: "ECM repair & replacement" },
  { icon: Download, text: "ECU updates" },
  { icon: Activity, text: "Sensor testing & correction" },
];

const vehicleTypes = [
  "Cars",
  "Bikes",
  "Commercial vehicles",
  "Trucks",
  "Buses",
  "Premium vehicles",
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-semibold text-sm uppercase tracking-wider mb-6">
            <CircuitBoard className="w-4 h-4" />
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive hardware repair solutions for laptops and vehicles
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Laptop Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:shadow-neon-cyan transition-all duration-300">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground tracking-wider">
                  Laptop Repairing
                </h3>
                <p className="text-sm text-muted-foreground">
                  & Hardware Services
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              NEW ICONS offers complete laptop solutions for all major brands
              with expert technicians.
            </p>

            <div className="grid sm:grid-cols-2 gap-2">
              {laptopServices.map((service, index) => (
                <motion.div
                  key={service.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3 p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-200"
                >
                  <service.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{service.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ECM Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-secondary/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/30 rounded-br-2xl" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center group-hover:shadow-neon-orange transition-all duration-300">
                <Car className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground tracking-wider">
                  ECM Repairing
                </h3>
                <p className="text-sm text-muted-foreground">
                  & Vehicle Services
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Professional ECM services for all types of vehicles with advanced
              diagnostic tools.
            </p>

            <div className="space-y-2 mb-6">
              {ecmServices.map((service, index) => (
                <motion.div
                  key={service.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 p-2 rounded-lg border border-transparent hover:border-secondary/20 hover:bg-secondary/5 transition-all duration-200"
                >
                  <service.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{service.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Vehicle Types */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm font-bold text-foreground mb-3 tracking-wider uppercase">
                Vehicle Types Covered:
              </p>
              <div className="flex flex-wrap gap-2">
                {vehicleTypes.map((type, index) => (
                  <motion.span
                    key={type}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold tracking-wide"
                  >
                    <CheckCircle className="w-3 h-3" />
                    {type}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;