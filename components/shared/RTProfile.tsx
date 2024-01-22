import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const RTProfile = () => {
    const router = useRouter();
    
    const onSignOutHandler = () => {
        localStorage.removeItem("signedrt");
        localStorage.removeItem("myorder");
        router.push("/");
    };

  return (
    <>
      <div className="dropdown dropdown-end bg-transparent mr-2">
        <div
          tabIndex={0}
          role="button"
          className="btn shadow-none m-1 p-0 w-16 bg-transparent border-0 hover:bg-transparent"
          style={{ height: "1.5rem", minHeight: "1.5rem" }}
        >
          <Image
            alt="wholesaler profile"
            height={100}
            width={100}
            src="/assets/rtpic.png"
            className='mask mask-circle'
          />
        </div>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] card card-compact w-56 shadow bg-white text-primary-content"
        >
          <div className="px-4 py-3 border-b border-gray-300">
            <span className="block text-sm text-black">
              Rushil Bansal
            </span>
            <span className="block text-sm  text-darkgray truncate ">
              rrRushil@gmail.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black hover:bg-grey500"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black hover:bg-grey500"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black hover:bg-grey500"
              >
                Orders
              </a>
            </li>
            <li>
              <a
                onClick={onSignOutHandler}
                className="block px-4 py-2 text-sm text-black hover:bg-grey500"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default RTProfile;
