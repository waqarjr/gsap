import { useEffect, useRef } from "react";
import gsap from "gsap";

export const TextFormating = () => {
  const textFormation = useRef();

  useEffect(() => {
    const heading = textFormation.current.children[0]; 
    const text = heading.textContent;
    let waqar = "";

    text.split("").forEach((char) => {
      waqar += `<span class="inline-block ">${char}</span>`;
    });

    heading.innerHTML = waqar;
    heading.style.display = "inline-block";
    const a = heading.querySelectorAll('span');
    gsap.fromTo(a,{
        y:20,
        opacity:0,
    },{
        y:0,
        duration:0.5,
        delay:0.5,
        opacity:1,
        stagger:0.3
    })
  },[]);

  return (<>
  <div ref={textFormation}
      className="h-screen bg-black flex items-center justify-center"
    >
      <h1 className="text-white text-7xl  [&>*]:hover:text-blue-500 [&>*]:transition [&>*]:duration-300 [&>*]:cursor-pointer ">
      Waqar-Ahmad
      </h1>
    </div>
  </>
  );
};

export default TextFormating;
