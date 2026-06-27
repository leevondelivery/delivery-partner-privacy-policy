"use client";

import React, { useState } from "react";

export default function DeleteAccountPortal() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    confirmCheck1: false,
    confirmCheck2: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.confirmCheck1 || !formData.confirmCheck2) {
      alert("Please check both confirmation statements to proceed.");
      return;
    }

    // Build the mailto link parameters
    const subject = encodeURIComponent("Request for Account Deletion - com.leevon.deliveryboy");
    const body = encodeURIComponent(
      `Hello Leevon Delivery Support Team,\n\n` +
      `I am requesting the permanent deletion of my Delivery Partner account and all associated personal data from your databases.\n\n` +
      `My Registered Details:\n` +
      `- Full Name: ${formData.name}\n` +
      `- Phone Number: ${formData.phone}\n` +
      `- Email Address: ${formData.email}\n` +
      `- Reason for Deletion: ${formData.reason || "N/A"}\n\n` +
      `I understand that this action is permanent and that my Aadhaar, Driving License, RC uploads, and bank information will be deleted.\n\n` +
      `Thank you,\n` +
      `${formData.name}`
    );

    // Open mail client
    window.location.href = `mailto:support@leevondelivery.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
            <span className="doc-tag" style={{ backgroundColor: "rgba(211, 47, 47, 0.1)", color: "var(--color-danger)" }}>
              Data Control
            </span>
            <h1 className="doc-title">Account Deletion & Data Removal</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              In compliance with Google Play Store Developer policies, Leevon Delivery LLP provides this self-service portal
              for our Delivery Partners to request the permanent deletion of their account and all associated files.
            </p>
          </header>

          <section className="doc-section">
            <div className="alert-box danger">
              <div className="alert-icon">⚠️</div>
              <div className="alert-content">
                <h4>What happens when you delete your account?</h4>
                <p style={{ margin: "0.25rem 0 0 0", color: "var(--text-muted)" }}>
                  Account deletion is <strong>permanent and irreversible</strong>. Once processed:
                </p>
                <ul style={{ margin: "0.5rem 0 0 1.25rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  <li>Your login credentials and phone verification records are deleted.</li>
                  <li>Your bank details (Account Number, IFSC) are purged from active database systems.</li>
                  <li>All uploaded images of Aadhaar Card, Driving License, and Vehicle RC are permanently erased from Firebase Storage.</li>
                  <li>You will lose access to your delivery history, earnings ledger, and accrued bonuses.</li>
                </ul>
              </div>
            </div>

            {!submitted ? (
              <div className="accent-card" style={{ padding: "2rem" }}>
                <h3 className="accent-card-title" style={{ color: "var(--color-danger)", marginBottom: "1.5rem" }}>
                  Submit Deletion Request
                </h3>
                <form onSubmit={handleSubmit} className="form-container" style={{ maxW: "100%", margin: 0 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Registered Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Registered Phone Number (with Country Code)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. +91 7207610235"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Registered Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. yourname@gmail.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="reason">
                      Reason for leaving (Optional)
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Help us improve. Why are you deleting your account?"
                    />
                  </div>

                  <div className="form-checkbox-group">
                    <input
                      type="checkbox"
                      id="confirmCheck1"
                      name="confirmCheck1"
                      required
                      checked={formData.confirmCheck1}
                      onChange={handleInputChange}
                      className="form-checkbox"
                    />
                    <label htmlFor="confirmCheck1" className="form-checkbox-label">
                      I understand that all my personal data, bank records, and document uploads (Aadhaar, License, RC) will be permanently erased and cannot be recovered.
                    </label>
                  </div>

                  <div className="form-checkbox-group" style={{ marginBottom: "2rem" }}>
                    <input
                      type="checkbox"
                      id="confirmCheck2"
                      name="confirmCheck2"
                      required
                      checked={formData.confirmCheck2}
                      onChange={handleInputChange}
                      className="form-checkbox"
                    />
                    <label htmlFor="confirmCheck2" className="form-checkbox-label">
                      I confirm that I have no pending deliveries or unpaid earnings balances on the platform.
                    </label>
                  </div>

                  <button type="submit" className="submit-btn" style={{ backgroundColor: "var(--color-danger)" }}>
                    Generate Deletion Request Email
                  </button>
                </form>
              </div>
            ) : (
              <div className="success-card">
                <span className="success-icon">✉️</span>
                <h2>Request Generated Successfully</h2>
                <p style={{ color: "var(--text-muted)", margin: "0.5rem 0 1rem 0" }}>
                  An email client was opened with your pre-filled details. Please ensure you hit &quot;Send&quot; to submit your deletion request to our support team.
                </p>
                <div style={{ backgroundColor: "rgba(0,0,0,0.03)", padding: "1.25rem", borderRadius: "10px", textAlign: "left", width: "100%", fontSize: "0.9rem", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}>
                  <strong>Request Summary:</strong>
                  <div style={{ marginTop: "0.5rem" }}>
                    • Name: {formData.name}<br />
                    • Phone: {formData.phone}<br />
                    • Email: {formData.email}<br />
                    • Target: support@leevondelivery.in
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginTop: "1rem" }}>
                  Our compliance team will process your request within 7-10 business days and send a confirmation email once complete.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="submit-btn"
                  style={{ backgroundColor: "var(--color-primary)", marginTop: "1.5rem", maxWidth: "200px" }}
                >
                  Submit Another
                </button>
              </div>
            )}
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
