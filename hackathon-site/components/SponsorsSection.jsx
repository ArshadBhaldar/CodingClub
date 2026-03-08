const sponsors = ['CLOUDZERO', 'FOUNDATION', 'CHAIN LABS', 'DEVHATCH', 'ZERONODE'];

// Magical sigil SVG paths for each sponsor
const sigilPaths = [
    "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z",
    "M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 2c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm0 2l-1.5 4.6H6l3.8 2.8-1.5 4.6L12 16l3.7 2.7-1.5-4.6 3.8-2.8h-4.5L12 7z",
    "M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7L12 2z",
    "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z",
    "M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z",
];

export default function SponsorsSection() {
    return (
        <section className="py-16 border-y border-[#4A3000]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-cinzel font-semibold tracking-[0.3em] text-[#A08040] mb-10 uppercase">
                    Proudly Conjured By
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14">
                    {sponsors.map((s, idx) => (
                        <div key={s} className="flex flex-col items-center gap-2 group">
                            {/* Magical sigil icon */}
                            <div className="w-12 h-12 rounded-full border border-[#4A3000] flex items-center justify-center group-hover:border-[#FFD700]/50 transition-all duration-300"
                                style={{ background: 'rgba(255,215,0,0.04)' }}>
                                <svg className="w-6 h-6 text-[#4A3000] group-hover:text-[#FFD700]/60 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={sigilPaths[idx % sigilPaths.length]} />
                                </svg>
                            </div>
                            <span className="text-xs font-cinzel font-bold tracking-widest text-[#4A3000] group-hover:text-[#A08040] transition-colors duration-300">
                                {s}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
