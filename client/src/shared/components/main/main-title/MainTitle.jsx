import React from "react";

export default function MainTitle() {
  return (
    <section className="flex justify-center items-center gap-28">
      <div className="flex flex-col gap-10 w-2/4">
        <h1 className="font-bold text-5xl">
          Hi, I am John, Creative Technologist
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <img src="book.jpg" alt="" className="rounded-full w-[245px] h-[240px]" />
    </section>
  );
}
