import type { ReactNode } from "react";
import { DocsSidebar } from "@/components/docs/DocsSidebar";

type DocsLayoutProps = {
  children: ReactNode;
};

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="docs-layout-shell">
      <aside className="docs-left-rail">
        <DocsSidebar />
      </aside>
      <div className="docs-content-rail">{children}</div>
    </div>
  );
}
