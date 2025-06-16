
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const hero3DRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hero3DRef.current) return;
      
      const rect = hero3DRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;
      
      hero3DRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${-rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(50px)
      `;
    };

    const heroElement = hero3DRef.current?.parentElement;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const platformCards = [
    { title: "Finance Management", description: "Automated billing & collections" },
    { title: "Tenant Management", description: "Digital onboarding & renewals" },
    { title: "Facility Management", description: "Maintenance & operations" },
    { title: "Sales Management", description: "Bookings & inventory" }
  ];

  const gccCountries = ["Bahrain", "Kuwait", "Oman", "Qatar", "Saudi Arabia", "UAE"];

  return (
    <section className="relative min-h-screen flex items-center justify-center premium-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-system-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* GCC Launch Banner */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 animate-fade-in-up">
              <span className="text-2xl mr-2">🚀</span>
              <span className="text-white font-semibold">Now Launching in GCC</span>
            </div>

            <h1 className="text-display-xl lg:text-display-xl font-display font-black text-white mb-6 animate-fade-in-up">
              Complete Property
              <span className="text-gradient block">Management</span>
              Solution
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 mb-8 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Streamline your property operations with FreeRoom's all-in-one platform. 
              Manage finances, tenants, facilities, and sales from a single dashboard.
            </p>

            {/* GCC Countries */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {gccCountries.map((country, index) => (
                <span key={index} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  {country}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift animate-glow">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift glass-effect">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Platform Preview Cards */}
          <div className="grid grid-cols-2 gap-4">
            {platformCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-white/70 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
