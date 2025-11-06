import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Courses = () => {
  const courses = [
    {
      title: "CIT (Certificate in Information Technology)",
      duration: "6 Months",
      topics: [
        "Office Automation",
        "MS Word",
        "MS Excel",
        "MS PowerPoint",
        "Adobe Photoshop",
        "Inpage",
        "Windows Installation",
        "Internet",
      ],
      description: "Perfect for beginners who want to build strong computer fundamentals and office productivity skills.",
    },
    {
      title: "IT (Information Technology)",
      duration: "6 Months",
      topics: [
        "Office Automation",
        "MS Word",
        "MS Excel",
        "MS PowerPoint",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Windows Installation",
        "Internet",
      ],
      description: "Comprehensive IT course with additional graphic design tools for enhanced creativity.",
    },
    {
      title: "Digital Marketing",
      duration: "6 Months",
      topics: [
        "Facebook Marketing",
        "Instagram Marketing",
        "SEO (Search Engine Optimization)",
        "Shopify Store Setup",
        "YouTube Marketing",
        "Google Ads",
        "Amazon Marketing",
        "E-Commerce",
      ],
      description: "Master the art of digital marketing and grow your online business presence across multiple platforms.",
    },
    {
      title: "Graphic Designing",
      duration: "6 Months",
      topics: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Corel Draw",
        "Inpage",
      ],
      description: "Learn professional graphic design tools to create stunning visuals and designs for print and digital media.",
    },
    {
      title: "Web Designing",
      duration: "6 Months",
      topics: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Figma",
      ],
      description: "Design beautiful and user-friendly websites using industry-standard design tools and modern UI/UX principles.",
    },
    {
      title: "Web Development - Frontend",
      duration: "3 Months",
      topics: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "ReactJS",
      ],
      description: "Build interactive and responsive websites with modern frontend technologies.",
    },
    {
      title: "Web Development - Backend",
      duration: "3 Months",
      topics: [
        "Django/Flask",
        "MySQL (with Django and Flask)",
        "Express JS",
        "Mango DB (with Express JS)",
      ],
      description: "Master server-side programming and database management for dynamic web applications.",
    },
    {
      title: "Web Development - Full Stack",
      duration: "9-10 Months",
      topics: [
        "HTML, CSS, JavaScript",
        "Cloud Computing",
        "Database Management",
        "Django, Flask, ExpressJS",
      ],
      description: "Complete web development training covering both frontend and backend technologies for building full-scale applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT training programs designed to equip you with industry-relevant skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary/10 border-2 border-primary/20 rounded-lg p-8 text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Supervised by Industry Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div>
                <p className="font-semibold text-primary">M. Mubashir Khan</p>
                <p className="text-sm text-muted-foreground">CTD Department</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Nadeem Ahmed</p>
                <p className="text-sm text-muted-foreground">Income Tax Consultant</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Ashir Ahmed</p>
                <p className="text-sm text-muted-foreground">IT Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;