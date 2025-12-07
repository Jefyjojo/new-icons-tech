import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Globe, User } from "lucide-react";
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
    <section id="contact" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Contact & <span className="text-secondary">Support</span>
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
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border"
          >
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Talk to Us
            </h3>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-accent mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:jaimonthengadayil@gmail.com"
                  className="text-foreground font-medium hover:text-secondary transition-colors"
                >
                  jaimonthengadayil@gmail.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-accent mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <a
                  href="https://www.ecmkadavanthara.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:text-secondary transition-colors"
                >
                  www.ecmkadavanthara.com
                </a>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl border border-border hover:border-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-secondary" />
                    <span className="font-semibold text-foreground">
                      {contact.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
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
            className="bg-hero-gradient rounded-2xl p-6 md:p-8 shadow-elevated flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Need Urgent Repair?
            </h3>
            <p className="text-primary-foreground/80 mb-8">
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

            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/70">
                Available Monday - Saturday
              </p>
              <p className="text-lg font-semibold text-primary-foreground">
                9:00 AM - 7:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
