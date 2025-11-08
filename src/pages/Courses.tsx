import { Award, GraduationCap, Target, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our professional courses designed to prepare you for the
              digital world. Whether you are a beginner or advancing your
              skills, we have something for everyone.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Web Development
              </h3>
              <p className="text-muted-foreground text-center">
                Learn HTML, CSS, JavaScript, React, and more to become a
                full-stack web developer.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <Target className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Graphic Design
              </h3>
              <p className="text-muted-foreground text-center">
                Master Adobe Photoshop, Illustrator, and Canva to create
                professional digital art and branding.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Freelancing & Digital Marketing
              </h3>
              <p className="text-muted-foreground text-center">
                Learn SEO, Facebook Ads, and client communication to kickstart
                your freelancing career.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <Award className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Microsoft Office & IT Basics
              </h3>
              <p className="text-muted-foreground text-center">
                Build a strong foundation in Microsoft Office, Windows, and
                computer essentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
