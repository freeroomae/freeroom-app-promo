
import { useEffect, useRef } from 'react';
import { CreditCard, PieChart, TrendingUp, Calculator } from 'lucide-react';

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
              <div className="premium-icon w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
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
                { text: "Bulk invoicing on autopilot", icon: Calculator },
                { text: "WhatsApp & Email payment reminders", icon: TrendingUp },
                { text: "Multiple payment methods via Tap Pay", icon: CreditCard },
                { text: "PDC management & tracking", icon: PieChart },
                { text: "Real-time financial reporting", icon: TrendingUp }
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="premium-icon w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-charcoal font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <button className="premium-button text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Explore Finance Features
            </button>
          </div>

          {/* FreeRoom Dashboard Mockup */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.4s' }}>
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
                      <p className="text-xs text-silver">Find Your Space, Live Your Dream</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">💬</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-xs font-bold">M</span>
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
                    <div className="text-xl font-bold text-deep-black">734</div>
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

                {/* Collection Section */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-green-600 text-sm">💰</span>
                      </div>
                      <h4 className="font-semibold text-deep-black">Collection</h4>
                    </div>
                    <select className="text-sm border border-gray-200 rounded-lg px-2 py-1">
                      <option>December</option>
                    </select>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-green-500 flex-1 animate-pulse" style={{ width: '85%' }}></div>
                      <div className="bg-red-400" style={{ width: '15%' }}></div>
                    </div>
                  </div>

                  {/* Collection Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                        <span className="text-sm text-charcoal">Pending</span>
                      </div>
                      <span className="text-sm font-semibold text-red-500">AED 2,10,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm text-charcoal">Received</span>
                      </div>
                      <span className="text-sm font-semibold text-green-600">AED 15,09,300</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-charcoal">Total collection</span>
                        <span className="text-lg font-bold text-deep-black">AED 17,19,300</span>
                      </div>
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
