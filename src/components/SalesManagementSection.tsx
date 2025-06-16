
import { useEffect, useRef } from 'react';

const SalesManagementSection = () => {
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
    <section ref={sectionRef} className="py-32 premium-gradient relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-16 w-40 h-40 bg-gradient-to-br from-white/10 to-system-blue/10 rounded-3xl animate-float transform -rotate-12" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-24 w-32 h-32 bg-gradient-to-br from-system-blue/10 to-white/10 rounded-2xl animate-float transform rotate-12" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-white/8 to-system-blue/8 rounded-full animate-float transform rotate-45" style={{ animationDelay: '7s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Visual Element */}
          <div className="relative animate-on-scroll order-2 lg:order-1" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main 3D Card */}
              <div className="bg-gradient-to-br from-white to-platinum rounded-3xl p-8 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-system-blue/20 to-electric-blue/20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 animate-float">
                    📊
                  </div>
                  <h3 className="text-2xl font-bold text-deep-black mb-2">Sales Dashboard</h3>
                  <p className="text-silver">Booking insights</p>
                </div>

                {/* Mock Sales Interface */}
                <div className="space-y-4">
                  <div className="bg-system-blue/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-charcoal">Occupancy Rate</span>
                      <span className="text-system-blue font-bold">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-system-blue h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                      <div className="text-lg font-bold text-system-blue">47</div>
                      <div className="text-xs text-silver">Units Occupied</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                      <div className="text-lg font-bold text-electric-blue">3</div>
                      <div className="text-xs text-silver">Available</div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="text-sm font-medium text-green-800">New Booking</div>
                    <div className="text-xs text-green-600">Apt 205 - Move-in: Jan 15</div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/30 to-system-blue/30 rounded-xl animate-float transform rotateZ-6" style={{ animationDelay: '4s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-system-blue/25 to-white/25 rounded-lg animate-float transform -rotateZ-6" style={{ animationDelay: '6s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll order-1 lg:order-2">
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl mr-3">📊</span>
              <span className="text-white font-semibold">Sales Management</span>
            </div>

            <h2 className="text-display-md font-display font-black text-white mb-6">
              Bookings & <span className="text-gradient">Inventory</span>
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Manage your property portfolio with intelligent booking systems, real-time inventory tracking, and streamlined approval workflows for maximum occupancy.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Smart booking management system",
                "Real-time inventory tracking",
                "Lead processing & approvals",
                "Property listing optimization",
                "Occupancy rate analytics"
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-white hover:bg-white/90 text-charcoal px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Explore Sales Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesManagementSection;
