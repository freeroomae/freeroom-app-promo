
import { useEffect, useRef } from 'react';
import { DollarSign, BarChart3, TrendingUp, PiggyBank, Wallet } from 'lucide-react';

const CollectionSection = () => {
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
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-3xl animate-float transform rotate-12" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/8 to-green-400/8 rounded-2xl animate-float transform -rotate-12" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-green-400/6 to-blue-500/6 rounded-full animate-float transform rotate-45" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center bg-green-500/10 rounded-full px-6 py-3 mb-6">
              <div className="premium-icon-green w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <span className="text-green-600 font-semibold">Smart Collections</span>
            </div>

            <h2 className="text-display-md font-display font-black text-deep-black mb-6">
              Automated Payment <span className="text-gradient">Collections</span>
            </h2>

            <p className="text-xl text-silver mb-8 leading-relaxed">
              Maximize your collection efficiency with automated payment tracking, smart reminders, and real-time financial insights. Monitor pending and received payments seamlessly.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { text: "Real-time payment tracking", icon: BarChart3 },
                { text: "Automated collection reports", icon: TrendingUp },
                { text: "Smart payment reminders", icon: Wallet },
                { text: "Visual collection analytics", icon: BarChart3 },
                { text: "Monthly collection insights", icon: PiggyBank }
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="premium-icon-green w-8 h-8 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-charcoal font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Explore Collection Features
            </button>
          </div>

          {/* Collection Dashboard Mockup */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main Collection Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-black">Collection</h3>
                  </div>
                  <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
                    <option>December</option>
                  </select>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-green-500 animate-pulse" style={{ width: '87%' }}></div>
                    <div className="bg-red-400" style={{ width: '13%' }}></div>
                  </div>
                </div>

                {/* Collection Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                      <span className="text-lg font-medium text-red-800">Pending</span>
                    </div>
                    <span className="text-xl font-bold text-red-600">AED 2,10,000</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-lg font-medium text-green-800">Received</span>
                    </div>
                    <span className="text-xl font-bold text-green-600">AED 15,09,300</span>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-charcoal">Total collection</span>
                      <span className="text-2xl font-bold text-deep-black">AED 17,19,300</span>
                    </div>
                  </div>
                </div>

                {/* Collection Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                    <div className="text-sm text-silver mb-1">Collection Rate</div>
                    <div className="text-xl font-bold text-green-600">87%</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm text-center">
                    <div className="text-sm text-silver mb-1">On Time</div>
                    <div className="text-xl font-bold text-system-blue">92%</div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-xl animate-float transform rotateZ-6" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500/25 to-green-400/25 rounded-lg animate-float transform -rotateZ-6" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
