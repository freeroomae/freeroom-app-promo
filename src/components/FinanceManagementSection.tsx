
import { useEffect, useRef } from 'react';

const FinanceManagementSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-pure-white relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-br from-system-blue/10 to-electric-blue/10 rounded-3xl animate-float transform rotate-12" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-gradient-to-br from-electric-blue/8 to-system-blue/8 rounded-2xl animate-float transform -rotate-12" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-system-blue/6 to-electric-blue/6 rounded-full animate-float transform rotate-45" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center bg-system-blue/10 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl mr-3">💰</span>
              <span className="text-system-blue font-semibold">Finance Management</span>
            </div>

            <h2 className="text-display-md font-display font-black text-deep-black mb-6">
              Automated Billing & <span className="text-gradient">Collections</span>
            </h2>

            <p className="text-xl text-silver mb-8 leading-relaxed">
              Streamline rent collection with automated invoicing, payment reminders, and seamless online payments. Reduce dues by 90% and maintain steady cash flow.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Bulk invoicing on autopilot",
                "WhatsApp & Email payment reminders",
                "Multiple payment methods via Tap Pay",
                "PDC management & tracking",
                "Real-time financial reporting"
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-2 h-2 bg-system-blue rounded-full mr-4"></div>
                  <span className="text-charcoal font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Explore Finance Features
            </button>
          </div>

          {/* 3D Visual Element */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main 3D Card */}
              <div className="bg-gradient-to-br from-white to-platinum rounded-3xl p-8 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-system-blue/20 to-electric-blue/20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 animate-float">
                    💰
                  </div>
                  <h3 className="text-2xl font-bold text-deep-black mb-2">Finance Dashboard</h3>
                  <p className="text-silver">Real-time insights</p>
                </div>

                {/* Mock Dashboard Elements */}
                <div className="space-y-4">
                  <div className="bg-system-blue/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-charcoal">Monthly Collections</span>
                      <span className="text-system-blue font-bold">+90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-system-blue h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-lg font-bold text-system-blue">$127K</div>
                      <div className="text-xs text-silver">Collected</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-lg font-bold text-electric-blue">$13K</div>
                      <div className="text-xs text-silver">Pending</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-system-blue/30 to-electric-blue/30 rounded-xl animate-float transform rotateZ-6" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-electric-blue/25 to-system-blue/25 rounded-lg animate-float transform -rotateZ-6" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceManagementSection;
