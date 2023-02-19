import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import { BsEnvelope, BsWhatsapp, BsCloudDownload } from "react-icons/bs";
import logo from "public/logo.webp";
import { navigation } from "@/public/data";

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
                alt="Vivian Spiral Logo"
              />
            </Link>
          </div>
          <div className="flex-none lg:hidden navbar-end">
            <label htmlFor="my-drawer-3" className="btn btn-square">
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
              <div className="btn-group">
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
                {/* act kit */}
                <div className="tooltip tooltip-bottom" data-tip="Act Kit">
                  <Link
                    href="https://www.dropbox.com/sh/4o63ozvxwno8iab/AADM2JSfb2dlTRPkG0j2DMKAa?dl=0"
                    target="_blank"
                    className="btn btn-ghost"
                  >
                    <BsCloudDownload size={25} />
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
          <div className="divider w-1/4 ml-auto"></div>
          {/* CONTACT */}
          <div className="p-2 space-y-2">
            <h3 className="sm:hidden text-focus-600">CONTACT</h3>
            {/* EMAIL */}
            <Link
              href="mailto:info@vivianspiral.com"
              target="_blank"
              className="flex justify-end p-2 "
            >
              <BsEnvelope size={35} />
            </Link>
            {/* WHATSAPP */}
            <Link
              href="https://wa.me/15103094860"
              target="_blank"
              className="flex justify-end p-2"
            >
              <BsWhatsapp size={30} />
            </Link>
          </div>
          <div className="divider w-1/4 ml-auto"></div>
          {/* ACT KIT */}
          <div className="p-2 space-y-2">
            <h3 className="text-focus-600 sm:hidden">ACT KIT</h3>
            <Link
              href="https://www.dropbox.com/sh/4o63ozvxwno8iab/AADM2JSfb2dlTRPkG0j2DMKAa?dl=0"
              target="_blank"
              className="flex justify-end p-2"
            >
              <BsCloudDownload size={30} />
            </Link>
          </div>
          <div className="mt-auto w-full">
            <Footer />
          </div>
        </ul>
      </div>
    </div>
  );
}
