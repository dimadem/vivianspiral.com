import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { testimonials } from "@/public/data";

export default function Aboutme(params) {
  const [loading, setIsLoading] = useState(true);

  // timer to simulate loading
  useEffect(() => {
    if (loading === true) {
      //THIRD TRANSITION + LOADING
      setTimeout(() => {
        setIsLoading(false);
      }, 22000);
    }
  }, [loading]);

  return <>{loading ? <Welcome /> : <AboutmeData />}</>;
}

const Welcome = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("hidden");
  const [third, setThird] = useState("hidden");

  useEffect(() => {
    setTimeout(() => {
      // FIRST TRANSITION
      setFirst("hidden");
      setSecond("");
    }, 7000);
    setTimeout(() => {
      // SECOND TRANSITION
      setSecond("hidden");
      setThird("");
    }, 18000);
  }, []);

  return (
    <div className="flex flex-col p-4 justify-center items-center h-screen ">
      <div
        className={`font-montagaText text-xl uppercase text-center lg:w-2/3 animate-fade-in-up ${first}`}
      >
        The lights go down and a hush falls over the crowd. A woman steps onto
        the stage and immediately you sense that something is different.
        <br /> This is an energy, a presence, that you&apos;ve never felt
        before.
      </div>
      <div
        className={`font-montagaText text-xl uppercase text-center lg:w-2/3 animate-fade-in-up ${second}`}
      >
        She starts to move and energy ripples out into the audience.
        <br />
        <br /> In the middle of a mind-blowingly complex trick, she meets your
        eyes and- in that instant- you get a jolt of power, a glimpse of the
        mystery, a knowing that what is happening here transcends any
        performance you&apos;ve seen before.
        <br />
        <br /> You look around and see that the whole room is captivated.
      </div>
      <div
        className={`font-montagaText text-xl uppercase text-center lg:w-2/3 animate-fade-in-up ${third}`}
      >
        This is magic unfolding, this is mystical movement, this is Spiral.
      </div>
    </div>
  );
};

const AboutmeData = () => {
  return (
    <>
      <NavBar>
        {/* WELCOME PRESENT */}
        {/* ABOUT ME */}
        <div className="h-fit w-full flex flex-col justify-around font-spectralHeader text-xl animate-fade-in-down p-2 lg:mt-4 mt-2">
          <div className="lg:ml-auto lg:mr-4 lg:w-4/5 lg:text-right h-fit sm:w-full text-justify">
            Emanating an electric presence for groups of 20 or 20,000, Spiral
            has wowed audiences all over the globe with her unique movement
            style and commanding stage presence. An artist on the cutting edge
            of circus and flow arts, Spiral is known worldwide for the fierce
            grace she brings to the stage. A powerhouse performer in a wide
            variety of disciplines, Spiral delivers elegant entertainment that
            leaves your guests amazed, inspired, and delighted; making your
            event absolutely unforgettable.
          </div>
          <div className="divider"></div>
          <div className="lg:mr-auto lg:ml-4 lg:w-1/2 lg:text-left h-fit sm:w-full text-justify">
            Stunning on stage, Spiral&apos;s unique and powerful acts create
            magic for any audience. As roaming, interactive entertainment,
            Spiral&apos;s skillfully wielded hoops,magic wand, and acrobatic
            sphere dance make for exciting, pop-up, improvised performance.
          </div>
          <div className="divider"></div>
          <div className="lg:ml-auto lg:mr-4 lg:w-3/5 lg:text-right h-fit sm:w-full text-justify">
            Her talents have mesmerized audiences at events for Cirque du
            Soleil, the New York Academy of Art, NASA, Google, The Human Rights
            Campaign, Polo Ralph Lauren, The American Medical Association,
            Celebrity Cruises, and at GOP Varieté Theaters throughout Germany.
          </div>
          <div className="divider"></div>
        </div>

        {/* TESTIMONIALS */}
        <div className="w-screen px-1 animate-fade-in-down">
          <div className="carousel w-full bg-primary-content rounded-lg">
            <div id="item1" className="carousel-item w-full items-start">
              <div className="p-4">
                <p className="font-montagaText text-lg p-1">
                  {testimonials[0].text}
                </p>
                <div className="p-2 text-right">
                  <h6 className="text-primary-focus">
                    {testimonials[0].company}
                  </h6>
                  <p className="text-primary-focus text-xs sm:text-sm uppercase font-spectralHeader">
                    {testimonials[0].autor}
                  </p>
                </div>
              </div>
            </div>
            <div id="item2" className="carousel-item w-full items-center">
              <div className="p-4">
                <p className="font-montagaText text-lg p-1">
                  {testimonials[1].text}
                </p>
                <div className="p-2 text-right">
                  <h6 className="text-primary-focus">
                    {testimonials[1].company}
                  </h6>
                  <p className="text-primary-focus text-xs sm:text-sm uppercase font-spectralHeader">
                    {testimonials[1].autor}
                  </p>
                </div>
              </div>
            </div>
            <div id="item3" className="carousel-item w-full items-center">
              <div className="p-4">
                <p className="font-montagaText text-lg p-1">
                  {testimonials[2].text}
                </p>
                <div className="p-2 text-right">
                  <h6 className="text-primary-focus">
                    {testimonials[2].company}
                  </h6>
                  <p className="text-primary-focus text-xs sm:text-sm uppercase font-spectralHeader">
                    {testimonials[2].autor}
                  </p>
                </div>
              </div>
            </div>
            {/* <div id="item4" className="carousel-item w-full items-center">
          <div className="p-4">
            <p className="font-montagaText text-base p-1">
              {testimonials[3].text}
            </p>
            <div className="p-2 text-right">
              <h6 className="text-primary-focus">
                {testimonials[3].company}
              </h6>
                              <p className="text-primary-focus text-xs sm:text-sm uppercase font-spectralHeader">

              {testimonials[3].autor}</p>
            </div>
          </div>
        </div> */}
            <div id="item5" className="carousel-item w-full items-center">
              <div className="p-4">
                <p className="font-montagaText text-lg p-1">
                  {testimonials[4].text}
                </p>
                <div className="p-2 text-right">
                  <h6 className="text-primary-focus">
                    {testimonials[4].company}
                  </h6>
                  <p className="text-primary-focus text-xs sm:text-sm uppercase font-spectralHeader">
                    {testimonials[4].autor}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
            <a href="#item5" className="btn btn-xs">
              5
            </a>
          </div>
        </div>
        <Footer />
      </NavBar>
    </>
  );
};
