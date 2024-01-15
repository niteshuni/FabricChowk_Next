import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Courses', href: '#courses', current: false },
  { name: 'Mentor', href: '#mentor', current: false },
  { name: 'Group', href: '#/', current: false },
  { name: 'Testimonial', href: '#testimonial', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
          <ul className="menu text-lg font-normal text-slategray">
                    <li>
                      <details>
                        <summary>Categories</summary>
                        <ul>
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
                                        <a>Bangaladesi (BD) Cotton</a>
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
                                        <a>Mulberry Printed Silk</a>
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
                                Home furnishing fabric
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
                        </ul>
                      </details>
                    </li>
                  </ul>
            <div className="mt-4"></div>
            {/* <button className="bg-white w-full text-kellygreen border border-semiblueviolet font-medium py-2 px-4 rounded">
              Log In
            </button> */}
            <button className="bg-semikellygreen w-full hover:bg-kellygreen hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
