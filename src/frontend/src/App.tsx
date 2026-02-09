import { useRef, useEffect } from 'react';
import Layout from './components/Layout';
import MarketingNav from './components/MarketingNav';
import HeroSection from './components/HeroSection';
import CoreGrowthTipsSection from './components/sections/CoreGrowthTipsSection';
import PlatformTipsSection from './components/sections/PlatformTipsSection';
import BroadTopicGuidanceSection from './components/sections/BroadTopicGuidanceSection';
import ContentTypeGuidanceSection from './components/sections/ContentTypeGuidanceSection';
import SubscriptionPricingSection from './components/sections/SubscriptionPricingSection';
import PaymentMonetizationSection from './components/sections/PaymentMonetizationSection';
import GetBoostlyAppSection from './components/sections/GetBoostlyAppSection';
import ToolsResourcesSection from './components/sections/ToolsResourcesSection';
import FaqSection from './components/sections/FaqSection';
import Footer from './components/Footer';
import { buildSearchIndex } from './search/searchIndex';
import { scrollToElement } from './search/scrollAndHighlight';
import { registerServiceWorker } from './pwa/registerServiceWorker';

function App() {
  const tipsRef = useRef<HTMLElement>(null);
  const platformsRef = useRef<HTMLElement>(null);
  const guidanceRef = useRef<HTMLElement>(null);
  const contentTypesRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const paymentsRef = useRef<HTMLElement>(null);
  const getAppRef = useRef<HTMLElement>(null);
  const resourcesRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const searchIndex = buildSearchIndex();

  useEffect(() => {
    registerServiceWorker();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const navHeight = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSearchResultClick = (targetId: string) => {
    scrollToElement(targetId, 80);
  };

  return (
    <Layout>
      <MarketingNav 
        onNavigate={(section) => {
          const refs = {
            tips: tipsRef,
            platforms: platformsRef,
            contentTypes: contentTypesRef,
            pricing: pricingRef,
            payments: paymentsRef,
            getApp: getAppRef,
            resources: resourcesRef,
            faq: faqRef
          };
          scrollToSection(refs[section]);
        }}
        searchIndex={searchIndex}
        onSearchResultClick={handleSearchResultClick}
      />
      <HeroSection 
        onGetStarted={() => scrollToSection(tipsRef)}
        onGetApp={() => scrollToSection(getAppRef)}
      />
      <CoreGrowthTipsSection ref={tipsRef} />
      <PlatformTipsSection ref={platformsRef} />
      <BroadTopicGuidanceSection ref={guidanceRef} />
      <ContentTypeGuidanceSection ref={contentTypesRef} />
      <SubscriptionPricingSection ref={pricingRef} />
      <PaymentMonetizationSection ref={paymentsRef} />
      <GetBoostlyAppSection ref={getAppRef} />
      <ToolsResourcesSection ref={resourcesRef} />
      <FaqSection ref={faqRef} />
      <Footer />
    </Layout>
  );
}

export default App;
