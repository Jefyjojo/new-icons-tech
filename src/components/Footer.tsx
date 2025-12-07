import { Laptop, Car, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5">
                <Laptop className="w-5 h-5" />
                <Car className="w-5 h-5 text-secondary" />
              </div>
              <span className="font-heading font-bold text-lg">
                NEW <span className="text-secondary">ICONS</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Professional hardware engineering services with 10+ years of
              expertise in laptop repairs and vehicle ECM services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Laptop Repairs</li>
              <li>ECM Services</li>
              <li>Data Recovery</li>
              <li>Hardware Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                +91 9846049575
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                jaimonthengadayil@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                Temple Road, Kadavanthara, Kochi - 682020
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} NEW ICONS Hardware Engineering. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Laptop Repairs | ECM Services | Data Recovery | Maintenance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
