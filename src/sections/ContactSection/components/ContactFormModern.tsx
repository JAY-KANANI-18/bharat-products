"use client";

import React, { useState } from "react";

export const ContactFormModern: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submit", formData);
  };

  return (
    <div className=" text-sm bg-no-repeat box-border caret-transparent flex basis-full flex-col grow justify-start leading-[21px] max-w-full text-left md:px-5 md:text-base md:basis-full md:leading-6 md:max-w-full">
      <form
        onSubmit={onSubmit}
        className="w-full rounded-2xl border border-gray-100 bg-white/90 backdrop-blur p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow"
      >
        <div className="mb-6">
          {/* <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Contact
          </div> */}
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-foreground font-red_hat_display relative after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-16 after:rounded-full after:bg-primary/80">
            Send us a Message
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-foreground/60">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={onChange}
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/60">
              Phone
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={onChange}
              type="tel"
              placeholder="Phone"
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/60">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={onChange}
              type="email"
              placeholder="Email"
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/60">
              Company
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={onChange}
              type="text"
              placeholder="Company"
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-xs font-semibold text-foreground/60">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              placeholder="Your message"
              className="mt-1 w-full min-h-[120px] rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
              required
            />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button
            type="submit"
            className="w-full sm:w-auto rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:shadow-lg"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormModern;
