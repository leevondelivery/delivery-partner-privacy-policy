"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo-section">
            <div className="logo-icon">L</div>
            <div className="logo-text">
              <span className="logo-title">Leevon Delivery</span>
              <span className="logo-subtitle">Partner Portal</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="content-layout" style={{ gridTemplateColumns: "1fr", maxWidth: "800px" }}>
        <main className="main-content">
          <header className="doc-header">
            <span className="doc-tag">Service Agreement</span>
            <h1 className="doc-title">Terms & Conditions for Delivery Partners</h1>
            <div className="doc-meta">
              <div className="meta-item">
                <span>Effective Date:</span>
                <strong>June 27, 2026</strong>
              </div>
              <div className="meta-item">
                <span>Agreement Type:</span>
                <strong>Partner Terms</strong>
              </div>
            </div>
          </header>

          <section className="doc-section">
            <h2 className="section-title">1. Relationship of Parties</h2>
            <p>
              By registering as a delivery partner (&quot;Delivery Partner&quot;) with <strong>Leevon Delivery LLP</strong>,
              you acknowledge and agree that your relationship with us is that of an <strong>independent contractor</strong>.
              Nothing in this Agreement or your use of the App creates any partnership, joint venture, employment, or agency
              relationship between you and Leevon Delivery LLP.
            </p>
            <p>
              You have the sole discretion to set your own work schedule, accept or reject delivery requests, and decide when to log
              into the App. You are responsible for providing your own vehicle, fuel, smartphone, and other tools necessary to perform
              your delivery tasks.
            </p>

            <h2 className="section-title">2. Account Registration & Eligibility</h2>
            <p>
              To register and operate as a Delivery Partner, you must satisfy the following criteria:
            </p>
            <ul className="data-list">
              <li className="data-list-item">
                <strong>Age Limit:</strong> You must be at least 18 years of age and legally competent to enter into contracts under Indian law.
              </li>
              <li className="data-list-item">
                <strong>Documentation:</strong> You must possess a valid Android smartphone, a valid Indian Driving License, an Aadhaar Card,
                and a registered vehicle with a valid Registration Certificate (RC) and insurance cover.
              </li>
              <li className="data-list-item">
                <strong>Accuracy:</strong> All details provided by you during registration, including your bank credentials for payout processing,
                must be complete and accurate. You must update your profile if any information changes.
              </li>
            </ul>

            <h2 className="section-title">3. Partner Conduct & Safety</h2>
            <p>
              Safety and professionalism are core values of Leevon Delivery LLP. While performing delivery services, you agree to:
            </p>
            <ul className="data-list">
              <li className="data-list-item">
                Comply with all local traffic regulations, including speed limits, traffic signals, and wearing mandatory safety gear (e.g. helmets).
              </li>
              <li className="data-list-item">
                Never operate a vehicle under the influence of alcohol, drugs, or illegal substances.
              </li>
              <li className="data-list-item">
                Conduct yourself professionally and politely when interacting with restaurant partners, customers, and Leevon support staff.
              </li>
              <li className="data-list-item">
                Ensure that orders are transported in hygienic conditions and delivered promptly to the specified location.
              </li>
            </ul>

            <h2 className="section-title">4. Calculations, Fees & Payouts</h2>
            <p>
              You will receive delivery fees, bonuses, and incentives as detailed inside the App&apos;s homepage/earnings ledger.
            </p>
            <ul className="data-list">
              <li className="data-list-item">
                <strong>Earnings Calculation:</strong> Earnings are calculated based on delivery distance, order values, active hours, and performance incentives.
              </li>
              <li className="data-list-item">
                <strong>Payout Processing:</strong> Payouts are directly transferred to your registered bank account via electronic transfer using the Account Number and IFSC Code provided in your profile. Payout cycles will follow the schedule shown in your app dashboard.
              </li>
              <li className="data-list-item">
                <strong>Taxes:</strong> You are solely responsible for filing and paying any applicable local taxes or insurance payments arising from your delivery earnings.
              </li>
            </ul>

            <h2 className="section-title">5. Account Suspension & Termination</h2>
            <p>
              We reserve the right to temporarily suspend or permanently terminate your access to the App if you violate these Terms,
              or for any of the following reasons:
            </p>
            <ul className="data-list">
              <li className="data-list-item">
                Submitting falsified or expired document verification details (Aadhaar, License, RC).
              </li>
              <li className="data-list-item">
                Frequent customer complaints regarding behavior, food tampering, or safety issues.
              </li>
              <li className="data-list-item">
                Engaging in fraudulent actions, such as simulating false GPS coordinates, creating multiple accounts, or claiming payments for unfulfilled orders.
              </li>
            </ul>

            <h2 className="section-title">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Leevon Delivery LLP shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits, data, or personal injuries occurring during your delivery duties.
              You agree to indemnify and hold Leevon Delivery LLP harmless from any claims, losses, or legal costs arising from your
              operation of motor vehicles or actions as an independent contractor.
            </p>

            <h2 className="section-title">7. Contact Information</h2>
            <p>
              For any questions regarding this Partner Agreement or to query any payout calculations, please reach out to our team at
              &nbsp;<strong>support@leevondelivery.in</strong> or call us at <strong>+91 7207610235</strong>.
            </p>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <span className="footer-copyright">
              © {new Date().getFullYear()} Leevon Delivery LLP. All rights reserved.
            </span>
            <span className="footer-business">
              Partner Logistics Compliance Portal
            </span>
          </div>
          {/* No footer links */}
        </div>
      </footer>
    </div>
  );
}
