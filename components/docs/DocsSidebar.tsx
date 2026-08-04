"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsSidebarGroups } from "@/lib/docs";

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function DocsSidebar() {
  const pathname = normalizePath(usePathname());

  return (
    <nav className="docs-sidebar" aria-label="Documentation navigation">
      {docsSidebarGroups.map((group) => (
        <section key={group.title} className="docs-sidebar-group">
          <p className="docs-sidebar-group-title">{group.title}</p>
          <ul>
            {group.items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link href={item.href} className={isActive ? "docs-sidebar-link docs-sidebar-link-active" : "docs-sidebar-link"}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </nav>
  );
}
