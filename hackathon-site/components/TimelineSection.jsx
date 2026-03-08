const milestones = [
    {
        date: 'SEP 01 — SEP 15',
        status: 'COMPLETED',
        title: 'REGISTRATION OPENS',
        description:
            'Secure your spot and build your team profile. Early bird perks for the first 50 teams.',
        dotColor: '#4CAF50',
        dateColor: 'text-green-400',
    },
    {
        date: 'OCT 01 | 23:59 IST',
        status: 'UPCOMING',
        title: 'SUBMISSION OF INTENT',
        description:
            'Submit your proposal. Includes project scope, tech stack, and a brief walkthrough of your planned execution.',
        dotColor: '#FFD700',
        dateColor: 'text-[#FFD700]',
    },
    {
        date: 'OCT 05',
        status: 'UPCOMING',
        title: 'THE CHOSEN FORTY',
        description:
            'The top 40 teams will be invited for the offline hackathon. Check your email for status.',
        dotColor: '#4A3000',
        dateColor: 'text-[#A08040]',
    },
    {
        date: 'OCT 14 - 15',
        status: 'UPCOMING',
        title: 'THE GRAND FINALE',
        description:
            '24 hours of nonstop arcane manifestation at our tech campus. Meals, mentors, and caffeine provided.',
        dotColor: '#4A3000',
        dateColor: 'text-[#A08040]',
    },
];

export default function TimelineSection() {
    return (
        <section id="timeline" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left column */}
                    <div className="lg:w-80 flex-shrink-0">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-0.5 bg-[#FFD700]" />
                            <span className="text-xs font-cinzel font-semibold tracking-widest text-[#FFD700] uppercase">
                                The Path Ahead
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-cinzel font-black tracking-tight text-[#FFD700] mb-5 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                            JOURNEY TO<br />MASTERY
                        </h2>

                        <p className="text-[#C8A96E] leading-relaxed mb-10 font-serif">
                            Mark your calendars. Every milestone counts towards the ultimate showdown.
                            Don't miss the deadlines for team formation and idea casting.
                        </p>

                        {/* Pro tip card */}
                        <div className="parchment-card p-5 rounded-xl border border-[#FFD700]/30">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[#FFD700]" aria-hidden="true">🪶</span>
                                <p className="text-xs font-cinzel font-bold text-[#FFD700] tracking-widest">
                                    PRO TIP FOR PARTICIPANTS:
                                </p>
                            </div>
                            <p className="text-sm text-[#C8A96E] leading-relaxed font-serif">
                                Ensure your GitHub profile is updated and your repositories are clean. Our mentors look at code quality as much as the final presentation.
                            </p>
                        </div>
                    </div>

                    {/* Right column — Timeline */}
                    <div className="flex-1">
                        <div className="relative flex flex-col gap-0">
                            {/* Vertical line — brass/gold */}
                            <div className="absolute left-3.5 top-4 bottom-4 w-0.5"
                                style={{ background: 'linear-gradient(to bottom, #FFD700, #B8860B, #4A3000)' }}
                                aria-hidden="true"
                            />

                            {milestones.map((m, i) => (
                                <div key={i} className="relative flex gap-8 pb-10 last:pb-0">
                                    {/* Medallion dot */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div
                                            className="w-7 h-7 rounded-full border-2 border-[#0D0900] flex items-center justify-center"
                                            style={{ background: m.dotColor, boxShadow: m.status === 'COMPLETED' ? '0 0 8px rgba(76,175,80,0.7)' : m.status === 'UPCOMING' && i === 1 ? '0 0 8px rgba(255,215,0,0.6)' : 'none' }}
                                        >
                                            {m.status === 'COMPLETED' && (
                                                <svg className="w-3 h-3 text-[#0D0900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                            {m.status === 'UPCOMING' && i === 1 && (
                                                <span className="text-[8px] text-[#0D0900] font-bold">✦</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-0.5">
                                        <p className={`text-xs font-cinzel font-semibold tracking-widest mb-1 ${m.dateColor}`}>
                                            {m.date}
                                        </p>
                                        <h3 className="text-base font-cinzel font-black tracking-wide text-[#FFD700] mb-2">
                                            {m.title}
                                        </h3>
                                        <p className="text-sm text-[#C8A96E] leading-relaxed font-serif">{m.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
