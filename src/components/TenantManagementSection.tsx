
import { useEffect, useRef } from 'react';
import { MessageCircleMore, FileText } from 'lucide-react';

const TenantManagementSection = () => {
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
    <section ref={sectionRef} className="py-32 bg-charcoal relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-36 h-36 bg-gradient-to-br from-white/10 to-system-blue/10 rounded-3xl animate-float transform -rotate-12" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 right-20 w-28 h-28 bg-gradient-to-br from-system-blue/10 to-white/10 rounded-2xl animate-float transform rotate-12" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-white/8 to-system-blue/8 rounded-full animate-float transform rotate-45" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Property Management Dashboard */}
          <div className="relative animate-on-scroll order-2 lg:order-1" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main Dashboard Card */}
              <div className="bg-gradient-to-br from-white to-platinum rounded-3xl p-6 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-system-blue rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">FR</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-deep-black">FreeRoom</h3>
                      <p className="text-xs text-silver">Property Management</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircleMore className="text-green-600 w-4 h-4" aria-label="Messages" />
                    </div>
                    <div className="w-8 h-8 bg-system-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">W</span>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                    <div className="text-xs text-silver mb-1">Properties</div>
                    <div className="text-xl font-bold text-deep-black">4</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                    <div className="text-xs text-silver mb-1">Units</div>
                    <div className="text-xl font-bold text-deep-black">1000</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                    <div className="text-xs text-silver mb-1">Tenants</div>
                    <div className="text-xl font-bold text-deep-black">572</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                    <div className="text-xs text-silver mb-1">Staff</div>
                    <div className="text-xl font-bold text-deep-black">36</div>
                  </div>
                </div>

                {/* Inventory Section */}
                <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-deep-black">Inventory</h4>
                    <span className="text-sm text-system-blue">View →</span>
                  </div>

                  {/* Occupancy Circle */}
                  <div className="text-center mb-4">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 rounded-full border-8 border-green-500 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-deep-black">100%</div>
                          <div className="text-xs text-silver">Occupancy</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Occupancy Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm text-charcoal">Occupied</span>
                      </div>
                      <div className="text-2xl font-bold text-deep-black">623</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                        <span className="text-sm text-charcoal">Vacant</span>
                      </div>
                      <div className="text-2xl font-bold text-deep-black">0</div>
                    </div>
                  </div>
                </div>

                {/* Tenants Section */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-deep-black">Tenants</h4>
                    <span className="text-sm text-system-blue">→</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <div className="text-xs text-silver mb-1">Move-ins</div>
                      <div className="text-lg font-bold text-deep-black">18</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-red-600 text-sm">↗</span>
                      </div>
                      <div className="text-xs text-silver mb-1">Move-outs</div>
                      <div className="text-lg font-bold text-deep-black">18</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <FileText className="text-blue-600 w-4 h-4" />
                      </div>
                      <div className="text-xs text-silver mb-1">Agreements</div>
                      <div className="text-lg font-bold text-deep-black">18</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/30 to-system-blue/30 rounded-xl animate-float transform rotateZ-6" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-system-blue/25 to-white/25 rounded-lg animate-float transform -rotateZ-6" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll order-1 lg:order-2">
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl mr-3">🏢</span>
              <span className="text-white font-semibold">Property Management</span>
            </div>

            <h2 className="text-display-md font-display font-black text-white mb-6">
              Digital Onboarding & <span className="text-gradient">Renewals</span>
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Say goodbye to paperwork with digital onboarding, e-signatures via ZohoSign, and automated lease renewals. Keep tenants happy with community features.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Paperless document collection",
                "E-signature integration with ZohoSign",
                "Automated lease renewals",
                "Move-out management",
                "Community engagement features"
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-white hover:bg-white/90 text-charcoal px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Explore Property Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenantManagementSection;
