import { Counter, Eyebrow, Rv, Split } from "./ui.jsx";

export default function Story() {
  return (
    <section id="story">
      <div className="bg" data-p="-.1" />
      <span className="vl" />
      <div className="wrap">
        <Eyebrow>Our Story</Eyebrow>
        <Split text={"Learned at the hearth,\n*refined* in *London.*"} style={{ maxWidth: "56rem" }} />
        <Rv className="body" d=".1s" style={{ margin: "3.5rem 0 0 auto", color: "rgba(239,230,214,.82)" }}>
          <p>Chef Elena Marsh spent fifteen years cooking over open flame — from Basque grill houses to a hillside kitchen in Patagonia — before opening EMBER in a former Shoreditch rope works.</p>
          <p>The room is built of blackened oak and hand-poured concrete. The only thing that is never negotiated is the fire.</p>
        </Rv>
        <Rv className="sg">
          <div><Counter to={15} /><span>Years at the fire</span></div>
          <div><Counter to={3} /><span>Continents</span></div>
          <div><Counter to={1} /><span>Open hearth</span></div>
        </Rv>
      </div>
    </section>
  );
}
