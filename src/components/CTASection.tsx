
import { useEffect, useRef } from 'react';

const CTASection = () => {
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

  const benefits = [
    { title: "Time Savings", description: "Automated processes reduce manual work" },
    { title: "Money Savings", description: "90% reduction in rent dues" },
    { title: "Quality Features", description: "99.97% uptime reliability" }
  ];

  const platforms = [
    { name: "iOS", icon: "📱" },
    { name: "Android", icon: "🤖" },
    { name: "Web", icon: "💻" }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-display-md font-display font-black text-deep-black mb-6">
            Ready to Transform Your <span className="text-gradient">Property Management</span>?
          </h2>
          <p className="text-xl text-silver mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of property managers who save time and money with FreeRoom
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift animate-glow">
              Get Started Free
            </button>
            <button className="border-2 border-deep-black text-deep-black hover:bg-deep-black hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift">
              Schedule Demo
            </button>
          </div>

          {/* Platform Badges */}
          <div className="flex justify-center gap-6 mb-8">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-platinum to-white rounded-full px-6 py-3">
                <span className="text-2xl">{platform.icon}</span>
                <span className="font-semibold text-charcoal">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center section-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-display font-bold text-deep-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-silver">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose FreeRoom */}
        <div className="section-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-r from-platinum to-white rounded-3xl p-8">
            <h3 className="text-2xl font-display font-bold text-center text-deep-black mb-6">
              Why Choose FreeRoom
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-system-blue font-bold text-lg mb-2">Single Platform</div>
                <div className="text-charcoal text-sm">Eliminate app juggling with our all-in-one solution</div>
              </div>
              <div className="text-center">
                <div className="text-system-blue font-bold text-lg mb-2">24/7 Availability</div>
                <div className="text-charcoal text-sm">System works around the clock for your business</div>
              </div>
              <div className="text-center">
                <div className="text-system-blue font-bold text-lg mb-2">User-Friendly</div>
                <div className="text-charcoal text-sm">Intuitive design with on-demand training</div>
              </div>
              <div className="text-center">
                <div className="text-system-blue font-bold text-lg mb-2">Cost Effective</div>
                <div className="text-charcoal text-sm">Lower operational costs and eliminate multiple subscriptions</div>
              </div>
              <div className="text-center">
                <div className="text-system-blue font-bold text-lg mb-2">Reliable</div>
                <div className="text-charcoal text-sm">99.97% uptime with bank-level security</div>
              </div>
              <div className="text-center">
                <div className="text-system-blue font-bold text-lg mb-2">Customizable</div>
                <div className="text-charcoal text-sm">Features developed based on user feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
