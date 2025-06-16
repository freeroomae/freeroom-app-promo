
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
            <h1 className="text-display-xl lg:text-display-xl font-display font-black text-white mb-6 animate-fade-in-up">
              The Future of
              <span className="text-gradient block">Innovation</span>
              is Here
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 mb-8 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Revolutionary technology that transforms how you work. 
              Experience the difference that premium quality makes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift animate-glow">
                Discover Now
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift glass-effect">
                Watch Demo
              </button>
            </div>

            <p className="text-white/60 text-sm mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Trusted by 10,000+ industry leaders worldwide
            </p>
          </div>

          {/* 3D Element */}
          <div className="flex justify-center lg:justify-end">
            <div 
              ref={hero3DRef}
              className="relative w-80 h-80 lg:w-96 lg:h-96 animate-float"
            >
              {/* Main 3D Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl">
                <div className="absolute inset-4 bg-gradient-to-br from-system-blue/30 to-electric-blue/30 rounded-2xl"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-white/10 to-transparent rounded-xl border border-white/10"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-system-blue/50 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-electric-blue/50 rounded-full blur-sm animate-pulse delay-500"></div>
                
                {/* Center Glow */}
                <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-glow"></div>
              </div>
              
              {/* Shadow */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-black/20 rounded-full blur-xl"></div>
            </div>
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
