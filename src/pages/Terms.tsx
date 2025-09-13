import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
          <h1 className="heading-lg text-foreground mb-8">Terms & Conditions</h1>
          
          <div className="text-foreground-secondary space-y-6">
            <section>
              <h2 className="heading-sm text-foreground mb-4">Acceptance of Terms</h2>
              <p>By accessing and using GOFTUS services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Use License</h2>
              <p>Permission is granted to temporarily use GOFTUS services for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Service Availability</h2>
              <p>We strive to maintain high availability of our services but cannot guarantee uninterrupted access.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Limitation of Liability</h2>
              <p>GOFTUS shall not be liable for any damages arising from the use or inability to use our services.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Contact Information</h2>
              <p>For questions regarding these terms, please contact us at legal@goftus.com.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}