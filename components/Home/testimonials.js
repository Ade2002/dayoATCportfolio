/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Qhsestyles from '../../styles/qhse/styles.module.scss'
import { sliderData } from './Layouts/data/dataSwiper'

const Testimonials = () => {
  const swiperLeftPrevRef = useRef(null)
  const swiperLeftNextRef = useRef(null)

  return (
    <div className={`${Qhsestyles.choose}`}>
      <section className={`${Qhsestyles.contain}`}>
        <div className={`${Qhsestyles.whyContentArea} ${Qhsestyles.m0}`}>
          <div className={`${Qhsestyles.titleArea} ${Qhsestyles.m0}`}>
            <h3 className={`${Qhsestyles.m0}`}>
              <span>What people are</span> <span>saying about us</span>
            </h3>
            <p className={`${Qhsestyles.m0}`}>
              <span>Feedbacks from our Partners</span> <span>and Students</span>
            </p>
          </div>
          <div className={`${Qhsestyles.m0} ${Qhsestyles.slidersCon}`}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              navigation={{
                prevEl: swiperLeftPrevRef.current,
                nextEl: swiperLeftNextRef
              }}
              pagination={{ clickable: true }}
              speed={800}
              slidesPerView={1}
              onInit={swiper => {
                swiper.params.navigation.prevEl = swiperLeftPrevRef.current
                swiper.params.navigation.nextEl = swiperLeftNextRef.current
                swiper.navigation.init()
                swiper.navigation.update()
              }}
              className={`${Qhsestyles.my0} ${Qhsestyles.mySwiper}`}
            >
              {sliderData.map(({ img, name }, index) => (
                <SwiperSlide key={index} className={`${Qhsestyles.my0}`}>
                  <div className={`${Qhsestyles.slideDatas}`}>
                    <div
                      className={`${Qhsestyles.m0} ${Qhsestyles.cardContainerContent}`}
                    >
                      <div
                        className={`${Qhsestyles.m0} ${Qhsestyles.imageCon}`}
                      >
                        <img src={img} alt='img' />
                      </div>
                      <div className={`${Qhsestyles.m0} ${Qhsestyles.card}`}>
                        <p className={`${Qhsestyles.m0}`}>
                          <span>
                            You are very close to becoming the person of your
                          </span>
                          {` `}
                          <span>
                            dream by taking any of our online/offline tech track
                          </span>{' '}
                          <span>courses Read More</span>
                        </p>
                        <h3 className={`${Qhsestyles.m0}`}>{name}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div
                className={`${Qhsestyles.prevSwiper} ${Qhsestyles.m0}`}
                ref={swiperLeftPrevRef}
              ></div>
              <div
                className={`${Qhsestyles.nextSwiper} ${Qhsestyles.m0}`}
                ref={swiperLeftNextRef}
              ></div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
