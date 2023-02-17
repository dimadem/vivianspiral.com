import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Videos(params) {
  return (
    <NavBar>
      <div className="flex flex-col">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-auto aspect-video card  place-items-center m-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/g27irY7PY2M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-auto aspect-video card  place-items-center m-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MScHgmv_U0E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="divider "></div>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-auto aspect-video card  place-items-center m-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ln3Ihqp7AMg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-auto aspect-video card place-items-center m-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sLiaGfAnpWE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </NavBar>
  );
}
