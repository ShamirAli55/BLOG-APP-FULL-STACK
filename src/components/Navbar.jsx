import { useState } from "react"
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
const items=[
    {
        id:1,
        to:'/',
        name:'Home'
    },
    {
        id:2,
        to:'/',
        name:'Trending'
    },
    {
        id:3,
        to:'/',
        name:'Most Popular'
    },
    {
        id:4,
        to:'/about',
        name:'About'
    }
]

const Navbar = () => 
{
  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between overflow-hidden'>
       <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/logo.png" h={32} w={32} alt="logo" />
        <span>LamaBlog</span>
       </div>


        {/* mobile */}
        <div className="md:hidden flex" onClick={()=>setIsOpen(prev=>!prev)}>
         <div className="text-4xl py-1 cursor-pointer">{isOpen ? "X" : "☰"}</div>
         <div className={`h-screen w-full bg-[#e6e6ff]  text-lg gap-8 font-medium absolute top-16 ${!isOpen ? 'right-[100%]': 'right-0'} transition-right 
         ease-in-out duration-300`}>
            <div className="h-full w-full flex flex-col items-center justify-center gap-8">
            {items.map((item)=>(
                <div key={item.id} className="text-2xl py-1">{item.name}</div>
            ))}
           <a href="/">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-3xl  hover:bg-purple-700">Logout</button>
            </a>
            </div>
         </div>
        </div>

        {/* desktop  */}

        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium lg:text-lg 2xl:text-2xl">
         {items.map(item=>(
            <div key={item.id}>{item.name}</div>
         ))}
        <SignedOut>
         <Link to="/login">
         <button className="px-4 py-2 bg-purple-600 text-white rounded-3xl hover:bg-purple-700">Login</button>
         </Link>
        </SignedOut>

    <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
    </div>

  )
}

export default Navbar