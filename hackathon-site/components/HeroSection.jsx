'use client';
import Link from 'next/link';

const codeLines = [
    { indent: 0, content: "import { Innovation, Future } from 'university-club';", color: 'text-gray-400' },
    { indent: 0, content: 'const hackathon = new CodeCrafters();', color: 'text-gray-300' },
    { indent: 0, content: '', color: '' },
    { indent: 0, content: '// Initializing 24-hour sprint', color: 'text-muted' },
    { indent: 0, content: 'hackathon.init({', color: 'text-gray-300' },
    { indent: 1, content: "duration: '24H',", color: 'text-cyan-400' },
    { indent: 1, content: "location: 'Navi Mumbai',", color: 'text-cyan-400' },
    { indent: 1, content: "focus: ['AI', 'Fintech', 'Web3']", color: 'text-cyan-400' },
    { indent: 0, content: '});', color: 'text-gray-300' },
    { indent: 0, content: '', color: '' },
    { indent: 0, content: 'hackathon.onSuccess(() => {', color: 'text-gray-300' },
    { indent: 1, content: 'return { LEGENDARY_BUILDER };', color: 'text-green-400' },
    { indent: 0, content: '});', color: 'text-gray-300' },
];

const REGISTER_URL = '#'; // Replace with your Google Form URL

export default function HeroSection() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center pt-16 overflow-hidden"
            style={{
                background:
                    'radial-gradient(ellipse at 20% 50%, rgba(0,191,255,0.06) 0%, transparent 60%), #0B0B0E',
            }}
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,191,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16">
                    {/* Left — Text content */}
                    <div className="flex-1 min-w-0">
                        {/* Status badge */}
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-surface border border-border rounded-full">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs font-mono text-green-400 tracking-widest">
                                SYS_BUILD_SYSTEM-ONLINE
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-2">
                            <span className="text-white">CODECRAFTERS</span>
                            <br />
                            <span className="text-primary">HACKATHON</span>
                        </h1>

                        {/* Tagline */}
                        <p className="mt-5 text-base sm:text-lg text-muted max-w-md leading-relaxed">
                            Build, Innovate, Disrupt. Join the ultimate 24-hour code sprint to
                            redefine the future of digital architecture.
                        </p>

                        {/* Date & Venue badges */}
                        <div className="flex flex-wrap items-center gap-4 mt-8">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-xs text-muted tracking-widest font-semibold">DATE</p>
                                    <p className="text-sm text-white font-bold">OCT 14-15, 2026</p>
                                </div>
                            </div>

                            <div className="w-px h-8 bg-border hidden sm:block" />

                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="text-xs text-muted tracking-widest font-semibold">VENUE</p>
                                    <p className="text-sm text-white font-bold">NAVI MUMBAI, IN</p>
                                </div>
                            </div>

                            <div className="w-px h-8 bg-border hidden sm:block" />

                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-xs text-muted tracking-widest font-semibold">FORMAT</p>
                                    <p className="text-sm text-white font-bold">OFFLINE SPRINT</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap items-center gap-4 mt-10">
                            <a
                                href={REGISTER_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-background font-bold text-sm tracking-wider rounded transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(0,191,255,0.7)] active:scale-95"
                            >
                                Register Now
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>

                            {/* Hackers joined */}
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {['bg-purple-500', 'bg-blue-500', 'bg-cyan-500'].map((color, i) => (
                                        <div
                                            key={i}
                                            className={`w-8 h-8 rounded-full border-2 border-background ${color} flex items-center justify-center text-xs font-bold text-white`}
                                        >
                                            {['A', 'B', 'C'][i]}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-muted text-sm">+450 Hackers Joined</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Code Editor (hidden on mobile) */}
                    <div className="hidden lg:flex flex-1 min-w-0 justify-center">
                        <div className="w-full max-w-md rounded-xl border border-border bg-card shadow-card overflow-hidden">
                            {/* Editor title bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                                </div>
                                <span className="font-mono text-xs text-primary tracking-widest">
                                    CODE_COMPILER_V2.0
                                </span>
                                <div className="w-16" />
                            </div>

                            {/* Code body */}
                            <div className="p-5 font-mono text-sm leading-relaxed">
                                {codeLines.map((line, i) => (
                                    <div key={i} className={`${line.color} whitespace-pre`}>
                                        {line.indent > 0 ? '  '.repeat(line.indent) : ''}{line.content || '\u00A0'}
                                    </div>
                                ))}
                                {/* Blinking cursor */}
                                <div className="flex items-center mt-1">
                                    <span className="text-primary animate-pulse">▋</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
