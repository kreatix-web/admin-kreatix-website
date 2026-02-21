import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service — Kreatix";
  }, []);

  return (
    <div className="bg-dark text-[#EDEDED] overflow-x-hidden">
      <Navbar />

      <main className="px-6 lg:px-16 py-16">
        <div className="mt-24 max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Legal
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-[#EDEDED]">
            Terms of Service
          </h1>
          <p className="text-muted mb-10 font-mono text-sm">
            Last updated: 29 October 2025
          </p>

          <section className="prose prose-invert max-w-none prose-headings:text-[#EDEDED] prose-headings:font-display prose-p:text-muted prose-li:text-muted prose-strong:text-[#EDEDED] prose-a:text-accent prose-hr:border-dark-border">
            <p>
              These Terms (“Terms”) govern access to and use of the Website and
              any services provided by [Kreatix legal name] (“Kreatix”, “we”,
              “us”). By using our Website or engaging our services, you agree to
              these Terms.
            </p>

            <h2 className="mt-10">1) Scope of services</h2>
            <p>
              We provide design, development, integration, hosting/reseller
              services, maintenance, support, consulting, and related
              deliverables (the “Services”). Specific features, timelines, and
              prices are defined in a Proposal, Statement of Work (SOW), or
              Order Form (each an “Order”). If there is a conflict, the Order
              prevails over these Terms.
            </p>

            <h2 className="mt-10">
              2) Proposals, estimates &amp; change control
            </h2>
            <p>
              Quotes and timelines are estimates unless expressly stated as
              fixed. Any out-of-scope requests, third-party costs, or additional
              rounds of revision will require a written Change Order (email
              suffices) with adjusted scope, fees, and timelines.
            </p>

            <h2 className="mt-10">3) Client responsibilities</h2>
            <p>You will:</p>
            <ul>
              <li>
                Provide accurate and timely content, brand assets, approvals,
                and access/credentials.
              </li>
              <li>
                Obtain all necessary rights and licenses to content you supply.
              </li>
              <li>
                Ensure your use of the Services and deliverables complies with
                applicable laws (including privacy, e-commerce, consumer
                protection).
              </li>
              <li>
                Not upload malware or unlawful content, nor attempt to disrupt
                the Services.
              </li>
            </ul>
            <p>
              Delays in materials/approvals may shift timelines and incur
              additional costs.
            </p>

            <h2 className="mt-10">4) Fees, billing &amp; taxes</h2>
            <ul>
              <li>
                Fees are as stated in the Order (EUR unless specified
                otherwise).
              </li>
              <li>
                Unless otherwise stated, 50% upfront and 50% on delivery;
                retainers and maintenance plans are billed in advance
                (monthly/annual).
              </li>
              <li>
                Invoices are due [14] days from issue. Late amounts may accrue
                interest at [1.5% per month] (or legal maximum).
              </li>
              <li>
                Fees are exclusive of VAT and other taxes, which you must pay
                where applicable.
              </li>
              <li>
                Third-party platform costs (e.g., domains, Vercel/Netlify,
                Shopify, email services, payment gateways) are your
                responsibility unless the Order says otherwise.
              </li>
            </ul>

            <h2 className="mt-10">5) Ownership &amp; IP</h2>
            <ul>
              <li>Client Materials you provide remain yours.</li>
              <li>
                Deliverables (final designs, site code we create specifically
                for you) are assigned to you upon full payment of all fees due
                for those Deliverables, except for Kreatix Tools (our
                pre-existing or generic components, frameworks, libraries,
                processes), which remain our property. We grant you a perpetual,
                worldwide, royalty-free license to use such Kreatix Tools solely
                as embedded in the Deliverables.
              </li>
              <li>
                Open-source components are licensed under their respective
                licenses.
              </li>
            </ul>

            <h2 className="mt-10">6) Licenses to us</h2>
            <p>
              You grant us a non-exclusive license to use your Client Materials
              solely to perform the Services and to showcase the completed
              project in our portfolio and marketing (unless you opt out in
              writing).
            </p>

            <h2 className="mt-10">
              7) Third-party services &amp; dependencies
            </h2>
            <p>
              We may integrate or rely on third-party services (hosting, CDNs,
              analytics, email, payments). Those are governed by their own terms
              and service levels; we are not responsible for their
              acts/omissions. We will use reasonable efforts to select reputable
              providers and will notify you of material provider changes.
            </p>

            <h2 className="mt-10">8) Acceptance &amp; warranty period</h2>
            <p>
              Deliverables will be deemed accepted upon the earlier of (a) your
              written acceptance or go-live, or (b) [10] days after delivery if
              no material defects are reported. We provide a [30–60] day
              warranty after acceptance to fix material defects that prevent the
              Deliverables from functioning as specified in the Order. This
              warranty does not cover changes in third-party APIs/services, new
              feature requests, or issues caused by unauthorized modifications.
            </p>

            <h2 className="mt-10">9) Maintenance &amp; support</h2>
            <p>
              Ongoing maintenance/support, SLAs, monitoring, uptime targets, and
              response times apply only if purchased in a maintenance plan or
              set out in the Order. Otherwise, assistance is billed
              time-and-materials.
            </p>

            <h2 className="mt-10">
              10) SEO, accessibility &amp; compliance disclaimers
            </h2>
            <p>
              We do not guarantee search rankings, advertising performance, or
              legal compliance outcomes. If specified in the Order, we will
              implement best-practice technical SEO and WCAG-informed patterns,
              but outcomes depend on content, competition, and third-party
              platforms. Legal compliance (cookie consent, privacy notices,
              consumer law, sector regulations) remains your responsibility
              unless expressly included.
            </p>

            <h2 className="mt-10">11) Confidentiality</h2>
            <p>
              Each party will keep the other’s Confidential Information
              confidential and use it only for performing the Agreement,
              protecting it with reasonable care. Exceptions apply for
              information that is public, independently developed, or rightfully
              obtained from others without duty of confidentiality.
            </p>

            <h2 className="mt-10">12) Data protection</h2>
            <p>
              When we act as Controller, our Privacy Policy applies. Where we
              process personal data on your behalf, our DPA forms part of the
              Agreement.
            </p>

            <h2 className="mt-10">13) Term, suspension &amp; termination</h2>
            <ul>
              <li>
                Term begins on the Order effective date and continues until
                completion or as otherwise stated.
              </li>
              <li>
                We may suspend or terminate for material breach (including
                non-payment) after [7] days’ notice to cure.
              </li>
              <li>
                Either party may terminate for convenience on [30] days’ written
                notice for ongoing/retainer services (fees due up to termination
                apply).
              </li>
              <li>
                Effect of termination: You pay for all Services performed and
                committed costs to date; we will deliver work-in-progress and,
                upon request, provide a reasonable handover (billed at standard
                rates). We will delete/return client data per the DPA or your
                instructions, subject to legal retention.
              </li>
            </ul>

            <h2 className="mt-10">14) Warranties &amp; disclaimers</h2>
            <p>
              We warrant we will perform the Services with reasonable skill and
              care. Except as expressly stated, the Services and Deliverables
              are provided “as is” and we disclaim all other warranties,
              including implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>

            <h2 className="mt-10">15) Limitation of liability</h2>
            <ul>
              <li>
                To the maximum extent permitted by law: Neither party is liable
                for indirect, incidental, special, consequential, exemplary, or
                punitive damages (including lost profits, revenue, or data).
              </li>
              <li>
                Each party’s aggregate liability arising out of or relating to
                the Agreement is capped at the amounts paid or payable to
                Kreatix in the 12 months preceding the event giving rise to
                liability (or, for fixed projects, the total fee for the
                relevant Order).
              </li>
              <li>
                Nothing limits liability for death/personal injury caused by
                negligence, fraud, or liability that cannot be limited by law.
              </li>
            </ul>

            <h2 className="mt-10">16) Indemnities</h2>
            <ul>
              <li>
                Client indemnity: You will defend and indemnify Kreatix against
                third-party claims arising from (a) your content or
                instructions, (b) your breach of these Terms, or (c) your use of
                Deliverables contrary to the Order.
              </li>
              <li>
                Kreatix indemnity: We will defend and indemnify you against
                third-party claims that the Deliverables infringe IP rights,
                except to the extent caused by your content, combinations not
                provided by us, or modifications not made by us. Remedies may
                include modification, replacement, or refund of the affected
                Deliverable’s fees.
              </li>
            </ul>

            <h2 className="mt-10">17) Non-solicitation</h2>
            <p>
              During the engagement and for [12] months thereafter, neither
              party will solicit for employment the other’s personnel who
              directly worked on the project, except via general public
              advertisements.
            </p>

            <h2 className="mt-10">18) Force majeure</h2>
            <p>
              Neither party is liable for delays or failures due to events
              beyond reasonable control (e.g., outages, cyber incidents,
              governmental actions, natural disasters), provided reasonable
              mitigation.
            </p>

            <h2 className="mt-10">19) Assignment &amp; subcontracting</h2>
            <p>
              You may not assign the Agreement without our consent (not to be
              unreasonably withheld). We may subcontract elements of the
              Services, remaining responsible for subcontractors’ performance.
            </p>

            <h2 className="mt-10">20) Governing law &amp; venue</h2>
            <p>
              These Terms and any disputes are governed by the laws of Greece
              (excluding conflict-of-laws principles). Courts of Athens, Greece
              have exclusive jurisdiction. If you prefer a different
              jurisdiction, specify it in the Order.
            </p>

            <h2 className="mt-10">21) Notices</h2>
            <p>
              Notices must be in writing and sent to the contacts in the Order
              or:
              <br />
              Kreatix: [legal@yourdomain], [postal address].
              <br />
              Notices are deemed received on confirmation of delivery or 2
              business days after dispatch.
            </p>

            <h2 className="mt-10">
              22) Entire agreement; severability; waiver
            </h2>
            <p>
              These Terms + the Order + the DPA (if applicable) are the entire
              agreement. If a provision is unenforceable, the remainder stays in
              effect. No waiver is effective unless in writing.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
