"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { DocsHeading } from "@/components/docs/DocsHeading";
import { getDocsSectionBlockConfig } from "@/lib/docsSectionBlocks";

type DocsSectionBlockProps = {
  id: string;
  title: string;
  kind?: "faq";
  children: ReactNode;
};

export function DocsSectionBlock({ id, title, kind, children }: DocsSectionBlockProps) {
  const sectionConfig = getDocsSectionBlockConfig({ id, title, kind });
  const [open, setOpen] = useState(sectionConfig?.defaultOpen ?? true);
  const panelId = useMemo(() => `${id}-panel`, [id]);

  useEffect(() => {
    if (!sectionConfig) {
      return;
    }

    const syncHashState = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash === id) {
        setOpen(true);
      }
    };

    const syncGlobalState = (event: Event) => {
      const customEvent = event as CustomEvent<{ open?: boolean }>;
      if (typeof customEvent.detail?.open === "boolean") {
        setOpen(customEvent.detail.open);
      }
    };

    syncHashState();
    window.addEventListener("hashchange", syncHashState);
    window.addEventListener("docs:set-all-sections", syncGlobalState as EventListener);

    return () => {
      window.removeEventListener("hashchange", syncHashState);
      window.removeEventListener("docs:set-all-sections", syncGlobalState as EventListener);
    };
  }, [id, sectionConfig]);

  if (!sectionConfig) {
    return (
      <section className="docs-section-block">
        <DocsHeading id={id}>{title}</DocsHeading>
        <div className="docs-section-body">{children}</div>
      </section>
    );
  }

  return (
    <section className="docs-section-block" data-docs-section-kind={sectionConfig.kind}>
      <div className="docs-section-card" data-docs-section-collapsible="true">
        <DocsHeading id={id}>
          <button
            type="button"
            className="docs-section-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={`${open ? "Collapse" : "Expand"} ${title} section`}
            data-docs-section-toggle="true"
            onClick={() => setOpen((currentOpen) => !currentOpen)}
          >
            <span className="docs-section-chevron" aria-hidden="true">
              ▸
            </span>
            <span className="docs-section-toggle-label">{title}</span>
          </button>
        </DocsHeading>
        <div id={panelId} className="docs-section-panel" role="region" aria-labelledby={id} hidden={!open}>
          {children}
        </div>
      </div>
    </section>
  );
}
