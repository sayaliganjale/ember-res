import { hours, info } from "../data/content.js";
import { Btn, Eyebrow, Rv, Split } from "./ui.jsx";

const label = { display: "block", fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".6rem" };

export default function Visit() {
  return (
    <section id="visit" className="pad">
      <div className="wrap g">
        <div style={{ gridColumn: "1/6" }}>
          <Eyebrow>Visit Us</Eyebrow>
          <Split text={"Find\n*EMBER*"} />
          <Rv style={{ marginTop: "3rem" }}>
            <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr 1fr", fontSize: ".92rem", color: "rgba(239,230,214,.7)", marginBottom: "2.5rem" }}>
              <address style={{ fontStyle: "normal" }}>
                <small style={label}>Address</small>{info.address[0]}<br />{info.address[1]}
              </address>
              <div>
                <small style={label}>Contact</small>
                <a className="lu" href={`tel:${info.tel}`}>{info.phone}</a><br />
                <a className="lu" href={`mailto:${info.email}`}>{info.email}</a>
              </div>
            </div>
            <ul className="hr">{hours.map(([d, t]) => <li key={d}><span>{d}</span><span>{t}</span></li>)}</ul>
            <Btn href={info.directions} target="_blank" rel="noreferrer" style={{ marginTop: "2.5rem" }}>Get directions</Btn>
          </Rv>
        </div>
        <div style={{ gridColumn: "7/13" }}>
          <div className="map" role="img" aria-label="Stylised map marking EMBER in Shoreditch, London">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <g stroke="#c4a05a" strokeWidth=".7" fill="none" opacity=".7">
                <path d="M0 110 L400 150M0 250 L400 210M120 0 L160 400M280 0 L240 400M0 330 L400 290M60 0 L330 400" />
                <circle cx="200" cy="200" r="90" strokeDasharray="2 5" />
              </g>
            </svg>
            <div className="pin">
              <i />
              <p className="serif" style={{ fontSize: "2rem" }}>EMBER</p>
              <p style={{ fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(239,230,214,.6)" }}>Shoreditch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
