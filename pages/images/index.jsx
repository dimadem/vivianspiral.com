import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Accordion, Carousel } from "flowbite-react";
import { performances } from "../../public/performances.js";
import Image from "next/image";
import { HiOutlineArrowCircleDown } from "react-icons/hi";

export default function Images(params) {
  return (
    <>
      <Header />
      {/* <div className="h-[760px] bg-gray-200 w-full"> */}
      <Accordion
        arrowIcon={HiOutlineArrowCircleDown}
        collapseAll={true}
        alwaysOpen={true}
        flush={true}
      >
        {performances.map((performance, index) => (
          <Accordion.Panel key={index} className="h-[600px]">
            <Accordion.Title className="text-primary">
              {performance.header}
            </Accordion.Title>
            <Accordion.Content className="h-[600px]">
              <div className="h-[540px]">
                <Carousel>
                  {performance.images.map((image, index) => (
                    <div
                      key={index}
                      className="flex justify-center w-full h-fit"
                    >
                      <Image src={image.url} alt={`image + ${index}`} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
      {/* </div> */}
      <Footer />
    </>
  );
}
