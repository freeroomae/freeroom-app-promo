
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
      title: "Intelligent Automation",
      description: "Advanced AI learns your patterns and optimizes workflows automatically. Focus on what matters while technology handles the rest.",
      icon: "🧠",
      delay: "0s"
    },
    {
      title: "Real-Time Collaboration", 
      description: "Seamless teamwork across any device, anywhere. Share insights, make decisions, and drive results together.",
      icon: "🤝",
      delay: "0.2s"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance standards. Your data stays protected, always.",
      icon: "🔒",
      delay: "0.4s"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-display-md font-display font-black text-deep-black mb-6">
            Power Meets <span className="text-gradient">Simplicity</span>
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed">
            Every feature engineered for excellence. Every interaction designed for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
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
                <h3 className="text-2xl font-display font-bold text-deep-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-silver leading-relaxed">
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

        {/* Bottom CTA */}
        <div className="text-center mt-20 section-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="bg-deep-black hover:bg-charcoal text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
