import React from "react";

function NewLattercard() {
  return (
    <div>
      <div className=" mt-15 md:mx-10 sm:mx-8 mx-5 rounded-t-2xl bg-[#C35642] grid md:grid-cols-2 grid-cols-1">
        <div className="sm:p-20 p-10">
          <h1 className="font-extrabold transform scale-y-105 sm:text-6xl text-4xl mb-5 text-white">
            <span className="md:block">Subscribe to</span>
            <span> Our Newsletter</span>
          </h1>
          <p className="text-white font-extralight text-justify">
            Stay up-to-date on the latest trends, insights, and ideas in
            branding, design, and digital marketing by subscribing to Idea Lab's
            newsletter.
          </p>
        </div>
        <div className="md:p-20 p-10">
          <form
            action=""
            className="flex flex-wrap md:flex-row flex-col items-center gap-3"
          >
            <input
              type="text"
              placeholder="YOUR NAME"
              className="rounded-3xl my-5 px-5 py-2 border-1 border-amber-100 text-white font-normal w-50 col-span-1 self-start"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="rounded-3xl my-5 px-5 py-2 border-1 text-white font-normal border-amber-100 w-50 self-start"
            />
            <button className="rounded-xl  px-5 py-2 bg-[#E2AD28] w-30 self-start hover:bg-[#e2c028] hover:cursor-pointer">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLattercard;
