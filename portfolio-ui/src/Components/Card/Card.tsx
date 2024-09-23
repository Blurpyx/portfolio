import "./Card.css";

export default function Card({
  img,
  title,
  subtitle,
}: {
  img: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card w-[33.33%]">
      <img src={img} alt="" className="" />
      <h1 className="text-center title">{title}</h1>
      <h2 className="text-center text-gray-500 subtitle">{subtitle}</h2>
    </div>
  );
}
