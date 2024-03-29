import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import logo from "../public/netart_cube_logo.svg";
import Image from "next/image";

export default function Footer(params) {
  return (
    <footer className="footer flex flex-col items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Vivian Spiral © 2023 - All rights reserved</p>
      </div>

      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mt-2">
        <Link href="https://www.facebook.com/vivianspiral" target="_blank">
          <BsFacebook size={25} />
        </Link>
        <Link href="https://www.instagram.com/vivianspiral" target="_blank">
          <BsInstagram size={25} />
        </Link>
        <Link href="https://www.youtube.com/@spiraldancer" target="_blank">
          <BsYoutube size={25} />
        </Link>
      </div>

      <div className="items-center grid-flow-col">
        <p>made by</p>
        <Link href="https://www.netart.live" target="_blank">
          <Image
            className="invert"
            src={logo}
            alt="netart"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </footer>
  );
}
