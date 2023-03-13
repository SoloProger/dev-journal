import React from "react";
import Card from "../../card/Card";

export default function RecentPost() {
  return (
    <section className="bg-[#EDF7FA] flex flex-col py-3 px-36 gap-5">
      <span className="flex items-center justify-between">
        <h5>Recent posts</h5>
        <p className="text-[#00A8CC]">View all</p>
      </span>
      <div className="flex gap-5">
        <Card
          title="Making a design system from scratch"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          date="12 Feb 2020"
          tag="Design, Pattern"
        />
        <Card
          title="Creating pixel perfect icons in Figma"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          date="12 Feb 2020"
          tag="Figma, Icon Design"
        />
      </div>
    </section>
  );
}
