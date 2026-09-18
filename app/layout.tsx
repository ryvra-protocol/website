import type { Metadata } from "next";
import { Archivo, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

// Two voices. Archivo carries the narrative, Spline Sans Mono carries
// everything the machine determines. See DESIGN.md.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
  display: "swap",
});

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

// Resolves the stored theme before first paint so the page never flashes the
// wrong ground. Kept deliberately tiny and dependency-free.
const themeScript = `(function(){try{var t=localStorage.getItem("ryvra-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${splineMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-shell">
          <Navbar />
          <main id="main" className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
