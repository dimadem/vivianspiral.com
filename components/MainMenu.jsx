import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BsList, BsX } from "react-icons/bs";
import Footer from "./Footer";
import IconFrame from "./ui/IconFrame";
// https://tailwindui.com/components/application-ui/navigation/navbars
export default function MainMenu(params) {
  const navigation = [
    { name: "ABOUT ME", href: "aboutme", current: true },
    { name: "IMAGES", href: "#", current: false },
    { name: "VIDEOS", href: "#", current: false },
    { name: "LEARN", href: "#", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-fit justify-center">
              <div className="flex sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="
                flex
                w-fit
                h-fit 
                p-2"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <div className="block h-6 w-6" aria-hidden="true">
                      <BsX size={40} />
                    </div>
                  ) : (
                    <div className="block h-6 w-6" aria-hidden="true">
                      <BsList size={40} />
                    </div>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* navigation block on big screen */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

// {/* <div className="flex flex-row space-x-8 items-center">
//     <nav>
//       <ul className="flex flex-row space-x-3 text-xl font-spectralHeader">
//         <li>
//           <a href="/aboutme">ABOUT ME</a>
//         </li>
//         <li>
//           <a href="/images">IMAGES</a>
//         </li>
//         <li>
//           <a href="/videos">VIDEOS</a>
//         </li>
//         <li>
//           <a href="https://spiralcircusarts.bigcartel.com">LEARN</a>
//         </li>
//       </ul>
//     </nav>
//     <div className="flex flex-row">
//       <h1>Contact</h1>
//       {/* <IconFrame icon={Email} />
//       <IconFrame icon={WhatsApp} /> */}
//       </div>
//       <div className="flex flex-row">
//         <h1>ACT KIT</h1>
//         {/* <IconFrame icon={ACTKIT} /> */}
//       </div>
//       {/* <Footer /> */}
