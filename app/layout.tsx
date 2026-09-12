import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const siteName = "Ryvra";
const siteDescription =
  "Ryvra is programmable financial infrastructure where AI proposes, Ryvra authorizes, and deterministic systems execute with ledger-backed finality.";
const siteUrl = "https://ryvra.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ryvra | Programmable financial infrastructure",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  icons: {
    icon: "/ryvra_logo_image.png",
    shortcut: "/ryvra_logo_image.png",
    apple: "/ryvra_logo_image.png",
  },
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
