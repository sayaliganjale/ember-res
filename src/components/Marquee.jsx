import { marquee } from "../data/content.js";

export default function Marquee() {
  const words = [...marquee, ...marquee];
  return (
    <div className="mq" aria-hidden="true">
      <div>{words.map((w, i) => <span key={i}>{w}</span>)}</div>
    </div>
  );
}
