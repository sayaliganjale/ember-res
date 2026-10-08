import { useCallback, useEffect, useState } from "react";
import { reviews } from "../data/content.js";
import { Eyebrow } from "./ui.jsx";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);
  const n = reviews.length;

  const go = useCallback((k) => {
    setFade(true);
    setTimeout(() => { setI((k + n) % n); setFade(false); }, 500);
  }, [n]);

  useEffect(() => {
    const t = setInterval(() => go(i + 1), 8000);
    return () => clearInterval(t);
  }, [i, go]);

  return (
    <section className="pad" aria-roledescription="carousel" aria-label="Guest reviews">
      <div className="wrap">
        <div className="tq">
          <Eyebrow>Kind Words</Eyebrow>
          <figure id="tf" className={fade ? "x" : ""} aria-live="polite">
            <blockquote>{reviews[i][0]}</blockquote>
            <figcaption>{reviews[i][1]}</figcaption>
          </figure>
          <div className="tn">
            <div>
              {reviews.map((_, k) => (
                <button key={k} className={k === i ? "on" : ""} aria-label={`Show review ${k + 1}`} onClick={() => go(k)}>0{k + 1}</button>
              ))}
            </div>
            <div className="ar">
              <button aria-label="Previous review" onClick={() => go(i - 1)}>←</button>
              <button aria-label="Next review" onClick={() => go(i + 1)}>→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
