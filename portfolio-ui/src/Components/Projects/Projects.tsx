import Card from "../Card/Card";


import AlsBrowserLandingPage from "../../images/cards/als-browser-landing-page.png"

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-gray-500 capitalize">Projects</h3>
      <div className="flex w-full justify-between">
        <Card img={AlsBrowserLandingPage} title={"ALS Browser"} subtitle={"A browser made to ease browsing the internet for people with ALS."} />
      </div>
    </div>
  );
}
