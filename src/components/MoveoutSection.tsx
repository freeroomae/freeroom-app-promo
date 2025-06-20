import { useEffect, useRef } from 'react';
const MoveoutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="py-32 premium-gradient relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 right-16 w-40 h-40 bg-gradient-to-br from-white/10 to-green-500/10 rounded-3xl animate-float transform -rotate-12" style={{
        animationDelay: '3s'
      }}></div>
        <div className="absolute bottom-20 left-24 w-32 h-32 bg-gradient-to-br from-green-500/10 to-white/10 rounded-2xl animate-float transform rotate-12" style={{
        animationDelay: '5s'
      }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-white/8 to-green-500/8 rounded-full animate-float transform rotate-45" style={{
        animationDelay: '7s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl mr-3">🏠</span>
              <span className="text-white font-semibold">Move-out Management</span>
            </div>

            <h2 className="text-display-md font-display font-black text-white mb-6">
              Handle move-outs & deposits with <span className="text-gradient">confidence</span>
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Simplify the move-out process while ensuring that deposits are returned promptly and accurately. Track move-out dates, conduct inspections, and handle refunds with transparency.
            </p>

            <div className="space-y-4 mb-8">
              {["Automated move-out scheduling", "Digital inspection checklists", "Transparent deposit calculations", "Secure refund processing", "Document & photo evidence"].map((feature, index) => <div key={index} className="flex items-center animate-on-scroll" style={{
              animationDelay: `${0.2 + index * 0.1}s`
            }}>
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>)}
            </div>

            <button className="bg-white hover:bg-white/90 text-charcoal px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll" style={{
            animationDelay: '0.8s'
          }}>
              Explore Move-out Features
            </button>
          </div>

          {/* Move-out Interface Mockup */}
          <div className="relative animate-on-scroll order-2 lg:order-2" style={{
          animationDelay: '0.4s'
        }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Payment Details Card */}
              <div className="bg-gradient-to-br from-white to-platinum rounded-3xl p-6 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4 mb-4">
                {/* Tenant Info */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-black">Md Salim</h3>
                    <p className="text-sm text-gray-500">123 • FreeRoom</p>
                  </div>
                </div>

                <div className="text-red-600 text-sm mb-4">🚫 Move-out Jan 25, 2025</div>

                <div className="text-sm font-semibold text-charcoal mb-3">Payment details</div>

                {/* Payment Breakdown */}
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">💳</span>
                      <span className="text-sm text-blue-800">Advance payment</span>
                    </div>
                    <span className="font-bold text-blue-600">AED 5,000</span>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-purple-600 mr-2">🔒</span>
                      <span className="text-sm text-purple-800">Refundable security</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">AED 5,000</div>
                      <button className="text-xs text-purple-500 underline">Adjust dues</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Move-out Details Card */}
              <div className="bg-gradient-to-br from-white to-platinum rounded-3xl p-6 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                {/* Tenant Info */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-black">Sahil Khan</h3>
                    <p className="text-sm text-gray-500">1 • FreeRoom</p>
                  </div>
                </div>

                <div className="text-sm font-semibold text-charcoal mb-3">Move-out details</div>

                {/* Days Counter */}
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="#fbbf24" strokeWidth="6" fill="none" strokeDasharray="176" strokeDashoffset="52" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">60</div>
                        <div className="text-xs text-orange-500">days left</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-deep-black">May 15, 2025</div>
                    <div className="text-sm text-gray-500">Move-out date</div>
                  </div>
                </div>

                {/* Agreement Status */}
                <div className="space-y-2 mb-4">
                  <div className="text-sm font-semibold text-charcoal">Agreement details</div>
                  
                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-green-800">Lock-in period served</span>
                    </div>
                    <span className="text-xs text-gray-500">July 05, 2024</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-green-800 ml-2">Notice period served</span>
                      <span className="text-xs text-gray-500">May 05, 2025</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-gray-600 ml-2">Agreement end date</span>
                      <span className="text-xs text-gray-500">May 15, 2025</span>
                    </div>
                  </div>
                </div>

                {/* Calculate Rent */}
                <div className="text-sm font-semibold text-charcoal mb-2">Calculate rent till</div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="moveout" className="mr-2" />
                    <span className="text-sm text-gray-700">Move out date</span>
                    <span className="text-xs text-gray-500 ml-auto">May 15, 2025</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="moveout" className="mr-2" />
                    <span className="text-sm text-gray-700">Other date</span>
                  </label>
                </div>
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/30 to-green-500/30 rounded-xl animate-float transform rotateZ-6" style={{
              animationDelay: '4s'
            }}></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500/25 to-white/25 rounded-lg animate-float transform -rotateZ-6" style={{
              animationDelay: '6s'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MoveoutSection;