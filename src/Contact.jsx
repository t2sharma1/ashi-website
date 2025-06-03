import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="min-h-screen pt-0 bg-green-50 py-10 px-6 font-sans">
      <Navbar />
      <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">Contact Me</h1>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Phone Number (Optional)</label>
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="10-digit number"
              className="w-full px-4 py-2 border rounded-md"
              title="Please enter a valid 10-digit phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 border rounded-md h-32 resize-none"
            ></textarea>
          </div>

          <div data-netlify-recaptcha="true"></div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Hidden fallback form for Netlify to detect at build */}
        <form name="contact" netlify hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
