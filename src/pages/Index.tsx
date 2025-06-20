
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FinanceManagementSection from '@/components/FinanceManagementSection';
import TenantManagementSection from '@/components/TenantManagementSection';
import OnboardingSection from '@/components/OnboardingSection';
import DigitalAgreementsSection from '@/components/DigitalAgreementsSection';
import RenewalsSection from '@/components/RenewalsSection';
import MoveoutSection from '@/components/MoveoutSection';
import FacilityManagementSection from '@/components/FacilityManagementSection';
import CollectionSection from '@/components/CollectionSection';
import SalesManagementSection from '@/components/SalesManagementSection';
import FeaturesSection from '@/components/FeaturesSection';
import SocialProofSection from '@/components/SocialProofSection';
import AppDownloadSection from '@/components/AppDownloadSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FinanceManagementSection />
      <CollectionSection />
      <TenantManagementSection />
      <OnboardingSection />
      <DigitalAgreementsSection />
      <RenewalsSection />
      <MoveoutSection />
      <FacilityManagementSection />
      <SalesManagementSection />
      <FeaturesSection />
      <SocialProofSection />
      <AppDownloadSection />
      <CTASection />
    </div>
  );
};

export default Index;
