import Image from "next/image";
import logo from "public/logo.png";

export default function Logo(params) {
  return (
    <div className="logo">
      <Image src={logo} alt="Logo" width={160} height={64} />
    </div>
  );
}
