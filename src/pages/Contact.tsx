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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="bg-card-elevated border border-border-subtle rounded-2xl p-12 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-goftus-aqua/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-goftus-aqua" />
            </div>
            <div>
              <h1 className="heading-lg text-foreground mb-4">Thank you!</h1>
              <p className="text-foreground-secondary text-lg mb-6">
                We've received your message and will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a call
                </Button>
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
                  <div className="w-10 h-10 rounded-lg bg-goftus-aqua/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-goftus-aqua" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email us</h3>
                    <p className="text-foreground-secondary text-sm mb-1">hello@goftus.com</p>
                    <p className="text-foreground-muted text-xs">We typically respond within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-goftus-aqua/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-goftus-aqua" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Book a call</h3>
                    <p className="text-foreground-secondary text-sm mb-1">30-minute strategy session</p>
                    <p className="text-foreground-muted text-xs">Perfect for discussing your AI roadmap</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-goftus-aqua/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-goftus-aqua" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Visit us</h3>
                    <p className="text-foreground-secondary text-sm mb-1">San Francisco, CA</p>
                    <p className="text-foreground-muted text-xs">Schedule an in-person meeting</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button variant="hero" size="lg" className="w-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a call
                </Button>
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

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="heading-sm text-foreground">Sales Inquiries</h3>
              <p className="text-foreground-secondary text-sm">
                Ready to get started? Let's discuss pricing and implementation.
              </p>
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                sales@goftus.com
              </Button>
            </div>

            <div className="text-center space-y-4">
              <h3 className="heading-sm text-foreground">Technical Support</h3>
              <p className="text-foreground-secondary text-sm">
                Need help with integration or have technical questions?
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Support Portal
              </Button>
            </div>

            <div className="text-center space-y-4">
              <h3 className="heading-sm text-foreground">Partnership</h3>
              <p className="text-foreground-secondary text-sm">
                Interested in becoming a GOFTUS partner or integration?
              </p>
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                partners@goftus.com
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}