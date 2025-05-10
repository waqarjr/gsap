import { useEffect, useRef } from "react";
import gsap from "gsap";

export const First = ()=>{

    const box = useRef()
    const box1 = useRef()
    const heading = useRef();    
    const repeat = useRef();
    const timeline =  useRef();

    useEffect(()=>{
    const alpha =heading.current.querySelectorAll("h1");
    // const alpha = heading.current.querySelector(".h1");
    // const alpha = heading.current.children[1];
    const div1 = timeline.current.children[0];
    const div2 = timeline.current.children[1];
    const div3 = timeline.current.children[2];

    // gsap.from(box1.current,{
    //     duration: 2,
    //     x:400,
    //     delay: 1,
    //     rotate:360,
    //     borderRadius:"50%",
    //     backgroundColor:"blue",
    // })
    gsap.to(box.current,{
        duration: 2,
        x:400,
        delay: 0.5,
        rotate:360,
        borderRadius:"50%",
        backgroundColor:"blue",
    })
    
    gsap.fromTo(box1.current, {
        x: 400,
    }, {
        duration: 2,
        x:0,
        delay: 0.5,
        rotate:360,
        borderRadius:"50%",
        backgroundColor:"blue",
    });
    gsap.fromTo(alpha,{
        y:20,
        opacity:0
    },{
        y:0,    
        opacity:1,
        duration:1,
        // stagger:1,
        stagger:-1, // this will proceed in reverse
        color:'blue'
        }
    )

    gsap.to(repeat.current,{
        x:400,
        duration:2,
        borderRadius:20,
        //repeat:1,// it means this will repeat his self for two times,
        repeat:-1, // now this will repeat his self fot infinite time
        yoyo:true,
    })

    // time line property 
    const tl = gsap.timeline();
    tl.to(div1,{
        x:400,
        duration:1,
        borderRadius:20,
    })
    tl.to(div2,{
        x:400,
        duration:1,
        borderRadius:20,
    })
    tl.to(div3,{
        x:400,
        duration:1,
        borderRadius:20,
    })


},[])

return(<>
<h1 className="text-center mt-10 text-2xl font-medium text-blue-600">GSAP</h1>
<h1 className="text-center mt-2  text-blue-400">GreenSock Animation Platform</h1>

<div ref={box} className="size-[200px] bg-red-500 rounded-sm" > </div>
<div ref={box1} className="mt-4 size-[200px] bg-green-500 rounded-sm" > </div>

<div ref={heading} className="[&>*]:text-2xl [&>*]:font-medium" >
    <h1>This is a heading</h1>
    <h1 id="h1">This is a heading 2</h1>
    <h1 className="h1">This is a heading 3</h1>
</div>

<div ref={repeat} className="size-[200px] bg-red-300 rounded-sm"></div>

<div className="[&>*]:size-[200px] [&>*]:rounded-sm"ref={timeline} >
    <div className="bg-emerald-500" ></div>
    <div className="bg-rose-400" ></div>
    <div className="bg-amber-400" ></div>
</div>

</>)
}
export default First;