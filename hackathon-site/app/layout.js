import './globals.css';

export const metadata = {
    title: 'CodeCrafters Hackathon 2026 — Build. Innovate. Disrupt.',
    description:
        'Join the ultimate 24-hour code sprint at CodeCrafters Hackathon 2026. Build the future of digital architecture — Oct 14-15, Navi Mumbai.',
    openGraph: {
        title: 'CodeCrafters Hackathon 2026',
        description: 'Build. Innovate. Disrupt. Join the ultimate 24-hour code sprint.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
