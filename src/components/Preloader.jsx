import { useEffect, useRef } from "react";

export default function Preloader() {
  const ref = useRef(null);
  useEffect(() => {
    const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => {
      ref.current?.classList.add("out");
      document.body.classList.add("ready");
    }, RM ? 0 : 1900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div id="pre" ref={ref} aria-hidden="true">
      <div><b>EMBER</b><i /></div>
    </div>
  );
}
