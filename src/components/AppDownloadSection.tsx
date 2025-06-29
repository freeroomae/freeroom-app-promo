
import { useEffect, useRef } from 'react';
import { Building2, Users, Smartphone, Zap, Lock, BarChart3, Monitor } from 'lucide-react';

const AppDownloadSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.section-fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-system-blue to-electric-blue relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-3xl animate-float transform rotate-12" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/8 rounded-2xl animate-float transform -rotate-12" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/6 rounded-full animate-float transform rotate-45" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-display-md font-display font-black text-white mb-6">
            Download Our <span className="text-gradient">Mobile Apps</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get FreeRoom on your mobile device for seamless property management on the go
          </p>
        </div>

        {/* App Categories */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Landlords & Property Managers */}
          <div className="section-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                For Landlords & Property Managers
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Comprehensive property management suite with all the tools you need
              </p>
            </div>

            <div className="space-y-4">
              {/* iOS App */}
              <a 
                href="https://apps.apple.com/ae/app/freeroom-pms/id6746398512"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-system-blue" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg">Download for iOS</div>
                  <div className="text-white/70 text-sm">Available on the App Store</div>
                </div>
                <div className="text-white/60 group-hover:text-white transition-colors duration-300">
                  →
                </div>
              </a>

              {/* Android App */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.pms.freeroomoperator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg">Download for Android</div>
                  <div className="text-white/70 text-sm">Get it on Google Play</div>
                </div>
                <div className="text-white/60 group-hover:text-white transition-colors duration-300">
                  →
                </div>
              </a>
            </div>
          </div>

          {/* For Tenants */}
          <div className="section-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                For Tenants
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Find your perfect home and manage your tenancy with ease
              </p>
            </div>

            <div className="space-y-4">
              {/* iOS App */}
              <a 
                href="https://apps.apple.com/ae/app/freeroom-tenant/id6745478503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-system-blue" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg">Download for iOS</div>
                  <div className="text-white/70 text-sm">Available on the App Store</div>
                </div>
                <div className="text-white/60 group-hover:text-white transition-colors duration-300">
                  →
                </div>
              </a>

              {/* Android App */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.pms.freeroom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg">Download for Android</div>
                  <div className="text-white/70 text-sm">Get it on Google Play</div>
                </div>
                <div className="text-white/60 group-hover:text-white transition-colors duration-300">
                  →
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-20 section-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Quick property searches and instant bookings"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Secure & Reliable",
                description: "Bank-grade security for all your transactions"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Real-time Analytics",
                description: "Track your portfolio performance on the go"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center glass-effect rounded-2xl p-6 hover-lift">
                <div className="text-white mb-4 flex justify-center">{feature.icon}</div>
                <div className="text-white font-bold text-lg mb-2">{feature.title}</div>
                <div className="text-white/70 text-sm">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
