import { BsEnvelope, BsWhatsapp, BsCloudDownload } from "react-icons/bs";
import logo from "public/logo.png";
import Image from "next/image";
import { Navbar, Tooltip } from "flowbite-react";

export default function NavBar(params) {
  const navigation = [
    { name: "ABOUT ME", href: "/aboutme", current: false, target: "" },
    { name: "IMAGES", href: "/images", current: false, target: "" },
    { name: "VIDEOS", href: "/videos", current: false, target: "" },
    {
      name: "LEARN",
      href: "https://spiralcircusarts.bigcartel.com/",
      current: false,
      target: "_blank",
    },
  ];

  return (
    <Navbar fluid={true} rounded={false} className="relative bg-transparent">
      <Navbar.Brand href="/">
        <Image
          src={logo}
          className="mr-3 h-9 sm:h-9 w-fit"
          alt="Vivian Spiral Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className="bg-transparent hover:bg-transparent rounded-none hover:rounded-none sm:hover:rounded-none" />
      <Navbar.Collapse className="text-right font-spectralHeader text-xl hover:text-white md:hover:text-white">
        {navigation.map((item, index) => (
          <Navbar.Link
            id={index}
            key={index}
            href={item.href}
            active={item.current}
            target={item.target}
            className="text-primaty md:text-gray-200 text-xl  hover:text-white md:hover:text-white"
          >
            {item.name}
          </Navbar.Link>
        ))}

        {/* CONTACT */}
        <h3 className="p-2 sm:hidden pt-6">CONTACT</h3>
        <Navbar.Link
          id="mail"
          href="email"
          className="text-gray-200 md:text-gray-200  hover:text-white md:hover:text-white flex justify-end"
        >
          <Tooltip content="e-mail" style="light" arrow="false">
            <BsEnvelope size={35} />
          </Tooltip>
        </Navbar.Link>
        {/* WHATSAPP */}
        <Navbar.Link
          id="whatsapp"
          href="https://wa.me/15103094860"
          className="text-gray-200 md:text-gray-200  hover:text-white md:hover:text-white flex justify-end"
        >
          <Tooltip content="WhatsApp" style="light" arrow="false">
            <BsWhatsapp size={30} />
          </Tooltip>
        </Navbar.Link>

        {/* ACT KIT */}
        <h3 className="p-2 sm:hidden pt-6">ACT KIT</h3>
        <Navbar.Link
          id="actkit"
          href="actkit"
          className="text-gray-200 md:text-gray-200 hover:text-white md:hover:text-white flex justify-end"
        >
          <Tooltip content="Act_Kit" style="light" arrow="false">
            <BsCloudDownload size={30} />
          </Tooltip>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
