import { Zap } from "lucide-react";

import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={cn("brand-logo-shell", className)} aria-label="L&T Electricals">
      <span className="brand-logo-mark">
        <Zap className="size-5 fill-white text-white" />
      </span>
      <span className="brand-logo-type">
        <span className="brand-logo-primary">L&amp;T</span>
        <span className="brand-logo-secondary">Electricals</span>
      </span>
    </span>
  );
}
