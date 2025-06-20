
import { useEffect, useRef } from 'react';

const OnboardingSection = () => {
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-system-blue/10 to-electric-blue/10 rounded-3xl animate-float transform rotate-12" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-electric-blue/8 to-system-blue/8 rounded-2xl animate-float transform -rotate-12" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-system-blue/6 to-electric-blue/6 rounded-full animate-float transform rotate-45" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center bg-system-blue/10 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl mr-3">📋</span>
              <span className="text-system-blue font-semibold">Custom Onboarding</span>
            </div>

            <h2 className="text-display-md font-display font-black text-deep-black mb-6">
              Say goodbye to <span className="text-gradient">paperwork</span>
            </h2>

            <p className="text-xl text-silver mb-8 leading-relaxed">
              Streamline your tenant onboarding process by collecting all details and documents digitally. Customize the data fields, ensuring smooth and secure onboarding without the hassle of paperwork.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Digital document collection",
                "Custom data field configuration",
                "Secure Emirates ID verification",
                "Automated form validation",
                "Real-time progress tracking"
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-2 h-2 bg-system-blue rounded-full mr-4"></div>
                  <span className="text-charcoal font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Explore Onboarding Features
            </button>
          </div>

          {/* Onboarding Interface Mockup */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main Onboarding Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-system-blue rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">📋</span>
                    </div>
                    <h3 className="text-2xl font-bold text-deep-black">Additional Information</h3>
                  </div>
                  <div className="w-20 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">UAE ID</span>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  {[
                    { field: "Passport Number", checked: true },
                    { field: "UAE ID number", checked: true },
                    { field: "Present photo", checked: true },
                    { field: "Medical History", checked: true },
                    { field: "Driving License", checked: true },
                    { field: "Letter of employment", checked: true }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-charcoal font-medium">{item.field}</span>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">✏️</span>
                        <div className={`w-4 h-4 rounded ${item.checked ? 'bg-system-blue' : 'border border-gray-300'} flex items-center justify-center`}>
                          {item.checked && <span className="text-white text-xs">✓</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Button */}
                <button className="mt-4 text-system-blue font-medium text-sm flex items-center">
                  + Add additional information
                </button>
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

export default OnboardingSection;
