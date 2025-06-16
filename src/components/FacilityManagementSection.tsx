
import { useEffect, useRef } from 'react';

const FacilityManagementSection = () => {
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
    <section ref={sectionRef} className="py-32 bg-platinum relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 right-16 w-44 h-44 bg-gradient-to-br from-system-blue/8 to-electric-blue/8 rounded-3xl animate-float transform rotate-12" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-24 left-20 w-36 h-36 bg-gradient-to-br from-electric-blue/6 to-system-blue/6 rounded-2xl animate-float transform -rotate-12" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-system-blue/5 to-electric-blue/5 rounded-full animate-float transform rotate-45" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center bg-system-blue/10 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl mr-3">🔧</span>
              <span className="text-system-blue font-semibold">Facility Management</span>
            </div>

            <h2 className="text-display-md font-display font-black text-deep-black mb-6">
              Maintenance & <span className="text-gradient">Operations</span>
            </h2>

            <p className="text-xl text-silver mb-8 leading-relaxed">
              Handle maintenance requests efficiently with automated ticket assignment, escalation workflows, and real-time analytics for better decision making.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Easy tenant reporting via app",
                "Smart ticket routing & assignment",
                "Automated escalation workflows",
                "Real-time status tracking",
                "Performance analytics & insights"
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-2 h-2 bg-system-blue rounded-full mr-4"></div>
                  <span className="text-charcoal font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Explore Facility Features
            </button>
          </div>

          {/* 3D Visual Element */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main 3D Card */}
              <div className="bg-gradient-to-br from-white to-pure-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-system-blue/20 to-electric-blue/20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 animate-float">
                    🔧
                  </div>
                  <h3 className="text-2xl font-bold text-deep-black mb-2">Maintenance Hub</h3>
                  <p className="text-silver">Smart workflows</p>
                </div>

                {/* Mock Ticket System */}
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-red-800">High Priority</span>
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Urgent</span>
                    </div>
                    <div className="text-sm text-red-700">AC not working - Apt 305</div>
                    <div className="text-xs text-red-600 mt-1">Assigned to John M.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center justify-between">
                      <span className="text-sm text-yellow-800">Plumbing - Apt 102</span>
                      <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">In Progress</span>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                      <span className="text-sm text-green-800">Electrical - Apt 201</span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-system-blue/30 to-electric-blue/30 rounded-xl animate-float transform rotateZ-6" style={{ animationDelay: '3s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-electric-blue/25 to-system-blue/25 rounded-lg animate-float transform -rotateZ-6" style={{ animationDelay: '5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityManagementSection;
