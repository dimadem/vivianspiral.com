import Footer from "./Footer";
import IconFrame from "./ui/IconFrame";
// https://tailwindui.com/components/application-ui/navigation/navbars
export default function MainMenu(params) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/aboutme">ABOUT ME</a>
          </li>
          <li>
            <a href="/images">IMAGES</a>
          </li>
          <li>
            <a href="/videos">VIDEOS</a>
          </li>
          <li>
            <a href="https://spiralcircusarts.bigcartel.com">LEARN</a>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Contact</h1>
        {/* <IconFrame icon={Email} />
        <IconFrame icon={WhatsApp} /> */}
      </div>
      <div>
        <h1>ACT KIT</h1>
        {/* <IconFrame icon={ACTKIT} /> */}
      </div>
      <Footer />
    </div>
  );
}
