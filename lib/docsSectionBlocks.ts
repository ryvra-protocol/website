import type { DocsHeading } from "@/lib/docs";

export type DocsSectionBlockKind =
  | "summary"
  | "audience"
  | "prerequisites"
  | "step-by-step"
  | "troubleshooting"
  | "faq"
  | "related-pages"
  | "last-updated";

type DocsSectionBlockConfig = {
  kind: DocsSectionBlockKind;
  defaultOpen: boolean;
};

function normalizeSectionToken(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function matchesPrefix(value: string, prefixes: readonly string[]) {
  return prefixes.some((prefix) => value === prefix || value.startsWith(`${prefix} `));
}

export function getDocsSectionBlockConfig(
  heading: Pick<DocsHeading, "id" | "title" | "kind">,
): DocsSectionBlockConfig | null {
  const normalizedTitle = normalizeSectionToken(heading.title);
  const normalizedId = normalizeSectionToken(heading.id);

  if (heading.kind === "faq" || normalizedTitle === "faq") {
    return { kind: "faq", defaultOpen: false };
  }

  if (normalizedTitle === "summary" || normalizedId === "summary" || normalizedId === "in plain english") {
    return { kind: "summary", defaultOpen: true };
  }

  if (
    normalizedTitle === "audience" ||
    normalizedId === "audience" ||
    normalizedTitle === "who is this for" ||
    normalizedId === "who is this for"
  ) {
    return { kind: "audience", defaultOpen: true };
  }

  if (matchesPrefix(normalizedTitle, ["prerequisites"]) || matchesPrefix(normalizedId, ["prerequisites"])) {
    return { kind: "prerequisites", defaultOpen: false };
  }

  if (matchesPrefix(normalizedTitle, ["step by step"]) || matchesPrefix(normalizedId, ["step by step"])) {
    return { kind: "step-by-step", defaultOpen: false };
  }

  if (
    matchesPrefix(normalizedTitle, ["troubleshooting", "recovery", "recovery and escalation"]) ||
    matchesPrefix(normalizedId, ["troubleshooting", "recovery steps", "recovery and escalation steps"])
  ) {
    return { kind: "troubleshooting", defaultOpen: false };
  }

  if (
    normalizedTitle === "related pages" ||
    normalizedId === "related pages" ||
    normalizedTitle === "related docs" ||
    normalizedId === "related docs"
  ) {
    return { kind: "related-pages", defaultOpen: true };
  }

  if (normalizedTitle === "last updated" || normalizedId === "last updated") {
    return { kind: "last-updated", defaultOpen: true };
  }

  return null;
}

export function isDocsSectionBlock(heading: Pick<DocsHeading, "id" | "title" | "kind">) {
  return getDocsSectionBlockConfig(heading) !== null;
}
