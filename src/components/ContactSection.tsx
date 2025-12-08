import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Globe, User, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    name: "Jaimon",
    phones: ["+91 9846049575", "+91 8547105655"],
  },
  {
    name: "Joice",
    phones: ["+91 6282767186", "+91 9447267377"],
  },
  {
    name: "Raju",
    phones: ["+91 94472 12519"],
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Contact & <span className="text-gradient-cyber">Support</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach out to us for any queries or service requests
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/20 relative overflow-hidden"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary/30 rounded-br-2xl" />
            
            <h3 className="text-xl font-heading font-bold text-foreground mb-6 tracking-wider">
              Talk to Us
            </h3>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20 mb-4 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Email</p>
                <a
                  href="mailto:jaimonthengadayil@gmail.com"
                  className="text-foreground font-semibold hover:text-primary transition-colors"
                >
                  jaimonthengadayil@gmail.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/5 border border-secondary/20 mb-6 hover:border-secondary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Website</p>
                <a
                  href="https://www.ecmkadavanthara.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-semibold hover:text-secondary transition-colors"
                >
                  www.ecmkadavanthara.com
                </a>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-primary" />
                    <span className="font-bold text-foreground tracking-wider">
                      {contact.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:shadow-neon-cyan transition-all duration-300"
                      >
                        <Phone className="w-3 h-3" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Contact Form / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col justify-center"
            style={{
              background: 'linear-gradient(135deg, hsl(200 100% 50% / 0.1) 0%, hsl(280 80% 60% / 0.1) 100%)',
            }}
          >
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/30" />
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary rounded-br-2xl" />
            
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-[80px]" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold mb-4">
                <Zap className="w-4 h-4" />
                Urgent Support
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 tracking-wider">
                Need Urgent Repair?
              </h3>
              <p className="text-muted-foreground mb-8">
                Call us now for immediate assistance. Our expert technicians are
                ready to help you with any laptop or vehicle ECM issues.
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  variant="hero"
                  className="w-full"
                  onClick={() => window.open("tel:+919846049575")}
                >
                  <Phone className="w-5 h-5" />
                  Call Jaimon Now
                </Button>
                <Button
                  size="lg"
                  variant="heroOutline"
                  className="w-full"
                  onClick={() =>
                    window.open("mailto:jaimonthengadayil@gmail.com")
                  }
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Available Monday - Saturday
                </p>
                <p className="text-lg font-bold text-foreground tracking-wider">
                  9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;