"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

// Five primary destinations. The audience guides are reachable from the
// homepage fork, the docs sidebar and the footer, so they no longer compete
// for space in the top bar.
const links = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/security-and-risk", label: "Security" },
  { href: "/docs/tokenomics", label: "Tokenomics" },
  { href: "/litepaper", label: "Litepaper" },
];

function normalize(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

// The most specific matching destination wins, so /docs/security-and-risk
// marks Security rather than Docs.
function activeHref(pathname: string): string | null {
  const path = normalize(pathname);
  let best: string | null = null;

  for (const link of links) {
    if (path === link.href || path.startsWith(`${link.href}/`)) {
      if (best === null || link.href.length > best.length) {
        best = link.href;
      }
    }
  }

  return best;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const panelId = useId();
  const current = activeHref(pathname);

  // Navigating closes the menu. Adjusting during render rather than in an
  // effect avoids the extra commit, and covers browser back as well as taps.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="wordmark" aria-label="Ryvra home">
          <span className="wordmark-mark" aria-hidden="true">
            R
          </span>
          <span>yvra</span>
        </Link>

        <button
          type="button"
          className="icon-button nav-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            {open ? (
              <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            ) : (
              <path d="M2 4.5h12M2 11.5h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <div className="nav-panel" id={panelId} data-open={open}>
          <div className="nav-links">
            {links.map((link) => {
              const isActive = current === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "nav-link nav-link-active" : "nav-link"}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="nav-actions">
            <a
              className="icon-button"
              href="https://github.com/ryvra-protocol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ryvra on GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.34c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.23 1.88.88 2.34.67.07-.52.28-.88.51-1.08-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
              </svg>
            </a>
            <ThemeToggle />
            <Link className="button button-primary" href="/build">
              Start building
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
