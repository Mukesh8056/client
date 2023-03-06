import React from 'react'
import { MdOutlineLaptopWindows } from 'react-icons/md';
import { FiSmartphone} from 'react-icons/fi';
import { CgLaptop} from 'react-icons/cg';

function Navbartype() {

  const list=[
    {
    id:1,
    icon:"Mobile",
    image:<FiSmartphone size={35} className=' bg-transparent rounded-lg text-white'/>
},
{
  id:2,
  icon:"Laptop",
  image:<MdOutlineLaptopWindows size={40} className=" bg-white rounded-2xl text-black "/>
  
},
{
  id:3,
  icon:"Tv",
  image:<CgLaptop size={40} className=" bg-white rounded-2xl"/>
  
}
];
  return (
    <div>
   
   <ul className='hidden md:flex '>
     { list.map(({id,icon,image})=>
      
      <li  key={id}className='text-2xl px-32 w-full py-5 bg-black capitalize hover:scale-90 cursor-pointer flex flex-column duration-500 font-semibold  '>
     <div className=' px-2 rounded-full' >{image}</div>
      <div className=' px-3 text-white'>{icon}</div> 
      </li>
      
      )}
      </ul>
    </div>
  )
}

export default Navbartype