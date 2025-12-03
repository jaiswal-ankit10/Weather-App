import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-700 flex items-center justify-center p-10 mt-18">
      <div className="max-w-xl w-full bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-xl text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        <p className="text-lg mb-6 text-center">
          Have questions, feedback, or suggestions? Fill out the form below and
          we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/80 text-black"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/80 text-black"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 rounded bg-white/80 text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold rounded bg-linear-to-r from-emerald-500 to-emerald-900 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
