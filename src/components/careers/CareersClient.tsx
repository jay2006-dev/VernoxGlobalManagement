"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Zap, 
  ChevronRight,
  Bell,
  Search,
  MapPin,
  Heart,
  Crown
} from "lucide-react";
import Link from "next/link";

const growthPath = [
  "Business Associate",
  "Corporate Trainer",
  "Team Leader",
  "Assistant Manager",
  "Branch Manager"
];

const benefits = [
  { icon: GraduationCap, title: "Continuous Learning", desc: "Access to world-class training and mentorship programs.", bgColor: "bg-[#e8f5e9]", iconColor: "text-green-600" },
  { icon: Zap, title: "Fast-Track Growth", desc: "Merit-based promotions with clear pathways to management.", bgColor: "bg-[#e3f2fd]", iconColor: "text-blue-600" },
  { icon: Users, title: "Vibrant Culture", desc: "A collaborative, high-energy environment that celebrates success.", bgColor: "bg-[#f3e5f5]", iconColor: "text-purple-600" },
  { icon: Briefcase, title: "Global Exposure", desc: "Opportunities to travel and work with international clients.", bgColor: "bg-[#fff3e0]", iconColor: "text-orange-600" }
];

const allOpenings = [
  { 
    title: "Business Management Trainee", 
    department: "Management",
    location: "Hyderabad",
    salary: "$40k - $60k/year",
    type: "Full-Time", 
    level: "Entry Level",
    daysLeft: 15,
    logoColor: "text-red-500",
    logoBg: "bg-red-100"
  },
  { 
    title: "Corporate Sales Executive", 
    department: "Sales & Marketing",
    location: "Mumbai",
    salary: "$50k - $80k/year",
    type: "Full-Time", 
    level: "Mid Level",
    daysLeft: 20,
    logoColor: "text-purple-500",
    logoBg: "bg-purple-100"
  },
  { 
    title: "Marketing Strategy Consultant", 
    department: "Consulting",
    location: "Remote",
    salary: "$80k - $120k/year",
    type: "Contract", 
    level: "Senior Level",
    daysLeft: 5,
    logoColor: "text-blue-500",
    logoBg: "bg-blue-100"
  },
  { 
    title: "Leadership Development Coach", 
    department: "HR & Training",
    location: "New York",
    salary: "$70k - $100k/year",
    type: "Full-Time", 
    level: "Senior Level",
    daysLeft: 12,
    logoColor: "text-green-500",
    logoBg: "bg-green-100"
  },
];

