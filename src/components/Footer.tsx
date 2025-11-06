import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="NextGen Computer Academy" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground italic">
              Digital Success Starts Here
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Courses
              </Link>
              <Link to="/admission" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Admission
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:03443493518" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} />
                0344-3493518
              </a>
              <a href="tel:03412445679" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} />
                0341-2445679
              </a>
              <a href="mailto:nextgencomputeracademy234@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 NextGen Computer Academy. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Made with ❤️ by <span className="text-primary font-semibold">Tez Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;