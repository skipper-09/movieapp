import React from 'react'
import Image from 'next/image'

//slider
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
function Card(props) {
  return (
    <>

      <Swiper
      >
        <SwiperSlide>
          <Image src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.image}`} width={props.width} height={props.height} />
        </SwiperSlide>
      </Swiper>



    </>
  )
}




export default Card