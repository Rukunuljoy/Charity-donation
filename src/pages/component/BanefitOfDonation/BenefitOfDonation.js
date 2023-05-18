import React from "react";

const BenefitOfDonation = () => {
  const donateData = [
    {
      id: 1,
      image: "https://i.ibb.co/h2Tzx96/about1.jpg",
      title: "Support Poor Peoples",
      para: "We were the first country to give her a helping hand when she came out from her isolation into the full comity of nations. We need to extend a helping hand to them against the regime.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/7bPxWBC/about2.jpg",
      title: "Helping Hands",
      para: "It underpins our economy, our society, indeed our very existence. Our forests, rivers, oceans and soils provide us with the food we eat, the air we breathe, the water we irrigate our crops with",
    },
    {
      id: 3,
      image: "https://i.ibb.co/TtyfBjk/about3.jpg",
      title: "Protect Our Planet",
      para: "It underpins our economy, our society, indeed our very existence. Our forests, rivers, oceans and soils provide us with the food we eat, the air we breathe, the water we irrigate our crops with.",
    },
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <p className="mb-1 text-3xl font-semibold tracking-wide uppercase md:mb-2">
          WELCOME TO{" "}
          <span className="text-orange-500 text-3xl font-semibold">
            DONATION
          </span>
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        {donateData.map((data) => (
          <div key={data.id} className="border">
            <img
              className="object-cover w-full h-64 mb-6 duration-500 hover:scale-105 rounded shadow-lg lg:h-80 xl:h-96"
              src={data.image}
              alt="about2"
              border="0"
            />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                {data.title}
              </h5>
              <p className="text-gray-700">{data.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitOfDonation;
