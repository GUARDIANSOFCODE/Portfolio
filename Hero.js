import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, { opacity: 0, y: -50, duration: 1 });
  }, []);

  return (
    <section ref={heroRef} className="text-center p-10">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600">Building with passion and precision.</p>
    </section>
  );
}
