const ChaliceIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8 3h8l-1 6a5 5 0 01-6 0L8 3zM6 3H4l2 5M18 3h2l-2 5M12 14v4M8 18h8M7 21h10"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M5 8c0 3.866 3.134 7 7 7s7-3.134 7-7"
        />
    </svg>
);

const prizes = [
    {
        rank: 'SECOND RUNNER UP',
        amount: '₹15,000',
        perks: ['API Subscriptions', 'Internship Opportunities', 'Tech Swag'],
        bg: 'linear-gradient(135deg, #003D1A 0%, #001f0d 100%)',
        border: '#1a6b35',
        shadow: 'rgba(0,150,50,0.3)',
        iconColor: '#4ade80',
        isChampion: false,
    },
    {
        rank: 'GRAND CHAMPION',
        amount: '₹75,000',
        perks: ['Incubation Support', 'Seed Funding Path', 'Winner Trophy'],
        bg: 'linear-gradient(135deg, #6B0000 0%, #3a0000 100%)',
        border: '#c0392b',
        shadow: 'rgba(192,57,43,0.5)',
        iconColor: '#FFD700',
        isChampion: true,
    },
    {
        rank: 'FIRST RUNNER UP',
        amount: '₹25,000',
        perks: ['Cloud Credits', 'Premium Developer Kit', 'Exclusive Merch'],
        bg: 'linear-gradient(135deg, #001A4D 0%, #000d2a 100%)',
        border: '#1e40af',
        shadow: 'rgba(30,64,175,0.3)',
        iconColor: '#60a5fa',
        isChampion: false,
    },
];

export default function PrizesSection() {
    return (
        <section id="prizes" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Label */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-8 h-0.5 bg-[#FFD700]" />
                    <span className="text-xs font-cinzel font-semibold tracking-widest text-[#FFD700] uppercase">
                        Trophies &amp; Acclaim
                    </span>
                    <div className="w-8 h-0.5 bg-[#FFD700]" />
                </div>

                <h2 className="text-4xl sm:text-5xl font-cinzel font-black tracking-tight text-[#FFD700] text-center mb-16 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    GLORY &amp; REWARDS
                </h2>

                {/* Prize cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
                    {prizes.map((prize) => (
                        <div
                            key={prize.rank}
                            className={`velvet-card relative rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center transition-all duration-300 ${prize.isChampion ? 'md:-mt-8 md:mb-0' : ''}`}
                            style={{
                                background: prize.bg,
                                border: `1px solid ${prize.border}`,
                                boxShadow: `0 8px 32px ${prize.shadow}, 0 0 0 1px ${prize.border}40`,
                            }}
                        >
                            {/* Top shimmer */}
                            <div className="absolute inset-x-0 top-0 h-16 opacity-20"
                                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)' }}
                                aria-hidden="true"
                            />

                            <ChaliceIcon
                                className={`relative z-10 w-12 h-12 mb-5`}
                                style={{ color: prize.iconColor, filter: prize.isChampion ? 'drop-shadow(0 0 8px rgba(255,215,0,0.8))' : 'none' }}
                            />

                            <p className="relative z-10 text-xs font-cinzel font-bold tracking-widest text-white/60 mb-2">
                                {prize.rank}
                            </p>
                            <p className={`relative z-10 font-cinzel font-black text-white mb-5 ${prize.isChampion ? 'text-4xl' : 'text-3xl'}`}>
                                {prize.amount}
                            </p>
                            <div className="relative z-10 flex flex-col gap-1.5 w-full">
                                {prize.perks.map((perk, i) => (
                                    <p key={i} className="text-xs text-white/70 font-serif">
                                        {perk}
                                    </p>
                                ))}
                            </div>

                            {prize.isChampion && (
                                <div className="relative z-10 mt-4 text-[#FFD700] text-lg tracking-widest animate-flicker">
                                    ✦ ✦ ✦
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
