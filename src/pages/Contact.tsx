import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for any inquiries or admission assistance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6 animate-fade-in">
                {/* Phone */}
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone Numbers</h3>
                      <div className="space-y-1">
                        <a
                          href="tel:03443493518"
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          0344-3493518
                        </a>
                        <a
                          href="tel:03412445679"
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          0341-2445679
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email Address</h3>
                      <a
                        href="mailto:nextgencomputeracademy234@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        nextgencomputeracademy234@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Visit Us</h3>
                      <p className="text-muted-foreground">
                        Contact us for location details and visiting hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Quick Actions */}
              <div className="space-y-6 animate-fade-in">
                {/* Enroll Section */}
                <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary/20 rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
                  <p className="text-muted-foreground mb-6">
                    Take the first step towards your digital success. Enroll in
                    our courses today and unlock your potential!
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <a href="/admission">Apply for Admission</a>
                  </Button>
                </div>

                {/* Office Hours */}
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Monday - Saturday:</span>
                      <span className="font-medium">3:00 PM - 11:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Friday:</span>
                      <span className="font-medium">3:30 PM - 11:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </p>
                  </div>
                </div>

                {/* Special Services */}
                <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">Special Service</h3>
                  <p className="text-muted-foreground">
                    💻 Laptop Buying & Selling Services Available
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Contact us for the best deals on laptops!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌍 Google Map Section */}
      <section className="bg-muted py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Find Us on Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.4467085611504!2d66.97830707393848!3d24.950911941634935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36bd5a92e3ca5%3A0xe7d0799230fa3bcb!2sNEXTGEN%20COMPUTER%20ACADEMY!5e0!3m2!1sen!2s!4v1763017118249!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
