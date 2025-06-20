import { useEffect, useRef } from 'react';
import { Building2, Users, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const HeroSection = () => {
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
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-system-blue/10 to-electric-blue/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 bg-gradient-to-br from-electric-blue/8 to-system-blue/8 rounded-3xl animate-float transform rotate-12" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-system-blue/6 to-electric-blue/6 rounded-2xl animate-float transform -rotate-12" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative">
        <div className="text-center animate-on-scroll">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-system-blue/10 to-electric-blue/10 backdrop-blur-sm border border-system-blue/20 rounded-full px-6 py-3 mb-8">
            <div className="premium-icon w-6 h-6 rounded-lg flex items-center justify-center mr-3">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-system-blue font-semibold">AI-Powered Property Management</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display-2xl font-display font-black text-deep-black mb-8">
            Transform Your Property Management with{' '}
            <span className="text-gradient">FreeRoom</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-silver max-w-4xl mx-auto mb-12 leading-relaxed animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            Streamline operations, maximize revenue, and delight tenants with our comprehensive property management platform
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <button className="premium-button text-white px-8 py-4 rounded-full font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-system-blue text-system-blue hover:bg-system-blue hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-on-scroll" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Building2, value: "1000+", label: "Properties Managed", color: "premium-icon" },
              { icon: Users, value: "50K+", label: "Happy Tenants", color: "premium-icon-green" },
              { icon: TrendingUp, value: "90%", label: "Collection Rate", color: "premium-icon-yellow" },
              { icon: Shield, value: "99.9%", label: "Uptime SLA", color: "premium-icon-purple" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-display font-black text-deep-black mb-2">{stat.value}</div>
                <div className="text-silver font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

