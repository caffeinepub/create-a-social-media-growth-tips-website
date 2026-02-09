import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import SiteSearch from './SiteSearch';
import type { SearchResult } from '@/search/searchIndex';

interface MarketingNavProps {
  onNavigate: (section: 'tips' | 'platforms' | 'contentTypes' | 'resources' | 'faq' | 'getApp' | 'payments') => void;
  searchIndex: SearchResult[];
  onSearchResultClick: (targetId: string) => void;
}

export default function MarketingNav({ onNavigate, searchIndex, onSearchResultClick }: MarketingNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Growth Tips', section: 'tips' as const },
    { label: 'Platforms', section: 'platforms' as const },
    { label: 'Content Types', section: 'contentTypes' as const },
    { label: 'Payments', section: 'payments' as const },
    { label: 'Resources', section: 'resources' as const },
    { label: 'FAQ', section: 'faq' as const },
    { label: 'Get the App', section: 'getApp' as const }
  ];

  const handleNavClick = (section: 'tips' | 'platforms' | 'contentTypes' | 'resources' | 'faq' | 'getApp' | 'payments') => {
    onNavigate(section);
    setIsOpen(false);
  };

  const handleSearchResultClick = (targetId: string) => {
    onSearchResultClick(targetId);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">B</span>
            </div>
            <span className="font-semibold text-xl">Boostly</span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <SiteSearch 
              searchIndex={searchIndex}
              onResultClick={onSearchResultClick}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 flex-shrink-0">
            {navItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => handleNavClick(item.section)}
                className="text-foreground/80 hover:text-foreground hover:bg-accent/50"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              
              {/* Mobile Search */}
              <div className="mt-6 mb-6">
                <SiteSearch 
                  searchIndex={searchIndex}
                  onResultClick={handleSearchResultClick}
                  onClose={() => setIsOpen(false)}
                />
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.section}
                    variant="ghost"
                    onClick={() => handleNavClick(item.section)}
                    className="justify-start text-lg"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
