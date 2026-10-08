import { useState } from "react";
import { info, slots } from "../data/content.js";
import { Eyebrow, Rv, Split } from "./ui.jsx";

const empty = { n: "", e: "", d: "", t: "", g: "2 guests" };

function validate(v) {
  const er = {};
  if (v.n.trim().length < 2) er.n = "Please enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(v.e)) er.e = "Please enter a valid email address.";
  if (!v.d) er.d = "Choose a date.";
  else {
    const x = new Date(`${v.d}T00:00`), now = new Date();
    now.setHours(0, 0, 0, 0);
    if (x < now) er.d = "Please choose a future date.";
    else if ([1, 2].includes(x.getDay())) er.d = "We are closed Monday and Tuesday.";
  }
  if (!v.t) er.t = "Select a time.";
  return er;
}

function Field({ id, label, error, full, children }) {
  return (
    <div className={`fl ${full ? "f" : ""} ${error ? "bad" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      <small role={error ? "alert" : undefined}>{error}</small>
    </div>
  );
}

export default function Reservation() {
  const [v, setV] = useState(empty);
  const [touched, setTouched] = useState({});
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const errors = validate(v);
  const err = (k) => ((touched[k] || tried) && errors[k]) || "";
  const bind = (k) => ({
    id: k, name: k, value: v[k],
    onChange: (e) => setV({ ...v, [k]: e.target.value }),
    onBlur: () => setTouched({ ...touched, [k]: true }),
    "aria-invalid": !!err(k),
  });

  const submit = (e) => {
    e.preventDefault();
    setTried(true);
    const first = Object.keys(errors)[0];
    if (first) return document.getElementById(first)?.focus();
    setStatus("sending");
    setTimeout(() => setStatus("done"), 1300); // no backend yet — simulated request
  };

  const nice = v.d && new Date(`${v.d}T00:00`).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

  return (
    <section id="reserve" className="pad">
      <div className="wrap g">
        <div style={{ gridColumn: "1/6" }}>
          <Eyebrow style={{ color: "rgba(239,230,214,.8)" }}>Reservations</Eyebrow>
          <Split text={"Join us\n*by the fire.*"} style={{ fontSize: "clamp(3.4rem,9vw,8rem)" }} />
          <Rv className="body" style={{ marginTop: "2.5rem", color: "rgba(239,230,214,.88)" }}>
            <p>Tables open 30 days ahead. For parties of eight or more, call us directly.</p>
            <a className="serif lu" style={{ fontSize: "2rem", display: "inline-block", marginTop: "1rem" }} href={`tel:${info.tel}`}>{info.phone}</a>
          </Rv>
        </div>
        <div style={{ gridColumn: "7/13" }}>
          {status === "done" ? (
            <div id="ok" className="s" role="status" style={{ display: "block" }}>
              <svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" strokeWidth="1" /><path d="M15 27l8 8 14-16" strokeWidth="1.5" /></svg>
              <p className="serif" style={{ fontSize: "2.8rem", fontStyle: "italic", marginTop: "1.5rem" }}>Thank you, {v.n.trim().split(" ")[0]}.</p>
              <p style={{ marginTop: "1rem", color: "rgba(239,230,214,.85)" }}>
                We have your request for {v.g} on {nice} at {v.t}. A confirmation will arrive at {v.e} shortly.
              </p>
            </div>
          ) : (
            <form className="rf" noValidate onSubmit={submit}>
              <Field id="n" label="Full name" error={err("n")} full><input {...bind("n")} autoComplete="name" placeholder="As it appears on the booking" /></Field>
              <Field id="e" label="Email" error={err("e")} full><input {...bind("e")} type="email" autoComplete="email" placeholder="you@example.com" /></Field>
              <Field id="d" label="Date" error={err("d")}><input {...bind("d")} type="date" min={new Date().toLocaleDateString("en-CA")} /></Field>
              <Field id="t" label="Time" error={err("t")}>
                <select {...bind("t")}><option value="">Select a time</option>{slots.map((s) => <option key={s}>{s}</option>)}</select>
              </Field>
              <Field id="g" label="Guests" full>
                <select {...bind("g")}>{[1, 2, 3, 4, 5, 6, 7].map((n) => <option key={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}</select>
              </Field>
              <button className="sub" type="submit" disabled={status === "sending"}>
                <span>{status === "sending" ? "Reserving…" : "Request reservation →"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
