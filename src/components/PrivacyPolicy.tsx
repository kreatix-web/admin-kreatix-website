import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy — Kreatix";
  }, []);

  return (
    <div className="bg-[#FFFBF7] text-gray-900 overflow-x-hidden">
      <Navbar />

      <main className="px-6 py-16">
        <div className="mt-24 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Privacy Policy — Kreatix
          </h1>
          <p className="text-gray-500 mb-10">Last updated: 29 October 2025</p>

          <section className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900">
            <h2 id="who-we-are" className="mt-10">
              1) Who we are
            </h2>
            <p>
              Controller: [Kreatix legal name] (“Kreatix”, “we”, “us”).
              <br />
              Registered address: [full address]
              <br />
              Company / GEMI / VAT: [numbers]
              <br />
              Contact (privacy): [privacy@yourdomain]
              <br />
              EU Representative (if outside EU/EEA): [name/email]
              <br />
              Data Protection Officer (if appointed): [name/email]
            </p>
            <p>
              This policy explains how we collect and use personal data when you
              visit [kreatix.tld] (the “Website”), contact us, become a client,
              or use services we provide (design, development, hosting/reseller,
              maintenance, support). It also explains when we act as data
              processor for our clients.
            </p>

            <h2 id="roles" className="mt-10">
              2) Roles: Controller vs Processor
            </h2>
            <ul>
              <li>
                We act as Controller for data we collect about Website visitors,
                prospective clients, clients and their contacts, and
                billing/admin contacts.
              </li>
              <li>
                We act as Processor when clients engage us to process data on
                their behalf (e.g., site analytics, forms, hosting, CDNs, email
                delivery). In those cases, a Data Processing Addendum (DPA)
                applies, and the client is the Controller. Our standard DPA is
                available on request at [privacy@yourdomain].
              </li>
            </ul>

            <h2 id="what-we-collect" className="mt-10">
              3) What we collect
            </h2>
            <h3>From Website visitors</h3>
            <ul>
              <li>
                Device/usage data: IP address, user agent, pages viewed,
                referral, timestamps, approximate location (country/city), error
                logs, performance metrics.
              </li>
              <li>
                Cookies &amp; similar tech: strictly necessary cookies, and—if
                consented— analytics/marketing cookies. See §10 Cookies.
              </li>
            </ul>
            <h3>From prospects/clients</h3>
            <ul>
              <li>
                Identity &amp; contact: name, company, role, email, phone,
                postal address.
              </li>
              <li>
                Project data: briefs, brand assets, content, credentials you
                provide to integrate services (e.g., DNS, hosting, analytics).
              </li>
              <li>
                Commercial &amp; billing: proposals, contracts, PO numbers,
                invoices, payment metadata (we don’t store full card numbers—our
                payment processor does).
              </li>
            </ul>
            <h3>From hosted/managed services (as Processor)</h3>
            <p>
              End-user data submitted via client sites (e.g., contact forms,
              bookings), analytics events, logs. Categories depend on the
              client’s configuration and instructions.
            </p>

            <h2 id="purposes" className="mt-10">
              4) Purposes &amp; legal bases (GDPR Art. 6)
            </h2>
            <ul>
              <li>
                Provide the Website and services (contract; legitimate interests
                for security and fraud prevention).
              </li>
              <li>
                Pre-contractual discussions &amp; customer support
                (contract/steps prior to contract).
              </li>
              <li>Billing and accounting (legal obligation; contract).</li>
              <li>
                Service improvement, analytics, and debugging (legitimate
                interests; analytics only with consent where required).
              </li>
              <li>
                Marketing communications (consent; you can withdraw at any
                time).
              </li>
              <li>
                Legal claims &amp; compliance (legitimate interests; legal
                obligation).
              </li>
            </ul>

            <h2 id="sharing" className="mt-10">
              5) Sharing &amp; recipients
            </h2>
            <p>
              We use vetted sub-processors and service providers to operate our
              business (hosting/CDN, email, analytics, payments, CRM, task
              management, logging/monitoring, cloud infrastructure). A current
              list is available upon request at [privacy@yourdomain]. We require
              appropriate data protection terms and, where relevant, Standard
              Contractual Clauses (SCCs) for international transfers outside the
              EEA/UK.
            </p>
            <p>
              We may disclose data to professional advisors (legal, tax), and
              where required to competent authorities or to protect rights,
              safety, or enforce agreements.
            </p>

            <h2 id="transfers" className="mt-10">
              6) International transfers
            </h2>
            <p>
              If data is transferred outside the EEA/UK/Switzerland, we rely on
              an adequacy decision or appropriate safeguards (e.g., SCCs plus
              supplementary measures). Details available on request.
            </p>

            <h2 id="retention" className="mt-10">
              7) Retention
            </h2>
            <p>
              We keep personal data only as long as necessary for the purposes
              above:
            </p>
            <ul>
              <li>Website logs: [30–180 days] (security/diagnostics).</li>
              <li>
                CRM/sales records: [3 years] after last interaction or per
                statutory limits.
              </li>
              <li>
                Contracts/invoices: [10 years] (or as required by tax law).
              </li>
              <li>
                Project/hosting data: for the engagement term; limited backups
                [30–90 days] after termination unless longer retention is agreed
                or required by law.
              </li>
            </ul>

            <h2 id="security" className="mt-10">
              8) Security
            </h2>
            <p>
              We implement technical and organizational measures appropriate to
              risk, including access controls, encryption in transit and at rest
              (where supported), least-privilege, MFA, secure development
              practices, and vendor due diligence. No method of
              transmission/storage is 100% secure.
            </p>

            <h2 id="rights" className="mt-10">
              9) Your rights (EEA/UK/Swiss residents)
            </h2>
            <p>
              You may have the right to access, rectify, erase, restrict,
              object, data portability, and to withdraw consent at any time
              (without affecting prior processing). To exercise rights, contact
              [privacy@yourdomain]. You also have the right to complain to a
              supervisory authority. In Greece, this is the Hellenic Data
              Protection Authority (see dpa.gr). If we process your data on
              behalf of a client, please contact that client (the Controller)
              first.
            </p>

            <h2 id="cookies" className="mt-10">
              10) Cookies &amp; similar technologies
            </h2>
            <p>We use:</p>
            <ul>
              <li>
                Strictly necessary cookies (always on): site functionality,
                security.
              </li>
              <li>
                Analytics cookies (consent-based in the EEA/UK as required):
                usage statistics to improve our services.
              </li>
              <li>
                Marketing/ads cookies (consent-based): only if we run campaigns.
              </li>
            </ul>
            <p>
              On your first visit, our banner will request consent for
              non-essential cookies. You can change preferences anytime via
              [Cookie Settings link]. For details, see our Cookie Policy
              (recommended as a separate page linked from the footer and
              banner).
            </p>

            <h2 id="processor" className="mt-10">
              11) Processor activities &amp; DPA summary
            </h2>
            <p>When we act as Processor:</p>
            <ul>
              <li>
                We only process data on documented instructions from the client.
              </li>
              <li>
                We ensure confidentiality, sub-processor flow-downs, assistance
                with data subject requests and security incidents, and
                deletion/return of data at end of engagement.
              </li>
              <li>
                We notify clients of security incidents without undue delay and
                cooperate on assessments and DPIAs.
              </li>
              <li>The full terms are in our Data Processing Addendum.</li>
            </ul>

            <h2 id="children" className="mt-10">
              12) Children
            </h2>
            <p>
              Our services are not directed to children under 16 (or the age
              defined by local law). We do not knowingly collect such data. If
              you believe we have, contact us to delete it.
            </p>

            <h2 id="changes" className="mt-10">
              13) Changes
            </h2>
            <p>
              We may update this policy from time to time. Material changes will
              be posted on this page and, where appropriate, notified to you.
              Please review periodically.
            </p>

            <p className="mt-6">
              Contact: [privacy@yourdomain] | Postal: [full address]
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
