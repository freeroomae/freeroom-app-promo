
import { useEffect, useRef } from 'react';

const SocialProofSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.section-fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime Guaranteed" },
    { number: "150+", label: "Countries Served" },
    { number: "4.9/5", label: "Customer Rating" }
  ];

  const testimonials = [
    {
      quote: "Nexus transformed our entire operation. What used to take weeks now happens in hours. The ROI was immediate and substantial.",
      author: "Sarah Chen",
      role: "CEO, TechCorp",
      delay: "0s"
    },
    {
      quote: "The most intuitive platform we've ever used. Our team adopted it instantly, and productivity increased by 300% in the first month.",
      author: "Michael Rodriguez", 
      role: "Operations Director, Global Solutions",
      delay: "0.2s"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 premium-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-display-md font-display font-black text-white mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center section-fade-in glass-effect rounded-2xl p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl lg:text-5xl font-display font-black text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="section-fade-in glass-effect rounded-3xl p-8 hover-lift"
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="text-white/90 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-system-blue to-electric-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="section-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center text-white/60 text-sm mb-8">
            Trusted by leading companies worldwide
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechCorp', 'GlobalSoft', 'Innovation Labs', 'Future Systems', 'Digital Plus'].map((company, index) => (
              <div key={index} className="text-white/40 font-semibold text-lg hover:text-white/80 transition-colors duration-300">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
