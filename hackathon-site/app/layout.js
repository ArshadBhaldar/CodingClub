import './globals.css';

export const metadata = {
    title: 'CodeCrafters Hackathon 2026 — The Arcane Code Sprint',
    description:
        'Enter the realm of arcane innovation. Join the CodeCrafters Hackathon 2026 — a 24-hour magical code sprint in Navi Mumbai, Oct 14-15.',
    openGraph: {
        title: 'CodeCrafters Hackathon 2026 — The Arcane Code Sprint',
        description: 'Build. Innovate. Disrupt. A magical 24-hour hackathon.',
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
