import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { performances, actKit } from "@/public/data";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link";

export default function sphere_dance(params) {
  return (
    <NavBar>
      <div className="w-full h-fit p-2">
        <div className="w-full text-center lg:p-10 p-4">
          <h1 className="text-primary-focus">{performances[4].header}</h1>
          <p className="text-neutral-content normal-case">
            {performances[4].footer}
          </p>
        </div>
        <div className="carousel carousel-center rounded-box">
          {performances[4].images.map((image, index) => (
            <div key={index} className="carousel-item rounded-md">
              <Image
                priority
                src={image.url}
                alt="sphere-dance-image"
                width={image.width / 2}
                height={image.height / 2}
              />
            </div>
          ))}
        </div>

        <div className="md:p-10 lg:p-20 grid sm:grid-cols-2 grid-cols-1 gap-3 md:gap-3 lg:gap-5">
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center p-2">
              DESCRIPTION
            </h3>
            <p className="text-primary-focus font-montagaText">
              The ball rolls across Spiral&apos;s body as if it&apos;s
              magnetized, leaving your guests breathless. One moment it seems to
              magically float, the next it becomes a high-powered dance partner.
              <br />
              <br />
              Moving the sphere all over the body and creating beautiful shapes,
              this unique act is infused with dance, hand balance, and rhythmic
              gymnastics.
            </p>
          </div>
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center p-2">
              TECHNICAL INFORMATION
            </h3>
            <p className="text-primary-focus font-montagaText">
              Sphere dance is perfect for walkaround entertainment, particularly
              when space is at a minimum. UV Reactive, Acrylic (&apos;Crystal
              Ball&apos;), and Disco Mirror Ball versions available.
              <br />
              <br />
              Stage act requires a minimum of 3 x 3 meters/ 9&apos;x9&apos;
              feet.
              <br />
              <br />
              Performance surface should be smooth, level, and clean to
              facilitate hand balance and floorwork skills.
            </p>
          </div>
        </div>
        {/* act kit */}
        <div className="flex flex-row w-full justify-center">
          <div className="tooltip tooltip-bottom" data-tip="download Act Kit">
            <Link
              href={actKit[0].href}
              target="_blank"
              className="btn btn-ghost"
            >
              <BsCloudDownload size={25} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </NavBar>
  );
}
