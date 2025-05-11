import { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/src/ScrollTrigger";

export const Scrolling = ()=>{

    gsap.registerPlugin(ScrollTrigger);

const page1 = useRef();
const page2 = useRef();
const page3 = useRef();

useEffect(()=>{
    const waqar = page2.current.children[0];
    const Ahmad = page2.current.children[1];

gsap.to(page1.current.children[0],{
    duration:1,
    rotate:360,
})
// gsap.to(waqar,{
//     duration:2,
//     delay:1,
//     scrollTrigger:{
//         trigger:page2.current,
//         scroll:"body",
//         markers:true,
//         start:"top 20%",
//     },
//     rotate:360,
//     backgroundColor:"blue"
// })
gsap.fromTo(waqar,{
    x:400,
    opacity:0,
    },{
    x:0,
    opacity:1,
    duration:1.5,  
    scrollTrigger:{
        trigger:waqar,
        markers:true,
        scroll:"body",
        start:"top 30%",
        scrub:true
    }  
})
gsap.fromTo(Ahmad,{
    x:-400,
    opacity:0,
},{
    x:0,
    opacity:1,
    duration:1.5,    
    scrollTrigger:{
        trigger:Ahmad,
        markers:true,
        scroll:"body",
        start:"top 30%",
        scrub:true
    }
})

gsap.to(page3.current.children[0],{
    duration:1,
    rotate:360,
})

},[])

return(<>

<div ref={page1} className="w-screen h-screen bg-blue-900 flex items-center justify-center" >
    <div className="size-[200px] bg-red-500  ">
    </div>
</div>

<div ref={page2} className="w-screen h-screen bg-emerald-600 flex flex-col items-center justify-center gap-20">
  <h1 className="text-center py-4 px-8 bg-yellow-200 text-2xl">Waqar</h1>
  <h2 className="ext-center py-4 px-8 bg-yellow-200 text-2xl">Ahmad</h2>
</div>


<div ref={page3} className="w-screen h-screen bg-amber-400 flex items-center justify-center" >
    <div className="size-[200px] bg-red-500 ">
    </div>
</div>

</>)

}
export default Scrolling;