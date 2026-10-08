import { Fragment, useEffect, useRef, useState } from "react";

export const Arrow = () => (
  <svg viewBox="0 0 20 12" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 6h18M13 1l5 5-5 5" /></svg>
);

export function Btn({ href, variant = "b1", arrow = true, children, ...rest }) {
  return (
    <a className={`btn ${variant}`} href={href} {...rest}>
      {children}
      {arrow && <Arrow />}
    </a>
  );
}

// Fade-up on scroll (observed by useSiteFx). `d` is an optional delay, e.g. ".2s".
export function Rv({ as: T = "div", d, className = "", style, ...rest }) {
  return <T className={`rv ${className}`} style={{ "--d": d, ...style }} {...rest} />;
}

export const Eyebrow = ({ children, style }) => (
  <Rv><p className="eb" style={style}>{children}</p></Rv>
);

// Image slot: gradient stand-in by default, real photo when `img` is set. Pass `p` for parallax.
export function Art({ c, img, p, className = "", children }) {
  const bg = img ? { backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined;
  return (
    <div className={`art ${c} ${className}`} data-p={p}>
      <b style={bg} />
      {children}
    </div>
  );
}

// Word-by-word masked heading. Use \n for line breaks and *asterisks* for italic gold words.
export function Split({ text, as: T = "h2", style }) {
  let n = 0;
  let em = false;
  const lines = text.split("\n").map((line, li) => (
    <Fragment key={li}>
      {li > 0 && <br />}
      {line.split(" ").map((tok, i) => {
        if (tok.startsWith("*")) em = true;
        const word = tok.replace(/\*/g, "");
        const isEm = em;
        if (tok.length > 1 && tok.endsWith("*")) em = false;
        return (
          <Fragment key={i}>
            {i > 0 && " "}
            <span className="w"><i style={{ "--i": n++ }}>{isEm ? <em>{word}</em> : word}</i></span>
          </Fragment>
        );
      })}
    </Fragment>
  ));
  return (
    <T className="split" style={style} aria-label={text.replace(/\*/g, "").replace(/\n/g, " ")}>
      <span aria-hidden="true">{lines}</span>
    </T>
  );
}

export function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (RM) return setN(to);
      const st = performance.now();
      const f = (t) => {
        const k = Math.min((t - st) / 2000, 1);
        setN(Math.round(to * (1 - (1 - k) ** 4)));
        if (k < 1) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <b ref={ref}>{n}{suffix}</b>;
}
