
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { CheckCircle, Search, CreditCard, Headphones, Upload, BarChart3, Users, Wrench, TrendingUp, MessageSquare } from 'lucide-react';

const Features = () => {
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

  const tenantFeatures = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search & Discovery",
      features: [
        "User-friendly search filters by location, price, and amenities",
        "Browse diverse listings from shared rooms to private studios",
        "360° Virtual Tour videos for remote property viewing",
        "Prime location access across Dubai's most sought-after areas"
      ]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Booking & Payments",
      features: [
        "Quick move-in processes (less than 12 hours)",
        "Secure payment gateway integration",
        "Multiple payment modes: credit card, bank transfer, net banking",
        "Flexible installment options",
        "No hidden fees or surprises"
      ]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support & Services",
      features: [
        "24/7 customer support",
        "Personalized assistance throughout the rental process",
        "Multi-language customer service",
        "Priority support for Gold members"
      ]
    }
  ];

  const landlordFeatures = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Listing Management",
      features: [
        "Easy listing process with detailed descriptions",
        "High-quality image uploads",
        "Social media posting across Instagram, Facebook, and more",
        "SEO optimization for maximum visibility",
        "Featured listing options"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "All-in-One Management Dashboard",
      features: [
        "Manage bookings, payments, and tenant information in one place",
        "Available across iOS, Android, and web platforms",
        "Real-time occupancy and booking insights",
        "Move-in/move-out management"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Financial Management",
      features: [
        "Payment collection on autopilot",
        "Advanced invoicing and billing tools",
        "Powerful financial tracking and analytics",
        "Bank sync and accounting integration (Zoho, Tally, Odoo)",
        "Expense tracking and categorization"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tenant Management",
      features: [
        "Digital agreements and eSigning with ZohoSign",
        "E-KYC verification and document vault",
        "Automated rent reminders via WhatsApp and Email",
        "Move-out and deposit management",
        "Occupant onboarding automation"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Operations",
      features: [
        "Instant maintenance and complaint management",
        "Automated ticketing with escalation rules",
        "Service request tracking through mobile app",
        "SLA definition and turnaround time monitoring"
      ]
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
              Comprehensive Platform
              <span className="text-gradient block">Features</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Everything you need to manage your rental experience, from search to settlement
            </p>
          </div>

          {/* For Tenants Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12 animate-on-scroll">
              For Tenants
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tenantFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift animate-on-scroll group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-system-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-white/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* For Landlords Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12 animate-on-scroll">
              For Landlords & Property Managers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landlordFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift animate-on-scroll group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-system-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-white/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Features */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12">
              Advanced Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift group">
                <BarChart3 className="w-8 h-8 text-system-blue mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">Data & Analytics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Data-driven insights for pricing optimization
                  </li>
                  <li className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Real-time analytics and reporting
                  </li>
                  <li className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Visual dashboards for collections
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift group">
                <TrendingUp className="w-8 h-8 text-system-blue mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">Marketing & Lead Generation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Targeted advertising campaigns
                  </li>
                  <li className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    AI-powered audience retargeting
                  </li>
                  <li className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Quality tenant lead generation
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover-lift group">
                <MessageSquare className="w-8 h-8 text-system-blue mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">Communication Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Instant chat and notifications
                  </li>
                  <li className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Community features
                  </li>
                  <li className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-system-blue mr-2 mt-0.5 flex-shrink-0" />
                    Tenant engagement tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
