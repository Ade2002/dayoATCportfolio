import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Navigation } from 'swiper'

const SwiperCourses = ({ COURSES, Categories }) => (
  <>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      /* pagination={{
            clickable: true,
        }} */
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        // when window width is >= 640px
        320: {
          width: 320,
          slidesPerView: 1
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 4
        }
      }}
    >
      {COURSES.map((course, index) => (
        <SwiperSlide key={index}>
          <Categories {...{ course, index }} key={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
)

export default SwiperCourses
