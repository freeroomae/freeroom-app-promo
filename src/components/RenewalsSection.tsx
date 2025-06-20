import { useEffect, useRef } from 'react';
import { RotateCcw, Calendar, Bell, MessageSquare, BarChart } from 'lucide-react';

const RenewalsSection = () => {
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
        <div className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-3xl animate-float transform rotate-12" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-red-500/8 to-orange-400/8 rounded-2xl animate-float transform -rotate-12" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-orange-400/6 to-red-500/6 rounded-full animate-float transform rotate-45" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Renewals Dashboard Mockup */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main Renewals Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                {/* Tenant Info */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-black">Md. Salim</h3>
                    <p className="text-sm text-gray-500">123 • Free Room</p>
                  </div>
                </div>

                {/* Notice Details */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <div className="text-orange-800 font-semibold mb-2">Notice details</div>
                  <div className="text-orange-600 text-sm">Dues pending</div>
                </div>

                {/* Days Counter */}
                <div className="text-center mb-6">
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="#fbbf24" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="75" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">60</div>
                        <div className="text-xs text-orange-500">days left</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="text-lg font-bold text-deep-black">Nov 30, 2024</div>
                    <div className="text-sm text-gray-500">Move-out date</div>
                  </div>
                </div>

                {/* Agreement Details */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-charcoal mb-2">Agreement details</div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-green-800">Lock-in period served</span>
                    </div>
                    <span className="text-xs text-gray-500">-Sep 06, 2024</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm text-red-800">Notice period served</span>
                    </div>
                    <span className="text-xs text-gray-500">-Dec 05, 2024</span>
                  </div>
                </div>
              </div>

              {/* Feedback Card */}
              <div className="absolute -right-8 -bottom-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-200 animate-float" style={{
              animationDelay: '2s'
            }}>
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-deep-black mb-2">Please rate your experience</div>
                  <div className="flex justify-center space-x-2">
                    {['😊', '😐', '😢'].map((emoji, index) => <div key={index} className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl cursor-pointer hover:bg-yellow-200 transition-colors">
                        {emoji}
                      </div>)}
                  </div>
                  <div className="flex justify-center space-x-4 text-xs text-gray-500 mt-2">
                    <span>Happy</span>
                    <span>Neutral</span>
                    <span>Sad</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold">
                  Submit
                </button>
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400/30 to-red-500/30 rounded-xl animate-float transform rotateZ-6" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center bg-orange-500/10 rounded-full px-6 py-3 mb-6">
              <div className="premium-icon-yellow w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <RotateCcw className="w-5 h-5 text-white" />
              </div>
              <span className="text-orange-600 font-semibold">Renewals & Escalations</span>
            </div>

            <h2 className="text-display-md font-display font-black text-deep-black mb-6">
              Never miss an escalation <span className="text-gradient">again!</span>
            </h2>

            <p className="text-xl text-silver mb-8 leading-relaxed">
              Never let a lease renewal or rent escalation slip through the cracks: automate renewal notifications and rent escalation reminders to stay compliant and ensure timely communication with tenants.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { text: "Automated lease renewal alerts", icon: Bell },
                { text: "Rent escalation notifications", icon: BarChart },
                { text: "Timeline tracking & countdown", icon: Calendar },
                { text: "Tenant feedback collection", icon: MessageSquare },
                { text: "Compliance monitoring", icon: BarChart }
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="premium-icon-yellow w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-charcoal font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Explore Renewal Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenewalsSection;
