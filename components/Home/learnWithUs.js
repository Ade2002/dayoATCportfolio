/* eslint-disable @next/next/no-img-element */
import Qhsestyles from "../../styles/qhse/styles.module.scss";
import HeaderStyles from "../../styles/partial/header.module.scss";
import LinkButtons from "../button/linkButton";

const LearnWithUs = () => {
  return (
    <div className={`${Qhsestyles.m0}`}>
      <section className={`${Qhsestyles.contain}`}>
        <div className={`${Qhsestyles.whyContent} ${Qhsestyles.m0}`}>
          <div className={`${Qhsestyles.titleArea} ${Qhsestyles.m0}`}>
            <h3 className={`${Qhsestyles.m0}`}>Why learn with Us.</h3>
            <p>
              Learning with ATC guarantees you of a wonderful experience and
              exposure in your chosen career/field of study and you will become
              one of the best in what you do Give it a short...
            </p>
          </div>
          <div className={`${Qhsestyles.mobileCards} ${Qhsestyles.m0}`}>
            <div className={`${Qhsestyles.cardContainer} ${Qhsestyles.m0}`}>
              <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                <img src="robot.svg" alt="robot" />
                <h3 className={`${Qhsestyles.m0}`}>Easy learning</h3>
                <p>
                  Learning has been made easy with our up to date curriculum and
                  experienced tutors who are the best in their field. Our
                  training are practical oriented which makes it easy to
                  understand.
                </p>
              </div>
              <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                <img src="case.svg" alt="projects" />
                <h3 className={`${Qhsestyles.m0}`}>Life Projects</h3>
                <p className={`${Qhsestyles.m0}`}>
                  Their are life projects being worked on at our training
                  institute which solves human problems. This life projects are
                  eventually lunched as solutions to the entire human race.
                </p>
              </div>
              <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                <img src="checked.svg" alt="verified" />
                <h3 className={`${Qhsestyles.m0}`}>Trusted certifications</h3>
                <p className={`${Qhsestyles.m0}`}>
                  At ATC, our certification are reliable and trusted with the
                  verifiable link in our certificates and the international
                  certifications are recognized one in different part of the
                  world.
                </p>
              </div>
              <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                <img src="Plearning.svg" alt="learning" />
                <h3 className={`${Qhsestyles.m0}`}>In-person learning</h3>
                <p className={`${Qhsestyles.m0}`}>
                  Learning in person from our tutors is guranteed with a
                  physical meeting with your tutor to guide you on different
                  aspect of your learning endeavours.
                </p>
              </div>
              <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                <img src="ranks.svg" alt="ranks" />
                <h3 className={`${Qhsestyles.m0}`}>Tracking performance</h3>
                <p className={`${Qhsestyles.m0}`}>
                  Performances are tracked with life projects being engaged by
                  our students. This will enable learners to know and track
                  thier performances.
                </p>
              </div>
              <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                <img src="support.svg" alt="support" />
                <h3 className={`${Qhsestyles.m0}`}>Students’ support</h3>
                <p className={`${Qhsestyles.m0}`}>
                  We support our students as much as possible to pursue their
                  dreams and become the person they desire to become. We provide
                  different level of support for our students ranging from
                  subsidies, leniency in payment terms and many more.
                </p>
              </div>
            </div>
            <LinkButtons
              classes={`${HeaderStyles.linkButton} ${Qhsestyles.bgBlue} bgBlue  wow animate__animated animate__fadeInDown`}
              contents={`Get Started`}
              to={`https://www.atc.com.ng/`}
            />
          </div>
          <div className={`${Qhsestyles.desktopCards} ${Qhsestyles.m0}`}>
            <div
              className={`${Qhsestyles.desktopCardContainer} ${Qhsestyles.m0}`}
            >
              <div className={`${Qhsestyles.cards} ${Qhsestyles.m0}`}>
                <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                  <img src="robot.svg" alt="robot" />
                  <h3 className={`${Qhsestyles.m0}`}>Easy learning</h3>
                  <p className={`${Qhsestyles.m0}`}>
                    <span>
                      Learning has been made easy with our up to date curriculum
                      and
                    </span>
                    <span>
                      experienced tutors who are the best in their field. Our
                      training are
                    </span>
                    <span>
                      practical oriented which makes it easy to understand.
                    </span>
                  </p>
                </div>
                <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                  <img src="case.svg" alt="projects" />
                  <h3 className={`${Qhsestyles.m0}`}>Life Projects</h3>
                  <p className={`${Qhsestyles.m0}`}>
                    <span>
                      Their are life projects being worked on at our training
                      institute
                    </span>
                    <span>
                      which solves human problems. This life projects are
                      eventually
                    </span>
                    <span>lunched as solutions to the entire human race.</span>
                  </p>
                </div>
              </div>
              <div className={`${Qhsestyles.cards} ${Qhsestyles.m0}`}>
                <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                  <img src="Plearning.svg" alt="learning" />
                  <h3 className={`${Qhsestyles.m0}`}>In-person learning</h3>
                  <p className={`${Qhsestyles.m0}`}>
                    <span>
                      Learning in person from our tutors is guranteed with a
                      physical
                    </span>
                    <span>
                      meeting with your tutor to guide you on different aspect
                      of your
                    </span>
                    <span>learning endeavours.</span>
                  </p>
                </div>
                <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                  <img src="checked.svg" alt="verified" />
                  <h3 className={`${Qhsestyles.m0}`}>Trusted certifications</h3>
                  <p className={`${Qhsestyles.m0}`}>
                    <span>
                      At ATC, our certification are reliable and trusted with
                      the
                    </span>
                    <span>
                      verifiable link in our certificates and the international
                    </span>
                    <span>
                      certifications are recognized one in different part of the
                      world.
                    </span>
                  </p>
                </div>
              </div>
              <div className={`${Qhsestyles.cards} ${Qhsestyles.m0}`}>
                <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                  <img src="ranks.svg" alt="ranks" />
                  <h3 className={`${Qhsestyles.m0}`}>Tracking performance</h3>
                  <p className={`${Qhsestyles.m0}`}>
                    <span>
                      Performances are tracked with life projects being engaged
                      by our
                    </span>
                    <span>
                      students. This will enable learners to know and track
                      thier
                    </span>
                    <span>performances.</span>
                  </p>
                </div>
                <div className={`${Qhsestyles.card} ${Qhsestyles.m0}`}>
                  <img src="support.svg" alt="support" />
                  <h3 className={`${Qhsestyles.m0}`}>Students’ support</h3>
                  <p className={`${Qhsestyles.m0}`}>
                    <span>
                      We support our students as much as possible to pursue
                      their dreams
                    </span>
                    <span>
                      and become the person they desire to become. We provide
                      different
                    </span>
                    <span>
                      level of support for our students ranging from subsidies,
                      leniency
                    </span>
                    <span>in payment terms and many more.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${Qhsestyles.getbtn}`}>
              <LinkButtons
                classes={`${HeaderStyles.linkButton} ${Qhsestyles.bgBlue}} bgBlue wow animate__animated animate__fadeInDown`}
                contents={`Get Started`}
                to={`https://www.atc.com.ng/`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnWithUs;
