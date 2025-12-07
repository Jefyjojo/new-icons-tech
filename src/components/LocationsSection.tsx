import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
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
    <section id="locations" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-secondary">Service Centers</span>
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
              className={`relative overflow-hidden rounded-2xl p-6 md:p-8 shadow-card border transition-all duration-300 hover:shadow-elevated ${
                location.featured
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-secondary/30"
              }`}
            >
              {/* Location Badge */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  location.featured
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                <MapPin className="w-3 h-3" />
                Center {index + 1}
              </div>

              <h3
                className={`text-xl font-heading font-bold mb-2 ${
                  location.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {location.name}
              </h3>

              <p
                className={`mb-1 ${
                  location.featured
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {location.address}
              </p>
              <p
                className={`text-sm mb-6 ${
                  location.featured
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {location.pincode}
              </p>

              <Button
                variant={location.featured ? "hero" : "default"}
                className="w-full gap-2"
                onClick={() => window.open(location.mapLink, "_blank")}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
                <ExternalLink className="w-3 h-3" />
              </Button>

              {/* Decorative Element */}
              {location.featured && (
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-secondary/20 blur-2xl" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
