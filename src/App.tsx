import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"; 
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PublicGallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import AdminCourses from "./pages/admin/Courses";
import Admissions from "./pages/admin/Admissions";
import AdminGallery from "./pages/admin/Gallery";
import FAQs from "./pages/admin/FAQs";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<PublicGallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/admissions" element={<Admissions />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/faqs" element={<FAQs />} />
        
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        <SpeedInsights /> 
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
