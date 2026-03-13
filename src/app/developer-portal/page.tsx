'use client';

import Link from 'next/link';

export default function DeveloperPortalPage() {
  return (
    <div className="flex flex-col h-screen bg-background-dark text-white font-display overflow-hidden">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#283039] px-6 py-3 h-16 shrink-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-white">
            <div className="size-8 flex items-center justify-center bg-primary/20 rounded text-primary">
              <span className="material-symbols-outlined text-2xl">code_blocks</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              myzone <span className="text-primary font-normal">Developer</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-9">
            <Link href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">Docs</Link>
            <Link href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">API Reference</Link>
            <Link href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">SDKs</Link>
            <Link href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">Support</Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-4 md:gap-8">
          <div className="hidden md:flex items-center">
            <div className="flex w-full items-stretch rounded-lg h-10 bg-[#283039] border border-transparent hover:border-[#283039] hover:bg-[#283039]/80 transition-all max-w-64 cursor-text">
              <div className="text-[#9dabb9] flex items-center justify-center pl-4">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <div className="flex items-center px-2 text-sm text-[#9dabb9]">
                Search resources...
              </div>
              <div className="hidden xl:flex items-center pr-3 text-[#9dabb9] text-xs font-mono">
                ⌘K
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/seller/dashboard" className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold">
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden lg:flex flex-col w-64 bg-[#101922] border-r border-[#283039] h-full overflow-y-auto">
          <div className="flex flex-col gap-8 p-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#9dabb9] text-xs font-bold uppercase tracking-wider px-3 mb-2">Documentation</h3>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[20px]">flag</span>
                <span className="text-sm font-medium">Getting Started</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#283039] transition-colors text-[#9dabb9] hover:text-white">
                <span className="material-symbols-outlined text-[20px]">key</span>
                <span className="text-sm font-medium">Authentication</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#283039] transition-colors text-[#9dabb9] hover:text-white">
                <span className="material-symbols-outlined text-[20px]">webhook</span>
                <span className="text-sm font-medium">Webhooks</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#283039] transition-colors text-[#9dabb9] hover:text-white">
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span className="text-sm font-medium">Errors</span>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#9dabb9] text-xs font-bold uppercase tracking-wider px-3 mb-2">API Reference</h3>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#283039] transition-colors text-[#9dabb9] hover:text-white">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="text-sm font-medium">Products API</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#283039] transition-colors text-[#9dabb9] hover:text-white">
                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                <span className="text-sm font-medium">Orders API</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#283039] transition-colors text-[#9dabb9] hover:text-white">
                <span className="material-symbols-outlined text-[20px]">payments</span>
                <span className="text-sm font-medium">Payments API</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#283039] transition-colors text-[#9dabb9] hover:text-white">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="text-sm font-medium">Logistics API</span>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#9dabb9] text-xs font-bold uppercase tracking-wider px-3 mb-2">Community</h3>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#283039] transition-colors text-[#9dabb9] hover:text-white">
                <span className="material-symbols-outlined text-[20px]">forum</span>
                <span className="text-sm font-medium">Forum</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#283039] transition-colors text-[#9dabb9] hover:text-white">
                <span className="material-symbols-outlined text-[20px]">new_releases</span>
                <span className="text-sm font-medium">Changelog</span>
              </Link>
            </div>
          </div>
          <div className="mt-auto p-6 border-t border-[#283039]">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <p className="text-[#9dabb9] text-sm font-medium">System Operational</p>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto bg-[#101922] relative">
          <div className="max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col gap-8 pb-20">
            <section>
              <div className="flex flex-col-reverse lg:flex-row gap-8 bg-[#283039]/30 border border-[#283039] rounded-2xl overflow-hidden p-6 md:p-10 relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
                <div className="flex flex-col justify-center flex-1 gap-6 z-10">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold w-fit mb-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      v2.4.0 Released
                    </div>
                    <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                      Build the future of <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">global commerce</span>
                    </h1>
                    <p className="text-[#9dabb9] text-lg max-w-xl leading-relaxed">
                      Integrate with myzone&apos;s intelligent marketplace APIs. Access global inventory, manage cross-border payments, and automate logistics with our agentic infrastructure.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button className="h-12 px-6 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm transition-all flex items-center justify-center gap-2">
                      Get API Keys
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                    <button className="h-12 px-6 rounded-lg bg-[#283039] hover:bg-[#3b4754] text-white font-medium text-sm border border-[#283039] transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">terminal</span>
                      Run in Postman
                    </button>
                  </div>
                </div>
                <div className="hidden md:flex flex-1 items-center justify-center lg:justify-end relative">
                  <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden border border-[#283039] shadow-2xl shadow-black/50 bg-[#101922]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101922] to-transparent"></div>
                    <div className="absolute inset-4 bg-[#111418]/90 backdrop-blur rounded-lg border border-[#283039] p-4 font-mono text-xs text-blue-200/80 overflow-hidden">
                      <div className="flex gap-1.5 mb-3">
                        <div className="size-2.5 rounded-full bg-red-500/50"></div>
                        <div className="size-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="size-2.5 rounded-full bg-green-500/50"></div>
                      </div>
                      <pre className="text-xs text-blue-200 font-mono leading-relaxed">
{`const order = await myzone.createOrder({
  items: [{ id: "prod_892", qty: 5 }],
  currency: "USD",
  agent_mode: true
});
// Response received in 45ms`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-1 bg-primary rounded-full"></div>
                <h2 className="text-lg font-bold text-white">Getting Started Guide</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col p-5 rounded-xl border border-[#283039] bg-[#1c252e] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl">badge</span>
                  </div>
                  <div className="size-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm mb-4 ring-1 ring-primary/30">1</div>
                  <h3 className="text-white font-bold text-base mb-2">Account Setup</h3>
                  <p className="text-[#9dabb9] text-sm leading-relaxed mb-4 flex-1">Create your verified developer profile to access the sandbox environment.</p>
                  <Link href="#" className="text-primary hover:text-blue-400 text-sm font-medium inline-flex items-center gap-1">
                    Sign up free <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="flex flex-col p-5 rounded-xl border border-[#283039] bg-[#1c252e] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl">key</span>
                  </div>
                  <div className="size-8 rounded-full bg-[#283039] text-[#9dabb9] flex items-center justify-center font-bold text-sm mb-4 ring-1 ring-white/10">2</div>
                  <h3 className="text-white font-bold text-base mb-2">Generate API Keys</h3>
                  <p className="text-[#9dabb9] text-sm leading-relaxed mb-4 flex-1">Navigate to settings and issue your unique secret &amp; public keys.</p>
                  <Link href="#" className="text-[#9dabb9] hover:text-white text-sm font-medium inline-flex items-center gap-1">
                    Go to settings <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>
                <div className="flex flex-col p-5 rounded-xl border border-[#283039] bg-[#1c252e] relative overflow-hidden md:col-span-2 lg:col-span-1">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl">api</span>
                  </div>
                  <div className="size-8 rounded-full bg-[#283039] text-[#9dabb9] flex items-center justify-center font-bold text-sm mb-4 ring-1 ring-white/10">3</div>
                  <h3 className="text-white font-bold text-base mb-2">Make First Request</h3>
                  <div className="bg-[#101922] rounded p-2 mb-3 border border-[#283039] w-full overflow-hidden">
                    <code className="text-[10px] font-mono text-green-400 whitespace-nowrap block">curl https://api.myzone.com/v1/health</code>
                  </div>
                  <Link href="#" className="text-[#9dabb9] hover:text-white text-sm font-medium inline-flex items-center gap-1">
                    Try in Explorer <span className="material-symbols-outlined text-sm">terminal</span>
                  </Link>
                </div>
                <div className="flex flex-col p-5 rounded-xl border border-[#283039] bg-[#1c252e] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl">rocket</span>
                  </div>
                  <div className="size-8 rounded-full bg-[#283039] text-[#9dabb9] flex items-center justify-center font-bold text-sm mb-4 ring-1 ring-white/10">4</div>
                  <h3 className="text-white font-bold text-base mb-2">Go Live</h3>
                  <p className="text-[#9dabb9] text-sm leading-relaxed mb-4 flex-1">Production access with full rate limits and premium support.</p>
                  <Link href="#" className="text-[#9dabb9] hover:text-white text-sm font-medium inline-flex items-center gap-1">
                    View Limits <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-1 bg-primary rounded-full"></div>
                <h2 className="text-lg font-bold text-white">Popular APIs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: 'inventory_2', title: 'Products API', desc: 'Manage global inventory with AI-powered categorization and cross-border sync.' },
                  { icon: 'shopping_cart', title: 'Orders API', desc: 'Full lifecycle order management with real-time tracking integration.' },
                  { icon: 'payments', title: 'Payments API', desc: 'Multi-currency processing with automated tax calculation and compliance.' },
                ].map((api) => (
                  <Link key={api.title} href="#" className="flex flex-col p-5 rounded-xl border border-[#283039] bg-[#1c252e] hover:border-primary/50 hover:bg-[#283039]/50 transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">{api.icon}</span>
                      </div>
                      <h3 className="text-white font-bold">{api.title}</h3>
                    </div>
                    <p className="text-[#9dabb9] text-sm leading-relaxed">{api.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
