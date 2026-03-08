const sponsors = ['CLOUDZERO', 'FOUNDATION', 'CHAIN LABS', 'DEVHATCH', 'ZERONODE'];

export default function SponsorsSection() {
    return (
        <section className="py-16 border-y border-border" style={{ background: '#0D0F14' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-mono font-semibold tracking-[0.3em] text-muted mb-10 uppercase">
                    Proudly Supported By
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14">
                    {sponsors.map((s) => (
                        <div key={s} className="flex flex-col items-center gap-2 group">
                            {/* Placeholder icon placeholder */}
                            <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
                                <svg className="w-5 h-5 text-border group-hover:text-primary/50 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                            </div>
                            <span className="text-xs font-mono font-bold tracking-widest text-muted/50 group-hover:text-muted transition-colors">
                                {s}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
