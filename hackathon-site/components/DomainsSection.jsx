const domains = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-2.167.378a5.25 5.25 0 01-2.336 0l-2.167-.378c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        label: 'AGENTIC AI',
        description:
            'Build autonomous agents that can think, plan, and execute complex workflows beyond simple LLM prompts.',
        color: 'text-purple-400',
        borderHover: 'hover:border-purple-500/50',
        bgHover: 'hover:bg-purple-500/5',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
        label: 'FINTECH',
        description:
            'Revolutionize payments, lending, and personal finance with next-gen security and seamless UX.',
        color: 'text-green-400',
        borderHover: 'hover:border-green-500/50',
        bgHover: 'hover:bg-green-500/5',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
        ),
        label: 'BLOCKCHAIN',
        description:
            'Explore decentralized governance, smart contracts, and high-performance L2 solutions for the open web.',
        color: 'text-cyan-400',
        borderHover: 'hover:border-cyan-500/50',
        bgHover: 'hover:bg-cyan-500/5',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
        label: 'OPEN INNOVATION',
        description:
            "Have a wild idea? This track is for the dreamers. Build anything that solves a real-world problem.",
        color: 'text-orange-400',
        borderHover: 'hover:border-orange-500/50',
        bgHover: 'hover:bg-orange-500/5',
    },
];

export default function DomainsSection() {
    return (
        <section id="domains" className="py-24 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-0.5 bg-primary" />
                    <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
                        Strategic Domains
                    </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-16">
                    SECTORS TO DISRUPT
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {domains.map((domain) => (
                        <div
                            key={domain.label}
                            className={`group p-6 rounded-xl bg-card border border-border ${domain.borderHover} ${domain.bgHover} transition-all duration-300 cursor-default`}
                        >
                            <div className={`mb-4 ${domain.color} transition-transform duration-300 group-hover:scale-110`}>
                                {domain.icon}
                            </div>
                            <h3 className="text-sm font-bold tracking-widest text-white mb-3">
                                {domain.label}
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">{domain.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
