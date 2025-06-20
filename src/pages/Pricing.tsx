
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { Check, Star, Zap, Crown, Shield } from 'lucide-react';

const Pricing = () => {
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

  const landlordPlans = [
    {
      name: "Bronze Package",
      subtitle: "1 Listing - 1 Week",
      icon: <Star className="w-8 h-8" />,
      popular: false,
      features: [
        "Basic listing visibility",
        "Standard support",
        "Basic video upload capability",
        "5% VAT included"
      ]
    },
    {
      name: "Silver Package",
      subtitle: "3 Listings - 1 Week Each",
      icon: <Zap className="w-8 h-8" />,
      popular: true,
      features: [
        "Premium listing position",
        "Enhanced visibility features",
        "Priority support access",
        "Advanced video upload options",
        "SEO optimization included",
        "5% VAT included"
      ]
    },
    {
      name: "Gold Package",
      subtitle: "5 Listings - 1 Week Each",
      icon: <Crown className="w-8 h-8" />,
      popular: false,
      features: [
        "Top of search positioning",
        "Verified badge display",
        "Premium priority support",
        "Full video upload capabilities",
        "Complete SEO optimization",
        "Custom social media posts",
        "Service discounts available",
        "5% VAT included"
      ]
    }
  ];

  const goldMembershipFeatures = [
    "Gold Member Badge: Stand out instantly and build trust",
    "Priority Support: Get faster help via call, WhatsApp, or app",
    "Rent Negotiation Assistance: Our team helps negotiate directly",
    "Zero Commission: Pay no commission on successful bookings",
    "Exclusive Move-In Perks: Access member-only discounts",
    "Locality Expertise: Gain insights from our team's knowledge",
    "Visit Scheduling Support: Coordinated in-person visits",
    "Cashback & Referral Rewards: Earn loyalty credits"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight-blue via-electric-blue to-system-blue">
      <Navigation />
      
      <div ref={sectionRef} className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
              Transparent
              <span className="text-gradient block">Pricing</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees, no surprises.
            </p>
          </div>

          {/* Landlord Plans */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12 animate-on-scroll">
              Pricing Plans for Landlords
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {landlordPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border hover-lift animate-on-scroll group ${
                    plan.popular 
                      ? 'border-system-blue shadow-2xl shadow-system-blue/20 scale-105' 
                      : 'border-white/20'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-system-blue text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      plan.popular ? 'text-system-blue' : 'text-white'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/70">{plan.subtitle}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-white/80">
                        <Check className="w-5 h-5 text-system-blue mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-system-blue hover:bg-blue-600 text-white'
                      : 'border-2 border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Add-On Services */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12">
              Add-On Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift">
                <h3 className="text-xl font-bold text-white mb-4">360° Virtual Tour</h3>
                <p className="text-white/80 mb-6">
                  Available as an add-on for enhanced property showcasing with immersive, interactive virtual walkthroughs.
                </p>
                <button className="bg-system-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift">
                <h3 className="text-xl font-bold text-white mb-4">Meta Ad Boost (Optional)</h3>
                <p className="text-white/80 mb-4">
                  Targeted advertising campaigns across Facebook, Instagram, TikTok, and other platforms with:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-white/80 text-sm">
                    <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Hyper-targeted campaigns based on location and budget
                  </li>
                  <li className="flex items-start text-white/80 text-sm">
                    <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    AI-powered audience retargeting
                  </li>
                  <li className="flex items-start text-white/80 text-sm">
                    <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Real-time chat and lead capture
                  </li>
                </ul>
                <button className="bg-system-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                  Boost Now
                </button>
              </div>
            </div>
          </div>

          {/* Gold Membership for Tenants */}
          <div className="mb-20 animate-on-scroll">
            <div className="bg-gradient-to-r from-system-blue/20 to-electric-blue/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-system-blue/30">
              <div className="text-center mb-8">
                <Crown className="w-12 h-12 text-system-blue mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Gold Membership for Tenants
                </h2>
                <p className="text-xl text-white/80">Unlock Premium Benefits</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {goldMembershipFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-system-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="bg-system-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift">
                  Become a Gold Member
                </button>
              </div>
            </div>
          </div>

          {/* Property Managers */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12">
              For Property Managers
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Comprehensive Management Solutions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-white/80">
                      <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                      End-to-end property management
                    </li>
                    <li className="flex items-start text-white/80">
                      <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                      Professional listing services
                    </li>
                    <li className="flex items-start text-white/80">
                      <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                      Dynamic pricing tools
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-white/80">
                      <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                      Tenant screening and verification
                    </li>
                    <li className="flex items-start text-white/80">
                      <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                      Digital rent collection
                    </li>
                    <li className="flex items-start text-white/80">
                      <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                      Performance reporting
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-white/80">
                      <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                      Legal and compliance support
                    </li>
                    <li className="flex items-start text-white/80">
                      <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                      Multiple payment options
                    </li>
                    <li className="flex items-start text-white/80">
                      <Check className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                      Automated pre-payment alerts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Transparent Pricing Promise */}
          <div className="text-center animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <Shield className="w-12 h-12 text-system-blue mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Transparent Pricing Promise</h2>
              <p className="text-white/80 mb-6">
                All pricing is transparent with no surprises. What you see is what you pay.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center text-white/80">
                  <Check className="w-4 h-4 text-system-blue mr-2" />
                  Credit card payments
                </div>
                <div className="flex items-center justify-center text-white/80">
                  <Check className="w-4 h-4 text-system-blue mr-2" />
                  Bank transfers
                </div>
                <div className="flex items-center justify-center text-white/80">
                  <Check className="w-4 h-4 text-system-blue mr-2" />
                  Installment plans available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
