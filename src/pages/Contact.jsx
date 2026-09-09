import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "general",
    message: "",
    newsletter: false,
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const key = id.replace("contact-", "");
    setForm((f) => ({ ...f, [key]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ fullName: "", email: "", subject: "general", message: "", newsletter: false });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-16 w-full">
        {/* Hero / Intro Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-outline-variant/20">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-label-md text-on-surface-variant tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Get in Touch
            </span>
            <h1 className="text-headline-lg text-primary tracking-tight">Drop By or Say Hello</h1>
            <p className="text-body-lg text-on-surface-variant">
              Whether you have a question about our single-origin roasts, want to collaborate, or simply wish to
              share your morning coffee thoughts, our doors and inboxes are always open.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container p-4 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">coffee</span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-sm text-primary">Fresh Roasts Daily</span>
              <span className="text-body-sm text-on-surface-variant">Brewing from 7:00 AM onwards</span>
            </div>
          </div>
        </div>

        {/* Main Two-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-surface-container p-8 rounded-xl shadow-[0_12px_32px_rgba(63,46,38,0.06)] flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-label-md text-on-surface-variant uppercase tracking-wider">
                    Main Roastery &amp; Café
                  </span>
                  <h3 className="text-headline-md text-primary">Seattle Headquarters</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
              </div>
              <p className="text-body-md text-on-surface-variant">
                123 Roasted Bean Way, Café District
                <br />
                Seattle, WA 98101
              </p>
              <div className="w-full h-56 rounded-lg overflow-hidden shadow-inner bg-surface-container-high flex items-center justify-center text-on-surface-variant text-body-sm">
                Map preview
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex flex-col bg-surface-container-low p-4 rounded-lg">
                  <span className="text-body-sm text-on-surface-variant">Phone Inquiries</span>
                  <span className="text-body-md font-semibold text-primary mt-1">+1 (555) 382-9482</span>
                </div>
                <div className="flex flex-col bg-surface-container-low p-4 rounded-lg">
                  <span className="text-body-sm text-on-surface-variant">Direct Email</span>
                  <span className="text-body-md font-semibold text-primary mt-1">hello@artisanbrew.com</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 rounded-xl shadow-[0_8px_24px_rgba(63,46,38,0.04)] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[22px]">schedule</span>
                <h3 className="text-headline-sm text-primary">Opening Hours</h3>
              </div>
              <div className="flex flex-col gap-4 text-body-md">
                <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant">Monday – Friday</span>
                  <span className="font-semibold text-primary">7:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant">Saturday – Sunday</span>
                  <span className="font-semibold text-primary">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Holiday Hours</span>
                  <span className="font-semibold text-primary">9:00 AM – 4:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-2">
              <span className="text-label-md text-on-surface-variant uppercase tracking-wider">
                Join Our Community
              </span>
              <div className="flex items-center gap-4">
                <a className="flex items-center gap-2 bg-surface-container hover:bg-primary hover:text-on-primary transition-all px-4 py-3 rounded-lg text-primary text-label-md shadow-sm" href="#">
                  <span className="material-symbols-outlined text-[18px]">public</span>
                  Instagram
                </a>
                <a className="flex items-center gap-2 bg-surface-container hover:bg-primary hover:text-on-primary transition-all px-4 py-3 rounded-lg text-primary text-label-md shadow-sm" href="#">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  Twitter / X
                </a>
                <a className="flex items-center gap-2 bg-surface-container hover:bg-primary hover:text-on-primary transition-all px-4 py-3 rounded-lg text-primary text-label-md shadow-sm" href="#">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                  Substack
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-surface-container-high p-8 lg:p-12 rounded-2xl shadow-[0_16px_40px_rgba(63,46,38,0.08)] flex flex-col gap-8 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
              <div className="flex flex-col gap-2">
                <span className="text-label-md text-on-surface-variant uppercase tracking-wider">Direct Message</span>
                <h2 className="text-headline-md text-primary">Send Us a Note</h2>
                <p className="text-body-md text-on-surface-variant">
                  Fill out the form below and our dedicated roastery team will get back to you within 24 hours.
                </p>
              </div>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-label-md text-on-surface" htmlFor="contact-fullName">
                      Your Name
                    </label>
                    <input
                      className="bg-surface-container-lowest text-on-surface font-body-md px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-outline"
                      id="contact-fullName"
                      placeholder="e.g. Elena Rostova"
                      required
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-label-md text-on-surface" htmlFor="contact-email">
                      Email Address
                    </label>
                    <input
                      className="bg-surface-container-lowest text-on-surface font-body-md px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-outline"
                      id="contact-email"
                      placeholder="elena@example.com"
                      required
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-label-md text-on-surface" htmlFor="contact-subject">
                    Subject
                  </label>
                  <select
                    className="bg-surface-container-lowest text-on-surface font-body-md px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    id="contact-subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry &amp; Feedback</option>
                    <option value="wholesale">Wholesale &amp; Partner Roasts</option>
                    <option value="events">Private Events &amp; Tastings</option>
                    <option value="support">Online Order Support</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-label-md text-on-surface" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    className="bg-surface-container-lowest text-on-surface font-body-md px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-outline resize-none"
                    id="contact-message"
                    placeholder="Tell us how we can help you today..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-between pt-4 flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      className="w-4 h-4 rounded text-primary focus:ring-primary"
                      id="contact-newsletter"
                      type="checkbox"
                      checked={form.newsletter}
                      onChange={handleChange}
                    />
                    <label className="text-body-sm text-on-surface-variant" htmlFor="contact-newsletter">
                      Subscribe to our weekly coffee notes &amp; blend drops.
                    </label>
                  </div>
                  <button
                    className="bg-primary text-on-primary text-label-md px-8 py-4 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md flex items-center gap-2"
                    type="submit"
                  >
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </div>
                {sent && (
                  <p className="text-body-sm font-semibold text-primary">
                    Message sent! We'll get back to you shortly.
                  </p>
                )}
              </form>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container p-6 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-headline-sm text-primary">Fast Dispatch</span>
                  <span className="text-body-sm text-on-surface-variant">Roast-to-door in 48h</span>
                </div>
              </div>
              <div className="bg-surface-container p-6 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-[20px]">eco</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-headline-sm text-primary">100% Fair Trade</span>
                  <span className="text-body-sm text-on-surface-variant">Ethically sourced beans</span>
                </div>
              </div>
              <div className="bg-surface-container p-6 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-[20px]">support_agent</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-headline-sm text-primary">Expert Baristas</span>
                  <span className="text-body-sm text-on-surface-variant">Guidance for your brew</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
