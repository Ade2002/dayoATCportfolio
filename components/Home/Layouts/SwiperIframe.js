import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../../../styles/SwiperIframe.scss'
import Styles from '../../../styles/sass/style.module.scss'

// import required modules
import { Pagination, Navigation } from 'swiper'

const SwiperIframe = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper`}
        loopFillGroupWithBlank={true}
      >
        <SwiperSlide>
          <span>
            <iframe
              width='100%'
              height='500px'
              src='https://www.youtube.com/embed/rjrPx_2GzyU'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <i className={Styles.linearGradient}></i>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span>
            <iframe
              width='100%'
              height='500px'
              src='https://www.youtube.com/embed/GUe9yKnSsYE'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <i className={Styles.linearGradient}></i>
          </span>
        </SwiperSlide>
        {/* 
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default SwiperIframe
