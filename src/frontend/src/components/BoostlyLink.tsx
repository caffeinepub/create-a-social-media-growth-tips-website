import { useState } from 'react';
import { Copy, Check, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function BoostlyLink() {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
        <Link2 className="w-4 h-4" />
        <span>Boostly Link</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="text"
          value={currentUrl}
          readOnly
          className="flex-1 font-mono text-sm bg-muted/50 border-border"
          aria-label="Boostly website link"
        />
        <Button
          onClick={handleCopy}
          variant="outline"
          className="sm:w-auto w-full"
          aria-label={copied ? 'Link copied' : 'Copy link'}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
