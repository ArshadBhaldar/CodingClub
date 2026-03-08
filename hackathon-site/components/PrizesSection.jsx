const TrophyIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-5.395 5.491m2.479-6.011V4.5a7.5 7.5 0 01-2.48 5.228" />
    </svg>
);

const prizes = [
    {
        rank: 'RUNNER-UP',
        amount: '₹25,000',
        perks: ['Cloud Credits + Premium Developer Kit', 'Exclusive Merch'],
        isChampion: false,
    },
    {
        rank: 'GRAND CHAMPION',
        amount: '₹75,000',
        perks: ['Incubation Support', 'Seed Funding Path', 'Winner Trophy'],
        isChampion: true,
    },
    {
        rank: 'HONORABLE MENTION',
        amount: '₹15,000',
        perks: ['API Subscriptions', 'Internship Opportunities', 'Tech Swag'],
        isChampion: false,
    },
];

export default function PrizesSection() {
    return (
        <section id="prizes" className="py-24 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Label */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-0.5 bg-primary" />
                    <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
                        Prize Pool
                    </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-16">
                    GLORY & REWARDS
                </h2>

                {/* Prize cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end">
                    {prizes.map((prize) =>
                        prize.isChampion ? (
                            /* Grand Champion — solid blue, elevated */
                            <div
                                key={prize.rank}
                                className="relative rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center md:-mt-6 md:mb-0 shadow-[0_0_40px_rgba(0,191,255,0.3)]"
                                style={{
                                    background: 'linear-gradient(135deg, #0090ff 0%, #0060cc 100%)',
                                }}
                            >
                                {/* Glow overlay */}
                                <div className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4) 0%, transparent 60%)',
                                    }}
                                />
                                <TrophyIcon className="relative z-10 w-10 h-10 text-white mb-5" />
                                <p className="relative z-10 text-xs font-bold tracking-widest text-white/70 mb-2">
                                    {prize.rank}
                                </p>
                                <p className="relative z-10 text-4xl font-black text-white mb-5">
                                    {prize.amount}
                                </p>
                                <div className="relative z-10 flex flex-col gap-1 w-full">
                                    {prize.perks.map((perk, i) => (
                                        <p key={i} className="text-xs text-white/75 font-medium">
                                            {perk}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            /* Runner-up / Honorable mention */
                            <div
                                key={prize.rank}
                                className="rounded-2xl p-7 flex flex-col items-center text-center bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                            >
                                <TrophyIcon className="w-8 h-8 text-primary mb-5 opacity-60" />
                                <p className="text-xs font-bold tracking-widest text-muted mb-2">
                                    {prize.rank}
                                </p>
                                <p className="text-3xl font-black text-white mb-5">{prize.amount}</p>
                                <div className="flex flex-col gap-1 w-full text-center">
                                    {prize.perks.map((perk, i) => (
                                        <p key={i} className="text-xs text-muted font-medium">
                                            {perk}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
