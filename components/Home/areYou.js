import LandingPageStyles from '../../styles/partial/home.module.scss'
import LinkButtons from '../button/linkButton'
import HeaderStyles from '../../styles/partial/header.module.scss'


const AreYou = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_c} ${LandingPageStyles.section} `}
      id={`${LandingPageStyles.areYou}`}
    >
      <h1>Are You looking to train your team with Digital Skills?</h1>
      <p>
        A well trained personel is a guarantee for effective and efficient
        service delivery for optimum productivity.{' '}
      </p>
      <LinkButtons
        classes={`${HeaderStyles.linkButton} bgNone wow animate__animated animate__fadeInDown`}
        contents={`Learn more`}
        to={`/`}
      />
    </section>
  )
}

export default AreYou
