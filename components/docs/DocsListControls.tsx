"use client";

import { useEffect } from "react";

type DocsListControlsProps = {
  rootId: string;
};

function setSummaryExpandedState(details: HTMLDetailsElement) {
  const summary = details.querySelector(":scope > summary");
  if (!summary) {
    return;
  }

  summary.setAttribute("aria-expanded", details.open ? "true" : "false");
}

export function DocsListControls({ rootId }: DocsListControlsProps) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) {
      return;
    }

    const detailsElements = Array.from(
      root.querySelectorAll<HTMLDetailsElement>("[data-docs-collapsible-item='true']"),
    );

    const cleanup = detailsElements.map((details) => {
      const handleToggle = () => setSummaryExpandedState(details);
      setSummaryExpandedState(details);
      details.addEventListener("toggle", handleToggle);

      return () => details.removeEventListener("toggle", handleToggle);
    });

    return () => {
      cleanup.forEach((dispose) => dispose());
    };
  }, [rootId]);

  const setAll = (open: boolean) => {
    const root = document.getElementById(rootId);
    if (!root) {
      return;
    }

    root
      .querySelectorAll<HTMLDetailsElement>("[data-docs-collapsible-item='true']")
      .forEach((details) => {
        details.open = open;
      });
  };

  return (
    <div className="docs-list-controls" role="group" aria-label="Docs list display controls">
      <button
        type="button"
        className="button button-secondary docs-list-controls-button"
        aria-controls={rootId}
        onClick={() => setAll(true)}
      >
        Expand all
      </button>
      <button
        type="button"
        className="button button-secondary docs-list-controls-button"
        aria-controls={rootId}
        onClick={() => setAll(false)}
      >
        Collapse all
      </button>
    </div>
  );
}
