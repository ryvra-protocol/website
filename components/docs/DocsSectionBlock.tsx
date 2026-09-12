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

  if (!sectionConfig) {
    return (
      <section className="docs-section-block">
        <DocsHeading id={id}>{title}</DocsHeading>
        <div className="docs-section-body">{children}</div>
      </section>
    );
  }

  return (
    <DocsSectionBlockCollapsible
      key={`${id}-${sectionConfig.kind}-${sectionConfig.defaultOpen ? "open" : "closed"}`}
      id={id}
      title={title}
      defaultOpen={sectionConfig.defaultOpen}
      kind={sectionConfig.kind}
    >
      {children}
    </DocsSectionBlockCollapsible>
  );
}

type DocsSectionBlockCollapsibleProps = {
  id: string;
  title: string;
  kind: string;
  defaultOpen: boolean;
  children: ReactNode;
};

function DocsSectionBlockCollapsible({
  id,
  title,
  kind,
  defaultOpen,
  children,
}: DocsSectionBlockCollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useMemo(() => `${id}-panel`, [id]);
  const buttonId = useMemo(() => `${id}-toggle`, [id]);
  const labelId = useMemo(() => `${id}-label`, [id]);

  useEffect(() => {
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
  }, [id]);

  return (
    <section className="docs-section-block" data-docs-section-kind={kind}>
      <div className="docs-section-card" data-docs-section-collapsible="true">
        <DocsHeading id={id}>
          <button
            type="button"
            id={buttonId}
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
            <span id={labelId} className="docs-section-toggle-label">
              {title}
            </span>
          </button>
        </DocsHeading>
        <div id={panelId} className="docs-section-panel" role="region" aria-labelledby={labelId} hidden={!open}>
          {children}
        </div>
      </div>
    </section>
  );
}
