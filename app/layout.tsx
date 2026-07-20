import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const siteName = "Ryvra";
const siteDescription =
  "Ryvra is a unified account and asset protocol designed to reduce financial fragmentation and align network participation through Proof of Transaction (PoT).";
const siteUrl = "https://ryvra.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ryvra | Every transaction contributes.",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: "Ryvra",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
