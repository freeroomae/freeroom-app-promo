
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { MapPin, Phone, Mail, Globe, Clock, MessageSquare, Users, Smartphone } from 'lucide-react';

const Contact = () => {
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

  const supportChannels = [
    { icon: <Phone className="w-6 h-6" />, title: "Phone support", description: "Direct phone assistance" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "WhatsApp assistance", description: "Quick messaging support" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "In-app chat", description: "Real-time chat support" },
    { icon: <Mail className="w-6 h-6" />, title: "Email support", description: "Detailed email assistance" }
  ];

  const serviceAreas = [
    "Dubai Marina", "Business Bay", "Deira", "Bur Dubai", 
    "Al Barsha", "Al Nahda", "Jebel Ali", "And many more locations across Dubai"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight-blue via-electric-blue to-system-blue">
      <Navigation />
      
      <div ref={sectionRef} className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
              Get in
              <span className="text-gradient block">Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to transform your rental experience? Whether you're a tenant, landlord, or property manager, our team is here to help.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-lift animate-on-scroll text-center">
              <MapPin className="w-8 h-8 text-system-blue mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Office Address</h3>
              <p className="text-white/80 text-sm">
                Office C5 Floor 31, Prime Tower<br/>
                Marasi Street, Business Bay<br/>
                Dubai, UAE
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-lift animate-on-scroll text-center">
              <Phone className="w-8 h-8 text-system-blue mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Phone</h3>
              <p className="text-white/80 text-sm">+971-04-3230052</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-lift animate-on-scroll text-center">
              <Mail className="w-8 h-8 text-system-blue mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Email</h3>
              <p className="text-white/80 text-sm">Info@freeroom.ae</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-lift animate-on-scroll text-center">
              <Globe className="w-8 h-8 text-system-blue mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Website</h3>
              <p className="text-white/80 text-sm">www.freeroom.ae</p>
            </div>
          </div>

          {/* Customer Support Section */}
          <div className="mb-16 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-8">
                <Clock className="w-12 h-12 text-system-blue mx-auto mb-4" />
                <h2 className="text-3xl font-display font-bold text-white mb-4">24/7 Customer Support</h2>
                <p className="text-white/80 text-lg">
                  Our dedicated customer support team is available around the clock to assist you with:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-white/80">
                      <MessageSquare className="w-5 h-5 text-system-blue mr-3 mt-0.5 flex-shrink-0" />
                      Property searches and bookings
                    </li>
                    <li className="flex items-start text-white/80">
                      <MessageSquare className="w-5 h-5 text-system-blue mr-3 mt-0.5 flex-shrink-0" />
                      Technical support and troubleshooting
                    </li>
                    <li className="flex items-start text-white/80">
                      <MessageSquare className="w-5 h-5 text-system-blue mr-3 mt-0.5 flex-shrink-0" />
                      Account management and verification
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-white/80">
                      <MessageSquare className="w-5 h-5 text-system-blue mr-3 mt-0.5 flex-shrink-0" />
                      Payment and billing inquiries
                    </li>
                    <li className="flex items-start text-white/80">
                      <MessageSquare className="w-5 h-5 text-system-blue mr-3 mt-0.5 flex-shrink-0" />
                      Maintenance requests and tracking
                    </li>
                    <li className="flex items-start text-white/80">
                      <MessageSquare className="w-5 h-5 text-system-blue mr-3 mt-0.5 flex-shrink-0" />
                      General questions about our services
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="bg-white/5 rounded-2xl p-4 text-center hover-lift">
                    <div className="text-system-blue mb-2">{channel.icon}</div>
                    <h4 className="text-white font-semibold text-sm mb-1">{channel.title}</h4>
                    <p className="text-white/60 text-xs">{channel.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <span className="bg-system-blue/20 text-system-blue px-4 py-2 rounded-full text-sm font-semibold">
                  Priority support for Gold members
                </span>
              </div>
            </div>
          </div>

          {/* Download App Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Download Our App
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Available on All Platforms - Start your smart rental journey today with FreeRoom.ae mobile app.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-white/80">
                  <Smartphone className="w-5 h-5 text-system-blue mr-3" />
                  iOS App Store
                </div>
                <div className="flex items-center text-white/80">
                  <Smartphone className="w-5 h-5 text-system-blue mr-3" />
                  Google Play Store
                </div>
                <div className="flex items-center text-white/80">
                  <Globe className="w-5 h-5 text-system-blue mr-3" />
                  Web platform access
                </div>
              </div>

              <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift mt-8">
                Download Now
              </button>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <Smartphone className="w-8 h-8 text-system-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">iOS</div>
                    <div className="text-white/60 text-sm">App Store</div>
                  </div>
                  <div>
                    <Smartphone className="w-8 h-8 text-system-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">Android</div>
                    <div className="text-white/60 text-sm">Play Store</div>
                  </div>
                  <div>
                    <Globe className="w-8 h-8 text-system-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">Web</div>
                    <div className="text-white/60 text-sm">Browser</div>
                  </div>
                  <div>
                    <Users className="w-8 h-8 text-system-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-white/60 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business & Service Areas */}
          <div className="grid lg:grid-cols-2 gap-8 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift">
              <Users className="w-8 h-8 text-system-blue mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Business Inquiries</h3>
              <p className="text-white/80 mb-4">
                Interested in partnering with FreeRoom? Contact us to discuss:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-white/70 text-sm">• Property management partnerships</li>
                <li className="text-white/70 text-sm">• Corporate housing solutions</li>
                <li className="text-white/70 text-sm">• Bulk booking arrangements</li>
                <li className="text-white/70 text-sm">• API integration opportunities</li>
              </ul>
              <button className="bg-system-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Partner With Us
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift">
              <MapPin className="w-8 h-8 text-system-blue mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Service Areas</h3>
              <p className="text-white/80 mb-4">Currently Serving:</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {serviceAreas.slice(0, -1).map((area, index) => (
                  <div key={index} className="text-white/70 text-sm">• {area}</div>
                ))}
              </div>
              <p className="text-white/60 text-sm italic">
                {serviceAreas[serviceAreas.length - 1]}
              </p>
              <div className="mt-4 p-3 bg-system-blue/20 rounded-lg">
                <p className="text-system-blue text-sm font-semibold">
                  Expanding Soon: We're continuously expanding our service areas across the UAE
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="bg-gradient-to-r from-system-blue/20 to-electric-blue/20 backdrop-blur-md rounded-3xl p-8 border border-system-blue/30">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Ready to experience the future of renting?
              </h2>
              <p className="text-white/80 mb-6">
                Contact us today and discover why thousands choose FreeRoom for their rental needs.
              </p>
              <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
