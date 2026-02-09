import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { searchContent, type SearchResult } from '@/search/searchIndex';

interface SiteSearchProps {
  searchIndex: SearchResult[];
  onResultClick: (targetId: string) => void;
  onClose?: () => void;
}

export default function SiteSearch({ searchIndex, onResultClick, onClose }: SiteSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const searchResults = searchContent(query, searchIndex);
      setResults(searchResults);
      setIsOpen(true);
      setSelectedIndex(0);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, searchIndex]);

  const handleResultClick = (targetId: string) => {
    onResultClick(targetId);
    setQuery('');
    setResults([]);
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          handleResultClick(results[selectedIndex].targetId);
        }
        break;
      case 'Escape':
        e.preventDefault();
        handleClear();
        break;
    }
  };

  useEffect(() => {
    // Scroll selected item into view
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedElement = resultsRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search: relatable content, fashion tips, Snapchat, mental health..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-9 pr-9"
          aria-label="Search site content"
          aria-expanded={isOpen}
          aria-controls="search-results"
          aria-activedescendant={isOpen && results[selectedIndex] ? `result-${selectedIndex}` : undefined}
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && (
        <div
          id="search-results"
          className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 overflow-hidden"
          role="listbox"
        >
          {results.length > 0 ? (
            <ScrollArea className="max-h-[400px]" ref={resultsRef}>
              <div className="p-2">
                {results.map((result, index) => (
                  <button
                    key={result.id}
                    id={`result-${index}`}
                    data-index={index}
                    role="option"
                    aria-selected={index === selectedIndex}
                    onClick={() => handleResultClick(result.targetId)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left p-3 rounded-md transition-colors ${
                      index === selectedIndex
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-accent/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-medium text-sm">{result.title}</span>
                      <div className="flex gap-1 flex-shrink-0">
                        <Badge variant="outline" className="text-xs">
                          {result.section}
                        </Badge>
                        {result.platform && (
                          <Badge variant="secondary" className="text-xs">
                            {result.platform}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {result.snippet}
                    </p>
                  </button>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No results found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for: relatable content, aesthetic, fashion, motivational, Snapchat, TikTok, mental health</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
