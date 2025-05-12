import gsap from "gsap";
import { useRef, useEffect } from "react";
// Import ScrollTrigger correctly from the "gsap/ScrollTrigger" path
import {ScrollTrigger} from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Scrol = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    const section = sectionRef.current;
    const text = textRef.current;
    console.log(text);
    gsap.fromTo(
      text,
      { x: "60vw" },
      {
        x: "-60vw",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",      // when section top hits viewport top
          end: "+=1000",        // pin duration in pixels
          scrub: true,            // smooth scrubbing
          pin: true,              // pin the section
          anticipatePin: 1,       // prevents white flash
        },
      }
    );

    return () => {
      // Kill triggers on unmount
      // ScrollTrigger.getAll().forEach((t) => t.kill());
      
    };
  }, []);

  return (
    <>
      {/* First section */}
      <div className="w-screen h-screen bg-blue-900 flex items-center justify-center">
        <h2 className="text-white text-2xl">Scroll down</h2>
      </div>

      {/* Pinned animated section */}
      <section ref={sectionRef}
        className="w-screen h-screen bg-blue-200 flex items-center justify-center overflow-hidden relative">
        <h1 ref={textRef} className="text-[20vw] font-semibold whitespace-nowrap">
          Newton Byte by waqar
        </h1>
      </section>

      {/* Next section */}
      <div className="w-screen h-screen bg-pink-500 flex items-center justify-center">
        <div className="w-48 h-48 bg-red-500"></div>
      </div>
    </>
  );
};

export default Scrol;
