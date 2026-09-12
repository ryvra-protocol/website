"use client";

type DocsListControlsProps = {
  rootId: string;
};

export function DocsListControls({ rootId }: DocsListControlsProps) {
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
