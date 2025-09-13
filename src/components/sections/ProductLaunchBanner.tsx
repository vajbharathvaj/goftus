import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductLaunchBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('launch-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('launch-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 mt-8">
      <div className="relative gradient-bg-orange-light rounded-xl p-4 border border-goftus-orange/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg">🚀</span>
            <p className="text-sm font-medium text-heading">
              Product Launch: Flagen AI is live — build your backend faster.
              <Button variant="link" className="text-goftus-orange hover:text-goftus-orange-hover ml-2 p-0 h-auto">
                Try it →
              </Button>
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="h-6 w-6 hover:bg-goftus-orange/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}