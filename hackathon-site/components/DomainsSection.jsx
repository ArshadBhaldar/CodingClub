const domains = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-2.167.378a5.25 5.25 0 01-2.336 0l-2.167-.378c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        label: 'AUTOMATA & GOLEMS',
        description:
            'Build autonomous agents that can think, plan, and execute complex workflows beyond simple LLM prompts.',
        color: 'text-purple-400',
        accent: 'border-purple-800/60 hover:border-purple-500/60',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
        label: 'GRINGOTTS FINTECH',
        description:
            'Revolutionize payments, lending, and personal finance with next-gen security and seamless UX.',
        color: 'text-amber-400',
        accent: 'border-amber-800/60 hover:border-amber-500/60',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
        ),
        label: 'WEB3 RUNES',
        description:
            'Explore decentralized governance, smart contracts, and high-performance L2 solutions for the open web.',
        color: 'text-cyan-400',
        accent: 'border-cyan-800/60 hover:border-cyan-500/60',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ),
        label: 'ASTRAL INNOVATION',
        description:
            "Have a wild idea? This track is for the dreamers. Build anything that solves a real-world problem.",
        color: 'text-[#FFD700]',
        accent: 'border-yellow-800/60 hover:border-yellow-500/60',
    },
];

export default function DomainsSection() {
    return (
        <section id="domains" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-0.5 bg-[#FFD700]" />
                    <span className="text-xs font-cinzel font-semibold tracking-widest text-[#FFD700] uppercase">
                        Arcane Specialisations
                    </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-cinzel font-black tracking-tight text-[#FFD700] mb-16 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    DOMAINS OF ARCANE INNOVATION
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {domains.map((domain) => (
                        <div
                            key={domain.label}
                            className={`parchment-card group p-6 rounded-xl border ${domain.accent} transition-all duration-300 cursor-default hover:shadow-glow-gold`}
                        >
                            <div className={`mb-4 ${domain.color} transition-transform duration-300 group-hover:scale-110`}>
                                {domain.icon}
                            </div>
                            <h3 className="text-sm font-cinzel font-bold tracking-widest text-[#FFD700] mb-3">
                                {domain.label}
                            </h3>
                            <p className="text-sm text-[#C8A96E] leading-relaxed font-serif">{domain.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
