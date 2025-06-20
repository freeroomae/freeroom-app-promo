
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const hero3DRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hero3DRef.current) return;
      
      const rect = hero3DRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (y / rect.height) * 8;
      const rotateY = (x / rect.width) * 8;
      
      hero3DRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${-rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(30px)
      `;
    };

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

    const heroElement = sectionRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      
      const elements = heroElement.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));

      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        observer.disconnect();
      };
    }
  }, []);

  const platformCards = [
    { title: "Finance Management", description: "Automated billing & collections", icon: "💰" },
    { title: "Tenant Management", description: "Digital onboarding & renewals", icon: "👥" },
    { title: "Facility Management", description: "Maintenance & operations", icon: "🔧" },
    { title: "Sales Management", description: "Bookings & inventory", icon: "📊" }
  ];

  const gccCountries = ["Bahrain", "Kuwait", "Oman", "Qatar", "Saudi Arabia", "UAE"];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center premium-gradient overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-system-blue/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-blue/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-system-blue/6 to-electric-blue/6 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Enhanced 3D Floating Elements */}
        <div className="absolute top-16 left-8 w-16 h-16 bg-gradient-to-br from-system-blue/20 to-electric-blue/20 rounded-xl animate-float backdrop-blur-sm border border-white/10" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-16 w-12 h-12 bg-gradient-to-br from-white/15 to-white/5 rounded-full animate-float backdrop-blur-sm border border-white/10" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-electric-blue/25 to-system-blue/25 rounded-lg animate-float backdrop-blur-sm border border-white/10" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-16 right-8 w-14 h-14 bg-gradient-to-br from-system-blue/30 to-electric-blue/15 rounded-2xl animate-float backdrop-blur-sm border border-white/10" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
          {/* Enhanced Content Section */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* GCC Launch Banner */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 animate-on-scroll hover-lift border border-white/20">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🚀</span>
              <span className="text-white font-semibold text-sm sm:text-base">Now Launching in GCC</span>
            </div>

            {/* Enhanced Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-tight animate-on-scroll">
              Complete Property
              <span className="text-gradient block mt-2">Management</span>
              <span className="block text-white/90 mt-2">Solution</span>
            </h1>
            
            {/* Enhanced Subheading */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              Streamline your property operations with FreeRoom's all-in-one platform. 
              Manage finances, tenants, facilities, and sales from a single dashboard.
            </p>

            {/* Enhanced GCC Countries */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              {gccCountries.map((country, index) => (
                <span key={index} className="bg-white/15 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm hover-lift border border-white/20 transition-all duration-300 hover:bg-white/20">
                  {country}
                </span>
              ))}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <button className="bg-system-blue hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover-lift animate-glow shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover-lift glass-effect">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Enhanced 3D Platform Preview Cards */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.5s' }}>
            <div ref={hero3DRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transform-gpu">
              {platformCards.map((card, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 hover-lift animate-on-scroll card-3d group transition-all duration-500 hover:bg-white/15 hover:border-white/30"
                  style={{ 
                    animationDelay: `${0.6 + index * 0.1}s`,
                    transform: `translateZ(${(index % 2) * 15 + 10}px) rotateY(${(index % 2) * 3 - 1.5}deg)`
                  }}
                >
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-white transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Floating Elements around cards */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-system-blue/30 to-electric-blue/30 rounded-xl animate-float transform rotateZ-6 backdrop-blur-sm border border-white/20" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-electric-blue/25 to-system-blue/25 rounded-lg animate-float transform -rotateZ-6 backdrop-blur-sm border border-white/20" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-full animate-float backdrop-blur-sm border border-white/20" style={{ animationDelay: '5s' }}></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce z-20">
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-2 font-medium">Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/60 rounded-full animate-pulse mt-1 sm:mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;