export function CareersClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [filteredOpenings, setFilteredOpenings] = useState(allOpenings);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const loc = locationTerm.toLowerCase();
    
    const filtered = allOpenings.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(term) || job.department.toLowerCase().includes(term);
      const matchesLocation = job.location.toLowerCase().includes(loc);
      return matchesSearch && matchesLocation;
    });
    
    setFilteredOpenings(filtered);
    
    // Scroll to openings section
    const openingsSection = document.getElementById('openings-section');
    if (openingsSection) {
      openingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="z-10 max-w-2xl">
              <h1 className="text-5xl md:text-[64px] font-bold font-heading mb-6 tracking-tight leading-[1.1] text-gray-900">
                Build Your Future <br/> With Us
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                We don't just offer jobs. We offer a platform to develop your skills, mindset, and leadership capabilities.
              </p>
              
              {/* Search Bar / Action Area */}
              <div className="bg-white p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center border border-gray-100 max-w-lg mb-8">
                <div className="flex-1 flex items-center px-6 border-r border-gray-100">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Job title or keywords" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full bg-transparent outline-none text-sm font-medium" 
                  />
                </div>
                <div className="flex-1 flex items-center px-6">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="All Location" 
                    value={locationTerm}
                    onChange={(e) => setLocationTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full bg-transparent outline-none text-sm font-medium" 
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="bg-[#059669] hover:bg-[#047857] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-green-500/20"
                >
                  Search
                </Button>
              </div>

              <div className="text-sm font-medium text-gray-500">
                Popular Searches: 
                <span className="text-gray-900 ml-2">Management, Consulting, Remote</span>
              </div>
            </div>

            {/* Right Image & Floating Badges */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="absolute w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] rounded-full bg-[#fce4ec] -z-10"></div>
              
              <div className="relative w-[380px] h-[480px] lg:w-[450px] lg:h-[550px] z-0">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Career" 
                  className="w-full h-full object-cover rounded-t-full shadow-2xl" 
                />
              </div>

              <div className="absolute top-32 -left-10 md:left-0 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-bounce-slow border border-gray-100">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-yellow-600" />
                  <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="font-bold text-gray-800">Job Alert Subscribe</span>
              </div>

              <div className="absolute bottom-20 -right-4 md:right-10 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100">
                <div className="font-bold text-gray-800 mb-3 text-sm">5k+ candidates get job</div>
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/100?img=4" className="w-10 h-10 rounded-full border-2 border-white" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#059669] flex items-center justify-center text-white text-xs font-bold">
                    +
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-12 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="font-bold font-heading text-xl text-gray-900 whitespace-nowrap">Vornex Growth Path:</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 w-full">
              {growthPath.map((role, index) => (
                <div key={index} className="flex items-center">
                  <span className="font-semibold text-gray-600 text-sm md:text-base px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
                    {role}
                  </span>
                  {index < growthPath.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-gray-300 mx-1 md:mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-2">Why Join Vornex Global?</h2>
              <p className="text-gray-500 font-medium">Empowering your career at every step.</p>
            </div>
            <a href="#" className="hidden md:inline-block text-[#059669] font-semibold hover:underline border-b border-[#059669]">
              View all benefits
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className={`p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow ${benefit.bgColor}`}>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                  <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm font-medium mb-6">{benefit.desc}</p>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                  Vornex Perks
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings-section" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-2">Current Openings</h2>
              <p className="text-gray-500 font-medium">
                {filteredOpenings.length > 0 
                  ? `${allOpenings.length} jobs live – ${filteredOpenings.length} matching your search.`
                  : `No jobs found matching your search. Try different keywords.`
                }
              </p>
            </div>
            {filteredOpenings.length < allOpenings.length && (
              <button 
                onClick={() => { setSearchTerm(""); setLocationTerm(""); setFilteredOpenings(allOpenings); }}
                className="hidden md:inline-block text-[#059669] font-semibold hover:underline border-b border-[#059669]"
              >
                Clear search
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredOpenings.map((job, i) => (
              <div key={i} className="border border-gray-200 rounded-[2rem] p-8 hover:border-gray-300 hover:shadow-lg transition-all bg-white group">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${job.logoBg}`}>
                      <Briefcase className={`w-6 h-6 ${job.logoColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-gray-900 mb-1 group-hover:text-[#059669] transition-colors">{job.title}</h3>
                      <div className="text-sm font-medium text-gray-500">
                        by <span className="font-bold text-gray-900">Vornex Global</span> in <span className="text-[#059669]">{job.department}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 text-yellow-500">
                      <Crown className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-full text-xs font-bold border border-gray-100 flex items-center gap-1">
                    {job.type}
                  </span>
                  <span className="px-4 py-1.5 bg-[#e8f5e9]/50 text-[#059669] rounded-full text-xs font-bold border border-[#059669]/20 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {job.location}
                  </span>
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold border border-blue-100 flex items-center gap-1">
                    {job.salary}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div className="text-sm font-medium">
                    <span className="text-[#059669] font-bold">{job.daysLeft}</span> <span className="text-gray-500">days left to apply</span>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-gray-900 hover:bg-black text-white rounded-full px-6 h-10 text-sm font-bold shadow-md">
                      Apply Now
                    </Button>
                  </Link>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
