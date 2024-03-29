import Link from "next/link";
import Image from "next/image";

interface LinkDetails {
    name: string;
    href: string;
}
interface ProductType {
    id: number;
    section: string;
    link: LinkDetails[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'www.facebook.com',
        width: 10
    },
    {
        imgSrc: '/assets/footer/insta.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/twitter.svg',
        link: 'www.twitter.com',
        width: 14
    },

]

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: [{name: 'About', href:"/about"}, {name: 'Blog', href:"/blogs"}, {name: 'How we work?', href:"/"}],
    },
    {
        id: 2,
        section: "More",
        link: [{name: 'Contact', href:"/contact"}, {name: 'FAQ', href:"/faq"}, {name: 'Partners', href:"#home-section"}, {name: 'Categories', href:"#courses"}]
    }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/assets/logo/logo_final.png" alt="logo" width={250} height={66} />
                    </div>
                    <h3 className='text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16'> Transforming Textiles, Empowering Trade. 
                    <br />Join Us in Crafting the Future of Fabrics!</h3>
                    <div className='flex gap-4'>

                        {socialLinks.map((items, i) => (
                        <Link href={items.link} key={i}>
                            <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                                <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                            </div>
                        </Link>
                        ))}

                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}


                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-lg font-medium mb-9">{product.section}</p>
                        <ul>
                            {product.link.map((link: LinkDetails, index: number) => (
                                <li key={index} className='mb-5'>
                                    <Link href={link.href} className="text-darkgray text-base font-normal mb-6 space-links">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            {/* All Rights Reserved */}

            
        </div>
    )
}

export default footer;
