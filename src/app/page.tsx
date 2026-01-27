import Link from "next/link";
import Image from "next/image";
import { content } from "@/lib/content";

export default function Home() {
  const { home } = content;

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-people-bg.png"
            alt="MindFinders Leadership Environment"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-5xl">
            <h1 className="text-white font-heading leading-tight tracking-tight">
              <span className="block text-5xl md:text-8xl lg:text-9xl font-bold mb-4 animate-fade-in-up">
                Automate Smarter,
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-medium text-gray-100 animate-fade-in-up delay-100">
                Grow Faster and Hire Better
              </span>
            </h1>

            <div className="mt-10 animate-fade-in-up delay-200">
              <Link
                href="/get-started"
                className="inline-block bg-[var(--primary)] text-white px-8 py-4 rounded text-lg font-bold hover:bg-white hover:text-[var(--primary)] transition-colors shadow-lg"
              >
                Discover Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Column: Content */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="text-[var(--primary)] font-bold uppercase tracking-[0.2em] text-sm md:text-base border-l-4 border-[var(--primary)] pl-4">
                  What We Do
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 text-[var(--secondary)] font-heading leading-tight">
                What Is a Growth and AI Strategic Advisor?
              </h2>
              <div className="space-y-6 text-[1.125rem] text-[var(--secondary)] leading-[1.6] font-serif">
                {home.whatWeDo.body.map((p, i) => (
                  <p key={i}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/services" className="inline-block border-b-2 border-[var(--primary)] text-[var(--primary)] font-bold uppercase tracking-wider hover:text-[var(--secondary)] hover:border-[var(--secondary)] transition-colors pb-1">
                  Discover Our Approach →
                </Link>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-deep)] relative group">
                <Image
                  src="/what-we-do.png"
                  alt="Strategic AI and Human Capital Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Card Element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                <p className="text-[var(--primary)] font-bold text-4xl font-heading mb-1">25+</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Years of Experience</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-20 bg-black text-white">
        <div className="container-standard">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 text-white font-heading leading-tight">
            {home.theProblem.h2}
          </h2>
          <h3 className="text-3xl text-gray-400 font-serif italic mb-12 border-b border-gray-800 pb-8">
            {home.theProblem.h3}
          </h3>
          <div className="space-y-8">
            {home.theProblem.body.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-2xl md:text-3xl leading-relaxed text-white font-serif"
                    : "text-xl leading-relaxed text-gray-300 font-serif"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 text-[var(--secondary)] font-heading leading-tight">
                AI-Enabled Human<br />
                Capital Management.<br />
                Built for Execution.
              </h2>
              <div className="space-y-6 text-[1.125rem] text-[var(--secondary)] leading-[1.6] font-serif">
                <p>
                  MindFinders helps organizations <strong className="text-[var(--primary)]">redesign work</strong>, <strong className="text-[var(--primary)]">upskill talent</strong>, and <strong className="text-[var(--primary)]">deploy AI-ready teams</strong> that deliver measurable performance—today and into the future.
                </p>
                <p>
                  MindFinders has <strong className="text-gray-900">25 Years of partnering</strong> with federal agencies, Fortune 500 companies, non-profits, and high-growth enterprises to build high-performing teams.
                </p>
                <p>
                  Today, we assist leaders in navigating workforce transformation by aligning <strong className="text-gray-900">strategy, talent, and AI</strong> so change is not just implemented but adopted and sustained.
                </p>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-deep)] relative group">
                <Image
                  src="/human-ai-team.png"
                  alt="Boardroom strategy session with AI integration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-2 border-[var(--primary)]/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve / Ideal Partners */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-5xl mx-auto mb-16">
            <span className="text-[var(--primary)] font-bold uppercase tracking-[0.2em] text-sm md:text-base border-b-2 border-[var(--primary)] pb-2 mb-6 inline-block">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--secondary)] font-heading leading-tight mb-6 text-balance">
              Our Ideal Partners: Organizations Ready to Scale&nbsp;Smarter
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {/* Partner Card 1: Visionary Leaders */}
            <div className="bg-white p-10 rounded-xl shadow-[var(--shadow-natural)] hover:shadow-[var(--shadow-deep)] transition-all duration-300 border-t-4 border-[var(--primary)] group">
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Icon placeholder (Building) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-[var(--secondary)]">Visionary Middle-Market Leaders</h3>
              <p className="text-[1.125rem] text-[var(--secondary)] leading-[1.6] font-serif">
                Overseeing companies with annual revenues between <strong className="text-[var(--primary)]">$10 million and $1 billion</strong>.
              </p>
            </div>

            {/* Partner Card 2: Small Business Owners */}
            <div className="bg-white p-10 rounded-xl shadow-[var(--shadow-natural)] hover:shadow-[var(--shadow-deep)] transition-all duration-300 border-t-4 border-[var(--secondary)] group">
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Icon placeholder (Rocket/Growth) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-[var(--secondary)]">Trailblazing Small-Business Owners</h3>
              <p className="text-[1.125rem] text-[var(--secondary)] leading-[1.6] font-serif">
                Generating at least <strong className="text-[var(--secondary)]">$3 million in revenue</strong> and leading teams of 30 or more.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-[1.25rem] text-[var(--secondary)] leading-[1.6] font-serif">
              <p>
                AI is transforming every industry. Whether you are involved in B2B, high-tech, manufacturing, finance, healthcare, e-commerce, big-ticket B2C, automotive, or home services, this pertains to&nbsp;you.
              </p>
              <p>
                Plus, many other industries. There is no industry that AI will not disrupt and transform.
              </p>
            </div>
          </div>

        </div>
      </section>



      {/* How We Help */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[var(--primary)] font-bold uppercase tracking-[0.2em] text-sm md:text-base border-b-2 border-[var(--primary)] pb-2 mb-6 inline-block">
              How We Help
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-[var(--secondary)] font-heading leading-tight">
              How We Help You<br /><span className="hidden">_</span>Increase Growth
            </h2>
            <div className="space-y-6 text-[1.25rem] text-[var(--secondary)] leading-[1.6] font-serif text-balance">
              {home.howWeHelp.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {home.howWeHelp.pillars.map((pillar, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-xl shadow-[var(--shadow-natural)] hover:shadow-[var(--shadow-deep)] transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${i % 2 === 0 ? 'border-[var(--primary)]' : 'border-[var(--secondary)]'} group h-full`}
              >
                <div className="mb-6 h-12 w-12 text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors duration-300">
                  {/* Dynamic Icons based on index */}
                  {i === 0 && (
                    /* Execution / Strategy Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  )}
                  {i === 1 && (
                    /* Upskilling / Education Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24 50.552 50.552 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  )}
                  {i === 2 && (
                    /* Talent / People Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  )}
                  {i === 3 && (
                    /* Advisory / Handshake Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  )}
                </div>
                <h4 className="font-bold text-xl mb-4 text-[var(--secondary)] leading-tight h-14 flex items-center">
                  {pillar.title}
                </h4>
                <p className="text-[1.125rem] text-gray-600 leading-relaxed font-serif">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MindFinders */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Context */}
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-[var(--secondary)] font-heading leading-tight">
                {home.whyMindFinders.h2}
              </h2>
              <p className="mb-8 text-[1.25rem] text-[var(--secondary)] leading-[1.6] font-serif">
                {home.whyMindFinders.body}
              </p>
              <ul className="space-y-4 text-[1.125rem] text-[var(--secondary)] leading-[1.6] font-serif">
                {home.whyMindFinders.bullets.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[var(--primary)] mr-3 mt-1.5 text-xl">●</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Comparison Card */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-[var(--shadow-deep)] overflow-hidden border border-gray-100">
                <div className="bg-[var(--secondary)] text-white p-6 grid grid-cols-2">
                  <div className="font-bold text-lg opacity-80 uppercase tracking-widest text-xs md:text-sm">Traditional Models</div>
                  <div className="font-bold text-lg text-[var(--primary)] uppercase tracking-widest text-xs md:text-sm">MindFinders</div>
                </div>
                <div className="divide-y divide-gray-100">
                  {home.whyMindFinders.comparisonTable.rows.map((row, i) => (
                    <div key={i} className="grid grid-cols-2 p-6 hover:bg-gray-50 transition-colors group">
                      <div className="flex items-start pr-4 text-gray-500 text-sm md:text-base">
                        <span className="text-red-400 mr-2 text-lg leading-none mt-0.5">✘</span>
                        {row[0]}
                      </div>
                      <div className="flex items-start pl-4 font-medium text-[var(--secondary)] text-sm md:text-base group-hover:text-[var(--primary)] transition-colors">
                        <span className="text-[var(--primary)] mr-2 text-lg leading-none mt-0.5">✔</span>
                        {row[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative backdrop */}
              <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-[var(--primary)]/5 rounded-2xl"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[var(--primary)] font-bold uppercase tracking-[0.2em] text-sm md:text-base border-b-2 border-[var(--primary)] pb-2 mb-6 inline-block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-[var(--secondary)] font-heading leading-tight">
              {home.servicesPreview.h2}
            </h2>
            <p className="text-[1.25rem] text-[var(--secondary)] leading-[1.6] font-serif text-balance">
              {home.servicesPreview.body}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">

            {/* Service Card 1: AI Solutions */}
            <Link href="/services" className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-natural)] hover:shadow-[var(--shadow-deep)] transition-all duration-500 min-h-[400px] flex flex-col justify-end p-10 bg-[var(--primary)] text-white">
              {/* Abstract decorative bg */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl group-hover:bg-black/20 transition-all duration-500 translate-x-1/3 -translate-y-1/3"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  {/* Tech/AI Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12h15m-15 3.75h15m-15 3.75h15M8.25 21v1.5M16.5 21v1.5M16.5 3v1.5M12 3v1.5M12 21v1.5" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-heading text-white group-hover:text-white/90 transition-colors">AI Solutions</h3>
                <p className="text-white/90 text-lg leading-relaxed font-serif mb-6 opacity-90">
                  Automate complex tasks, optimize your sales funnel, and deploy intelligent agents that work 24/7.
                </p>
                <span className="inline-flex items-center font-bold text-white group-hover:underline transition-all">
                  Explore AI Solutions <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>

            {/* Service Card 2: Workforce Solutions */}
            <Link href="/services" className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-natural)] hover:shadow-[var(--shadow-deep)] transition-all duration-500 min-h-[400px] flex flex-col justify-end p-10 bg-white border border-gray-100">
              {/* Abstract decorative bg */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl group-hover:bg-[var(--primary)]/10 transition-all duration-500 translate-x-1/3 -translate-y-1/3"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--primary)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-heading text-[var(--secondary)]">Workforce Solutions</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-serif mb-6">
                  Modernize your workforce with AI-ready talent, executive advisory, and strategic upskilling programs.
                </p>
                <span className="inline-flex items-center font-bold text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors">
                  Explore Feature & Talent <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* AI Agents Preview */}
      <section className="py-12 md:py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Column: Text Content */}
            <div className="lg:w-1/2">
              <span className="text-[var(--primary)] font-bold uppercase tracking-[0.2em] text-sm md:text-base border-l-4 border-[var(--primary)] pl-4 mb-6 inline-block">
                AI Agents
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-[var(--secondary)] font-heading leading-tight">
                {home.aiAgentsPreview.h2}
              </h2>
              <p className="mb-10 text-xl text-gray-600 leading-relaxed font-serif">
                {home.aiAgentsPreview.body}
              </p>
              <Link
                href="/ai-agents"
                className="inline-flex items-center text-lg font-bold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors group"
              >
                Explore AI Agents
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Right Column: Visual Capability Grid */}
            <div className="lg:w-1/2 relative">
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/50 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>

              <div className="grid grid-cols-2 gap-4">
                {/* Agent Card 1: Recruiting */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[var(--primary)] hover:shadow-lg transition-shadow group">
                  <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center mb-4 text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[var(--secondary)]">Recruiting Agent</h4>
                  <p className="text-sm text-gray-500 mt-1">Screens candidates 24/7</p>
                </div>

                {/* Agent Card 2: Sales */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[var(--secondary)] hover:shadow-lg transition-shadow mt-8 group">
                  <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-[var(--secondary)] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[var(--secondary)]">Sales Agent</h4>
                  <p className="text-sm text-gray-500 mt-1">Follows up on leads instantly</p>
                </div>

                {/* Agent Card 3: Support */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[var(--primary)] hover:shadow-lg transition-shadow group">
                  <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center mb-4 text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[var(--secondary)]">Support Agent</h4>
                  <p className="text-sm text-gray-500 mt-1">Answers FAQs & books calls</p>
                </div>

                {/* Agent Card 4: Operations */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[var(--secondary)] hover:shadow-lg transition-shadow mt-8 group">
                  <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-[var(--secondary)] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[var(--secondary)]">Ops Agent</h4>
                  <p className="text-sm text-gray-500 mt-1">Automates repetitive workflows</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* Final CTA */}
      <section className="py-24 bg-black text-white relative overflow-hidden border-t border-gray-800">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading leading-tight max-w-4xl mx-auto">
            {home.finalCta.h2}
          </h2>

          <div className="flex justify-center">
            <Link
              href={home.finalCta.buttonLink}
              className="inline-block bg-[var(--primary)] text-white px-8 py-4 rounded text-lg font-bold hover:bg-white hover:text-[var(--primary)] transition-colors shadow-lg"
            >
              {home.finalCta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
