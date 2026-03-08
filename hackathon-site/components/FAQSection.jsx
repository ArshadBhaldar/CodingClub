'use client';
import { useState } from 'react';

const faqs = [
    {
        question: 'Who can participate in CodeCrafters?',
        answer:
            "CodeCrafters is open to all university students and early career developers. Whether you're a freshman or a senior, as long as you have a passion for building, you're welcome. Team size is limited to 2-4 members.",
    },
    {
        question: 'Is there a registration fee?',
        answer:
            'No, participation in CodeCrafters Hackathon 2026 is completely free of charge. We believe in removing barriers to innovation. All you need is your laptop, your ideas, and your hunger to build.',
    },
    {
        question: 'What do I need to bring?',
        answer:
            "Bring your laptop, charger, any peripherals you need, student ID, and most importantly — your enthusiasm. We'll provide meals, snacks, internet, and mentors throughout the 24-hour sprint.",
    },
    {
        question: 'Can I build on a pre-existing project?',
        answer:
            'No. All projects must be built from scratch during the hackathon period. You are welcome to plan and wireframe beforehand, but no code can be written before the event starts. Plagiarism or reuse of prior work will result in disqualification.',
    },
];

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-[#4A3000] last:border-none">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 text-left group"
                aria-expanded={open}
            >
                <span className="font-serif text-sm sm:text-base text-[#F5E6C8] group-hover:text-[#FFD700] transition-colors duration-200 pr-4">
                    {question}
                </span>
                <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${open
                            ? 'bg-[#FFD700] border-[#FFD700]'
                            : 'border-[#4A3000] group-hover:border-[#FFD700]/50'
                        }`}
                >
                    <span
                        className={`text-xs font-bold transition-all duration-300 ${open ? 'text-[#0D0900] rotate-45 inline-block' : 'text-[#A08040]'}`}
                    >
                        ✦
                    </span>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'
                    }`}
            >
                <p className="text-sm text-[#C8A96E] leading-relaxed font-serif">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <section id="faq" className="py-24 lg:py-32">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Label */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-8 h-0.5 bg-[#FFD700]" />
                    <span className="text-xs font-cinzel font-semibold tracking-widest text-[#FFD700] uppercase">
                        Archive of Inquiries
                    </span>
                    <div className="w-8 h-0.5 bg-[#FFD700]" />
                </div>

                <h2 className="text-4xl sm:text-5xl font-cinzel font-black tracking-tight text-[#FFD700] text-center mb-16 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    FREQUENTLY ASKED
                </h2>

                {/* FAQ Items — parchment container */}
                <div className="parchment-card rounded-2xl border border-[#5a3e10] px-6 sm:px-8 mb-10">
                    {faqs.map((faq) => (
                        <FAQItem key={faq.question} {...faq} />
                    ))}
                </div>

                {/* Contact support */}
                <div className="text-center">
                    <p className="text-sm text-[#A08040] mb-4 font-serif">
                        Still have questions? Reach out to our council directly.
                    </p>
                    <a
                        href="mailto:hello@codecrafters.in"
                        className="scroll-btn inline-flex"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    );
}
