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
    <section id="services" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-secondary">Services</span>
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
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Laptop className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground">
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

            <div className="grid sm:grid-cols-2 gap-3">
              {laptopServices.map((service, index) => (
                <motion.div
                  key={service.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
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
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Car className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground">
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

            <div className="space-y-3 mb-6">
              {ecmServices.map((service, index) => (
                <motion.div
                  key={service.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <service.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{service.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Vehicle Types */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-3">
                Vehicle Types Covered:
              </p>
              <div className="flex flex-wrap gap-2">
                {vehicleTypes.map((type, index) => (
                  <motion.span
                    key={type}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium"
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
