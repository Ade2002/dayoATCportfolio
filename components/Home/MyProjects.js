/* eslint-disable @next/next/no-img-element */
import LandingPageStyles from '../../styles/partial/home.module.scss'
import { motion } from 'framer-motion'
import LinkButtons from '../button/linkButton'
import HeaderStyles from '../../styles/partial/header.module.scss'

const Services = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.section}`}
      id={`${LandingPageStyles.services}`}
    >
      <div>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <svg
            width="54"
            height="5"
            viewBox="0 0 54 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.5"
              y1="2.5"
              x2="51.5"
              y2="2.5"
              stroke="#333333"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>{" "}
          Hello
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          I’m Sarah Jackson
        </motion.h2>
        <h3>
          A UX / UI designer, product designer, content creator and creative
          director.
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Of course, there’s so much more to me than just a few fancy titles.
          Scroll down and get to know me,
        </motion.p>
        <div
          className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.buttons}`}
        >
          <LinkButtons
            classes={`${HeaderStyles.linkButton} ${HeaderStyles.bgOrange} wow animate__animated animate__slideInUp`}
            contents={`Hire me`}
            to={`workstation`}
          />
          <LinkButtons
            classes={`${HeaderStyles.linkButton} ${HeaderStyles.secondaryButton} wow animate__animated animate__slideInUp cOrange
`}
            contents={`Explore`}
            to={`workstation`}
          />
        </div>
      </div>
      <motion.img
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className={`wow animate__animated animate__slideInUp`}
        src="myService.png"
        alt="LaptopWomanFk"
      />
    </section>
  );
}

export default Services
