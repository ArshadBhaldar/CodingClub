'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: 'ABOUT', href: '#about' },
        { label: 'DOMAINS', href: '#domains' },
        { label: 'TIMELINE', href: '#timeline' },
        { label: 'PRIZES', href: '#prizes' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[#4A3000]"
            style={{ background: 'rgba(13,9,0,0.85)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-[#FFD700] text-lg" aria-hidden="true">⚡</span>
                        <span className="font-cinzel font-bold text-[#FFD700] text-sm tracking-widest group-hover:text-[#FFF0A0] transition-colors duration-300">
                            CODECRAFTERS
                        </span>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-xs font-cinzel font-semibold tracking-widest text-[#A08040] hover:text-[#FFD700] transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#"
                            className="px-4 py-2 text-xs font-cinzel font-semibold tracking-widest border border-[#4A3000] rounded text-[#A08040] hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-200"
                        >
                            LOGIN
                        </a>
                        <a
                            href="#"
                            className="scroll-btn text-xs py-2 px-5"
                        >
                            JOIN CREST
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-[#A08040] hover:text-[#FFD700] transition-colors p-1"
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-0.5 bg-current transition-all duration-300 mb-1.5 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`w-6 h-0.5 bg-current transition-all duration-300 mb-1.5 ${menuOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 border-b border-[#4A3000]' : 'max-h-0'}`}
            >
                <div className="px-4 py-4 flex flex-col gap-4" style={{ background: 'rgba(13,9,0,0.95)' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-xs font-cinzel font-semibold tracking-widest text-[#A08040] hover:text-[#FFD700] transition-colors duration-200 py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="px-4 py-2 text-xs font-cinzel font-semibold tracking-widest border border-[#4A3000] rounded text-[#A08040] hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-200 text-center mt-2"
                    >
                        LOGIN
                    </a>
                </div>
            </div>
        </nav>
    );
}
