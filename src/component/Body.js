import React, { useState,useEffect } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
function Body() {
  const [mobiledata, setMobiledata] = useState([]);
  const [laptopdata, setlaptopdata] = useState([])
  const [tvdata, settvdata] = useState([])
    
    //flipkard mobile
  useEffect(() => {
    fetch('http://localhost:4000/api/mobile')
      .then((response) => response.json())
      .then((data) => {
        // console.log(Object.keys(data));
        // console.log(data.e)
        setMobiledata(data.e);
      });
  }, []);

    //laptop 
  useEffect(() => {
    fetch('http://localhost:4000/api/laptop')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(Object.keys(data));
        // console.log(data.e)
        setlaptopdata(data.e);
      });
  }, []);

      //tv 
      useEffect(() => {
        fetch('http://localhost:4000/api/tv')
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            // console.log(Object.keys(data));
            // console.log(data.e)
            settvdata(data.e);
          });
      }, []);
 

  
  const limitedmobile =mobiledata.slice(15,25);

  const limitedlaptop = laptopdata.slice(0, 10);

  const limitedtv = tvdata.slice(5,17);

  return (
    <div className=' bg-black'>

<Swiper className=' flex flex-row'
     spaceBetween={25}
     slidesPerView={3}
     grabCursor={true}
     >
     <SwiperSlide className=''>
     <h1 className=' text-3xl px-14 font-bold py-8 text-zinc-100 '> 
      Mobile:</h1>
      {limitedmobile &&
        limitedmobile.map((mobile, i) => (
          <div className=' m-4 bg-gray-300 rounded-2xl p-6 hover:scale-105 duration-300 '>
          <div  className='rounded-3xl md: p-0.5 flex-1'>
         <img key={i} className=' rounded-xl w-36'  alt=" " src={mobile.image} />
         <div className=' text-lg font-semibold' > Current Price : {mobile.price}</div>
         <span >Original Price : {mobile.originalPrice}</span>
         <span className='pl-6 text-2xl font-semibold'>{mobile.offerPercentage}</span>
         </div>
         <div  className='rounded-3xl md: p-0.5' >
         <div  ><div className=' font-semibold'> Specification:</div><span className=' bg-slate-100 font-normal'>{mobile.title}</span> </div>
         <div > <span className=' font-semibold'> Customer :</span> {mobile.ratings}</div>
         <div > <span className=' font-semibold'>Review 5</span> for : {mobile.reviews}</div>
         </div>
         </div>
        ))}
        </SwiperSlide>
     <SwiperSlide>
     <h1 className=' text-3xl px-14 font-bold py-8  text-zinc-100'>Laptop :</h1>
      {limitedlaptop &&
        limitedlaptop.map((laptop, i) => (
          <div className=' m-4 bg-gray-300 rounded-2xl p-10 hover:scale-105 duration-300 '>
          <div  className='rounded-3xl md: p-0.5 flex-1'>
         <img key={i} className=' rounded-xl  w-40'  alt=" " src={laptop.image} />
         <div className=' text-lg font-semibold' > Current Price : {laptop.price}</div>
         <span >Original Price : {laptop.originalPrice}</span>
         <span className='pl-6 text-2xl font-semibold'>{laptop.offerPercentage}</span>
         </div>
         <div  className='rounded-3xl md: p-0.5' >
         <div  ><div className=' font-semibold'> Specification:</div><span className=' bg-slate-100 font-normal'>{laptop.title}</span> </div>
         <div > <span className=' font-semibold'> Customer :</span> {laptop.ratings}</div>
         <div > <span className=' font-semibold'>Review 5</span> for : {laptop.reviews}</div>
         </div>
         </div>
        ))}
        </SwiperSlide>
        <SwiperSlide>
     <h1 className=' text-3xl px-14 font-bold py-8  text-zinc-100'>Tv :</h1>
      {limitedtv &&
        limitedtv.map((tv, i) => (
          <div className=' m-4 bg-gray-300 rounded-2xl p-10 hover:scale-105 duration-300 '>
          <div  className='rounded-3xl md: p-0.5 flex-1'>
         <img key={i} className=' rounded-xl w-44  h-32'  alt=" " src={tv.image} />
         <div className=' text-lg font-semibold' > Current Price : {tv.price}</div>
         <span >Original Price : {tv.originalPrice}</span>
         <span className='pl-6 text-2xl font-semibold'>{tv.offerPercentage}</span>
         </div>
         <div  className='rounded-3xl md: p-0.5' >
         <div > <span className=' font-semibold'> Customer :</span> {tv.ratings}</div>
         <div > <span className=' font-semibold'>Review 5</span> for : {tv.reviews}</div>
         </div>
         </div>
        ))}
        </SwiperSlide>
        </Swiper> 
    </div>
  );
}
      
export default Body;