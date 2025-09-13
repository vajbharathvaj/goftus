import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AIPolicy() {
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
          <h1 className="heading-lg text-foreground mb-8">AI Policy</h1>
          
          <div className="text-foreground-secondary space-y-6">
            <section>
              <h2 className="heading-sm text-foreground mb-4">Our AI Philosophy</h2>
              <p>GOFTUS is committed to developing and deploying AI technologies responsibly, with a focus on safety, transparency, and human oversight.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Data Handling</h2>
              <p>We implement strict data governance practices to ensure that AI models are trained and operated with appropriate privacy protections and security measures.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">AI Safety Measures</h2>
              <p>Our AI systems include built-in safeguards against harmful outputs, bias detection mechanisms, and continuous monitoring for responsible operation.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Human Oversight</h2>
              <p>All AI-driven decisions maintain appropriate human oversight and the ability for human intervention when necessary.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Transparency</h2>
              <p>We provide clear information about how our AI systems work and make decisions, enabling informed use by our customers.</p>
            </section>

            <section>
              <h2 className="heading-sm text-foreground mb-4">Contact Us</h2>
              <p>For questions about our AI practices, please reach out to ai-ethics@goftus.com.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}