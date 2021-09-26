import styles from '../../styles/Section1.module.css'
import hero from '../../assets/feature_hero_image.png'
const Section1 = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.section1Wrapper}>
        <div className={styles.section1LeftContentWrapper}>
          <div className={styles.section1TextWrapper}>
            <h4>Zuri Chat Features.</h4>
            <h2>A platform for your team, work and fun.</h2>
            <p>
              Build the right connection with your team by
              <br /> using special features like Channels, DMs to
              <br /> complete your work goals.
            </p>
            <div className={styles.buttonsWrapper}>
              <a href="https://zuri.chat/signup">
                <button type="button" className={styles.getStarted}>
                  Get Started
                </button>
              </a>
              <button
                type="button"
                className={styles.features}
                onClick={e => {
                  e.preventDefault()
                  window.location.replace('#featuresSection')
                }}
              >
                See all Features
              </button>
            </div>
          </div>
        </div>
        <div className={styles.section1ImageWrapper}>
          <img src={hero} alt="group" className={styles.groupImage} />
        </div>
      </div>
    </div>
  )
}

export default Section1
