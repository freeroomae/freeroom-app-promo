
import { useEffect, useRef } from 'react';
import { Smartphone, Monitor } from 'lucide-react';

const SocialProofSection = () => {
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

  const testimonials = [
    {
      quote: "Our phones would never stop ringing before FreeRoom. 3 years of struggle, and finally we have time for family. The automated systems have been a game-changer for our operations.",
      author: "XU Lifestyle",
      role: "FreeRoom user since 2024",
      delay: "0s"
    },
    {
      quote: "We were using too many apps to get things done... now we have just one. FreeRoom has consolidated everything we need into a single, powerful platform.",
      author: "Hyphen", 
      role: "FreeRoom user since 2023",
      delay: "0.2s"
    }
  ];

  const platformAvailability = [
    { platform: "iOS", icon: <Smartphone className="w-6 h-6" />, description: "iPhone & iPad apps" },
    { platform: "Android", icon: <Smartphone className="w-6 h-6" />, description: "Mobile application" },
    { platform: "Web", icon: <Monitor className="w-6 h-6" />, description: "Browser-based platform" }
  ];

  return (
    <section ref={sectionRef} className="py-32 premium-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 section-fade-in">
          <h2 className="text-display-md font-display font-black text-white mb-6">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Hear from property managers who've transformed their operations
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="section-fade-in glass-effect rounded-3xl p-8 hover-lift"
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="text-white/90 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-system-blue to-electric-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.split(' ')[0][0]}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Availability */}
        <div className="section-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl font-display font-bold mb-4">Accessible On</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {platformAvailability.map((platform, index) => (
              <div key={index} className="text-center glass-effect rounded-2xl p-6 hover-lift">
                <div className="text-white mb-3 flex justify-center">{platform.icon}</div>
                <div className="text-white font-bold text-lg mb-2">{platform.platform}</div>
                <div className="text-white/70 text-sm">{platform.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className="section-fade-in mt-20" style={{ animationDelay: '0.6s' }}>
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl font-display font-bold mb-4">Coming Soon</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['Amenities Booking', 'Visitor Management', 'Asset Management', 'Planned Preventative Maintenance', 'Channel Management', 'Lead Management'].map((feature, index) => (
                <span key={index} className="bg-white/10 text-white/80 px-4 py-2 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
