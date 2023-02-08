import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BsList, BsXLg } from "react-icons/bs";
import Footer from "./Footer";
import IconFrame from "./ui/IconFrame";
// https://tailwindui.com/components/application-ui/navigation/navbars
export default function MainMenu(params) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="
                inline-flex 
                items-center 
                justify-center 
                rounded-md 
                p-2 
                text-gray-400 
                hover:bg-gray-700 
                hover:text-white 
                focus:outline-none 
                focus:ring-2 
                focus:ring-inset 
                focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <div className="block h-6 w-6" aria-hidden="true">
                      <BsXLg size={40} />
                    </div>
                  ) : (
                    <div className="block h-6 w-6" aria-hidden="true">
                      <BsList size={40} />
                    </div>
                  )}
                </Disclosure.Button>
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
