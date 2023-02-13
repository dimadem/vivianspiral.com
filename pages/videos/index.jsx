import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Videos(params) {
  return (
    <NavBar>
      <div className="flex flex-col">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-[330px] aspect-video card  place-items-center m-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/o5WGk-DTe88"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-[330px] aspect-video card  place-items-center m-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MScHgmv_U0E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="divider "></div>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-[330px] aspect-video card  place-items-center m-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ln3Ihqp7AMg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-[330px] aspect-video card place-items-center m-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qgBPHZI7z9U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* //todo ADD FOOTER */}
    </NavBar>
  );
}
