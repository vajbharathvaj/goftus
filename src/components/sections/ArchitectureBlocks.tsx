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
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-cyan-400/10 text-cyan-200 border border-cyan-400/30"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Platform Block */}
            <div className="card-light p-6 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl shadow-[0_25px_70px_rgba(14,165,233,0.16)] backdrop-blur-2xl">
              <div className="w-full h-2 bg-cyan-400 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">
                GOFTUS AI ORCHESTRATION PLATFORM
              </h3>
            </div>

            {/* Feature Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card-light p-4 space-y-3 card-hover rounded-2xl border border-white/10 bg-white/5 text-white shadow-[0_20px_60px_rgba(14,165,233,0.12)] backdrop-blur-2xl">
                <Zap className="w-8 h-8 text-cyan-200" />
                <h4 className="font-semibold text-sm text-white">
                  Rapid Agent Prototyping
                </h4>
                <p className="text-xs text-slate-300">Build and optimize AI agents quickly</p>
              </div>

              <div className="card-light p-4 space-y-3 card-hover rounded-2xl border border-white/10 bg-white/5 text-white shadow-[0_20px_60px_rgba(14,165,233,0.12)] backdrop-blur-2xl">
                <Database className="w-8 h-8 text-cyan-200" />
                <h4 className="font-semibold text-sm text-white">
                  Intelligent AI Operations
                </h4>
                <p className="text-xs text-slate-300">Smart routing and lifecycle management</p>
              </div>

              <div className="card-light p-4 space-y-3 card-hover rounded-2xl border border-white/10 bg-white/5 text-white shadow-[0_20px_60px_rgba(14,165,233,0.12)] backdrop-blur-2xl">
                <Shield className="w-8 h-8 text-cyan-200" />
                <h4 className="font-semibold text-sm text-white">
                  AI Security & Governance
                </h4>
                <p className="text-xs text-slate-300">Enterprise-grade security controls</p>
              </div>
            </div>

            {/* Data Integration Architecture */}
            <div className="card-light p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/20 border border-blue-400/30 rounded-2xl">
              <div className="w-full h-2 bg-blue-400 rounded-full mb-2"></div>
              <h3 className="font-bold text-white">Foundational Model Building</h3>
            </div>

            {/* Hosting Options */}
            <div className="card-light p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 rounded-2xl">
              <div className="w-full h-2 bg-cyan-400 rounded-full mb-4"></div>
              <h3 className="font-bold text-white mb-4">Machine Learning Models </h3>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="font-medium text-sm text-white"> Saas Products</h4>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="font-medium text-sm text-white">AI Agents</h4>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="font-medium text-sm text-white">Agentic AI</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Text — RIGHT on lg */}
          <div className="space-y-6 order-1 lg:order-2 lg:pl-10">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              One platform.
              <br />
              <span className="text-cyan-200">Endless</span>
              <br />
              AI possibilities.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Airia&apos;s Enterprise AI Orchestration Platform seamlessly integrates with your
              existing systems and data sources while maintaining enterprise-grade security,
              enabling you to rapidly prototype, deploy, and manage AI agents that transform
              workflows across your organization.
            </p>
            <Button variant="hero" size="lg" className="rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:bg-cyan-300">
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
