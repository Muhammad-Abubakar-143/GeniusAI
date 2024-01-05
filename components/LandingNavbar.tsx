"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { User } from "next-auth";
import { cn } from "@/lib/utils";



const font = Montserrat({ weight: '600', subsets: ['latin'] });

type LandingNavProps = {
  user?: User;
};

const LandingNavbar = ({ user }: LandingNavProps) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
    const { isSignedIn } = useAuth();
    
  return (
    <nav className=" flex items-center justify-between rounded-lg bg-white/10 px-4 py-2 shadow-2xl drop-shadow backdrop-blur-3xl lg:mt-2">
      <Link href="/" className="flex items-center">
        <div className="relative mr-2 h-8 w-8">
          <Image fill src="/logo3.png" alt="Logo" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Pixiemist
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={user ? "/dashboard" : "/sign-in"}>
          <Button
            variant="outline"
            className="rounded-md border-none bg-primary tracking-wider text-white transition-colors hover:bg-slate-800 hover:text-white"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
    // <nav className="p-4 px-9 bg-transparent flex items-center justify-between">
    //   <Link href="/" className="flex items-center">
    //     <div className="relative w-full h-full mr-4 object-contain">
    //       <Image alt="Logo" src="/aina.svg" className="relative w-2/5 object-contain" width={50} height={10}  />
    //     </div>
       
    //   </Link>
    //   <div className="md:flex items-center gap-x-2 hidden">
    //     {navbar.map((navLink)=>(
    //       <div className="text-[#ce57bb]" key={navLink.id}>
    //         <Link className="px-2" href={navLink.link}>
    //           {navLink.title}
    //         </Link>
    //       </div>
    //     ))}
    //     <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
    //       <Button variant="outline" className="rounded-full">
    //         Get Started
    //       </Button>
    //     </Link>
    //   </div>
    //   <div className='sm:hidden flex flex-1 justify-end items-center '>
    //      <Menu className='w-[28px] h-[28px] object-contain text-white cursor-pointer'
    //         onClick={() => setToggle(!toggle)}
    //       />
    //      <div
    //         className={`${
    //           !toggle ? "hidden" : "flex"
    //         } p-6 bg-white/5 transition ease-in-out delay-150 duration-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
    //       >
    //         <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
    //           {navbar.map((nav) => (
    //             <li
    //               key={nav.id}
    //               className={`font-poppins font-medium cursor-pointer text-[16px] ${
    //                 active === nav.title ? "text-[#14213d]" : "text-secondary"
    //               }`}
    //               onClick={() => {
    //                 setToggle(!toggle);
    //                 setActive(nav.title);
    //               }}
    //             >
    //               <Link href={`#${nav.id}`}>{nav.title}</Link>
    //             </li>
    //           ))}
    //         </ul>
    //         <button className='bg-[#14213D] font-bold flex text-sm px-6 py-3 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'>
    //             Book a meeting
    //         </button>
    //       </div>
    //     </div>
    // </nav>
  )
}

export default LandingNavbar


export const navbar=[
  {
      id:1,
      link:"/tools",
      title:"Tools",
  },
  {
      id:2,
      link:"/about",
      title:"About Us",
  },
  {
      id:3,
      link:"/contact",
      title:"Contact Us",
  },
 
]