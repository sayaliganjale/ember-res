import { useEffect, useRef } from "react";
import { Btn } from "./ui.jsx";

export default function Hero() {
  const cv = useRef(null);
  const hc = useRef(null);

  useEffect(() => {
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      const y = scrollY;
      if (RM || y > innerHeight * 1.2) return;
      hc.current.style.transform = `translateY(${y * 0.22}px)`;
      hc.current.style.opacity = Math.max(0, 1 - y / (innerHeight * 0.75));
    };
    addEventListener("scroll", onScroll, { passive: true });

    const c = cv.current, x = c.getContext("2d");
    let W, H, raf;
    const rs = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; };
    rs();
    addEventListener("resize", rs);
    const P = Array.from({ length: 60 }, () => ({
      x: Math.random(), y: Math.random(), s: Math.random() * 1.8 + 0.6, v: Math.random() * 0.0007 + 0.0002, d: Math.random() * 6,
    }));
    const f = (t) => {
      x.clearRect(0, 0, W, H);
      P.forEach((p) => {
        p.y -= p.v * 16;
        if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
        const px = (p.x + Math.sin(t / 1800 + p.d) * 0.018) * W, py = p.y * H;
        const a = Math.min(1, p.y * 1.5) * 0.85;
        const g = x.createRadialGradient(px, py, 0, px, py, p.s * 5);
        g.addColorStop(0, `rgba(255,196,110,${a})`);
        g.addColorStop(1, "rgba(224,117,42,0)");
        x.fillStyle = g; x.beginPath(); x.arc(px, py, p.s * 5, 0, 7); x.fill();
      });
      raf = requestAnimationFrame(f);
    };
    if (!RM) raf = requestAnimationFrame(f);
    return () => { cancelAnimationFrame(raf); removeEventListener("scroll", onScroll); removeEventListener("resize", rs); };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hbg" />
      <canvas id="emb" ref={cv} aria-hidden="true" />
      <div className="hc" ref={hc}>
        <p className="ey">Fire Kitchen · Shoreditch, London</p>
        <h1>EMBER</h1>
        <p className="tg">Everything begins with fire. Nothing is hurried.</p>
        <div className="ct">
          <Btn href="#reserve">Reserve a table</Btn>
          <Btn href="#menu" variant="b2" arrow={false}>Explore the menu</Btn>
        </div>
      </div>
      <div className="hm"><span>51.5246° N</span><div>Scroll<i /></div><span>Wed — Sun · From 6 pm</span></div>
    </section>
  );
}
