import { CircuitBoard, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg border border-primary/30 bg-primary/10">
                <CircuitBoard className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-xl tracking-wider text-foreground">
                NEW <span className="text-primary">ICONS</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional hardware engineering services with 10+ years of
              expertise in laptop repairs and vehicle ECM services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-foreground tracking-wider uppercase">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Laptop Repairs</li>
              <li className="hover:text-primary transition-colors cursor-pointer">ECM Services</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Data Recovery</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Hardware Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-foreground tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +91 9846049575
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                jaimonthengadayil@gmail.com
              </li>
              <li className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                Temple Road, Kadavanthara, Kochi - 682020
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NEW ICONS Hardware Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              Laptop Repairs | ECM Services | Data Recovery | Maintenance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;