import Image from "next/image";
import Link from "next/link";
import { BsEnvelope, BsWhatsapp } from "react-icons/bs";
import logo from "public/logo.webp";
import { navigation } from "@/public/data";
import { performancePages } from "@/public/data";

export default function NavBar({ children }) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar">
          <div className="navbar-start p-2 mx-2">
            <Link href="/">
              <Image
                src={logo}
                width="180"
                height="84"
                priority
                className="h-9 sm:h-11 w-fit"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex-none lg:hidden navbar-end">
            <label htmlFor="my-drawer-3" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-2 hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              {/* PERFORMANCES */}
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost px-8 font-spectralHeader text-lg text-neutral-content"
                >
                  Performances
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-fit"
                >
                  {performancePages.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="font-montagaText w-full"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* NAVIGATION */}
              <div className="btn-group">
                {navigation.map((item, index) => (
                  <Link
                    className="btn btn-ghost px-8 font-spectralHeader text-lg"
                    href={item.href}
                    id={index}
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="btn-group mr-6">
                {/* email */}
                <div className="tooltip tooltip-bottom" data-tip="Send E-mail">
                  <Link
                    href="mailto:info@vivianspiral.com"
                    target="_blank"
                    className="btn btn-ghost"
                  >
                    <BsEnvelope size={25} />
                  </Link>
                </div>
                {/* whatsapp */}
                <div
                  className="tooltip tooltip-bottom"
                  data-tip="Write Message"
                >
                  <Link
                    href="https://wa.me/15103094860"
                    target="_blank"
                    className="btn btn-ghost"
                  >
                    <BsWhatsapp size={25} />
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        <div className="p-0 m-0">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu pt-16 w-80 items-end bg-neutral p-4">
          {/* <!-- Sidebar content here --> */}
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="p-2 font-spectralHeader text-xl"
            >
              {item.name}
            </Link>
          ))}
          <div className="divider w-1/4"></div>
          {/* PERFORMANCE PAGES */}
          <div className="flex flex-col justify-end">
            <h3 className="sm:hidden text-neutral-content p-2 text-right">
              PERFORMANCES
            </h3>
            {performancePages.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="font-spectralHeader text-right text-base p-2 uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="divider w-1/4"></div>
          {/* CONTACT */}
          <div className="">
            <h3 className="sm:hidden text-focus-400 p-2">CONTACT</h3>
            <div className="flex flex-row justify-end">
              {/* EMAIL */}
              <Link
                href="mailto:info@vivianspiral.com"
                target="_blank"
                className="p-2"
              >
                <BsEnvelope size={35} />
              </Link>
              {/* WHATSAPP */}
              <Link
                href="https://wa.me/15103094860"
                target="_blank"
                className="p-2"
              >
                <BsWhatsapp size={30} />
              </Link>
            </div>
          </div>
          <div className="divider w-1/4 ml-auto"></div>
        </ul>
      </div>
    </div>
  );
}
