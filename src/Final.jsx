import gsap from "gsap";
import { useEffect,useRef } from "react";
import {ScrollTrigger} from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Final = ()=>{
    const navbar = useRef();
    const scrollText = useRef();
    const ball = useRef();
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(()=>{
    const time = gsap.timeline();
    const myLogo = navbar.current.children[0];
    const home = navbar.current.children[1].children[0].children[0];
    const about = navbar.current.children[1].children[1].children[0];
    const service = navbar.current.children[1].children[2].children[0];
    const constactUs = navbar.current.children[1].children[3].children[0];

    const scroll = scrollText.current.children[0];
    const arrowDown = scrollText.current.children[1];
    
    const ball1 = ball.current.children[0];
    const ball2 = ball.current.children[1];

    
    const section = sectionRef.current;
    const text = textRef.current;
    
    time.fromTo(myLogo,{
        x:-50,opacity:0,
    },{
        x:0,opacity:1,
    })
    time.fromTo(home,{
        y:-20,opacity:0,
    },{
        y:0,opacity:1,
    })
    time.fromTo(about,{
        y:-20,opacity:0,
    },{
        y:0,opacity:1,
    })
    time.fromTo(service,{
        y:-20,opacity:0,
    },{
        y:0,opacity:1,
    })
    time.fromTo(constactUs,{
        y:-20,opacity:0,
    },{
        y:0,opacity:1,
    })
    time.fromTo(scroll,{
        y:30,opacity:0,
    },{
        y:0,opacity:1,duration:1
    })
    time.fromTo(arrowDown,{
        y:-30,opacity:0,
    },{
        y:0,opacity:1,duration:1,repeat:-1,yoyo:true,

    })

    gsap.fromTo(ball1,{
        x:1320,
    },{
        x:0,
        scrollTrigger:{
            trigger:ball.current,
            start:"top 40%",
            scrub:true,
        }
    })
    gsap.fromTo(ball2,{
        x:0,
    },{
        x:1320,
        scrollTrigger:{
            trigger:ball.current,
            start: "top 40%",      
          scrub: true,
        }
    })


    gsap.fromTo(
      text,
      { x: "50vw" },
      {
        x: "-50vw",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",      
          end: "+=1000",        
          scrub: true,            
          pin: true,              
          anticipatePin: 1,       
        },
      }
    );
    return(()=>{
        ScrollTrigger.getAll().forEach((t) => t.kill());
    })

},[])

return(<>
<div className=" h-screen bg-black flex flex-col  ">
  <nav ref={navbar} className="text-white flex justify-between w-7xl mx-auto p-5">
    <h1>MY LOGO</h1>
    <ol className="flex items-center gap-12 [&>*]:hover:border-b [&>*]:pb-2 ">
      <li><a href="#" className="inline-block">Home</a></li>
      <li><a href="#" className="inline-block">About</a></li>
      <li><a href="#" className="inline-block">Service</a></li>
      <li><a href="#" className="inline-block">Contact Us</a></li>
    </ol>
  </nav>

  <div ref={scrollText} className="flex-1 flex items-center justify-center text-white">
    <h1 className="text-5xl font-serif" >Scroll Down </h1>&nbsp;&nbsp;&nbsp;
        <div className="size-[48px] text-black bg-white rounded-full flex items-center justify-center" > 
            <h2 className="text-3xl " >&#8595;</h2>    
        </div> 
  </div>
</div>

<div ref={ball} className=" h-screen bg-black grid grid-rows-2 items-center " >
    <div className="size-[200px]  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 " > 
    </div> 
    <div className="size-[200px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500" > 
    </div> 
</div>
<section ref={sectionRef} className=" h-screen bg-linear-to-bl from-violet-500 to-fuchsia-500 flex items-center justify-center overflow-hidden relative">
    <h1 ref={textRef} className="text-[20vw] font-semibold whitespace-nowrap font-serif">
        Newton Byte by Ali
    </h1>
</section>

</>)

}
export default Final;