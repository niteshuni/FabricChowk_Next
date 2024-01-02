"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    description: string;
    imgSrcBefore: string;
    imgSrcAfter: string;
    name: string;
}

const postData: DataType[] = [
    {
        heading: 'Suiting Fabrics',
        description: "Elegance Tailored: Explore our collection of suiting fabrics, meticulously crafted to elevate your style and comfort, one stitch at a time.",
        name: "Suiting Fabrics",
        imgSrcBefore: '/assets/courses/cs1.png',
        imgSrcAfter: '',
    },
    {
        heading: 'Shirting Fabrics',
        description: "Refined Comfort: Embrace sophistication with our shirting fabrics collection, designed for unmatched comfort and timeless style in every weave.",
        name: "Shirting Fabrics",
        imgSrcBefore: '/assets/courses/cshirting1.jpg',
        imgSrcAfter: '',
    },
    {
        heading: 'Saree',
        description: "Graceful Drapes: Unveil the allure of tradition and elegance with our exquisite saree collection, meticulously woven for timeless grace and sophistication.",
        name: "Saree",
        imgSrcBefore: '/assets/courses/csaree1.jpg',
        imgSrcAfter: '',
    },
    {
        heading: 'Salwar Suits',
        description: "Effortless Sophistication: Dive into elegance with our salwar suits collection, blending traditional charm with modern comfort for an impeccable style statement.",
        name: "Salwar Suits",
        imgSrcBefore: '/assets/courses/csalwarsuit2.jpg',
        imgSrcAfter: '',
    },
    {
        heading: 'Essential Fabrics & Prints',
        description: "Essential Elegance: Explore our collection of essential fabrics and prints, meticulously crafted to bring versatility and charm to your every creation.",
        name: "Essential Fabrics & Prints",
        imgSrcBefore: '/assets/courses/cessentials1.jpg',
        imgSrcAfter: '',
    },
    {
        heading: 'Home Furnishing Fabrics',
        description: "Crafted Comfort: Transform your spaces with our home furnishing fabrics, designed to bring comfort and style seamlessly into every corner of your home.",
        name: "Home Furnishing Fabrics",
        imgSrcBefore: '/assets/courses/chome1.jpg',
        imgSrcAfter: '',
    },
    {
        heading: 'Woolen & Winter Essentials',
        description: "Cozy Comforts: Embrace warmth and style with our woolen & winter essentials collection, crafted to elevate your cold-weather wardrobe with timeless charm and coziness.",
        name: "Woolem & winter essentials",
        imgSrcBefore: '/assets/courses/cw1.png',
        imgSrcAfter: '',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            //centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            speed: 300,
            cssEase: "linear",
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
          <div id="courses">
            <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 ">
              <div className="sm:flex justify-between items-center">
                <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">
                  Categories
                </h3>
                <Link
                  href={"/"}
                  className="text-Blueviolet text-lg font-medium space-links"
                >
                  Explore Categories&nbsp;&gt;&nbsp;
                </Link>
              </div>

              <Slider {...settings}>
                {postData.map((items, i) => (
                  <div key={i}>
                    <div className="m-3 my-20 shadow-courses">
                      <a href="#" className="group relative block">
                        <div className="relative bg-transparent">
                        <Image src={items.imgSrcBefore} alt={items.name} width={390} height={235} className="m-auto inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-80 rounded-2xl" />

                        </div>

                        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                          <h3 className="text-xl font-medium text-white">
                            {items.heading}
                          </h3>

                          <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                            {items.description}
                          </p>

                          <span className="mt-3 inline-block rounded-xl bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                            Shop Now
                          </span>
                        </div>
                      </a>
                      {/* <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath" />
                                        <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                        <div>
                                            <h3 className='text-base font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                                                <div className="flex">
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-medium">${items.price}</h3>
                                            </div>
                                        </div>

                                        <hr style={{ color: "#C4C4C4" }} />

                                        <div className="flex justify-between pt-6">
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                            </div>
                                        </div>
                                    </div> */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        );
    }
}
