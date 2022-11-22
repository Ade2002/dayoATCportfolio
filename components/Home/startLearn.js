import LandingPageStyles from '../../styles/partial/home.module.scss'

const StartLearn = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_c} ${LandingPageStyles.section}`}
      id={`${LandingPageStyles.startLearn}`}
    >
      <h1>
        Start learning from anywhere, get empowered with job on demand skills.
      </h1>
      <p>
        You are very close to becoming the person of your dream. Kindly check
        from the available course below and register for any of our
        online/offline tech track courses.{' '}
      </p>
    </section>
  )
}

export default StartLearn
