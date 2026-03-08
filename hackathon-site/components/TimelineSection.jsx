const milestones = [
    {
        date: 'SEP 01 — SEP 15',
        status: 'COMPLETED',
        title: 'REGISTRATION OPENS',
        description:
            'Secure your spot and build your team profile. Early bird perks for the first 50 teams.',
        dotColor: 'bg-green-400',
        dateColor: 'text-green-400',
    },
    {
        date: 'OCT 01 | 23:59 IST',
        status: 'UPCOMING',
        title: 'IDEA SUBMISSION',
        description:
            'Submit your proposal. Includes project scope, tech stack, and a brief walkthrough of your planned execution.',
        dotColor: 'bg-primary',
        dateColor: 'text-primary',
    },
    {
        date: 'OCT 05',
        status: 'UPCOMING',
        title: 'SHORTLIST ANNOUNCEMENT',
        description:
            'The top 40 teams will be invited for the offline hackathon. Check your email for status.',
        dotColor: 'bg-border',
        dateColor: 'text-muted',
    },
    {
        date: 'OCT 14 - 15',
        status: 'UPCOMING',
        title: 'THE GRAND FINALE',
        description:
            '24 hours of nonstop coding at our tech campus. Meals, mentors, and caffeine provided.',
        dotColor: 'bg-border',
        dateColor: 'text-muted',
    },
];

export default function TimelineSection() {
    return (
        <section id="timeline" className="py-24 lg:py-32" style={{ background: '#0D0F14' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left column */}
                    <div className="lg:w-80 flex-shrink-0">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-0.5 bg-primary" />
                            <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
                                Event Timeline
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-5">
                            THE ROADMAP
                        </h2>

                        <p className="text-muted leading-relaxed mb-10">
                            Mark your calendars. Every milestone counts towards the ultimate showdown.
                            Don't miss the deadlines for team formation and idea writing.
                        </p>

                        {/* Pro tip card */}
                        <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
                            <p className="text-xs font-mono font-bold text-primary tracking-widest mb-3">
                                PRO TIP FOR PARTICIPANTS:
                            </p>
                            <p className="text-sm text-muted leading-relaxed">
                                Ensure your GitHub profile is updated and your repositories are clean. Our mentors look at code quality as much as the final presentation.
                            </p>
                        </div>
                    </div>

                    {/* Right column — Timeline */}
                    <div className="flex-1">
                        <div className="relative flex flex-col gap-0">
                            {/* Vertical line */}
                            <div className="absolute left-3.5 top-4 bottom-4 w-0.5 bg-border" />

                            {milestones.map((m, i) => (
                                <div key={i} className="relative flex gap-8 pb-10 last:pb-0">
                                    {/* Dot */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className={`w-7 h-7 rounded-full border-2 border-background flex items-center justify-center ${m.dotColor}`}>
                                            {m.status === 'COMPLETED' && (
                                                <svg className="w-3 h-3 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-0.5">
                                        <p className={`text-xs font-mono font-semibold tracking-widest mb-1 ${m.dateColor}`}>
                                            {m.date}
                                        </p>
                                        <h3 className="text-base font-black tracking-wide text-white mb-2">
                                            {m.title}
                                        </h3>
                                        <p className="text-sm text-muted leading-relaxed">{m.description}</p>
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
