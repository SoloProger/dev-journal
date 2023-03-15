import React from "react";

export default function Post() {
  return (
    <article className="w-full  max-w-4xl m-auto p-6 flex flex-col gap-10 justify-center">
      <section className="flex flex-col gap-8 justify-center">
        <h2 className="text-4xl font-bold">
          Designing Dashboards with usability in mind
        </h2>
        <div className="flex items-center gap-5 text-xl">
          <span>12 Feb 2019</span>
          <span className="text-[#8695A4]">Express, Handlebars</span>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </section>
      <section className="flex flex-col gap-10">
        <img src="/post-image.png" alt="alt" />
        <h3 className="text-3xl font-bold">Заголовок</h3>
        <h4 className="text-2xl font-bold">Подзаголовок</h4>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </section>
      <section className="flex flex-col gap-10">
        <h3 className="text-3xl font-bold">Вывод</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </section>
    </article>
  );
}
