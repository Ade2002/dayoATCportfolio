/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Styles from '../../../styles/sass/style.module.scss'
import { COURSES } from '../data/CoursesData'
import Ratings from './Ratings'
const Courses = () => {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(0)
  const selectCourse = index => {
    setActive(index)
    setOpen(0)
  }
  const Categories = ({ course, index, active, selectProduct, open }) => (
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
        <img src={CC.imgPath} alt='imgpath' />
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
          <img src='/lineRule.png' alt='linerule' />
          <span>
            <small>Offline</small>
            <b className={Styles.price}>{CC.offlinePrice}</b>
          </span>
        </div>
      </div>
    </>
  )
  return (
    <section>
      <div className={Styles.courses_tab_menu}>
        {COURSES.map((course, index) => (
          <Categories
            {...{ course, index, active, selectCourse }}
            key={index}
          />
        ))}
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
