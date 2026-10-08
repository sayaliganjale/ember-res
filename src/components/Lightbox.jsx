import { useEffect, useRef, useState } from "react";
import { Art } from "./ui.jsx";

export default function Lightbox({ items, index, onClose, onNav }) {
  const [vis, setVis] = useState(false);
  const closeRef = useRef(null);
  const it = items[index];

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVis(true));
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => { cancelAnimationFrame(raf); document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNav(1);
      else if (e.key === "ArrowLeft") onNav(-1);
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [onClose, onNav]);

  return (
    <div id="lb" className={`o ${vis ? "v" : ""}`} role="dialog" aria-modal="true" aria-label="Gallery viewer">
      <div className="top">
        <span aria-live="polite">0{index + 1} / 0{items.length}</span>
        <button ref={closeRef} onClick={onClose} aria-label="Close viewer">Close ✕</button>
      </div>
      <div className="fig">
        <Art key={index} c={it.art} img={it.img} className="in" />
      </div>
      <p className="cap">{it.cap}</p>
      <div className="nv">
        <button onClick={() => onNav(-1)} aria-label="Previous image">←</button>
        <button onClick={() => onNav(1)} aria-label="Next image">→</button>
      </div>
    </div>
  );
}
