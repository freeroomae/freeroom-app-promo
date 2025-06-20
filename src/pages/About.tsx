
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { Shield, Users, Globe, Award, CheckCircle } from 'lucide-react';

const About = () => {
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

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const uniqueFeatures = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital-First Experience",
      description: "Built with a completely online model—from property search and booking to payments and customer service—making the process seamless and fast."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "All-in-One Solution",
      description: "We manage all business aspects through our comprehensive platform, connecting all stakeholders in the rental ecosystem."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparency & Trust",
      description: "Our verified listings, transparent pricing, and detailed descriptions mean clients know exactly what to expect—no scams or hidden fees."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Accessibility for All",
      description: "Whether it's a student, working professional, or visiting contractor, Free Room has listings tailored to all income levels."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight-blue via-electric-blue to-system-blue">
      <Navigation />
      
      <div ref={sectionRef} className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
              About
              <span className="text-gradient block">FreeRoom</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              UAE's leading digital rental platform, transforming the way people find and manage accommodations
            </p>
          </div>

          {/* Founder's Message */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 mb-16 animate-on-scroll">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Founder's Message</h2>
              <p className="text-system-blue font-semibold">From Anmar Al Kamil, Founder of FreeRoom.ae</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <blockquote className="text-white/90 text-lg leading-relaxed italic border-l-4 border-system-blue pl-6">
                "Renting a room in Dubai has been a headache for too long. Tenants have been overpaying, struggling with fake listings, and wasting time. On the other side, landlords are left chasing unreliable tenants or paying heavy commissions for weak results.
                <br/><br/>
                Noticing these issues, I built Free Room to change everything from the ground up. I've launched and grown businesses across the UAE, but this one comes from personal pain. I've seen how frustrating the rental process can be, especially when all you want is a clean, affordable place to live or a good tenant you can trust.
                <br/><br/>
                FreeRoom is a smarter way to rent. No commissions. No agents. Just a direct connection between tenants and landlords, backed by real listings, verified profiles, and tools that make the entire experience easier.
                <br/><br/>
                Today, Free Room is UAE's leading property rental platform, helping thousands rent with confidence and control. We're not here to patch a broken system, we're here to replace it."
              </blockquote>
            </div>
          </div>

          {/* About FreeRoom */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                About FreeRoom
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Free Room is UAE's leading digital rental platform, offering a seamless experience for finding and managing short-term and long-term accommodations. Whether you're a tenant seeking a cozy studio, a landlord aiming to maximize property visibility, or a property manager desiring streamlined operations, Free Room caters to all.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80">
                  To redefine the rental journey in the UAE and beyond, making renting simple, digital, and efficient for everyone. We're building the future of property rentals through technology, transparency, and trust.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-system-blue mb-2">1000+</div>
                    <div className="text-white/80 text-sm">Happy Tenants</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-system-blue mb-2">500+</div>
                    <div className="text-white/80 text-sm">Properties Listed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-system-blue mb-2">24/7</div>
                    <div className="text-white/80 text-sm">Customer Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-system-blue mb-2">0%</div>
                    <div className="text-white/80 text-sm">Commission Fees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Makes Us Unique */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12 animate-on-scroll">
              What Makes Us Unique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {uniqueFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift animate-on-scroll group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-system-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Commitment */}
          <div className="grid lg:grid-cols-2 gap-8 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift">
              <Shield className="w-8 h-8 text-system-blue mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Data Privacy & Security</h3>
              <p className="text-white/80 leading-relaxed">
                At Free Room, data privacy is a top priority. We are committed to complying with the General Data Protection Regulation (GDPR) to ensure user data is protected and handled responsibly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift">
              <Users className="w-8 h-8 text-system-blue mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Customer Success</h3>
              <p className="text-white/80 leading-relaxed">
                Our dedicated support team is available 24/7 to ensure every rental experience exceeds expectations. We believe in building long-term relationships, not just transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
