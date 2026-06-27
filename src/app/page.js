"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
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

      {/* Main Content Layout */}
      <div className="content-layout" style={{ gridTemplateColumns: "1fr", maxWidth: "800px" }}>
        {/* Policy Document Content */}
        <main className="main-content">
          <header className="doc-header">
            <span className="doc-tag">Privacy Policy</span>
            <h1 className="doc-title">Delivery Partner Privacy Policy</h1>
            <div className="doc-meta">
              <div className="meta-item">
                <span>Last Updated:</span>
                <strong>June 27, 2026</strong>
              </div>
              <div className="meta-item">
                <span>App Version:</span>
                <strong>1.0.0 (Android)</strong>
              </div>
              <div className="meta-item">
                <span>Publisher:</span>
                <strong>Leevon Delivery LLP</strong>
              </div>
            </div>
          </header>

          <section id="introduction" className="doc-section">
            <h2 className="section-title">1. Introduction</h2>
            <p>
              Welcome to <strong>Leevon Delivery LLP</strong> (&quot;Company&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We operate the
              <strong> Leevon Delivery Partner</strong> mobile application (the
              &quot;App&quot;), package name <code>com.leevon.deliveryboy</code>,
              available on the Google Play Store.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, share, and
              protect information from and about individuals who register as
              delivery partners (&quot;Delivery Partners&quot;, &quot;you&quot;,
              or &quot;your&quot;) to perform delivery services on our platform.
            </p>
            <p>
              By installing, registering, or using the App, you agree to the
              collection and use of your information in accordance with this
              Privacy Policy. If you do not agree with any terms of this policy,
              please do not use the App.
            </p>
          </section>

          <section id="data-collection" className="doc-section">
            <h2 className="section-title">2. Information We Collect</h2>
            <p>
              To onboard you as an authorized Delivery Partner and manage order
              deliveries, we collect specific Personal Identifiable Information
              (PII), government documentation, and financial details. Without
              this data, we cannot verify your identity or process your delivery
              earnings.
            </p>

            <h3 style={{ margin: "1.5rem 0 0.5rem 0", fontSize: "1.2rem" }}>
              A. Personal Information & Identifiers
            </h3>
            <p>
              During account registration, we collect:
            </p>
            <ul className="data-list">
              <li className="data-list-item">
                <strong>Full Name:</strong> Used to identify you on our platform and
                to restaurants/customers during deliveries.
              </li>
              <li className="data-list-item">
                <strong>Email Address:</strong> Used for account updates, receipts,
                and administrative correspondence.
              </li>
              <li className="data-list-item">
                <strong>Phone Number:</strong> Used as your unique account ID and verified
                via Firebase SMS One-Time Passwords (OTP) for secure login.
              </li>
            </ul>

            <h3 style={{ margin: "1.5rem 0 0.5rem 0", fontSize: "1.2rem" }}>
              B. Government-Issued Documents & Verification Data
            </h3>
            <p>
              To comply with local traffic regulations and conduct background checks,
              we require:
            </p>
            <ul className="data-list">
              <li className="data-list-item">
                <strong>Aadhaar Card Details:</strong> Your Aadhaar Number and an
                uploaded image of your Aadhaar card to confirm your physical identity
                and address.
              </li>
              <li className="data-list-item">
                <strong>Driving License Details:</strong> Your Driver&apos;s License Number
                and an uploaded image of the license to verify your authority to operate
                delivery vehicles legally.
              </li>
              <li className="data-list-item">
                <strong>Vehicle Registration Certificate (RC):</strong> Your Vehicle RC Number
                and an uploaded image of the registration card to verify vehicle ownership
                and roadworthiness.
              </li>
            </ul>

            <h3 style={{ margin: "1.5rem 0 0.5rem 0", fontSize: "1.2rem" }}>
              C. Financial & Payout Information
            </h3>
            <p>
              To transfer delivery fees, commissions, and bonuses, we collect:
            </p>
            <ul className="data-list">
              <li className="data-list-item">
                <strong>Bank Account Number:</strong> The account number where payouts
                will be sent.
              </li>
              <li className="data-list-item">
                <strong>Bank IFSC Code:</strong> Used to route electronic bank transfers
                in India.
              </li>
            </ul>

            <h3 style={{ margin: "1.5rem 0 0.5rem 0", fontSize: "1.2rem" }}>
              D. Technical & Platform Usage Data
            </h3>
            <p>
              We automatically collect technical data necessary for delivery dispatching:
            </p>
            <ul className="data-list">
              <li className="data-list-item">
                <strong>FCM Push Token:</strong> Used to send push alerts for incoming
                orders and status updates.
              </li>
              <li className="data-list-item">
                <strong>Duty Status:</strong> Tracking whether you are currently Online
                (available for orders) or Offline.
              </li>
              <li className="data-list-item">
                <strong>Order History & Performance:</strong> Records of your accepted,
                picked up, rejected, or completed orders, and customer ratings/reviews.
              </li>
            </ul>
          </section>

          <section id="device-permissions" className="doc-section">
            <h2 className="section-title">3. Device Permissions</h2>
            <p>
              To enable core logistics functionality, the App requests permissions
              to access certain hardware and system features on your Android device.
            </p>

            <div className="permission-grid">
              <div className="permission-card">
                <div className="permission-info">
                  <h4>Storage / Media Access</h4>
                  <p>
                    Allows reading and writing to your external storage. This is used
                    so you can upload images of your Aadhaar Card, Driving License,
                    and Vehicle RC during signup or profile updates.
                  </p>
                </div>
              </div>

              <div className="permission-card">
                <div className="permission-info">
                  <h4>Audio & Media Playback</h4>
                  <p>
                    Allows the app to configure audio mode and play sound alerts. Used
                    exclusively to play high-volume custom notification sounds (via
                    Expo-AV) so you don&apos;t miss live delivery requests.
                  </p>
                </div>
              </div>

              <div className="permission-card">
                <div className="permission-info">
                  <h4>System Alert Window</h4>
                  <p>
                    Allows the app to draw over other active apps. Used to display immediate
                    incoming order request screens even if the app is in the background.
                  </p>
                </div>
              </div>

              <div className="permission-card">
                <div className="permission-info">
                  <h4>Post Notifications</h4>
                  <p>
                    Allows sending real-time push notifications. Crucial for letting you
                    know when a new order is assigned or if there is an update to your account.
                  </p>
                </div>
              </div>
            </div>

            <div className="alert-box info">
              <div className="alert-icon">ℹ️</div>
              <div className="alert-content">
                <h4>Permission Control</h4>
                <p>
                  You can grant or revoke these permissions at any time through your Android
                  device settings. However, revoking storage or notification permissions will
                  severely limit your ability to register or receive delivery orders.
                </p>
              </div>
            </div>
          </section>

          <section id="data-usage" className="doc-section">
            <h2 className="section-title">4. How We Use Data</h2>
            <p>
              We process your personal information based on business necessity, legal
              compliance, and contract fulfillment.
            </p>

            <div className="accent-card">
              <h3 className="accent-card-title">
                <span>🔄</span> Operational Purposes
              </h3>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                We use your name, photo, and vehicle details to verify your account,
                onboard you on the delivery network, and display your contact profile
                to partners. Your phone number enables secure identity verification to prevent
                unauthorized account access.
              </p>
            </div>

            <div className="accent-card">
              <h3 className="accent-card-title">
                <span>💸</span> Earnings & Payout Processing
              </h3>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                We utilize your banking numbers (IFSC Code and Account Number) to calculate
                your delivery commissions and perform direct electronic transfers of your
                earnings.
              </p>
            </div>

            <div className="accent-card">
              <h3 className="accent-card-title">
                <span>📍</span> Logistics & Communications
              </h3>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                We use push notifications and overlay alerts to notify you of available orders,
                and process delivery lifecycle logs (order accepted, picked up, completed)
                to monitor successful fulfillment.
              </p>
            </div>
          </section>

          <section id="data-sharing" className="doc-section">
            <h2 className="section-title">5. Data Sharing & Security</h2>
            <p>
              Your trust is our priority. We handle your sensitive details with high-security
              standards and disclose them only as strictly necessary.
            </p>

            <h3 style={{ margin: "1.5rem 0 0.5rem 0", fontSize: "1.2rem" }}>
              A. Server Sync & Technical Infrastructure
            </h3>
            <p>
              Data collected by the App is securely synchronized with our encrypted backend servers.
              We also utilize secure industry-standard services for authentication, file hosting,
              and notification routing:
            </p>
            <ul className="data-list">
              <li className="data-list-item">
                <strong>Secure Identity Verification:</strong> Services to authenticate Delivery Partners
                and validate login sessions via SMS verification codes (OTP).
              </li>
              <li className="data-list-item">
                <strong>Cloud Storage Systems:</strong> Secure storage databases to host uploaded images
                of Aadhaar cards, driving licenses, and vehicle RCs using secure, encrypted storage links.
              </li>
              <li className="data-list-item">
                <strong>Real-Time Messaging Services:</strong> Instant messaging pathways to deliver push
                alerts for incoming delivery orders and status updates.
              </li>
            </ul>

            <h3 style={{ margin: "1.5rem 0 0.5rem 0", fontSize: "1.2rem" }}>
              B. No Sale of Personal Data
            </h3>
            <p>
              We <strong>do not sell, rent, or trade</strong> your personal information,
              uploaded documents, or financial credentials with any third-party advertisers or
              data brokers. Your data is strictly used for platform operations.
            </p>

            <h3 style={{ margin: "1.5rem 0 0.5rem 0", fontSize: "1.2rem" }}>
              C. Security Measures
            </h3>
            <p>
              We implement industry-standard administrative and technical security measures (such
              as HTTPS encryption and secure database access protocols) to safeguard your files
              and credentials against unauthorized access, loss, or disclosure.
            </p>
          </section>

          <section id="data-retention" className="doc-section">
            <h2 className="section-title">6. Data Retention & Deletion</h2>
            <p>
              We retain your personal details only as long as you maintain an active profile
              as a Leevon Delivery Partner. If you decide to leave our platform, you have the
              right to request total deletion of your personal records.
            </p>

            <div className="alert-box warning">
              <div className="alert-icon">⚠️</div>
              <div className="alert-content">
                <h4>Right to Account Deletion</h4>
                <p>
                  You can request the deletion of your account and all associated data at any time.
                  Once processed, all your personal information, banking details, government numbers,
                  and uploaded document files are permanently erased from our active databases and
                  secure cloud storage platforms.
                </p>
              </div>
            </div>

            <p>
              To request account deletion, please visit our dedicated{" "}
              <Link href="/delete-account" style={{ fontWeight: "600", textDecoration: "underline" }}>
                Data Deletion Request Portal
              </Link>{" "}
              and follow the step-by-step instructions. Alternatively, you can email your request
              directly to <strong>support@leevondelivery.in</strong> with your registered phone number.
            </p>
          </section>

          <section id="children-privacy" className="doc-section">
            <h2 className="section-title">7. Children&apos;s Privacy</h2>
            <p>
              Our services are strictly directed to individuals who are legally allowed to operate
              motor vehicles and enter into binding contracts (minimum <strong>18 years of age</strong>
              &nbsp;in India). We do not knowingly collect personal data from anyone under the age of 18.
              If we discover that a minor under 18 has registered an account, we will take immediate
              actions to terminate the profile and erase all associated files.
            </p>
          </section>

          <section id="contact-us" className="doc-section">
            <h2 className="section-title">8. Contact Information</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, your
              personal details, or if you wish to file a grievance, please contact our support team:
            </p>

            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <h4 className="contact-card-title">Email Support</h4>
                <div className="contact-card-value">support@leevondelivery.in</div>
                <a href="mailto:support@leevondelivery.in" className="contact-card-btn" style={{ textAlign: "center" }}>
                  Compose Email
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">📞</div>
                <h4 className="contact-card-title">Helpline Number</h4>
                <div className="contact-card-value">+91 7207610235</div>
                <a href="tel:+917207610235" className="contact-card-btn" style={{ textAlign: "center" }}>
                  Call Hotline
                </a>
              </div>
            </div>

            <p style={{ fontSize: "0.95rem", textAlign: "center", color: "var(--text-light)" }}>
              <strong>Leevon Delivery LLP</strong><br />
              Registration details & corporate office operations managed in India.
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
