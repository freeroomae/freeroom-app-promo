
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
    <section ref={sectionRef} className="py-32 bg-pure-white relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-system-blue/5 to-electric-blue/5 rounded-3xl animate-float transform rotate-12" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-electric-blue/5 to-system-blue/5 rounded-2xl animate-float transform -rotate-12" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-display-md font-display font-black text-deep-black mb-6">
            Why Property Managers Choose <span className="text-gradient">FreeRoom</span>
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage properties efficiently, all in one place
          </p>
        </div>

        {/* Features Grid with 3D Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="section-fade-in group hover-lift feature-card-3d"
              style={{ animationDelay: feature.delay }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:border-system-blue/20 group-hover:transform group-hover:rotateY-2 group-hover:translateZ-4">
                {/* 3D Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-system-blue/10 to-electric-blue/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotateZ-6 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-deep-black mb-4 group-hover:text-system-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-silver leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* 3D Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-system-blue font-semibold text-sm inline-flex items-center">
                    Learn more 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 section-fade-in" style={{ animationDelay: '1.2s' }}>
          {[
            { value: "99.97%", label: "Uptime Rate" },
            { value: "90%", label: "Reduction in Dues" },
            { value: "1000+", label: "Properties Managed" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="stat-card-3d transition-all duration-500 group-hover:transform group-hover:translateY-2 group-hover:scale-105">
                <div className="text-4xl font-display font-black text-system-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-silver font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
