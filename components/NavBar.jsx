import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BsList,
  BsX,
  BsEnvelope,
  BsWhatsapp,
  BsCloudDownload,
} from "react-icons/bs";
import Footer from "./Footer";
import logo from "public/logo.png";
import Image from "next/image";
import { Navbar, Tooltip } from "flowbite-react";

export default function NavBar(params) {
  const navigation = [
    { name: "ABOUT ME", href: "aboutme", current: false },
    { name: "IMAGES", href: "#", current: false },
    { name: "VIDEOS", href: "#", current: false },
    { name: "LEARN", href: "#", current: false },
  ];

  return (
    <Navbar
      fluid={true}
      rounded={false}
      className="relative bg-transparent z-30"
    >
      <Navbar.Brand href="/">
        <Image
          src={logo}
          className="mr-3 h-6 sm:h-9 w-fit"
          alt="Vivian Spiral Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className="bg-transparent hover:bg-transparent rounded-none hover:rounded-none sm:hover:rounded-none" />
      <Navbar.Collapse className=" text-right font-spectralHeader text-xl hover:text-white md:hover:text-white">
        {navigation.map((item, index) => (
          <Navbar.Link
            id={index}
            href={item.href}
            active={item.current}
            className="text-gray-200 md:text-gray-200 text-xl  hover:text-white md:hover:text-white"
          >
            {item.name}
          </Navbar.Link>
        ))}

        {/* CONTACT */}
        <h3 className="p-2 sm:hidden">CONTACT</h3>
        <Navbar.Link
          id={"mail"}
          href="email"
          className="text-gray-200 md:text-gray-200  hover:text-white md:hover:text-white"
        >
          <Tooltip content="e-mail" style="light" arrow="false">
            <BsEnvelope size={35} />
          </Tooltip>
        </Navbar.Link>
        {/* WHATSAPP */}
        <Navbar.Link
          id={"whatsapp"}
          href="whatsapp"
          className="text-gray-200 md:text-gray-200  hover:text-white md:hover:text-white"
        >
          <Tooltip content="WhatsApp" style="light" arrow="false">
            <BsWhatsapp size={30} />
          </Tooltip>
        </Navbar.Link>

        {/* ACT KIT */}
        <h3 className="p-2 sm:hidden">ACT KIT</h3>
        <Navbar.Link
          id={"actkit"}
          href="actkit"
          className="text-gray-200 md:text-gray-200  hover:text-white md:hover:text-white"
        >
          <Tooltip content="Act Kit" style="light" arrow="false">
            <BsCloudDownload size={30} />
          </Tooltip>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
