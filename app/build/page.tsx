import { Section } from "@/components/Section";

export default function BuildPage() {
  return (
    <Section title="Build with Ryvra">
      <p className="lead">
        We collaborate with teams building account-native products, payment
        experiences, and market infrastructure on top of Ryvra modules.
      </p>

      <div className="form-grid">
        <label>
          Organization / Team
          <input className="input" placeholder="Your team name" />
        </label>
        <label>
          Contact Email
          <input className="input" type="email" placeholder="name@company.com" />
        </label>
        <label>
          Integration Focus
          <input
            className="input"
            placeholder="Accounts, Pay, Markets, or ecosystem partnership"
          />
        </label>
        <label>
          Project Overview
          <textarea
            className="textarea"
            placeholder="Briefly describe your product, timeline, and support needed."
          />
        </label>
      </div>

      <p className="disclaimer">
        Placeholder form only. Backend intake, CRM routing, and anti-spam checks
        are pending. For immediate contact, use ecosystem@ryvra.org (placeholder).
      </p>
    </Section>
  );
}
