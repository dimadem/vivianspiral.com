import Image from "next/image";
import logo from "public/logo.png";

export default function Logo(params) {
  return (
    <div className="logo">
      <Image src={logo} alt="Logo" width={180} height={84} />
    </div>
  );
}
