import "./Intro.css";
import Decoration from "../../images/icons/spirals-of-vines.png"

export default function Intro() {
  return (
    <div className="w-full mt-20 intro">
      <h1 className="w-3/5 mx-auto py-48">Hi! Feast your eyes on all my projects and decide whether I'm a good match for your business.</h1>
      <img src={Decoration} alt="" className="w-10 mx-auto" />
    </div>
  );
}
