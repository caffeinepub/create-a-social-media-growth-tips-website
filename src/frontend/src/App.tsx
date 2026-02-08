import { useRef } from 'react';
import Layout from './components/Layout';
import MarketingNav from './components/MarketingNav';
import HeroSection from './components/HeroSection';
import CoreGrowthTipsSection from './components/sections/CoreGrowthTipsSection';
import PlatformTipsSection from './components/sections/PlatformTipsSection';
import ToolsResourcesSection from './components/sections/ToolsResourcesSection';
import FaqSection from './components/sections/FaqSection';
import Footer from './components/Footer';

function App() {
  const tipsRef = useRef<HTMLElement>(null);
  const platformsRef = useRef<HTMLElement>(null);
  const resourcesRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

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

  return (
    <Layout>
      <MarketingNav 
        onNavigate={(section) => {
          const refs = {
            tips: tipsRef,
            platforms: platformsRef,
            resources: resourcesRef,
            faq: faqRef
          };
          scrollToSection(refs[section]);
        }}
      />
      <HeroSection onGetStarted={() => scrollToSection(tipsRef)} />
      <CoreGrowthTipsSection ref={tipsRef} />
      <PlatformTipsSection ref={platformsRef} />
      <ToolsResourcesSection ref={resourcesRef} />
      <FaqSection ref={faqRef} />
      <Footer />
    </Layout>
  );
}

export default App;
