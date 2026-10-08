import { useState } from "react";
import { experiences } from "../data/content.js";
import { Art, Eyebrow, Rv, Split } from "./ui.jsx";

export default function Experience() {
  const [i, setI] = useState(0);
  return (
    <section id="exp" className="pad">
      <div className="wrap">
        <Eyebrow>The Dining Experience</Eyebrow>
        <Split text={"An evening,\n*composed.*"} style={{ marginBottom: "4rem" }} />
        <div className="ex">
          <Rv className="stage" aria-hidden="true">
            {experiences.map((e, k) => <Art key={e.t} c={e.art} img={e.img} className={k === i ? "on" : ""} />)}
            <span>0{i + 1}</span>
          </Rv>
          <ul>
            {experiences.map((e, k) => (
              <li key={e.t}>
                <button className={`ei ${k === i ? "on" : ""}`} aria-pressed={k === i}
                  onMouseEnter={() => setI(k)} onFocus={() => setI(k)} onClick={() => setI(k)}>
                  <div>
                    <small>0{k + 1}</small>
                    <div><h3>{e.t}</h3><p>{e.d}</p></div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
