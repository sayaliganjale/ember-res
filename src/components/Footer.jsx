import { info, nav } from "../data/content.js";
import { Btn } from "./ui.jsx";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "flex-end", padding: "5rem 0 3rem", borderBottom: "1px solid rgba(239,230,214,.1)" }}>
          <h2 style={{ fontSize: "clamp(2.4rem,6vw,4.8rem)", maxWidth: "34rem" }}>Reserve your <em>evening</em> with us.</h2>
          <Btn href="#reserve">Reserve a table</Btn>
        </div>
        <div className="fc">
          <div><h4>Explore</h4>{nav.slice(0, 4).map(([id, l]) => <a key={id} className="lu" href={`#${id}`}>{l}</a>)}</div>
          <div><h4>Contact</h4><a href={`tel:${info.tel}`}>{info.phone}</a><a href={`mailto:${info.email}`}>{info.email}</a></div>
          <div><h4>Address</h4><address>{info.address[0]}<br />{info.address[1]}</address></div>
          <div><h4>Follow</h4><a className="lu" href="#top">Instagram — {info.instagram}</a></div>
        </div>
      </div>
      <div className="big" aria-hidden="true"><p>EMBER</p></div>
      <div className="wrap">
        <div className="cp"><span>© {new Date().getFullYear()} EMBER — Fire Kitchen</span><span>Privacy · Terms</span></div>
      </div>
    </footer>
  );
}
