import { useState,useEffect, useRef } from "react";
import gsap from "gsap";

export const Svg = ()=>{

    const string = useRef();
    const start =  "M 20 150 Q 640 150 1240 150";   
    const [position , setPosition] = useState(start);    
    const onEnter = (e)=>{
        const rect = string.current.getBoundingClientRect();
        console.log(rect);
        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;
        const initinal =  `M 20 150 Q ${relativeX} ${relativeY} 1240 150`;
        setPosition(initinal);
    };
    useEffect(()=>{
       const path = string.current.children[0];
        gsap.to(path, {
        attr: {
            d: position,
            },
            duration: 1.5,
            ease: "elastic.out(1, 0.2)",
        });

    },[position])

    const onLeave = ()=>{
        setPosition(start);
    }   
    
    

return(<>
<div  className="w-screen h-screen flex items-center justify-center  bg-black" >
    <svg ref={string} onMouseMove={(e)=>{onEnter(e)}} onMouseLeave={()=>{onLeave()}} className="w-7xl mx-auto h-[350px] ">
        <path d="M 20 150 Q 640 100 1240 150"  strokeWidth="4" stroke="white" fill="transparent"  />
    </svg>
</div>
</>)

}
export default Svg;