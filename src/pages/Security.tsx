import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  KeyRound,
  Network as NetworkIcon,
  FileSearch,
  DatabaseBackup,
  Bug,
  ServerCrash,
  GlobeLock,
  Building2,
  UserCheck,
  BellRing,
} from "lucide-react";

export default function SecurityDetails() {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-goftus-aqua hover:text-goftus-aqua-hover mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-10">
          <h1 className="heading-lg text-foreground">Security & Compliance</h1>
          <p className="text-foreground-secondary mt-3">
            Enterprise-grade security in every layer of the GOFTUS platform. We
            design, build, and operate with a defense-in-depth model across
            product, infrastructure, and process.
          </p>

          <div className="mt-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-md border border-border-subtle bg-card px-3 py-1">
              <ShieldCheck className="h-4 w-4 text-goftus-aqua" />
              Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </header>

        {/* Quick highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="rounded-xl border border-border-subtle bg-card p-5">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-goftus-aqua" />
              <h3 className="font-semibold text-foreground">Data Protection</h3>
            </div>
            <p className="mt-2 text-foreground-secondary text-sm">
              AES-256 at rest, TLS 1.2+ in transit, optional field-level
              encryption & customer-managed keys.
            </p>
          </div>

          <div className="rounded-xl border border-border-subtle bg-card p-5">
            <div className="flex items-center gap-3">
              <UserCheck className="h-5 w-5 text-goftus-aqua" />
              <h3 className="font-semibold text-foreground">Access Control</h3>
            </div>
            <p className="mt-2 text-foreground-secondary text-sm">
              SSO/SAML/OIDC, MFA, RBAC, least-privilege IAM, bounded API keys &
              tenant isolation.
            </p>
          </div>

          <div className="rounded-xl border border-border-subtle bg-card p-5">
            <div className="flex items-center gap-3">
              <FileSearch className="h-5 w-5 text-goftus-aqua" />
              <h3 className="font-semibold text-foreground">Auditability</h3>
            </div>
            <p className="mt-2 text-foreground-secondary text-sm">
              Immutable audit logs, fine-grained event trails, centralized SIEM
              export & retention controls.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Data Protection */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">Data Protection</h2>
            <ul className="text-foreground-secondary space-y-2">
              <li>
                <strong className="text-foreground">Encryption in transit:</strong>{" "}
                TLS 1.2+ for all client–server and service–service traffic. HSTS,
                perfect forward secrecy, modern cipher suites only.
              </li>
              <li>
                <strong className="text-foreground">Encryption at rest:</strong>{" "}
                AES-256 across databases, object storage, and managed queues.
              </li>
              <li>
                <strong className="text-foreground">Key management:</strong>{" "}
                Cloud KMS with automatic key rotation; optional
                customer-managed keys (CMK) for regulated workloads.
              </li>
              <li>
                <strong className="text-foreground">Data minimization:</strong>{" "}
                We only store what’s required to provide the service. PII/PHI is
                segregated and access-controlled.
              </li>
            </ul>
          </section>

          {/* Identity & Access */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">
              Identity & Access Management
            </h2>
            <ul className="text-foreground-secondary space-y-2">
              <li>
                <strong className="text-foreground">SSO / SAML / OIDC:</strong>{" "}
                Single sign-on with enforced MFA & session policies.
              </li>
              <li>
                <strong className="text-foreground">RBAC & least privilege:</strong>{" "}
                Role-based access with scoped permissions and time-bound
                elevation for support.
              </li>
              <li>
                <strong className="text-foreground">API keys & service tokens:</strong>{" "}
                Prefix-scoped, rotated, and auditable; optional IP allow-lists and
                per-token rate limits.
              </li>
              <li>
                <strong className="text-foreground">Secrets management:</strong>{" "}
                Centralized vault, envelope encryption, zero secrets in code or
                images.
              </li>
            </ul>
          </section>

          {/* Network & Infra Security */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">
              Network & Infrastructure Security
            </h2>
            <ul className="text-foreground-secondary space-y-2">
              <li>
                <strong className="text-foreground">Segmentation:</strong>{" "}
                Private VPCs, dedicated subnets, security groups, and strict
                egress policies.
              </li>
              <li>
                <strong className="text-foreground">Threat protection:</strong>{" "}
                WAF, DDoS mitigation, bot protections, and automated anomaly
                detection.
              </li>
              <li>
                <strong className="text-foreground">Hardening & patching:</strong>{" "}
                CIS-aligned base images; automated OS & dependency patching with
                maintenance windows.
              </li>
              <li>
                <strong className="text-foreground">Container isolation:</strong>{" "}
                Runtime controls, read-only filesystems where possible, seccomp &
                AppArmor profiles.
              </li>
            </ul>
          </section>

          {/* Application Security */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">Application Security</h2>
            <ul className="text-foreground-secondary space-y-2">
              <li>
                <strong className="text-foreground">Secure SDLC:</strong>{" "}
                Threat modeling, pair/code reviews, signed commits and protected
                branches.
              </li>
              <li>
                <strong className="text-foreground">CI/CD gates:</strong>{" "}
                SAST/DAST, dependency & license scanning, container scanning,
                secrets scanning.
              </li>
              <li>
                <strong className="text-foreground">Supply chain controls:</strong>{" "}
                SBOM generation, provenance attestations (SLSA-aligned), and
                image signing.
              </li>
            </ul>
          </section>

          {/* Observability & Audit */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">
              Audit Logging & Observability
            </h2>
            <ul className="text-foreground-secondary space-y-2">
              <li>
                <strong className="text-foreground">Immutable logs:</strong>{" "}
                Tamper-evident storage with retention policies per tenant.
              </li>
              <li>
                <strong className="text-foreground">Export & SIEM:</strong>{" "}
                Streaming export to customer SIEM (e.g., Splunk/Datadog) and
                CloudWatch/GCS.
              </li>
              <li>
                <strong className="text-foreground">Event trails:</strong>{" "}
                Admin actions, auth events, data access and configuration changes.
              </li>
            </ul>
          </section>

          {/* Backups & DR */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">Backups & DR</h2>
            <ul className="text-foreground-secondary space-y-2">
              <li>
                <strong className="text-foreground">Automated backups:</strong>{" "}
                Point-in-time recovery (PITR) and daily snapshots with encryption.
              </li>
              <li>
                <strong className="text-foreground">High availability:</strong>{" "}
                Multi-AZ primary deployments; cross-region replication options.
              </li>
              <li>
                <strong className="text-foreground">Targets:</strong> RPO ≤ 15
                minutes, RTO ≤ 4 hours (standard); custom SLAs available.
              </li>
            </ul>
          </section>

          {/* Incident Response */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">Incident Response</h2>
            <p className="text-foreground-secondary">
              We operate a 24×7 on-call rotation with PagerDuty. Incidents are
              managed against documented runbooks, with post-incident reviews and
              customer-facing RCAs for severity-1 events.
            </p>

            <div className="overflow-hidden rounded-xl border border-border-subtle bg-card not-prose mt-4">
              <div className="px-4 py-3 border-b border-border-subtle text-sm text-muted-foreground flex items-center gap-2">
                <BellRing className="h-4 w-4 text-goftus-aqua" />
                Notification & RCA Targets
              </div>
              <table className="w-full text-sm">
                <thead className="text-left text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Severity</th>
                    <th className="px-4 py-3">Initial Notification</th>
                    <th className="px-4 py-3">Status Updates</th>
                    <th className="px-4 py-3">RCA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  <tr>
                    <td className="px-4 py-3 font-medium">Sev-1 (Critical)</td>
                    <td className="px-4 py-3">≤ 1 hour</td>
                    <td className="px-4 py-3">Every 60 minutes</td>
                    <td className="px-4 py-3">≤ 5 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Sev-2 (High)</td>
                    <td className="px-4 py-3">≤ 4 hours</td>
                    <td className="px-4 py-3">Daily</td>
                    <td className="px-4 py-3">≤ 10 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Vulnerability Mgmt */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">
              Vulnerability Management & Testing
            </h2>
            <ul className="text-foreground-secondary space-y-2">
              <li>
                <strong className="text-foreground">Continuous scanning:</strong>{" "}
                OS, container, and dependency scanning with CVSS-based triage.
              </li>
              <li>
                <strong className="text-foreground">Remediation targets:</strong>{" "}
                Critical ≤ 72h, High ≤ 14 days, Medium ≤ 30 days.
              </li>
              <li>
                <strong className="text-foreground">Penetration testing:</strong>{" "}
                Independent testing at least annually and after major changes.
              </li>
              <li>
                <strong className="text-foreground">Responsible disclosure:</strong>{" "}
                Report issues to <a className="text-goftus-aqua" href="mailto:security@goftus.com">security@goftus.com</a>.
                PGP available on request.
              </li>
            </ul>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">Compliance</h2>
            <ul className="text-foreground-secondary space-y-2">
              <li>
                <strong className="text-foreground">SOC 2 Type II:</strong>{" "}
                Program in place; audits performed annually. Reports shared under
                NDA.
              </li>
              <li>
                <strong className="text-foreground">GDPR:</strong>{" "}
                EU SCCs/UK IDTA supported; DPA available. Data residency options
                upon request.
              </li>
              <li>
                <strong className="text-foreground">HIPAA (optional):</strong>{" "}
                Available for eligible SKUs with a signed BAA and scoped controls.
              </li>
              <li>
                <strong className="text-foreground">Sub-processors:</strong>{" "}
                We maintain a current list and notify customers before material
                changes. Contact us for details.
              </li>
            </ul>
          </section>

          {/* Data Lifecycle */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">
              Data Lifecycle, Retention & Deletion
            </h2>
            <ul className="text-foreground-secondary space-y-2">
              <li>
                <strong className="text-foreground">Configurable retention:</strong>{" "}
                Per-tenant retention policies, including log and artifact retention.
              </li>
              <li>
                <strong className="text-foreground">Right to be forgotten:</strong>{" "}
                Verified deletion requests are processed within 30 days.
              </li>
              <li>
                <strong className="text-foreground">Data portability:</strong>{" "}
                Export tooling for structured data, logs, and artifacts.
              </li>
            </ul>
          </section>

          {/* Regionality */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">
              Regionality & Data Residency
            </h2>
            <p className="text-foreground-secondary">
              Default deployments run in our primary region with multi-AZ
              redundancy. EU/US data-residency and single-tenant options are
              available for enterprise plans.
            </p>
          </section>

          {/* Contact & Docs */}
          <section>
            <h2 className="heading-sm text-foreground mb-4">
              Security Contact & Additional Docs
            </h2>
            <p className="text-foreground-secondary">
              Questions or due-diligence requests (CAIQ, pen-test summary,
              SOC 2 under NDA)? Email{" "}
              <a className="text-goftus-aqua" href="mailto:security@goftus.com">
                security@goftus.com
              </a>
              . For urgent matters, include “URGENT” in the subject line.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
