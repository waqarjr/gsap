import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Nabar = ()=>{

const logo = useRef();
const items = useRef();
const name = useRef();

useEffect(()=>{
    const time = gsap.timeline();
    const item1 = items.current.querySelector('.item1');
    const item2 = items.current.querySelector('.item2');
    const item3 = items.current.querySelector('.item3');
    const item4 = items.current.querySelector('.item4');
    time.fromTo(logo.current,{
        y:-20,
        opacity:0
    },{
        y:0,
        opacity:1,
    })
    time.fromTo(item1,{
        y:-20,
        opacity:0
    },{
        y:0,
        opacity:1,
        stagger:1,
    })
    time.fromTo(item2,{
        y:-20,
        opacity:0
    },{
        y:0,
        opacity:1,
        stagger:1,
    })
    time.fromTo(item3,{
        y:-20,
        opacity:0
    },{
        y:0,
        opacity:1,
        stagger:1,
    })
    time.fromTo(item4,{
        y:-20,
        opacity:0
    },{
        y:0,
        opacity:1,
        stagger:1,
    })
    time.fromTo(name.current,{
        y:20,
        opacity:0,
    },{
        y:0,
        opacity:1,
        duration:1,
    })
},[])


return(<>
<div className="bg-gray-800 w-screen h-screen" >

<nav className=" text-white px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">

  <div ref={logo} className="text-xl font-bold">MyLogo</div>

  <ul ref={items} className="hidden md:flex space-x-6">
    <li><a href="#" className="item1 hover:text-gray-400 inline-block">Home</a></li>
    <li><a href="#" className="item2 hover:text-gray-400 inline-block ">About</a></li>
    <li><a href="#" className="item3 hover:text-gray-400 inline-block">Services</a></li>
    <li><a href="#" className="item4 hover:text-gray-400 inline-block ">Contact</a></li>
  </ul>
</nav>

  <h2 ref={name} className="flex justify-center mt-64  font-bold text-4xl text-white">Waqar Ahmad</h2>

</div>

</>)

}
export default Nabar;