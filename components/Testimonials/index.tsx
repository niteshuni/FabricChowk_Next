"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Rushil Bansal",
        profession: 'RR Entreprise',
        comment: 'FabricChowk has streamlined the discovery process, enhancing the overall convenience of business operations',
        imgSrc: '/assets/shared/unknown.png',
    },
    {
        name: "Dinesh Rajgarhia",
        profession: 'BBR',
        comment: 'FabricChowk has made it easier for retailers and small shop owners to discover quality products at more favorable prices. The exploration of cities and the planning of purchasing itineraries have become highly convenient',
        imgSrc: '/assets/shared/unknown.png',
    },
    {
        name: "Anil Mahajan",
        profession: 'Nav Durga Fabrics',
        comment: 'Since aligning with FabricChowk, we&npos;ve experienced a significant uptick in our sales, with a rapid influx of retailers joining our platform in a short span',
        imgSrc: '/assets/shared/unknown.png',
    },
    {
        name: "Mrityunjay Saha",
        profession: 'Saha Textile',
        comment: 'As a retailer, the business provides me the ease of not dealing with logistics and insurance, and the payment reminders have streamlined the entire process for me',
        imgSrc: '/assets/shared/unknown.png',
    },
    {
        name: "Gaurav agarwal",
        profession: 'M.S Synthetics',
        comment: 'FabricChowk has significantly lowered my discovery costs as a wholesaler, enabling me to connect with a broader audience in the fabric industry.',
        imgSrc: '/assets/shared/unknown.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
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
            <div className="pt-15 pb-10 sm:pb-25 lg:py-25 " id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white h-[300px] m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className="absolute top-[-45px]">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={60} height={60} className="inline-block" />
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-lightgray" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
