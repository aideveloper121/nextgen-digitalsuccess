import { Award, GraduationCap, Target, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering the next generation with digital skills
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Mission Section */}
            <div className="bg-card border rounded-lg p-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-primary" size={32} />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                At NextGen Computer Academy, our mission is to empower students with cutting-edge digital skills 
                for future success. We believe in providing practical, industry-relevant training that prepares 
                our students for real-world challenges in the ever-evolving technology landscape.
              </p>
            </div>

            {/* Founder Section */}
            <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary/20 rounded-lg p-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-primary" size={32} />
                <h2 className="text-2xl font-bold">Meet Our Founder</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Sir Ashir Ahmed</h3>
                <p className="text-muted-foreground">Owner & IT Instructor</p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Award className="text-primary" size={20} />
                    <span>D.A.E in Information Technology - Safiee Colleges</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Award className="text-primary" size={20} />
                    <span>Currently pursuing B.S in Artificial Intelligence at Sindh Madressatul Islam University</span>
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  With a passion for technology and education, Sir Ashir Ahmed founded NextGen Computer Academy 
                  to bridge the gap between traditional education and industry requirements. His vision is to 
                  create skilled IT professionals who can compete in the global market.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-card border rounded-lg p-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-primary" size={32} />
                <h2 className="text-2xl font-bold">Our Expert Team</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">M. Mubashir Khan</h3>
                  <p className="text-sm text-primary font-medium">CTD Department</p>
                  <p className="text-xs text-muted-foreground mt-2">Technical Supervisor</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Nadeem Ahmed</h3>
                  <p className="text-sm text-primary font-medium">Income Tax Consultant</p>
                  <p className="text-xs text-muted-foreground mt-2">Financial Advisor</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Ashir Ahmed</h3>
                  <p className="text-sm text-primary font-medium">IT Engineer</p>
                  <p className="text-xs text-muted-foreground mt-2">Lead Instructor</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-card border rounded-lg p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Why Choose NextGen?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">✓ Practical Training</h3>
                  <p className="text-sm text-muted-foreground">
                    100% hands-on experience with real-world projects
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">✓ Expert Instructors</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn from industry professionals with years of experience
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">✓ Affordable Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    Quality education with up to 60% discount opportunities
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">✓ Industry-Relevant Curriculum</h3>
                  <p className="text-sm text-muted-foreground">
                    Updated courses aligned with current market demands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;