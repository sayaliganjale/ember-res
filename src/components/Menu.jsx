import { dishes } from "../data/content.js";
import DishCard from "./DishCard.jsx";
import { Eyebrow, Rv, Split } from "./ui.jsx";

export default function Menu() {
  return (
    <section id="menu" className="pad">
      <div className="wrap">
        <div className="g" style={{ alignItems: "end", marginBottom: "5rem" }}>
          <div style={{ gridColumn: "1/9" }}>
            <Eyebrow>Signature Plates</Eyebrow>
            <Split text={"Plates we are\n*known* for"} />
          </div>
          <Rv d=".2s" style={{ gridColumn: "10/13" }}>
            <p style={{ fontSize: ".92rem", color: "rgba(239,230,214,.6)", marginBottom: "1.4rem" }}>
              Four plates that never leave the menu. Everything else is up to the day.
            </p>
            <a className="lu" href="#reserve" style={{ fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase" }}>
              Taste them at the table →
            </a>
          </Rv>
        </div>
        <div className="dh">
          {dishes.map((dish, i) => <DishCard key={dish.n} dish={dish} d={i % 2 ? ".12s" : undefined} />)}
        </div>
      </div>
    </section>
  );
}
