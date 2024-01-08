import BlogCard from '@/components/shared/BlogCard';
import blogList from '@/constants/blogList';
import React from 'react'

const Blogs = () => {
    const blogArray = blogList;
  return (
    <>
    <section className="bg-white mt-20 pb-10 pt-20 lg:pb-20 lg:pt-[100px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto px-4 mb-[60px] max-w-[600px] text-center lg:mb-10">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Latest from blog
                </h2>
                <p className="">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          {blogArray.map((blogItem, index) => (<BlogCard key={index} {...blogItem}/>))}
        </div>
    </section>
    </>
  );
};

export default Blogs;