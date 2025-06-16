
import { useEffect, useRef } from 'react';

const FeaturesSection = () => {
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

  const features = [
    {
      title: "Automated Finance Management",
      description: "Streamline rent collection with automated invoicing, payment reminders, and seamless online payments. Reduce dues by 90% and maintain steady cash flow.",
      icon: "💰",
      delay: "0s"
    },
    {
      title: "Digital Tenant Experience", 
      description: "Say goodbye to paperwork with digital onboarding, e-signatures via ZohoSign, and automated lease renewals. Keep tenants happy with community features.",
      icon: "📱",
      delay: "0.2s"
    },
    {
      title: "Smart Facility Management",
      description: "Handle maintenance requests efficiently with automated ticket assignment, escalation workflows, and real-time analytics for better decision making.",
      icon: "🔧",
      delay: "0.4s"
    },
    {
      title: "Powerful Analytics & Reporting",
      description: "Get instant business insights with comprehensive dashboards, financial reports, and performance analytics to drive growth and profitability.",
      icon: "📊",
      delay: "0.6s"
    },
    {
      title: "Multi-Property Management",
      description: "Manage multiple properties from one unified dashboard. Track occupancy, finances, and operations across your entire portfolio.",
      icon: "🏢",
      delay: "0.8s"
    },
    {
      title: "Seamless Integrations",
      description: "Connect with leading accounting platforms like Zoho, Odoo, and Tally. Integrate with payment gateways and banking systems effortlessly.",
      icon: "🔗",
      delay: "1.0s"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-display-md font-display font-black text-deep-black mb-6">
            Why Property Managers Choose <span className="text-gradient">FreeRoom</span>
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage properties efficiently, all in one place
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="section-fade-in group hover-lift"
              style={{ animationDelay: feature.delay }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:border-system-blue/20">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-system-blue/10 to-electric-blue/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-deep-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-silver leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-system-blue font-semibold text-sm">
                    Learn more →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 section-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="text-center">
            <div className="text-4xl font-display font-black text-system-blue mb-2">99.97%</div>
            <div className="text-silver font-medium">Uptime Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-black text-system-blue mb-2">90%</div>
            <div className="text-silver font-medium">Reduction in Dues</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-black text-system-blue mb-2">1000+</div>
            <div className="text-silver font-medium">Properties Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-black text-system-blue mb-2">24/7</div>
            <div className="text-silver font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
