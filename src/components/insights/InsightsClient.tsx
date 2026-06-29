"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "The Future of Enterprise Sales in 2027",
    category: "Business Strategy",
    desc: "Discover how AI and automation are reshaping the landscape of B2B sales and what your company needs to do to stay ahead.",
    author: "Editorial Team",
    date: "Jun 27, 2026",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    content: "The landscape of B2B sales is undergoing a massive transformation. As we approach 2027, the integration of Artificial Intelligence into every layer of the sales funnel is no longer optional—it's mandatory. Automation is taking over routine tasks, allowing sales professionals to focus on building deeper, strategic relationships. Companies that fail to adapt their tech stacks will find themselves outpaced by leaner, more agile competitors who can predict customer needs before they even arise."
  },
  {
    id: 2,
    title: "Mastering Global Market Expansion",
    category: "Leadership",
    desc: "Key strategies for scaling your enterprise across international borders without losing your core culture.",
    author: "James Sterling",
    date: "Jun 22, 2026",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    content: "Expanding globally is a milestone for any enterprise, but it comes with unique cultural and operational hurdles. The key to successful expansion is localization while maintaining a unified corporate identity. Leaders must be willing to delegate authority to regional managers who understand the local nuances. Furthermore, ensuring that your core company values translate effectively across different languages and cultural norms is critical to maintaining a cohesive global workforce."
  },
  {
    id: 3,
    title: "The Psychology of High-Ticket Closing",
    category: "Sales",
    desc: "Understanding the behavioral economics and psychology behind successfully closing multi-million dollar B2B deals.",
    author: "Elena Rostova",
    date: "Jun 15, 2026",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    content: "Closing high-ticket deals requires a profound understanding of human psychology. It's rarely about features; it's about mitigating risk and building absolute trust. Decision-makers in enterprise environments are putting their careers on the line when they sign multi-million dollar contracts. A successful closer must act as a trusted consultant, identifying the underlying fears of the stakeholders and systematically addressing them through logic, social proof, and unwavering confidence."
  },
  {
    id: 4,
    title: "Data-Driven Marketing in a Privacy-First World",
    category: "Marketing",
    desc: "How to leverage advanced analytics and personalization while respecting consumer privacy laws globally.",
    author: "Marcus Chen",
    date: "Jun 10, 2026",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    content: "With GDPR, CCPA, and the phasing out of third-party cookies, marketers are navigating uncharted territories. The focus must shift toward zero-party and first-party data. By building transparent value exchanges, brands can encourage users to willingly share their information. The marketing strategies that will win in the future are those that respect user privacy while utilizing predictive modeling and AI on aggregated data to deliver highly personalized experiences without crossing the line."
  },
  {
    id: 5,
    title: "Building Resilient Leadership Teams",
    category: "Leadership",
    desc: "The blueprint for cultivating agile, resilient executives capable of navigating economic uncertainties.",
    author: "Editorial Team",
    date: "Jun 02, 2026",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    content: "Resilience starts at the top. A leadership team that panics during economic downturns will inevitably pass that anxiety down the chain of command. Cultivating resilience involves training executives to separate signal from noise, make swift decisions with incomplete information, and communicate with radical transparency. We explore the daily habits and mental frameworks used by top Fortune 500 CEOs to stay grounded and focused when navigating crisis."
  },
  {
    id: 6,
    title: "Optimizing Your Corporate Strategy",
    category: "Business Strategy",
    desc: "A step-by-step framework to audit, refine, and execute your long-term corporate vision effectively and efficiently.",
    author: "James Sterling",
    date: "May 28, 2026",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    content: "Strategy without execution is merely a hallucination. Many organizations spend months crafting the perfect corporate strategy, only to see it fail during implementation. The missing link is alignment. Every department, from marketing to product development, must understand how their daily KPIs tie directly back to the overarching corporate vision. This article provides a proven framework for auditing your current strategy, identifying execution gaps, and realigning your teams for massive growth."
  }
];

export function InsightsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="pt-24 pb-16 bg-background min-h-[100svh]">
        <section className="py-20 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">Insights & News</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest trends in global business, marketing, and leadership.
            </p>
            <div className="flex items-center max-w-md mx-auto bg-white dark:bg-white/5 rounded-full border border-border px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all">
              <Search className="w-5 h-5 text-muted-foreground mr-2" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="rounded-full px-6">Search</Button>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4 md:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold font-heading mb-2">No articles found</h3>
              <p className="text-muted-foreground">We couldn't find any articles matching your search query.</p>
              <Button variant="outline" className="mt-6" onClick={() => setSearchQuery("")}>Clear Search</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article 
                  key={article.id} 
                  onClick={() => setSelectedArticle(article)}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group flex flex-col cursor-pointer"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">{article.category}</div>
                    <h2 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors leading-tight">{article.title}</h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">{article.desc}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4 mt-auto">
                      <span className="flex items-center gap-2"><User className="w-4 h-4" /> {article.author}</span>
                      <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative my-auto border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full h-64 md:h-80 relative bg-muted">
                <img src={selectedArticle.img} alt={selectedArticle.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 md:left-10 text-white">
                  <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">{selectedArticle.category}</div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight">{selectedArticle.title}</h2>
                </div>
              </div>
              
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 border-b border-border pb-6">
                  <span className="flex items-center gap-2"><User className="w-5 h-5" /> {selectedArticle.author}</span>
                  <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> {selectedArticle.date}</span>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6 font-medium text-foreground/90">
                    {selectedArticle.desc}
                  </p>
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                    {selectedArticle.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
