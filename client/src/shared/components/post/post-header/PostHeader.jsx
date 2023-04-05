import React from "react";

export default function PostHeader({ title, description }) {
  return (
    <section className="flex flex-col gap-8 justify-center">
      <h2 className="text-4xl font-bold">{ title }</h2>
      <div className="flex items-center gap-5 text-xl">
        <span>12 Feb 2019</span>
        <span className="text-[#8695A4]">Express, Handlebars</span>
      </div>
      <p>{description}</p>
    </section>
  );
}
