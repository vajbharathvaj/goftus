import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-goftus-aqua hover:text-goftus-aqua-hover mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="prose prose-lg max-w-none">
          <h1 className="heading-lg text-foreground mb-8">Privacy Policy</h1>
          
          <div className="text-foreground-secondary space-y-6">
            <section>
              <h2 className="heading-sm text-foreground mb-4">Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@goftus.com.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}