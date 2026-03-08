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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-7 h-7 bg-primary rounded flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-sm transition-shadow duration-300">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2 4L6 8L2 12" stroke="#0B0B0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 12H14" stroke="#0B0B0E" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="font-bold text-white text-sm tracking-wider">CODECRAFTERS</span>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-xs font-semibold tracking-widest text-muted hover:text-primary transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Login button */}
                    <div className="hidden md:block">
                        <a
                            href="#"
                            className="px-4 py-2 text-xs font-semibold tracking-widest border border-border rounded text-muted hover:border-primary hover:text-primary transition-all duration-200"
                        >
                            LOGIN
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-muted hover:text-primary transition-colors p-1"
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
                className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 border-b border-border' : 'max-h-0'
                    }`}
            >
                <div className="px-4 py-4 bg-card flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-xs font-semibold tracking-widest text-muted hover:text-primary transition-colors duration-200 py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="px-4 py-2 text-xs font-semibold tracking-widest border border-border rounded text-muted hover:border-primary hover:text-primary transition-all duration-200 text-center mt-2"
                    >
                        LOGIN
                    </a>
                </div>
            </div>
        </nav>
    );
}
