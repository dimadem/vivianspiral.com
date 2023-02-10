import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Footer(params) {
  return (
    <footer className="flex flex-row justify-evenly p-5 w-full">
      <button>
        <BsFacebook size={40} />
      </button>
      <button>
        <BsInstagram size={40} />
      </button>
      <button>
        <BsYoutube size={40} />
      </button>
    </footer>
  );
}
