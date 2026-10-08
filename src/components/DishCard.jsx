import { Art, Rv } from "./ui.jsx";

export default function DishCard({ dish, d }) {
  return (
    <Rv as="a" className="dish" href="#reserve" d={d}>
      <Art c={dish.art} img={dish.img}>
        <span className="n">{dish.n}</span>
        <span className="dv">Discover →</span>
      </Art>
      <div className="h"><h3>{dish.name}</h3><span>{dish.price}</span></div>
      <p>{dish.note}</p>
    </Rv>
  );
}
