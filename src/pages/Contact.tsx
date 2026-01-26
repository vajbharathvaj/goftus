import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Mail, MapPin, CheckCircle, ExternalLink } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    need: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      alert("Failed to send message. Please try again later.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Please try again.");
  }
};

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="bg-card-elevated border border-border-subtle rounded-2xl p-12 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30">
              <CheckCircle className="w-8 h-8 text-cyan-200" />
            </div>
            <div>
              <h1 className="heading-lg text-foreground mb-4">Thank you!</h1>
              <p className="text-foreground-secondary text-lg mb-6">
                We've received your message and will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">
            <span className="block text-foreground">Contact Us</span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Ready to transform your AI development? Let's discuss how GOFTUS can help you ship AI features faster.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-lg text-foreground mb-6">Get in touch</h2>
                <p className="text-foreground-secondary text-lg leading-relaxed">
                  Whether you're looking to integrate AI into your product, scale your existing ML infrastructure, 
                  or explore partnership opportunities, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0 border border-cyan-400/30">
                    <Mail className="w-5 h-5 text-cyan-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email us</h3>
                    <p className="text-foreground-secondary text-sm mb-1">goftus.in@gmail.com</p>
                    <p className="text-foreground-muted text-xs">We typically respond within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0 border border-cyan-400/30">
                    <Calendar className="w-5 h-5 text-cyan-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Book a call</h3>
                    <p className="text-foreground-secondary text-sm mb-1">30-minute strategy session</p>
                    <p className="text-foreground-muted text-xs">Perfect for discussing your AI roadmap</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0 border border-cyan-400/30">
                    <MapPin className="w-5 h-5 text-cyan-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Visit us</h3>
                    <p className="text-foreground-secondary text-sm mb-1">San Francisco, CA</p>
                   
                  </div>
                </div>
              </div>

              <div className="pt-8">
                
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-card-elevated border border-border-subtle rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-foreground">
                    Full name <span className="text-signal-orange">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="mt-2 bg-surface border-border"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Work email <span className="text-signal-orange">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2 bg-surface border-border"
                    placeholder="your@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-foreground">
                    Company
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="mt-2 bg-surface border-border"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="need" className="text-foreground">
                    What do you need?
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("need", value)}>
                    <SelectTrigger className="mt-2 bg-surface border-border">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="services">Services consultation</SelectItem>
                      <SelectItem value="product-demo">Product demo</SelectItem>
                      <SelectItem value="partnership">Partnership opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-2 bg-surface border-border resize-none"
                    placeholder="Tell us about your project and how we can help... (240 characters max)"
                    maxLength={240}
                  />
                  <div className="text-xs text-foreground-muted mt-2">
                    {formData.message.length}/240 characters
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.fullName || !formData.email}
                >
                  Submit
                </Button>

                <p className="text-xs text-foreground-muted text-center">
                  By submitting this form, you agree to receive communications from GOFTUS. 
                  You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Spotlight */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/5 px-8 py-10 text-center shadow-[0_30px_80px_rgba(2,12,23,0.5)]">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold text-foreground">
              One inbox for sales, support, and partnerships.
            </h3>
            <p className="mt-3 text-foreground-secondary">
              Reach us anytime and we’ll route your request to the right team.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="mt-6 rounded-full border-cyan-400/40 bg-white/5 text-cyan-100 hover:bg-white/10"
              asChild
            >
              <a href="mailto:goftus.in@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                goftus.in@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
