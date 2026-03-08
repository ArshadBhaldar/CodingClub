'use client';
import Image from 'next/image';

const spellLines = [
    { content: "Accio { Innovation, Future }", color: 'text-[#C8A96E]' },
    { content: 'const hackathon = new CodeCrafters();', color: 'text-[#F5E6C8]' },
    { content: '', color: '' },
    { content: '// Casting the 24-hour arcane sprint', color: 'text-[#6B5030]' },
    { content: 'hackathon.conjure({', color: 'text-[#F5E6C8]' },
    { content: "  duration: '24H',", color: 'text-[#FFD700]' },
    { content: "  location: 'Navi Mumbai',", color: 'text-[#FFD700]' },
    { content: "  focus: ['AI', 'Fintech', 'Web3']", color: 'text-[#FFD700]' },
    { content: '});', color: 'text-[#F5E6C8]' },
    { content: '', color: '' },
    { content: 'hackathon.onSuccess(() => {', color: 'text-[#F5E6C8]' },
    { content: '  return { LEGENDARY_BUILDER };', color: 'text-[#90EE90]' },
    { content: '});', color: 'text-[#F5E6C8]' },
];

const REGISTER_URL = '#';

export default function HeroSection() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16">
                    {/* Left — Text content */}
                    <div className="flex-1 min-w-0">
                        {/* Status badge */}
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#FFD700]/40 rounded"
                            style={{ background: 'rgba(255,215,0,0.08)' }}>
                            <span className="text-[#FFD700] text-base animate-flicker" aria-hidden="true">✦</span>
                            <span className="text-xs font-cinzel text-[#FFD700] tracking-widest">
                                THE ARCANE SPRINT IS LIVE
                            </span>
                            <span className="text-[#FFD700] text-base animate-flicker" aria-hidden="true">✦</span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-cinzel font-black leading-none tracking-tight mb-2">
                            <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                                CODECRAFTERS
                            </span>
                            <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#F5E6C8] italic mt-1">
                                hackathon
                            </span>
                        </h1>

                        {/* Tagline */}
                        <p className="mt-5 text-base sm:text-lg text-[#C8A96E] max-w-md leading-relaxed font-serif">
                            Build, Innovate, Disrupt. Join the ultimate 24-hour arcane code sprint to
                            redefine the future of digital architecture.
                        </p>

                        {/* Date & Venue badges */}
                        <div className="flex flex-wrap items-center gap-4 mt-8">
                            <div className="flex items-center gap-2">
                                <span className="text-[#FFD700]" aria-hidden="true">📅</span>
                                <div>
                                    <p className="text-xs text-[#6B5030] tracking-widest font-cinzel font-semibold">DATE</p>
                                    <p className="text-sm text-[#F5E6C8] font-bold font-cinzel">MAR 14-15, 2026</p>
                                </div>
                            </div>

                            <div className="w-px h-8 bg-[#4A3000] hidden sm:block" />

                            <div className="flex items-center gap-2">
                                <span className="text-[#FFD700]" aria-hidden="true">🏰</span>
                                <div>
                                    <p className="text-xs text-[#6B5030] tracking-widest font-cinzel font-semibold">VENUE</p>
                                    <p className="text-sm text-[#F5E6C8] font-bold font-cinzel">SCOE KHARGHAR, NAVI MUMBAI</p>
                                </div>
                            </div>

                            <div className="w-px h-8 bg-[#4A3000] hidden sm:block" />

                            <div className="flex items-center gap-2">
                                <span className="text-[#FFD700]" aria-hidden="true">⚔️</span>
                                <div>
                                    <p className="text-xs text-[#6B5030] tracking-widest font-cinzel font-semibold">FORMAT</p>
                                    <p className="text-sm text-[#F5E6C8] font-bold font-cinzel">OFFLINE RITUAL</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap items-center gap-4 mt-10">
                            <a
                                href={REGISTER_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="scroll-btn"
                            >
                                🪄 Register Now
                            </a>

                            {/* Wizards joined */}
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {['bg-purple-800', 'bg-amber-800', 'bg-emerald-800'].map((color, i) => (
                                        <div
                                            key={i}
                                            className={`w-8 h-8 rounded-full border-2 border-[#4A3000] ${color} flex items-center justify-center text-xs font-bold text-[#FFD700]`}
                                        >
                                            {['⚡', '🔮', '✨'][i]}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[#A08040] text-sm font-serif">+450 Wizards Joined</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Spellbook (shown on desktop) */}
                    <div className="hidden lg:flex flex-1 min-w-0 justify-center">
                        <div className="relative w-full max-w-md animate-float">
                            {/* Glow effect behind book */}
                            <div className="absolute inset-0 rounded-2xl"
                                style={{ filter: 'blur(40px)', background: 'radial-gradient(ellipse, rgba(255,215,0,0.25) 0%, transparent 70%)' }}
                                aria-hidden="true"
                            />
                            <div className="relative rounded-xl overflow-hidden border border-[#FFD700]/30 shadow-[0_0_40px_rgba(255,215,0,0.3)]">
                                <Image
                                    src="/spellbook.png"
                                    alt="Glowing ancient spellbook — the CodeCrafters code editor"
                                    width={480}
                                    height={380}
                                    className="w-full object-cover"
                                    priority
                                />
                                {/* Floating rune overlay */}
                                <div className="absolute inset-0 flex items-end justify-center pb-4">
                                    <span className="text-xs font-cinzel text-[#FFD700]/70 tracking-[0.3em] bg-black/40 px-4 py-1 rounded border border-[#FFD700]/20">
                                        LEGENDARY_BUILDER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
