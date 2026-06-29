import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Shield, Award, ChevronDown, Rocket, Users, MapPin, TrendingUp, Compass, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | Vornex Global",
  description: "The journey of Admire Global Organisation and Vornex Global.",
};

const leaders = [
  {
    name: "Tony Fernandez",
    role: "Country Head",
    bio: "Visionary leader with extensive experience building high-performing teams and driving business growth across India.",
    image: "https://admireorg.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-29-at-17.06.31-1.jpeg",
    color: "#7c3aed",
    shade: "#f5f3ff",
  },
  {
    name: "Kishore Tarachandani",
    role: "Country Head",
    bio: "Strategic thinker specializing in market expansion and organizational development with a passion for mentoring.",
    image: "https://admireorg.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-29-at-17.06.31.jpeg",
    color: "#d97706",
    shade: "#fffbeb",
  },
  {
    name: "Gopi Akula",
    role: "Country Head",
    bio: "Dynamic leader focused on operational excellence and creating clear pathways for aspiring entrepreneurs.",
    image: "https://admireorg.in/wp-content/uploads/2023/06/4vb6litf.png",
    color: "#059669",
    shade: "#ecfdf5",
  },
  {
    name: "Mr. Pavan",
    role: "Organisation Head",
    bio: "Founding leader driving Admire's vision of developing entrepreneurs and transforming careers across the nation.",
    image: "https://admireorg.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-29-at-17.14.14.jpeg",
    color: "#e11d48",
    shade: "#fff1f2",
  },
];

const timeline = [
  {
    year: "The Inception",
    title: "A Single Goal",
    desc: "It began with a simple yet ambitious vision: to redefine leadership and empower a new generation of entrepreneurs. We didn't just want to create a company; we wanted to build a platform for leaders.",
    icon: Rocket,
    color: "bg-blue-100 text-blue-600 border-blue-200"
  },
  {
    year: "The Foundation",
    title: "15+ Years of Experience",
    desc: "Through relentless dedication and strategic execution, we built a rock-solid foundation, pooling together decades of industry expertise to deliver unmatched value to our partners.",
    icon: Shield,
    color: "bg-purple-100 text-purple-600 border-purple-200"
  },
  {
    year: "The Expansion",
    title: "500+ Projects Completed",
    desc: "Our vision caught fire. Expanding across the nation, we successfully transformed careers and businesses, crossing the milestone of 500 completed projects with a 95% client satisfaction rate.",
    icon: TrendingUp,
    color: "bg-orange-100 text-orange-600 border-orange-200"
  },
  {
    year: "Today",
    title: "A Global Powerhouse",
    desc: "Today, Vornex Global Organisation stands as a recognized benchmark in enterprise consulting and sales strategy, driving growth across 15+ diverse industries.",
    icon: Globe2,
    color: "bg-green-100 text-green-600 border-green-200"
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Chapter 1: The Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7fd] via-white to-white opacity-80" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 mt-10">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Chapter I: The Spark</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-gray-900 leading-[1.1] tracking-tight">
            Every great enterprise <br className="hidden md:block"/> starts with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">vision.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Ours was simple yet ambitious: to redefine leadership, empower entrepreneurs, and transform businesses across the globe.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-gray-400 z-10">
          <span className="text-sm font-semibold uppercase tracking-widest mb-2">Explore Our Journey</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Chapter 2: The Journey Timeline */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-24">
            <span className="text-sm font-bold tracking-widest text-primary uppercase block mb-4">Chapter II: The Climb</span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-gray-900">The Journey of Admire</h2>
          </div>

          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-purple-100 to-green-100 md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                  
                  {/* Icon Node */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white ${item.color} shadow-xl flex items-center justify-center z-10`}>
                    <item.icon className="w-7 h-7" />
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Content Box */}
                  <div className="pl-24 md:pl-0 md:w-1/2">
                    <div className={`bg-gray-50 p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 ${i % 2 === 0 ? 'md:mr-12 text-left md:text-right' : 'md:ml-12 text-left'}`}>
                      <span className="inline-block px-4 py-1.5 rounded-full bg-white text-gray-600 font-bold text-xs uppercase tracking-wider shadow-sm mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Our Compass */}
      <section className="py-32 bg-[#fafafa] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-sm font-bold tracking-widest text-primary uppercase block mb-4">Chapter III: Our Compass</span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">Guided by Purpose</h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Every step of our journey has been directed by a steadfast commitment to our core philosophies. This is what drives us forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">To empower enterprises to achieve unprecedented growth through strategic excellence and relentless innovation.</p>
            </div>
            
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">To be the globally recognized benchmark for sales and marketing consulting, setting the standard for the industry.</p>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-gray-900 mb-4">Unwavering Integrity</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">We believe true success is built on trust. We operate with absolute transparency and ethical standards in everything we do.</p>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-gray-900 mb-4">Relentless Excellence</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">Good is the enemy of great. We commit to delivering the absolute highest quality of service and results, without compromise.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chapter 4: The Architects (Leadership Team) */}
      <section className="py-32 bg-white container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-primary uppercase block mb-4">Chapter IV: The Architects</span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">The Minds Behind the Vision</h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            A journey is only as extraordinary as the people leading it. Meet the architects who have shaped our success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, i) => (
             <div key={i} className="flex flex-col rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
               <div className="h-[280px] w-full relative">
                 <img src={leader.image} alt={leader.name} className="absolute inset-0 w-full h-full object-cover object-top" />
               </div>
               <div className="p-8 text-center flex-1 flex flex-col items-center" style={{ backgroundColor: leader.shade }}>
                 <span 
                   className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border"
                   style={{ color: leader.color, borderColor: `${leader.color}40`, backgroundColor: `${leader.color}10` }}
                 >
                   {leader.role}
                 </span>
                 <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{leader.name}</h3>
                 <p className="text-gray-600 text-sm leading-relaxed font-medium">
                   {leader.bio}
                 </p>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* Chapter 5: The Next Chapter (CTA) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <span className="text-sm font-bold tracking-widest text-blue-400 uppercase block mb-6">Chapter V: The Next Frontier</span>
              <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
                Our story is still <br className="hidden md:block"/> being written.
              </h2>
              <p className="text-xl text-gray-300 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                Operating across multiple continents, we are actively shaping the future of global enterprise. Be a part of our next chapter.
              </p>
              
              <Link href="/contact">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-bold h-16 px-10 rounded-full text-lg shadow-xl hover:-translate-y-1 transition-all duration-300">
                  Partner With Us
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
