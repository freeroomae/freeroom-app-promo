
import { useEffect, useRef } from 'react';

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
          {/* 3D Visual Element */}
          <div className="relative animate-on-scroll order-2 lg:order-1" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main 3D Card */}
              <div className="bg-gradient-to-br from-white to-platinum rounded-3xl p-8 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-system-blue/20 to-electric-blue/20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 animate-float">
                    📱
                  </div>
                  <h3 className="text-2xl font-bold text-deep-black mb-2">Tenant Portal</h3>
                  <p className="text-silver">Digital experience</p>
                </div>

                {/* Mock App Interface */}
                <div className="space-y-4">
                  <div className="bg-system-blue/10 rounded-xl p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-system-blue rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">JD</div>
                      <div>
                        <div className="font-medium text-charcoal">John Doe</div>
                        <div className="text-xs text-silver">Apt 204</div>
                      </div>
                    </div>
                    <div className="text-sm text-system-blue font-medium">Lease expires in 45 days</div>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
                      <span className="text-sm text-charcoal">E-Signature</span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Complete</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
                      <span className="text-sm text-charcoal">Document Upload</span>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Pending</span>
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
              <span className="text-3xl mr-3">📱</span>
              <span className="text-white font-semibold">Tenant Management</span>
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
              Explore Tenant Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenantManagementSection;
