
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
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
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full px-6 py-3 mb-6 border border-blue-200/30">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-blue-600 font-semibold">Maintenance & Operations</span>
            </div>

            <h2 className="text-display-md font-display font-black text-deep-black mb-6">
              Smart <span className="text-gradient">Service Request</span> Management
            </h2>

            <p className="text-xl text-silver mb-8 leading-relaxed">
              Handle maintenance requests efficiently with automated ticket assignment, real-time tracking, and seamless communication between tenants and service providers.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Easy tenant reporting via mobile app",
                "Smart ticket routing & assignment", 
                "Real-time status tracking with photos",
                "Automated escalation workflows",
                "Performance analytics & insights"
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4"></div>
                  <span className="text-charcoal font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll shadow-lg" style={{ animationDelay: '0.8s' }}>
              Explore Maintenance Features
            </button>
          </div>

          {/* Mobile App Interface Mockup */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main Mobile Interface */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-deep-black">Service Request</h3>
                  </div>
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    2
                  </div>
                </div>

                {/* Service Request Cards */}
                <div className="space-y-4">
                  {/* Resolved Request */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-green-800">Ceiling fan not working</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Resolved</span>
                    </div>
                    <div className="text-xs text-green-700 mb-2">Request #02 May 30, 02:49 PM</div>
                    <div className="text-xs text-green-600 bg-green-100 p-2 rounded-lg">
                      Note by you: Fan not working since yesterday. Please repair it soon.
                    </div>
                    
                    {/* Photo attachments */}
                    <div className="flex gap-2 mt-3">
                      <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Assignment info */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-green-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                          <span className="text-xs text-white font-bold">H</span>
                        </div>
                        <span className="text-xs text-green-700 font-medium">Assigned to Haider Ali</span>
                      </div>
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Active Request Options */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <div className="text-xs font-medium text-yellow-800">Raise a Service Request</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="text-xs font-medium text-blue-800">Active Service Requests</div>
                      <div className="text-xs bg-yellow-400 text-white px-2 py-1 rounded-full mt-1 inline-block">2</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl animate-float transform rotateZ-6 shadow-lg" style={{ animationDelay: '3s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500/25 to-green-600/25 rounded-lg animate-float transform -rotateZ-6 shadow-lg" style={{ animationDelay: '5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityManagementSection;
