"use client";

import { FormEvent, useState } from "react";
import { trackGA4, trackPixel } from "./Analytics";

const services = [
  "Newborn Photography",
  "Baby Photography",
  "Maternity Photography",
  "Wedding Photography",
  "Pre-Wedding Photography",
  "Outdoor Photography",
  "Birthday Photography",
  "Architecture Photography",
  "Real Estate Photography",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) throw new Error("Contact form submission failed");

      const selectedService = String(formData.get("service") || "general")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_|_$/g, "");

      // Never send form-entered personal information to analytics.
      trackGA4("form_submit", {
        form_name: "contact_enquiry",
        button_location: "contact_page",
        service_type: selectedService || "general",
      });
      trackPixel("Lead", {
        content_name: "Contact Form",
        content_category: selectedService || "general",
      });

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contact-enquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      <input type="hidden" name="form-name" value="contact-enquiry" />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      {[
        { id: "name", label: "Your Name", type: "text", placeholder: "Full name" },
        { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
        { id: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+971 or +91..." },
      ].map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <label htmlFor={id} className="label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.62rem" }}>{label}</label>
          <input id={id} name={id} type={type} placeholder={placeholder} required className="input-field" />
        </div>
      ))}

      <div>
        <label htmlFor="service" className="label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.62rem" }}>Service Interested In</label>
        <select
          id="service"
          name="service"
          style={{ width: "100%", background: "#1a1a1a", border: "1px solid rgba(201,168,76,0.2)", color: "var(--cream)", fontFamily: "var(--font-body)", fontSize: "0.9rem", padding: "0.85rem 1rem", outline: "none" }}
        >
          <option value="">Select a service</option>
          {services.map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.62rem" }}>Your Message</label>
        <textarea id="message" name="message" placeholder="Tell us about your vision, preferred dates, and location..." rows={4} className="input-field" />
      </div>

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "submitting"}
        style={{ width: "100%", justifyContent: "center", padding: "1rem" }}
      >
        {status === "submitting" ? "Sending..." : "Send My Enquiry"}
      </button>

      <div role="status" aria-live="polite" className="body-sm" style={{ fontSize: "0.82rem", textAlign: "center" }}>
        {status === "success" && "Thank you. Your enquiry has been sent successfully."}
        {status === "error" && "We could not send your enquiry. Please contact us through WhatsApp."}
      </div>

      <p className="body-sm" style={{ fontSize: "0.75rem", textAlign: "center" }}>
        By submitting, you agree to our <a href="/terms/" style={{ color: "var(--gold)", textDecoration: "none" }}>Terms & Conditions</a>.
      </p>
    </form>
  );
}
