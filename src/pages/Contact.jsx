import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f5f3ef] px-6 py-16 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a8782]">
            Get in touch
          </p>

          <h1 className="mt-4 text-5xl font-medium tracking-tight text-[#0b0b0b] md:text-7xl">
            We'd love to hear from you.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#8a8782]">
            Whether you have a question about an order, need help choosing
            something, or simply want to speak with us, our team is here to
            help.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Contact Information */}
          <div>
            <div className="border-t border-black/10 pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[#8a8782]">
                Contact
              </p>

              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <p className="text-[#8a8782]">Email</p>

                  <a
                    href="mailto:hello@noire.com"
                    className="mt-1 inline-block hover:underline"
                  >
                    adesidakorede2019@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[#8a8782]">Phone</p>

                  <a
                    href="tel:+2348107507789"
                    className="mt-1 inline-block hover:underline"
                  >
                    +234 810 750 7789
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-12 border-t border-black/10 pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[#8a8782]">
                Customer Care
              </p>

              <div className="mt-6 space-y-3 text-sm text-[#0b0b0b]">
                <div className="flex justify-between gap-6">
                  <span>Monday — Friday</span>
                  <span className="text-[#8a8782]">9AM — 6PM</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span>Saturday</span>
                  <span className="text-[#8a8782]">10AM — 4PM</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span>Sunday</span>
                  <span className="text-[#8a8782]">Closed</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-12 border-t border-black/10 pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[#8a8782]">
                Follow NOIRÉ
              </p>

              <div className="mt-5 flex gap-5 text-sm">
                <a href="#" className="hover:opacity-50">
                  Instagram
                </a>

                <a href="#" className="hover:opacity-50">
                  TikTok
                </a>

                <a href="#" className="hover:opacity-50">
                  Pinterest
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-black/10 pt-6"
          >
            <p className="text-xs uppercase tracking-[0.15em] text-[#8a8782]">
              Send a message
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-wider text-[#8a8782]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none transition focus:border-[#0b0b0b]"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-wider text-[#8a8782]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none transition focus:border-[#0b0b0b]"
                  placeholder="you@example.com"
                />
              </div>

              {/* Subject */}
              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="text-xs uppercase tracking-wider text-[#8a8782]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none transition focus:border-[#0b0b0b]"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-wider text-[#8a8782]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full resize-none border-b border-black/20 bg-transparent py-3 text-sm outline-none transition focus:border-[#0b0b0b]"
                  placeholder="Tell us how we can help..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 bg-[#0b0b0b] px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#f5f3ef] transition hover:bg-[#2a2a2a]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
