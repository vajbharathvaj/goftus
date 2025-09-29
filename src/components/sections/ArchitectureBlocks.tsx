import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Database } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "agents", label: "AI AGENTS" },
  { id: "assistants", label: "AI ASSISTANTS" },
  { id: "search", label: "ENTERPRISE SEARCH" },
];

export function ArchitectureBlocks() {
  const [activeTab, setActiveTab] = useState("agents");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* On mobile: text first, blocks second.
            On lg+: blocks left (order-1), text right (order-2). */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Architecture Blocks — LEFT on lg */}
          <div className="space-y-4 order-2 lg:order-1">
            {/* Tab Navigation */}
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-goftus-aqua/10 text-goftus-aqua border border-goftus-aqua/20"
                      : "bg-muted text-muted hover:bg-muted/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Platform Block */}
            <div className="card-light p-6 bg-gradient-to-r from-goftus-aqua/5 to-goftus-aqua/10 border-goftus-aqua/20">
              <div className="w-full h-2 bg-goftus-aqua rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-heading mb-2">
                GOFTUS AI ORCHESTRATION PLATFORM
              </h3>
            </div>

            {/* Feature Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card-light p-4 space-y-3 card-hover">
                <Zap className="w-8 h-8 text-goftus-orange" />
                <h4 className="font-semibold text-sm text-heading">
                  Rapid Agent Prototyping
                </h4>
                <p className="text-xs text-muted">Build and optimize AI agents quickly</p>
              </div>

              <div className="card-light p-4 space-y-3 card-hover">
                <Database className="w-8 h-8 text-goftus-aqua" />
                <h4 className="font-semibold text-sm text-heading">
                  Intelligent AI Operations
                </h4>
                <p className="text-xs text-muted">Smart routing and lifecycle management</p>
              </div>

              <div className="card-light p-4 space-y-3 card-hover">
                <Shield className="w-8 h-8 text-goftus-orange" />
                <h4 className="font-semibold text-sm text-heading">
                  AI Security & Governance
                </h4>
                <p className="text-xs text-muted">Enterprise-grade security controls</p>
              </div>
            </div>

            {/* Data Integration Architecture */}
            <div className="card-light p-4 bg-gradient-to-r from-blue-500/5 to-blue-600/10 border-blue-500/20">
              <div className="w-full h-2 bg-blue-500 rounded-full mb-2"></div>
              <h3 className="font-bold text-heading">Foundational Model Building</h3>
            </div>

            {/* Hosting Options */}
            <div className="card-light p-6 bg-gradient-to-r from-purple-500/5 to-purple-600/10 border-purple-500/20">
              <div className="w-full h-2 bg-purple-500 rounded-full mb-4"></div>
              <h3 className="font-bold text-heading mb-4">Machine Learning Models </h3>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <h4 className="font-medium text-sm text-heading"> Saas Products</h4>
                </div>
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <h4 className="font-medium text-sm text-heading">AI Agents</h4>
                </div>
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <h4 className="font-medium text-sm text-heading">Agentic AI</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Text — RIGHT on lg */}
          <div className="space-y-6 order-1 lg:order-2 lg:pl-10">
            <h2 className="text-5xl lg:text-6xl font-bold text-heading leading-tight">
              One platform.
              <br />
              <span className="gradient-aqua">Endless</span>
              <br />
              AI possibilities.
            </h2>
            <p className="text-lg text-body leading-relaxed">
              Airia&apos;s Enterprise AI Orchestration Platform seamlessly integrates with your
              existing systems and data sources while maintaining enterprise-grade security,
              enabling you to rapidly prototype, deploy, and manage AI agents that transform
              workflows across your organization.
            </p>
            <Button variant="hero" size="lg" className="animate-magnetic">
              <Link to='/services'>
              Explore Our Platform
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
