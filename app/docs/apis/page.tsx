import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "APIs and Compatibility",
  description:
    "Compatibility matrix and API reference entry points for production Ryvra integrations.",
  alternates: { canonical: "/docs/apis" },
  openGraph: {
    title: "Ryvra APIs and Compatibility",
    description:
      "Versioned compatibility and API reference links for unified assets and ERC-4337 integrations.",
    url: "https://ryvra.org/docs/apis",
    type: "article",
  },
};

export default function ApisPage() {
  return (
    <Section title="APIs and Compatibility Matrix">
      <p className="lead">
        Use compatibility and API references as the source of truth for versioned
        integration boundaries.
      </p>

      <h3>Compatibility references</h3>
      <ul>
        <li>
          <a href="https://github.com/ryvra-protocol/protocol-core/tree/main/docs">
            protocol-core compatibility and interface docs
          </a>
        </li>
        <li>
          <a href="https://github.com/ryvra-protocol/accounts/tree/main/docs">
            accounts API and account-abstraction integration docs
          </a>
        </li>
        <li>
          <a href="https://github.com/ryvra-protocol/asset-registry/tree/main/docs">
            asset-registry normalization and compatibility docs
          </a>
        </li>
      </ul>

      <h3>Consumer guidance</h3>
      <ul>
        <li>Pin integrations to documented versions before production promotion.</li>
        <li>Use compatibility matrix constraints for cross-module flows.</li>
        <li>Validate fallback expectations before enabling production traffic.</li>
      </ul>

      <div className="button-row">
        <Link className="button button-secondary" href="/docs/integrators-getting-started">
          Integrator getting started
        </Link>
        <Link className="button button-primary" href="/docs/operations">
          Operations guidance
        </Link>
      </div>
    </Section>
  );
}
