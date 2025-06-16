
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

  const steps = [
    { number: "1", title: "Sign Up", description: "Create your account in seconds" },
    { number: "2", title: "Configure", description: "Customize to your needs" },
    { number: "3", title: "Launch", description: "Start transforming your work" }
  ];

  const trustIndicators = [
    "30-day money-back guarantee",
    "Cancel anytime", 
    "Dedicated onboarding support",
    "99.9% uptime SLA"
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-display-md font-display font-black text-deep-black mb-6">
            Ready to Transform Your <span className="text-gradient">Future</span>?
          </h2>
          <p className="text-xl text-silver mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who've made the switch. 
            Setup takes less than 5 minutes. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift animate-glow">
              Start Free Trial
            </button>
            <button className="border-2 border-deep-black text-deep-black hover:bg-deep-black hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center section-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-system-blue to-electric-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-bold text-deep-black mb-2">
                {step.title}
              </h3>
              <p className="text-silver">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="section-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-r from-platinum to-white rounded-3xl p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center text-sm text-charcoal">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {indicator}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
