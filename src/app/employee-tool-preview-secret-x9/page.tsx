"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Target,
  BrainCircuit,
  MessageSquare,
  FileText,
  ShieldCheck,
  Play,
  Settings,
  Lock
} from "lucide-react";
import { KPICard } from "../../components/lms/KPICard";
import { AITutorCard } from "../../components/lms/AITutorCard";
import { ModuleCard } from "../../components/lms/ModuleCard";

export default function LmsDemoPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "mindfinders") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-4">
        <div className="max-w-md w-full bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 shadow-2xl">
          <div className="flex justify-center mb-6">
            <Lock className="w-12 h-12 text-[#ED1B2F]" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-2">Restricted Access</h1>
          <p className="text-gray-400 text-center mb-8 font-serif">
            Enter the access code to view the <strong>Employee Tool for Sale</strong>.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter access code"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ED1B2F] transition-colors"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">Incorrect access code. Please try again.</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#ED1B2F] hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Unlock Preview
            </button>
          </form>
          <div className="mt-6 text-center text-xs text-gray-600 uppercase tracking-widest">
            Confidential • Do Not Share
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-[#231F20]">
      {/* Portal Header / Breadcrumb - Simulating Internal Tool */}
      <div className="bg-white border-b border-gray-200 py-3 px-6 md:px-12 flex justify-between items-center sticky top-20 z-40 lg:top-[5rem]">
        <div className="flex items-center gap-3">
          <div className="bg-[#231F20] text-white font-bold text-xs px-2 py-1 rounded">CONFIDENTIAL</div>
          <span className="text-sm text-gray-500">/</span>
          <span className="text-sm font-semibold text-gray-700">Internal Assets</span>
          <span className="text-sm text-gray-500">/</span>
          <span className="text-sm text-[#ED1B2F] font-bold">Employee Tool Preview</span>
        </div>
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Powered by MindFinders</div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-[#0a0a0a] text-white py-16 md:py-24 overflow-hidden">
        {/* Subtle Brand Background - Replaced abstract blobs with cleaner style */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ED1B2F] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#231F20] rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl relative">
            {/* Massive Watermark */}
            <div className="absolute -top-20 -left-10 text-[150px] md:text-[200px] font-black text-white/5 select-none pointer-events-none leading-none z-0">
              DEMO
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-[#ED1B2F] text-white font-bold px-3 py-1 text-sm tracking-widest uppercase rounded">
                  Interactive Demo
                </div>
                <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <Settings className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Customize Config</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                Welcome back, Samra.
                <span className="block text-xl md:text-2xl text-gray-400 font-medium mt-2 font-serif italic">Medical Billing Specialist</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 font-serif italic max-w-2xl">
                Your overall learning score has increased by <span className="text-[#ED1B2F] font-bold not-italic">15%</span> this week.
              </p>

              <div className="inline-flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#ED1B2F] hover:bg-white hover:text-[#ED1B2F] text-white font-bold rounded-lg transition-all shadow-[0_10px_20px_rgba(237,27,47,0.2)] flex items-center gap-2 group">
                  <Play className="w-5 h-5 fill-current" />
                  Resume: Module 2 - AI Proficiency
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="px-8 py-4 border border-white/10 bg-white/5 text-gray-400 font-semibold rounded-lg cursor-not-allowed">
                  View Certification Path (Locked)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 space-y-20">

        {/* KPI DASHBOARD SECTION */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-2 text-[#231F20]">My Performance Dashboard</h2>
              <p className="text-gray-600 font-serif">Live metrics synced with your daily workflow tools.</p>
            </div>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
              Last updated: Today, 1:00 PM
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <KPICard
              title="Claims Processed"
              value="185"
              unit="/day"
              target="200-250"
              trend={5}
              icon={FileText}
              iconColorClass="bg-gray-100 text-[#231F20]"
            />
            <KPICard
              title="Coding Accuracy"
              value="97%"
              target="98-99%"
              trend={2}
              icon={Target}
              iconColorClass="bg-gray-100 text-[#231F20]"
            />
            <KPICard
              title="Clean Claim Rate"
              value="92%"
              target="95-98%"
              trend={0}
              icon={ShieldCheck}
              iconColorClass="bg-red-50 text-[#ED1B2F]"
              trendText="Focus"
              trendColorClass="text-[#ED1B2F] bg-red-50"
              borderClass="border-l-4 border-l-[#ED1B2F]"
            />
            <KPICard
              title="Days in A/R"
              value="35"
              unit="days"
              target="28-33 days"
              trend={0}
              icon={BarChart3}
              iconColorClass="bg-gray-100 text-[#231F20]"
              trendText="Avg"
              trendColorClass="text-gray-400 bg-gray-50"
            />
            <KPICard
              title="Denial Rate"
              value="5.2%"
              target="4-6%"
              trend={-3}
              icon={BrainCircuit}
              iconColorClass="bg-gray-100 text-[#231F20]"
              trendColorClass="text-green-600 bg-green-50"
            />
          </div>

          {/* AI Insight Alert */}
          <div className="mt-6 bg-gray-50 border border-gray-200 p-6 rounded-lg flex items-start gap-4 shadow-sm">
            <div className="bg-[#231F20] text-white p-2 rounded-full mt-1">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-[#231F20]">AI Performance Insight</h4>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Your <strong>Clean Claim Rate</strong> is slightly below target.
                Based on your recent activity, 60% of rejections were due to missing modifiers.
                Recommend reviewing <em>"Module 1: AI Claims Scrubbing"</em> to use CureMD more effectively.
              </p>
            </div>
            <button className="ml-auto text-sm font-bold text-[#ED1B2F] hover:text-[#231F20] hover:underline shrink-0 transition-colors">
              Go to Module 1 →
            </button>
          </div>
        </section>

        {/* AI TUTOR CENTER */}
        <section>
          <div className="mb-8">
            <span className="text-[#ED1B2F] font-bold tracking-widest uppercase text-xs">On-Demand Support</span>
            <h2 className="text-3xl font-bold font-heading mt-2 text-[#231F20]">AI Tutor Center</h2>
            <p className="text-gray-600 font-serif">Practice with simulated agents before handling real cases.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AITutorCard
              title="Coding Assistant Bot"
              description="Practice scenarios for assigning complex CPT/ICD-10 codes. Get instant feedback on accuracy against Nym/CodaMetrix standards."
              icon={BrainCircuit}
              colorClass="bg-[#231F20]"
              tagText="Simulated"
            />
            <AITutorCard
              title="Denial Resolution Agent"
              description="Draft appeal letters for mocked denials. Learn to use Fathom data to support your arguments and improve win rates."
              icon={ShieldCheck}
              colorClass="bg-[#ED1B2F]"
              tagText="Interactive"
              buttonText="Draft Appeal"
            />
            <AITutorCard
              title="Patient Inquiry Sim"
              description="Roleplay difficult billing conversations with AI patients. Master 'Gemini for Communication' prompting to resolve issues faster."
              icon={MessageSquare}
              colorClass="bg-[#231F20]"
              tagText="Soft Skills"
              buttonText="Launch Roleplay"
            />
          </div>
        </section>

        {/* CURRICULUM JOURNEY */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="mb-10 flex justify-between items-end">
            <div>
              <span className="text-[#ED1B2F] font-bold tracking-widest uppercase text-xs">Your Learning Path</span>
              <h2 className="text-3xl font-bold font-heading mt-2 text-[#231F20]">AI-Enhanced Biller Certification</h2>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-sm font-bold text-gray-500 mb-1">Overall Progress</div>
              <div className="text-3xl font-bold text-[#231F20]">35%</div>
            </div>
          </div>

          <div className="space-y-6">
            <ModuleCard
              moduleNumber={1}
              title="AI Tools for Billing"
              description="Deep dive into Nym, CureMD, and Olive workflows."
              status="completed"
            />
            <ModuleCard
              moduleNumber={2}
              title="AI Proficiency"
              description="General AI literacy, navigating tool interfaces, and understanding the core capabilities of LLMs in finance."
              status="in-progress"
              progress={45}
            />
            <ModuleCard
              moduleNumber={3}
              title="Basic Prompt Engineering"
              description="Techniques for creating quick presentations, summarizing email threads, and automating daily task lists."
              status="locked"
            />
            <ModuleCard
              moduleNumber={4}
              title="Responsible AI Use & HIPAA"
              description="Ethics, data privacy, and compliance when using public and private AI models."
              status="locked"
            />
          </div>
        </section>

        {/* TOOL MASTERY / LINKS */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#ED1B2F] font-bold tracking-widest uppercase text-xs">Skill Breakdown</span>
            <h2 className="text-3xl font-bold font-heading mt-2 mb-6 text-[#231F20]">Tool Mastery Tracking</h2>
            <p className="text-gray-600 font-serif mb-8 text-lg">
              Track your proficiency across the Apex Healthcare AI stack. Mastery is required for Senior Biller certification.
            </p>

            <div className="space-y-4">
              {/* Skill 1 */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-sm text-[#231F20]">Nym / CodaMetrix (Auto-Coding)</span>
                  <span className="font-bold text-sm text-[#ED1B2F]">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#ED1B2F] h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              {/* Skill 2 */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-sm text-[#231F20]">CureMD / HealthOrbit (Claims)</span>
                  <span className="font-bold text-sm text-[#231F20]">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#231F20] h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>

              {/* Skill 3 */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-sm text-[#231F20]">Gemini / Copilot (Comms)</span>
                  <span className="font-bold text-sm text-gray-500">Beginner</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>

              {/* Skill 4 */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-sm text-[#231F20]">Fathom (Denial Management)</span>
                  <span className="font-bold text-sm text-gray-400">Not Started</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-200 h-2 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#231F20] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ED1B2F] rounded-full blur-[100px] opacity-20 -mr-16 -mt-16" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-heading mb-4">Quick Links: AI Knowledge Base</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group">
                    <div className="bg-[#ED1B2F] text-white p-2 rounded-lg font-bold text-xs">NEW</div>
                    <span className="font-medium text-gray-200 group-hover:text-white transition-colors">2026 Coding Updates (AI-Annotated)</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-50 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group">
                    <FileText className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="font-medium text-gray-200 group-hover:text-white transition-colors">Prompt Library for Patient Appeals</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-50 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group">
                    <Play className="w-5 h-5 text-[#ED1B2F]" />
                    <span className="font-medium text-gray-200 group-hover:text-white transition-colors">Webinar: "Building Your First Agent"</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-50 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

