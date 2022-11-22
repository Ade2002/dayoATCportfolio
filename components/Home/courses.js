/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import LandingPageStyles from '../../styles/partial/home.module.scss'
import Styles from '../../styles/sass/style.module.scss'
import { COURSES } from './Layouts/data/CoursesData'
import Ratings from './Layouts/ratings'
import SwiperCourses from './Layouts/SwiperCourses'
// Import Swiper React components

const Courses = () => {
    
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(0)
  const selectCourse = index => {
    setActive(index)
    setOpen(0)
  }
  const Categories = ({ course, index }) => (
    <button
      className={`${active === index ? Styles.active : ''}`}
      onClick={() => selectCourse(index)}
      type='button'
    >
      {course.category}
    </button>
  )

  const CoursesContainer = ({ CC, index, open }) => (
    <>
      <div className={Styles.card}>
        <img src={CC.imgPath} alt='' />
        <strong>{CC.description}</strong>
        <small>
          <strong>{CC.rating}</strong>
          <Ratings value={CC.rating} />
        </small>
        <div className={Styles.types_tab_menu}>
          <span>
            <small>Online</small>
            <b className={Styles.price}>{CC.onlinePrice}</b>
          </span>
          <img src='/lineRule.png' alt='' />
          <span>
            <small>Offline</small>
            <b className={Styles.price}>{CC.offlinePrice}</b>
          </span>
        </div>
      </div>
    </>
  )
  return (
    <section className={`${LandingPageStyles.flex_c} ${LandingPageStyles.section} `} id={`${LandingPageStyles.courses}`}>
      <div className={Styles.courses_tab_menu}>
        <SwiperCourses {...{ COURSES, Categories, selectCourse, active }} />
      </div>
      <div className={Styles.card_tab_menu}>
        {COURSES[active].courses.map((CC, index) => (
          <CoursesContainer {...{ CC, index, open }} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Courses
