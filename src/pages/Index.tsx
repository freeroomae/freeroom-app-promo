
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FinanceManagementSection from '@/components/FinanceManagementSection';
import TenantManagementSection from '@/components/TenantManagementSection';
import FacilityManagementSection from '@/components/FacilityManagementSection';
import SalesManagementSection from '@/components/SalesManagementSection';
import FeaturesSection from '@/components/FeaturesSection';
import SocialProofSection from '@/components/SocialProofSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FinanceManagementSection />
      <TenantManagementSection />
      <FacilityManagementSection />
      <SalesManagementSection />
      <FeaturesSection />
      <SocialProofSection />
      <CTASection />
    </div>
  );
};

export default Index;
