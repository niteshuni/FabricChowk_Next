import Image from 'next/image';

const Banner = () => {

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-8xl pt-20 sm:pb-24 px-6 bg-[url(/assets/banner/Fabric.png)] bg-cover bg-center bg-no-repeat bg-opacity-50">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                       
                        <h1 className='text-white mb-10 text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Cultivating Excellence in Fabric Solutions for every Industry Partner</h1>
                        <h3 className='text-white mb-7 text-xl font-normal text-center lg:text-start opacity-95 pt-5 lg:pt-0'>Empowering Industries with Impeccable Fabric Innovations, Fostering Creative Endeavors</h3>
                        <h3 className='text-white mb-7 text-xl font-normal text-center lg:text-start opacity-95 pt-5 lg:pt-0'>Enabling Creativity, One Impeccable Weave at a Time</h3>

                        <div className='flex items-center justify-between pt-10 lg:pt-20'>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-xl font-normal text-white'>Tradition</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-xl font-normal text-white'>Assurance</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-xl font-normal text-white'>Trust</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner;
