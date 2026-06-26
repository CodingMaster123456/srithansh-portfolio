"use client";

import { useState } from "react";
import FadeIn from "../components/FadeIn";

// Replace this with your real Formspree endpoint after signing up at formspree.io
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen px-6 py-16 sm:px-12 sm:py-24 max-w-4xl mx-auto">
      <FadeIn>
        <p className="text-xs uppercase tracking-wide text-graphite mb-3">
          Contact
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
          Let&apos;s talk
        </h1>
        <p className="text-graphite leading-relaxed max-w-xl mb-12">
          Recruiting, internship opportunities, or just want to chat about a
          project — feel free to reach out below.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 max-w-lg border border-line rounded-xl p-6"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm text-graphite">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="border border-line rounded-lg px-3 py-2 outline-none focus:border-signal transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-graphite">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="border border-line rounded-lg px-3 py-2 outline-none focus:border-signal transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-graphite">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="border border-line rounded-lg px-3 py-2 outline-none focus:border-signal transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-ink text-paper font-medium rounded-lg py-2.5 hover:bg-signal transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-signal">
              Message sent — thanks for reaching out!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-graphite">
              Something went wrong. Try emailing directly instead.
            </p>
          )}
        </form>
      </FadeIn>
    </main>
  );
}