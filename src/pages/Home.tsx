import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const featuredCourses = [
    {
      title: "CIT",
      duration: "6 Months",
      topics: ["Office Automation", "MS Word", "MS Excel", "MS PowerPoint", "Adobe Photoshop", "Inpage"],
    },
    {
      title: "Digital Marketing",
      duration: "6 Months",
      topics: ["Facebook Marketing", "Instagram Marketing", "SEO", "YouTube Marketing", "Google Ads", "E-Commerce"],
    },
    {
      title: "Web Development",
      duration: "9-10 Months",
      topics: ["HTML, CSS, JavaScript", "ReactJS", "Django/Flask", "MySQL", "Cloud Computing"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              NextGen Computer Academy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic font-semibold">
              Digital Success Starts Here
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Empowering students with cutting-edge digital skills for a successful future. Learn from industry experts and transform your career with our comprehensive IT courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/admission">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">10+</h3>
              <p className="text-muted-foreground">Professional Courses</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">Practical Training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of professional courses designed to boost your career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Special Discount Offer!
          </h2>
          <p className="text-xl mb-8 animate-fade-in opacity-90">
            Get up to 30% discount on course fees - Limited Time Offer
          </p>
          <Button asChild size="lg" variant="secondary" className="animate-scale-in">
            <Link to="/admission">Enroll Now & Save</Link>
          </Button>
        </div>
      </section>

      {/* Additional Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Laptop Buying & Selling Services</h3>
            <p className="text-muted-foreground">
              We also offer laptop buying and selling services to our students. Contact us for more details!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
