const domains = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-2.167.378a5.25 5.25 0 01-2.336 0l-2.167-.378c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        label: 'AUTOMATA & GOLEMS',
        description: 'Build autonomous agents that can think, plan, and execute complex workflows beyond simple LLM prompts.',
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
        description: 'Revolutionize payments, lending, and personal finance with next-gen security and seamless UX.',
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
        description: 'Explore decentralized governance, smart contracts, and high-performance L2 solutions for the open web.',
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
        description: "Have a wild idea? This track is for the dreamers. Build anything that solves a real-world problem.",
        color: 'text-[#FFD700]',
        accent: 'border-yellow-800/60 hover:border-yellow-500/60',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        label: 'SPELLS OF SECURITY',
        description: 'Craft cybersecurity solutions — from ethical hacking and vulnerability detection to privacy-preserving architectures.',
        color: 'text-red-400',
        accent: 'border-red-800/60 hover:border-red-500/60',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        ),
        label: 'SKY ALCHEMY (CLOUD)',
        description: 'Design scalable cloud-native apps, serverless architectures, and DevOps pipelines that conjure infrastructure from thin air.',
        color: 'text-sky-400',
        accent: 'border-sky-800/60 hover:border-sky-500/60',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
        label: 'HEALING ARTS (HEALTH TECH)',
        description: 'Build solutions for healthcare — from telemedicine and diagnostics AI to patient data management and wellness platforms.',
        color: 'text-pink-400',
        accent: 'border-pink-800/60 hover:border-pink-500/60',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
        label: 'EDU-MAGIC (EDTECH)',
        description: 'Reimagine how knowledge is shared — adaptive learning platforms, gamified education, and AI-powered tutoring systems.',
        color: 'text-green-400',
        accent: 'border-green-800/60 hover:border-green-500/60',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
            </svg>
        ),
        label: 'GREEN RUNES (SUSTAINABILITY)',
        description: 'Code for the planet — build apps tackling climate, clean energy, smart agriculture, and environmental monitoring.',
        color: 'text-emerald-400',
        accent: 'border-emerald-800/60 hover:border-emerald-500/60',
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
