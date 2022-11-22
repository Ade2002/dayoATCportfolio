/* eslint-disable @next/next/no-img-element */
import Qhsestyles from "../../styles/qhse/styles.module.scss";
import LinkButtons from "../button/linkButton";

const HowItWorks = () => {
  const courses = [
    {
      img: "find1.svg",
      title: `Find your Course`,
      details:
        "Please enter your course and follow the prompt to get your desired course",
    },
    {
      img: "find2.svg",
      title: "Enroll",
      details:
        "You can now enrol as a student by providing the necessary details and proceed to make payments to the designated bank",
    },
    {
      img: "find3.svg",
      title: `Get Certified`,
      details:
        "Be a Certified QHSE professional. Study a program with us and get certifield upon completion of your Course",
    },
  ];

  return (
    <div className={`${Qhsestyles.how} ${Qhsestyles.m0}`}>
      <section className={`${Qhsestyles.contain}`}>
        <div className={`${Qhsestyles.m0} ${Qhsestyles.Howarea}`}>
          <h2 className={`${Qhsestyles.m0}`}>How It Works?</h2>
          <div className={`${Qhsestyles.howContents} ${Qhsestyles.m0}`}>
            {courses.map(({ img, title, details }, index) => (
              <div
                className={`${Qhsestyles.Images} ${Qhsestyles.m0}`}
                key={index}
              >
                <h4>{title}</h4>
                <p>{details}</p>
                <div className={`${Qhsestyles.img}`}>
                  <img src={img} alt="icons" />
                </div>
              </div>
            ))}
          </div>
          <div className={`${Qhsestyles.m0} ${Qhsestyles.getbtn}`}>
            <LinkButtons
              classes={`${Qhsestyles.button} ${Qhsestyles.howbtn} wow animate__animated animate__fadeInDown`}
              contents={`Get Started`}
              to={`/signIn`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
