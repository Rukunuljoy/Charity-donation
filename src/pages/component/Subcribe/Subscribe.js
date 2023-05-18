import React from "react";

const Subscribe = () => {
  return (
    <div className="p-8 rounded bg-orange-500 shadow-xl sm:p-12">
      <div className=" flex flex-col  lg:flex-row justify-between">
        <h2 className="font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
          Subscribe and receive weekly our newsletter
        </h2>
        <button className="btn text-white hover:bg-stone-700 hover:border-none btn-outline">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
