import Button from "@ui/button/Button";
import React from "react";

function Hero() {
  return (
    <section className="flex justify-center items-center gap-[115px] p-36">
      <div className="flex flex-col gap-10 w-100 max-w-4xl">
        <h1 className="text-5xl	text-[#21243D] font-bold">
          Hi, I am John, Creative Technologist
        </h1>
        <p className="text-xl">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <img src="logo.png" alt="logo" />
    </section>
  );
}

export default Hero;
