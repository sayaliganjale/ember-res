import { Art, Counter, Eyebrow, Rv, Split } from "./ui.jsx";

export default function Philosophy() {
  return (
    <section id="phil" className="pad">
      <div className="wrap g">
        <div className="t">
          <Eyebrow>Our Philosophy</Eyebrow>
          <Split text={"One flame,\n*infinite* restraint."} />
          <Rv className="body" d=".1s" style={{ marginTop: "3rem" }}>
            <p>EMBER has no gas line. Every plate is built on live fire — oak, cedar and binchotan — tended by hand from the first light of the morning prep to the last table.</p>
            <p>We work with a handful of small British farms and fisheries, cooking only what the day delivers. The menu is short, honest and changes as the season does.</p>
          </Rv>
          <Rv className="st" d=".2s">
            <div><Counter to={4} /><span>Fires burning</span></div>
            <div><Counter to={14} /><span>Partner farms</span></div>
            <div><Counter to={0} suffix="%" /><span>Gas used</span></div>
          </Rv>
        </div>
        <div className="im">
          <Art c="a1" p="-.06" img="/images/dish-scallop.jpg" />
          <Art c="a2" className="sm" img="/images/dish-ribeye.jpg" />
        </div>
      </div>
    </section>
  );
}
