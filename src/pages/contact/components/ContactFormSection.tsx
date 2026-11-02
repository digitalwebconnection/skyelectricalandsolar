import React, { useState } from "react";
import {
  Sun,
  Zap,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Home,
  MessageCircle,
  Send,
  ArrowRight,
  Award,
  CheckCircle2,
} from "lucide-react";
import "./ContactFormSection.css";
import { CONTACT_INFO } from "../../../constants";

function UserIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );
}

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    propertyType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      postcode: "",
      propertyType: "",
      message: "",
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact-form-section" className="solar-contact-section">
      {/* ================= TOP RIGHT SUNNY ROOFTOP SOLAR HOUSE HERO LAYER WITH LEFT & BOTTOM FADE ================= */}
      <div className="solar-house-bg-wrap" aria-hidden="true">
        {/* Floating Radiant Sun Illustration to the left of the house */}
        <div className="solar-floating-sun">
          <svg
            width="52"
            height="52"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="sunCoreGrad"
                x1="20"
                y1="18"
                x2="34"
                y2="36"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#ffc107" />
                <stop offset="100%" stopColor="#ff9800" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Masked House Container with Dual-Axis Fade */}
        <div className="solar-house-image-box">
          <img
            src="/assets/contact/house_faded.webp"
            alt="Clean Energy Residential Solar Rooftop"
            className="solar-house-bg"
            loading="eager"
          />
          {/* Atmospheric Soft Mist Fades on Left & Bottom Edges */}
          <div className="solar-house-fade-left" />
          <div className="solar-house-fade-bottom" />
          <div className="solar-house-fade-corner" />
        </div>
      </div>

      <div className="solar-contact-container">
        {/* ================= LEFT SIDE ================= */}
        <div className="solar-left-column">
          {/* Heading */}
          <div className="solar-heading">
            <div className="solar-eyebrow">
              GET EXPERT ADVICE
              <span></span>
              FREE SOLAR QUOTE
              <span></span>
              NO OBLIGATION
            </div>

            <h2>
              Send Us a Message &amp;
              <br />
              <span>Get an Instant Quote</span>
              <Sun className="heading-sun" />
            </h2>

            <p>
              Tell us about your home or commercial facility. Our Solar Energy Council accredited
              experts will analyse your property and provide a customised solar solution with the
              best savings for you.
            </p>
          </div>

          {/* Quote Form Card */}
          <div className="solar-form-card">
            <div className="form-badge">
              <Zap size={15} fill="currentColor" />
              Quick &amp; Easy
            </div>

            <h3>Request Your Free Solar Quote</h3>

            <p className="form-description">
              Fill in your details below and we&apos;ll get back to you within 24 hours with a
              customised solar solution.
            </p>

            {isSuccess ? (
              <div
                style={{
                  padding: "32px 20px",
                  textAlign: "center",
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "16px",
                  margin: "16px 0",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#dcfce7",
                    color: "#16a34a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#0f172a",
                    marginBottom: "8px",
                  }}
                >
                  Thank You, {formData.name || "Customer"}!
                </h4>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#475569",
                    maxWidth: "380px",
                    margin: "0 auto 20px",
                    lineHeight: 1.6,
                  }}
                >
                  Your solar quote enquiry has been received. Our accredited Clean Energy Council
                  engineers are reviewing your property details and will dispatch your tailored
                  quote shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "10px",
                    background: "#0f172a",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 700,
                    border: 0,
                    cursor: "pointer",
                  }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-gramm="false"
                data-gramm_editor="false"
                data-enable-grammarly="false"
                autoComplete="off"
              >
                <div className="form-grid">
                  <div className="solar-input">
                    <UserIcon />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      data-gramm="false"
                      data-gramm_editor="false"
                      data-enable-grammarly="false"
                      spellCheck={false}
                    />
                  </div>

                  <div className="solar-input">
                    <Phone size={19} />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      data-gramm="false"
                      data-gramm_editor="false"
                      data-enable-grammarly="false"
                      spellCheck={false}
                    />
                  </div>

                  <div className="solar-input">
                    <Mail size={19} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      data-gramm="false"
                      data-gramm_editor="false"
                      data-enable-grammarly="false"
                      spellCheck={false}
                    />
                  </div>

                  <div className="solar-input">
                    <MapPin size={19} />
                    <input
                      type="text"
                      name="postcode"
                      placeholder="Suburb / Postcode *"
                      required
                      value={formData.postcode}
                      onChange={handleChange}
                      data-gramm="false"
                      data-gramm_editor="false"
                      data-enable-grammarly="false"
                      spellCheck={false}
                    />
                  </div>
                </div>

                <div className="solar-input full-input">
                  <Home size={20} />
                  <select
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    data-gramm="false"
                  >
                    <option value="" disabled>
                      Select your property type
                    </option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="solar-textarea">
                  <MessageCircle size={19} />
                  <div>
                    <label htmlFor="solar-message">Message / Additional Details</label>
                    <textarea
                      id="solar-message"
                      name="message"
                      placeholder="Tell us about your energy needs, roof type, or any questions you have..."
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      data-gramm="false"
                      data-gramm_editor="false"
                      data-enable-grammarly="false"
                      spellCheck={false}
                    />
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="solar-submit-btn">
                  {isSubmitting ? (
                    <span>Calculating Solar Savings...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      Get My Free Quote
                      <ArrowRight size={19} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="solar-right-column">
          {/* Script Annotation: "Your Local Solar Experts" with arrow */}
          <div
            style={{
              position: "absolute",
              top: "165px",
              right: "26px",
              width: "115px",
              pointerEvents: "none",
              zIndex: 10,
            }}
            className="hidden sm:block"
          >
            <img
              src="/assets/contact/script_local_experts.webp"
              alt="Your Local Solar Experts"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div className="solar-contact-card">
            <div className="contact-card-content">
              <span className="contact-eyebrow">GET IN TOUCH</span>

              <h3>We&apos;re Here to Help</h3>

              {/* Phone */}
              <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`} className="contact-detail">
                <div className="contact-detail-icon green-icon">
                  <Phone size={25} />
                </div>

                <div>
                  <span>Call Us</span>
                  <strong>{CONTACT_INFO.phone1}</strong>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${CONTACT_INFO.email}`} className="contact-detail">
                <div className="contact-detail-icon blue-icon">
                  <Mail size={25} />
                </div>

                <div>
                  <span>Email Us</span>
                  <strong>{CONTACT_INFO.email}</strong>
                  <small>We reply within 24 hours</small>
                </div>
              </a>

              {/* Location */}
              <div className="contact-detail">
                <div className="contact-detail-icon green-icon">
                  <MapPin size={25} />
                </div>

                <div>
                  <span>Our Location</span>
                  <strong>WA • NSW • QLD Hubs</strong>
                  <small>Servicing all of Australia</small>
                </div>
              </div>

              {/* Trust points */}
              <div className="contact-trust">
                <div>
                  <ShieldCheck />
                  <span>
                    CEC Approved
                    <br />
                    Products
                  </span>
                </div>

                <div>
                  <Award />
                  <span>
                    Top Quality
                    <br />
                    Brands
                  </span>
                </div>

                <div>
                  <Home />
                  <span>
                    Trusted by
                    <br />
                    Thousands
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
