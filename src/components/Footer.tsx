import { ShieldCheck, Globe, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-lg font-bold tracking-tighter text-foreground">FORETYX</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise AI governance designed for the most regulated industries. Secure, private, and local by default.
            </p>
          </div>

          {/* India Regional Compliance */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" /> India Operations
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" /> DPDP Compliance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" /> Data Localization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" /> BFSI Grade Security
              </li>
            </ul>
          </div>

          {/* US & Global Infrastructure */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Global Standards</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Zero-Trust Alignment</li>
              <li>Cloud-Native Infrastructure</li>
              <li>Vendor-Agnostic Deployment</li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li>
                <a 
                  href="mailto:foretyx.ai@gmail.com" 
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" /> foretyx.ai@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Foretyx, Inc. Built for Enterprise Security.
            </p>
            <div className="flex items-center gap-4 mt-1">
              <a href="https://linkedin.com/company/foretyx" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/foretyx" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/foretyx" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold px-2 py-1 bg-accent/10 border border-accent/20 rounded">
              SOC2 Type II Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;