
import { useEffect, useRef } from 'react';

const DigitalAgreementsSection = () => {
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
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl mr-3">✍️</span>
              <span className="text-white font-semibold">Digital Agreements</span>
            </div>

            <h2 className="text-display-md font-display font-black text-white mb-6">
              Fast-track lease signing with <span className="text-gradient">ZohoSign</span>
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              With ZohoSign integration, digital lease agreements are signed quickly and securely, automate the entire process and ensure compliance with easy document tracking, verification, & legally binding e-signatures.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Secure digital signatures",
                "Automated document workflow",
                "Legal compliance tracking",
                "Real-time signing status",
                "Document verification & audit trail"
              ].map((feature, index) => (
                <div key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-white hover:bg-white/90 text-charcoal px-8 py-4 rounded-full font-semibold transition-all duration-300 hover-lift animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              Explore Digital Signing
            </button>
          </div>

          {/* ZohoSign Interface Mockup */}
          <div className="relative animate-on-scroll order-1 lg:order-2" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform-gpu perspective-1000">
              {/* Main ZohoSign Card */}
              <div className="bg-gradient-to-br from-white to-platinum rounded-3xl p-8 shadow-2xl border border-gray-100 hover-lift feature-card-3d transform rotateY-2 translateZ-4">
                {/* ZohoSign Logo */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      <div className="text-2xl font-bold">Z</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-deep-black mb-2">Zoho Sign</h3>
                </div>

                {/* Agreement Document Preview */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-600 mb-2">RESIDENT PARTICULARS</div>
                  <div className="text-xs text-gray-500 mb-4">Name: Sandra John</div>
                  
                  <div className="text-sm text-gray-600 mb-2">PARENT GUARDIAN PARTICULARS</div>
                  <div className="text-xs text-gray-500 mb-4">Name: Parent</div>
                  
                  <div className="text-sm text-gray-600 mb-2">STANDARD TERMS & CONDITIONS FOR RESIDENTIAL ACCOMMODATION SERVICE</div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    The Application Form, must with the Terms and Conditions (hereinafter the contract) as a binding...
                  </div>
                </div>

                {/* Confirmation Checkbox */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div className="text-sm text-green-800">
                      I confirm that I have read and understood the <span className="underline">"Electronic Record and Signature Disclosure"</span> and consent to use electronic records and signatures.
                    </div>
                  </div>
                </div>

                {/* Sign Button */}
                <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Agree & Continue
                </button>
              </div>

              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/30 to-system-blue/30 rounded-xl animate-float transform rotateZ-6" style={{ animationDelay: '4s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-system-blue/25 to-white/25 rounded-lg animate-float transform -rotateZ-6" style={{ animationDelay: '6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAgreementsSection;
