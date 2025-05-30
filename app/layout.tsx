import '@/app/ui/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | FPL data',
    default: 'Ben pooped on the FPL data',
  },
  description: 'James made this FPL data dashboard with Next.js using the App Router. Then Ben messed with it!',
  metadataBase: new URL('http://nextjames.ddev.site'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${''/*inter.className*/} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="flex-grow px-4 py-2 md:overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
