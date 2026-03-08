const ChaliceIcon = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8 3h8l-1 6a5 5 0 01-6 0L8 3zM6 3H4l2 5M18 3h2l-2 5M12 14v4M8 18h8M7 21h10"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M5 8c0 3.866 3.134 7 7 7s7-3.134 7-7"
        />
    </svg>
);

const ScrollIcon = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
    </svg>
);

const prizes = [
    {
        rank: '1ST PRIZE WINNER',
        amount: '₹15,000',
        perks: ['Incubation Support', 'Seed Funding Path', 'Winner Trophy & Certificate'],
        bg: 'linear-gradient(135deg, #6B0000 0%, #3a0000 100%)',
        border: '#c0392b',
        shadow: 'rgba(192,57,43,0.5)',
        iconColor: '#FFD700',
        elevated: true,
        icon: ChaliceIcon,
    },
    {
        rank: '2ND PRIZE WINNER',
        amount: '₹8,000',
        perks: ['Cloud Credits', 'Premium Developer Kit', 'Runner-up Certificate'],
        bg: 'linear-gradient(135deg, #001A4D 0%, #000d2a 100%)',
        border: '#1e40af',
        shadow: 'rgba(30,64,175,0.3)',
        iconColor: '#60a5fa',
        elevated: false,
        icon: ChaliceIcon,
    },
    {
        rank: '3RD PRIZE WINNER',
        amount: '₹5,000',
        perks: ['API Subscriptions', 'Internship Opportunities', 'Merit Certificate'],
        bg: 'linear-gradient(135deg, #003D1A 0%, #001f0d 100%)',
        border: '#1a6b35',
        shadow: 'rgba(0,150,50,0.3)',
        iconColor: '#4ade80',
        elevated: false,
        icon: ChaliceIcon,
    },
    {
        rank: 'WINNER CERTIFICATES',
        amount: '₹1,000',
        perks: ['Cheque Print', 'Digital Certificate', 'Recognition on Club Portal'],
        bg: 'linear-gradient(135deg, #2a1a00 0%, #1a0e00 100%)',
        border: '#5a3e10',
        shadow: 'rgba(90,62,16,0.4)',
        iconColor: '#FFD700',
        elevated: false,
        icon: ScrollIcon,
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

                {/* Prize cards — top 3 in a row, 4th centred below */}
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
                        {prizes.slice(0, 3).map((prize) => (
                            <div
                                key={prize.rank}
                                className={`velvet-card relative rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center transition-all duration-300 ${prize.elevated ? 'md:-mt-8' : ''}`}
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
                                <prize.icon
                                    className="relative z-10 w-12 h-12 mb-5"
                                    style={{ color: prize.iconColor, filter: prize.elevated ? 'drop-shadow(0 0 8px rgba(255,215,0,0.8))' : 'none' }}
                                />
                                <p className="relative z-10 text-xs font-cinzel font-bold tracking-widest text-white/60 mb-2">
                                    {prize.rank}
                                </p>
                                <p className={`relative z-10 font-cinzel font-black text-white mb-5 ${prize.elevated ? 'text-4xl' : 'text-3xl'}`}>
                                    {prize.amount}
                                </p>
                                <div className="relative z-10 flex flex-col gap-1.5 w-full">
                                    {prize.perks.map((perk, i) => (
                                        <p key={i} className="text-xs text-white/70 font-serif">{perk}</p>
                                    ))}
                                </div>
                                {prize.elevated && (
                                    <div className="relative z-10 mt-4 text-[#FFD700] text-lg tracking-widest animate-flicker">
                                        ✦ ✦ ✦
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* 4th prize — certificates, centred */}
                    <div className="flex justify-center">
                        <div
                            className="velvet-card relative rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center w-full md:max-w-sm transition-all duration-300"
                            style={{
                                background: prizes[3].bg,
                                border: `1px solid ${prizes[3].border}`,
                                boxShadow: `0 8px 32px ${prizes[3].shadow}`,
                            }}
                        >
                            <div className="absolute inset-x-0 top-0 h-16 opacity-10"
                                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.3) 0%, transparent 70%)' }}
                                aria-hidden="true"
                            />
                            <prizes[3].icon
                            className="relative z-10 w-10 h-10 mb-4"
                            style={{ color: prizes[3].iconColor }}
                            />
                            <p className="relative z-10 text-xs font-cinzel font-bold tracking-widest text-white/60 mb-2">
                                {prizes[3].rank}
                            </p>
                            <p className="relative z-10 font-cinzel font-black text-white text-2xl mb-4">
                                {prizes[3].amount}
                            </p>
                            <div className="relative z-10 flex flex-col gap-1.5 w-full">
                                {prizes[3].perks.map((perk, i) => (
                                    <p key={i} className="text-xs text-white/70 font-serif">{perk}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
