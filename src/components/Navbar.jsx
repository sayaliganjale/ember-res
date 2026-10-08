import { useEffect, useState } from "react";
import { info, nav } from "../data/content.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(scrollY > 60);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k);
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open]);

  const links = [...nav, ["reserve", "Reserve"]];

  return (
    <>
      <header id="hd" className={scrolled ? "s" : ""}>
        <div className="wrap">
          <a className="logo" href="#top" aria-label="EMBER, back to top">EMBER</a>
          <nav className="d" aria-label="Primary">
            {nav.map(([id, label]) => <a key={id} className="lu" href={`#${id}`}>{label}</a>)}
            <a className="r" href="#reserve">Reserve</a>
          </nav>
          <button id="bg" className={open ? "o" : ""} aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open} aria-controls="mm" onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </header>

      <div id="mm" className={open ? "o" : ""} role="dialog" aria-modal="true" aria-label="Menu">
        <nav aria-label="Mobile">
          {links.map(([id, label], i) => (
            <a key={id} className="l" href={`#${id}`} style={{ "--i": i }} onClick={() => setOpen(false)}>
              <span>{id === "reserve" ? <em><small>0{i + 1}</small>{label}</em> : <><small>0{i + 1}</small>{label}</>}</span>
            </a>
          ))}
        </nav>
        <div style={{ fontSize: ".9rem", color: "rgba(239,230,214,.65)", borderTop: "1px solid rgba(239,230,214,.12)", paddingTop: "1.5rem" }}>
          {info.address[0]}<br />{info.address[1]}<br />
          <a href={`tel:${info.tel}`} className="lu">{info.phone}</a>
        </div>
      </div>
    </>
  );
}
