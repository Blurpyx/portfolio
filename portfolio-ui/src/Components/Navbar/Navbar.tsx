import "./Navbar.css";
import LinkedIn from "../../images/icons/linkedin.png";
import Facebook from "../../images/icons/facebook.png";
import Instagram from "../../images/icons/instagram.png";
import Twitter from "../../images/icons/twitter.png";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 h-20">
      <div className="flex grow h-full border-b border-gray-200">
        <a href="/" className="ml-8 mr-10">
          <h1 className="leading-[80px]">Portfolio</h1>
        </a>
        <span className="flex grow leading-[80px]">
          <span className="px-10 border-x">
            <span>Tytgat Tommy</span>
          </span>
          <ul className="flex justify-between grow px-10 border-r">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact" className="button">Reach out</a>
            </li>
          </ul>
          <ul className="flex px-10 items-center">
            <li>
              <a
                href="https://www.linkedin.com/in/tytgat-t/"
                target="blank"
              >
                <img src={LinkedIn} alt="LinkedIn" className="w-5 mx-2"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100009888813009"
                target="blank"
              >
                <img src={Facebook} alt="Facebook" className="w-6 mx-1"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tommytytgat/"
                target="blank"
              >
                <img src={Instagram} alt="Instagram" className="w-4 mx-2"/>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/TtTytgat"
                target="blank"
              >
                <img src={Twitter} alt="Twitter" className="w-4 mx-2"/>
              </a>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
}
