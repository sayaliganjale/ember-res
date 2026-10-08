import { useCallback, useRef, useState } from "react";
import { gallery } from "../data/content.js";
import Lightbox from "./Lightbox.jsx";
import { Art, Eyebrow, Split } from "./ui.jsx";

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const cur = useRef(null);
  const last = useRef(null);
  const nav = useCallback((d) => setOpen((i) => (i + d + gallery.length) % gallery.length), []);
  const close = useCallback(() => { setOpen(null); last.current?.focus(); }, []);
  const move = (e, s = 1) => {
    if (cur.current) cur.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(${s})`;
  };

  return (
    <section id="gal" className="pad">
      <div className="wrap">
        <div className="g" style={{ alignItems: "end", marginBottom: "5rem" }}>
          <div style={{ gridColumn: "1/9" }}>
            <Eyebrow>Gallery</Eyebrow>
            <Split text={"Moments from\nthe *hearth*"} />
          </div>
        </div>
        <div className="gg" onMouseMove={move} onMouseLeave={(e) => move(e, 0)}>
          {gallery.map((g, i) => (
            <button key={i} aria-label={`Open image ${i + 1}: ${g.cap}`}
              onClick={(e) => { last.current = e.currentTarget; setOpen(i); }}>
              <Art c={g.art} img={g.img} />
            </button>
          ))}
        </div>
      </div>
      <div id="cur" ref={cur} aria-hidden="true">View</div>
      {open !== null && <Lightbox items={gallery} index={open} onClose={close} onNav={nav} />}
    </section>
  );
}
