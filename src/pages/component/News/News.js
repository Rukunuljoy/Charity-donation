import React from "react";

const News = () => {
  const News = [
    {
      id: 1,
      img: "https://i.ibb.co/dbHYbgb/1-1.jpg",
      date: "Jan 05, 2017",
      title: "Education For All Campaign",
      des: "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      Comment: "By Fardinad | 10 Comments",
    },
    {
      id: 2,
      img: "https://i.ibb.co/JmXj5M2/2-1.jpg",
      date: "Jan 05, 2017",
      title: "Donation food for childrens",
      des: "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      Comment: "By Fardinad | 10 Comments",
    },
    {
      id: 3,
      
      img: "https://i.ibb.co/wwKWJKx/3-1.jpg",
      date: "feb 05, 2018",
      title: "Helping Kids Grow Up Stronger",
      des: "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      Comment: "By Fardinad | 10 Comments",
    },
  ];
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold text-center">
        LATEST FROM <span className="text-orange-500">NEWS</span>
      </h2>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {News.map((data) => (
            <div id={data.id} className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <a href="/" aria-label="Article">
                <img
                  src={data.img}
                  className="object-cover duration-500 hover:scale-105 w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5 border p-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  {data.date}
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">
                    {data.title}
                  </p>
                </a>
                <p>{data.Comment}</p>
                <p className="mb-4 text-gray-700">
                  {data.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
