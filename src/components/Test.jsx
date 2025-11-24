// src/components/TestimonialMarquee.jsx
import React from "react";
import { Marquee } from "./Marquee";

const reviews = [
  { name: "Jack", username: "@jack", body: "Amazing work!", img: "https://avatar.vercel.sh/jack" },
  { name: "Jill", username: "@jill", body: "Highly professional!", img: "https://avatar.vercel.sh/jill" },
  { name: "John", username: "@john", body: "Exceeded expectations!", img: "https://avatar.vercel.sh/john" },
  { name: "Jane", username: "@jane", body: "Great communication!", img: "https://avatar.vercel.sh/jane" },
  { name: "Jenny", username: "@jenny", body: "Very satisfied!", img: "https://avatar.vercel.sh/jenny" },
  { name: "James", username: "@james", body: "Exceptional service!", img: "https://avatar.vercel.sh/james" },
];

function ReviewCard({ img, name, username, body }) {
  return (
    <figure className="inline-block w-64 p-4 rounded-xl border shadow-lg bg-white dark:bg-gray-800">
      <div className="flex items-center gap-2">
        <img src={img} alt={name} className="rounded-full w-10 h-10" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold dark:text-white">{name}</figcaption>
          <p className="text-xs text-gray-500 dark:text-gray-300">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-200">{body}</blockquote>
    </figure>
  );
}

export function TestimonialMarquee() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">What Our Clients Say</h2>
      </div>

      {/* Top row */}
      <Marquee speed={1} reverse={false}>
        {firstRow.map((r) => (
          <ReviewCard key={r.username} {...r} />
        ))}
      </Marquee>

      <div className="h-6"></div> {/* spacing between rows */}

      {/* Bottom row */}
      <Marquee speed={1} reverse={true}>
        {secondRow.map((r) => (
          <ReviewCard key={r.username} {...r} />
        ))}
      </Marquee>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-gray-900"></div>
    </section>
  );
}
