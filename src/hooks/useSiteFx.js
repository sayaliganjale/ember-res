import { useEffect } from "react";

// Site-wide scroll effects: reveal-on-scroll, progress bar and image parallax.
export default function useSiteFx() {
  useEffect(() => {
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".rv,.split,.art,.vl,.map,.big,.eb").forEach((el) => io.observe(el));

    const prog = document.getElementById("prog");
    const items = [...document.querySelectorAll("[data-p]")];
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      prog.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      if (RM) return;
      items.forEach((p) => {
        const r = p.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        const t = p.classList.contains("art") ? p.firstElementChild : p;
        t.style.transform = `translateY(${(r.top + r.height / 2 - innerHeight / 2) * parseFloat(p.dataset.p)}px)`;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { io.disconnect(); removeEventListener("scroll", onScroll); };
  }, []);
}
