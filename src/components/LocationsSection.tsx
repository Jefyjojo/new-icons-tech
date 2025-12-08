import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, ExternalLink, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Kadavanthara, Kochi",
    address: "Temple Road, Kadavanthara",
    pincode: "682020",
    mapLink: "https://maps.app.goo.gl/SMWYgTqFXzJRSLeVA",
    featured: true,
  },
  {
    name: "Maradu – Near Nucleus Mall",
    address: "Near Nucleus Mall, Maradu",
    pincode: "Ernakulam, Kerala",
    mapLink: "https://maps.google.com",
    featured: false,
  },
];

const LocationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locations" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-semibold text-sm uppercase tracking-wider mb-6">
            <Building className="w-4 h-4" />
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient">Service Centers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two convenient locations in Kochi for easy access
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                location.featured
                  ? "bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 border-2 border-primary/40"
                  : "bg-card/80 backdrop-blur-sm border border-border/50 hover:border-secondary/40"
              }`}
            >
              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl ${
                location.featured ? "border-primary" : "border-secondary/30"
              }`} />
              <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl ${
                location.featured ? "border-accent" : "border-primary/30"
              }`} />
              
              {/* Location Badge */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 ${
                  location.featured
                    ? "bg-primary/20 border border-primary/40 text-primary"
                    : "bg-secondary/10 border border-secondary/30 text-secondary"
                }`}
              >
                <MapPin className="w-3 h-3" />
                CENTER {index + 1}
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-2 tracking-wider">
                {location.name}
              </h3>

              <p className="text-muted-foreground mb-1">
                {location.address}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                {location.pincode}
              </p>

              <Button
                variant={location.featured ? "default" : "secondary"}
                className="w-full gap-2"
                onClick={() => window.open(location.mapLink, "_blank")}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
                <ExternalLink className="w-3 h-3" />
              </Button>

              {/* Decorative glow */}
              {location.featured && (
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary/30 blur-[60px]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;