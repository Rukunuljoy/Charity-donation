import React from 'react';

const Blog = () => {

  const BlogData = [
    {
      id:1,
      img:'https://i.ibb.co/dbHYbgb/1-1.jpg',
      name:'Education For All Campaign',
      des:'Sportacus andrew weatherall goose Refined gentlemen supermario des lynam alpha trion zap rows dower.Sport acus andrew weather all goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      comment:'By jacob | 10 Comments'
    },
    {
      id:2,
      img:'https://i.ibb.co/JmXj5M2/2-1.jpg',
      name:'Donation food for childrens',
      des:'Sportacus andrew weatherall goose Refined gentlemen supermario des lynam alpha trion zap rows dower.Sport acus andrew weather all goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      comment:'By jacob | 10 Comments'
    },
    {
      id:3,
      img:'https://i.ibb.co/wwKWJKx/3-1.jpg',
      name:'Helping Kids Grow Up Stronger',
      des:'Sportacus andrew weatherall goose Refined gentlemen supermario des lynam alpha trion zap rows dower.Sport acus andrew weather all goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      comment:'By jacob | 10 Comments'
    },
    {
      id:4,
      img:'https://i.ibb.co/dbHYbgb/1-1.jpg',
      name:'Education For All Campaign',
      des:'Sportacus andrew weatherall goose Refined gentlemen supermario des lynam alpha trion zap rows dower.Sport acus andrew weather all goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      comment:'By jacob | 10 Comments'
    },
    {
      id:5,
      img:'https://i.ibb.co/JmXj5M2/2-1.jpg',
      name:'Education For All Campaign',
      des:'Sportacus andrew weatherall goose Refined gentlemen supermario des lynam alpha trion zap rows dower.Sport acus andrew weather all goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      comment:'By jacob | 10 Comments'
    },
    {
      id:6,
      img:'https://i.ibb.co/wwKWJKx/3-1.jpg',
      name:'Education For All Campaign',
      des:'Sportacus andrew weatherall goose Refined gentlemen supermario des lynam alpha trion zap rows dower.Sport acus andrew weather all goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      comment:'By jacob | 10 Comments'
    },
    {
      id:7,
      img:'https://i.ibb.co/dbHYbgb/1-1.jpg',
      name:'Education For All Campaign',
      des:'Sportacus andrew weatherall goose Refined gentlemen supermario des lynam alpha trion zap rows dower.Sport acus andrew weather all goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      comment:'By jacob | 10 Comments'
    },
    {
      id:8,
      img:'https://i.ibb.co/JmXj5M2/2-1.jpg',
      name:'Education For All Campaign',
      des:'Sportacus andrew weatherall goose Refined gentlemen supermario des lynam alpha trion zap rows dower.Sport acus andrew weather all goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      comment:'By jacob | 10 Comments'
    },
    {
      id:9,
      img:'https://i.ibb.co/wwKWJKx/3-1.jpg',
      name:'Education For All Campaign',
      des:'Sportacus andrew weatherall goose Refined gentlemen supermario des lynam alpha trion zap rows dower.Sport acus andrew weather all goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.',
      comment:'By jacob | 10 Comments'
    },
  ]
    return (
        <div>
          <div className="relative">
        <img
          className="object-cover w-full h-56 sm:h-96"
          src="https://i.ibb.co/8zV4c1Y/johann-walter-bantz-wo-E5-G6zz-FQo-unsplash.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75" >
            <div className='text-center justify-center mt-32'>
            <h2 className='text-5xl font-semibold font-mono text-gray-200 justify-center  text-center'>Our All category Blog</h2>
            </div>

        </div>
      </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Our Blog is built with the latest information
        </h2>
      </div>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-1">
        {
          BlogData.map((data)=>(<a
          key={data.id}
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src={data.img}
                className="object-cover duration-500 hover:scale-105 w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <p>{data.comment}</p>
                  <h6 className="my-4 text-2xl font-semibold leading-5">
                    {data.name}
                  </h6>
                  <p className="text-sm text-gray-900">
                    {data.des}
                  </p>
                </div>
              </div>
            </div>
          </a>))
        }
      </div>
    </div>
        </div>
    );
};

export default Blog;