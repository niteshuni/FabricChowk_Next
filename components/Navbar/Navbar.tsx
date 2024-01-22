"use client";

import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Notification from '../shared/Notification';
import Image from 'next/image';
import WSProfile from '../shared/WSProfile';
import { usePathname } from 'next/navigation'
import RTProfile from '../shared/RTProfile';
import LanguageToggle from '../shared/LanguageToggle';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    {name: 'Categories', href: '/product', current: false},
    { name: 'Product', href: '/product', current: false },
    { name: 'Blogs', href: '/blogs', current: false },
    // { name: 'Company', href: '/product', current: false },
    // { name: 'Home', href: '#/', current: true },
    // { name: 'Partners', href: '#courses', current: false },
    // { name: 'Categories', href: '#mentor', current: false },
    // { name: 'Product', href: '/product', current: false },
    // { name: 'About', href: '/about', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentLink, setCurrentLink] = useState('/');

    const pathname = usePathname();
    const pathArray = pathname.split('/');
    const checkWSPath = pathArray.find((path) => path === "ws");
    const isWSlogged = localStorage.getItem("signedws");
    const isRTlogged = localStorage.getItem("signedrt");

    return (
      <Disclosure as="nav" className="navbar">
        <>
          <div className="w-full px-2 py-1">
            <div className="w-full flex flex-wrap items-center justify-between">
              <div className="flex items-center sm:items-stretch sm:justify-start">
                {/* LOGO */}

                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <Image
                      className="block lg:hidden"
                      src={"/assets/logo/logo_final.png"}
                      height={60}
                      width={230}
                      alt={"Design Logo"}
                    />
                    <Image
                      className="hidden lg:block"
                      src={"/assets/logo/logo_final.png"}
                      height={200}
                      width={300}
                      alt={"Design Logo"}
                    />
                  </a>
                </div>
              </div>

              {/* LINKS */}
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-3">
                  {/* {navigation.map((item) => (
                    <CustomLink
                      key={item.name}
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      <span
                        className={classNames(
                          item.href === currentLink
                            ? "underline-links"
                            : "text-slategray",
                          "px-1 py-4 text-lg font-bold  opacity-75 active:opacity-100 hover:opacity-100"
                        )}
                        aria-current={item.href ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    </CustomLink>
                  ))} */}
                  <ul className="menu lg:menu-horizontal text-lg font-bold text-slategray">
                    <li>
                      <details>
                        <summary>Categories</summary>
                        <ul className="overflow-y-scroll max-h-[80vh]">
                          <li>
                            <details>
                              <summary>Suiting</summary>
                              <ul>
                                <li>
                                  <a>Pure Cotton</a>
                                </li>
                                <li>
                                  <a>Blended Woolen</a>
                                </li>
                                <li>
                                  <a>Blended Terrycotton</a>
                                </li>
                              </ul>
                            </details>
                          </li>
                          <li>
                            <details>
                              <summary>Shirting</summary>
                              <ul>
                                <li>
                                  <a>Pure Cotton</a>
                                </li>
                                <li>
                                  <a>Blended Terrycotton</a>
                                </li>
                                <li>
                                  <a>Blended Cootswool</a>
                                </li>
                              </ul>
                            </details>
                          </li>
                          <li>
                            <details>
                              <summary>Saree</summary>
                              <ul>
                                <li>
                                  <details>
                                    <summary>Cotton</summary>
                                    <ul>
                                      <li>
                                        <a>South Cotton</a>
                                      </li>
                                      <li>
                                        <a>Handloom Cotton</a>
                                      </li>
                                      <li>
                                        <a>Cotton Printed</a>
                                      </li>
                                      <li>
                                        <a>Cotton Thread Work</a>
                                      </li>
                                      <li>
                                        <a>Bangaladesi&nbsp;(BD)&nbsp;Cotton</a>
                                      </li>
                                      <li>
                                        <a>Pochampalli Cotton</a>
                                      </li>
                                    </ul>
                                  </details>
                                </li>
                                <li>
                                  <details>
                                    <summary>Silk</summary>
                                    <ul>
                                      <li>
                                        <a>Mulberry&nbsp;Printed&nbsp;Silk</a>
                                      </li>
                                      <li>
                                        <a>Tussar Silk</a>
                                      </li>
                                      <li>
                                        <a>South Silk</a>
                                      </li>
                                      <li>
                                        <a>Banarasi Silk</a>
                                      </li>
                                      <li>
                                        <a>Kanjiveram Silk</a>
                                      </li>
                                      <li>
                                        <a>Pochampalli Silk</a>
                                      </li>
                                    </ul>
                                  </details>
                                </li>
                                <li>
                                  <details>
                                    <summary>Synthetic</summary>
                                    <ul>
                                      <li>
                                        <a>Georget</a>
                                      </li>
                                      <li>
                                        <a>Chiffon</a>
                                      </li>
                                      <li>
                                        <a>Satin</a>
                                      </li>
                                    </ul>
                                  </details>
                                </li>
                              </ul>
                            </details>
                          </li>
                          <li>
                            <details>
                              <summary>Salwar Suit</summary>
                              <ul>
                                <li>
                                  <a>Cotton Printed</a>
                                </li>
                                <li>
                                  <a>Cotton work with Cotton dupatta</a>
                                </li>
                                <li>
                                  <a>Cotton work with chiffon dupatt</a>
                                </li>
                                <li>
                                  <a>Georget Suit</a>
                                </li>
                                <li>
                                  <a>Chiffon Suit</a>
                                </li>
                                <li>
                                  <a>Dola Suit</a>
                                </li>
                                <li>
                                  <a>Organza Suit</a>
                                </li>
                                <li>
                                  <a>Chanderi Suit</a>
                                </li>
                                <li>
                                  <a>Tushar Silk Suit</a>
                                </li>
                                <li>
                                  <a>Silk Suit</a>
                                </li>
                              </ul>
                            </details>
                          </li>
                          <li>
                            <details>
                              <summary>Essesntial & Print</summary>
                              <ul>
                                <li>
                                  <a>Cambric cotton</a>
                                </li>
                                <li>
                                  <a>Rayon cotton Print</a>
                                </li>
                                <li>
                                  <a>Glaze cotton Print</a>
                                </li>
                              </ul>
                            </details>
                          </li>
                          <li>
                            <details>
                              <summary>
                                Home&nbsp;furnishing&nbsp;fabric
                              </summary>
                              <ul>
                                <li>
                                  <a>Curtain</a>
                                </li>
                                <li>
                                  <a>Upholestry</a>
                                </li>
                              </ul>
                            </details>
                          </li>
                          <li>
                            <details>
                              <summary>Woolen & Winter Essentials</summary>
                              <ul>
                                <li>
                                  <a>Shawl</a>
                                </li>
                                <li>
                                  <a>Blanket</a>
                                </li>
                                <li>
                                  <a>Bedsheet</a>
                                </li>
                                <li>
                                  <a>Quilt</a>
                                </li>
                              </ul>
                            </details>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <a href="/product">Products</a>
                    </li>
                    <li>
                      <a href="/blogs">Blogs</a>
                    </li>
                    <li>
                      <details>
                        <summary>Company</summary>
                        <ul>
                          <li>
                            <a href="/about">About Us</a>
                          </li>
                          <li>
                            <a href="/contact">Contact Us</a>
                          </li>
                          <li>
                            <a href="/team">Team</a>
                          </li>
                          <li>
                            <a href="/partners">Wholesalers</a>
                          </li>
                          <li>
                            <a href="/retailers">Retailers</a>
                          </li>
                          <li>
                            <a href="/howitworks">
                              How&nbsp;FabricChowk&nbsp;Works
                            </a>
                          </li>
                          <li>
                            <a href="/faq">FAQ</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>

              <LanguageToggle />

              <Notification />

              {checkWSPath && isWSlogged ? <WSProfile /> : null}
              {!checkWSPath && isRTlogged ? <RTProfile /> : null}
              {(checkWSPath && !isWSlogged) || (!checkWSPath && !isRTlogged)  ? (<div className="hidden lg:block dropdown dropdown-end ">
              <div tabIndex={0} role="button" className="m-1 mr-4 text-xl text-kellygreen bg-semikellygreen btn hover:text-white hover:bg-kellygreen">Sign In</div>
                <ul className="p-2 text-lg shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a href='/ws/signin'>as Wholesaler</a>
                  </li>
                  <li>
                    <a href='signin'>as Retailer</a>
                  </li>
                </ul>
              </div>) : null}
              
              {/* DRAWER FOR MOBILE VIEW */}

              {/* DRAWER ICON */}

              <div className="block lg:hidden">
                <Bars3Icon
                  className="block h-6 w-6"
                  aria-hidden="true"
                  onClick={() => setIsOpen(true)}
                />
              </div>

              {/* DRAWER LINKS DATA */}

              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Drawerdata />
              </Drawer>
            </div>
          </div>
        </>
      </Disclosure>
    );
};

export default Navbar;
