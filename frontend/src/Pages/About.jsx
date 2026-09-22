import styles from './About.module.css'
export default function About(){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.headerBox}>
                <h2>
                About E INFO
                </h2>
            </div>
            <br></br>
            
            <div className={styles.aboutIntro}>
               <p>
                E INFO is a web-based platform designed to help users easily discover and access information about government notifications, schemes, scholarships, job opportunities, examinations, and other public services.
The platform brings important government-related information together in one place so that users can find relevant notifications without having to search through multiple websites.
            </p> 
            </div>
             <div className={styles.features}>

        <h2 className={styles.featuresTitle}>
          Why Use E INFO?
        </h2>

        <div className={styles.featureGrid}>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <h3>Easy Search</h3>

            <p>
              Quickly find government information
              and opportunities.
            </p>
          </div>


          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <i className="fa-solid fa-bell"></i>
            </div>

            <h3>Notifications</h3>

            <p>
              Stay informed about important
              government notifications.
            </p>
          </div>


          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <i className="fa-solid fa-link"></i>
            </div>

            <h3>Official Sources</h3>

            <p>
              Access relevant official government
              websites and information.
            </p>
          </div>

        </div>
      </div>


      {/* Services */}
      <div className={styles.services}>

        <h2 className={styles.servicesTitle}>
          What We Provide
        </h2>

        <div className={styles.serviceGrid}>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-landmark"></i>
            </div>
            <h3>Government Schemes</h3>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h3>Government Jobs</h3>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>Scholarships</h3>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <i className="fa-solid fa-file-lines"></i>
            </div>
            <h3>Notifications</h3>
          </div>

        </div>
      </div>


      {/* Vision */}
      <div className={styles.vision}>

        <h2>Our Vision</h2>

        <p>
          To make government information easier to
          discover, understand and access.
        </p>

        <div className={styles.visionQuote}>
          "Government Information Made Simple"
        </div>

      </div>


      {/* Users */}
      <div className={styles.users}>

        <h2 className={styles.usersTitle}>
          Who Can Use E INFO?
        </h2>

        <div className={styles.usersGrid}>

          <div className={styles.userCard}>
            <div className={styles.userIcon}>
              <i className="fa-solid fa-user-graduate"></i>
            </div>
            <h3>Students</h3>
          </div>

          <div className={styles.userCard}>
            <div className={styles.userIcon}>
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <h3>Job Seekers</h3>
          </div>

          <div className={styles.userCard}>
            <div className={styles.userIcon}>
              <i className="fa-solid fa-users"></i>
            </div>
            <h3>Citizens</h3>
          </div>

          <div className={styles.userCard}>
            <div className={styles.userIcon}>
              <i className="fa-solid fa-building-columns"></i>
            </div>
            <h3>Applicants</h3>
          </div>

        </div>
      </div>

      <div className={styles.disclaimer}>

        <h2>Disclaimer</h2>

        <p>
          E INFO is an informational platform created to
          help users discover government-related
          notifications, schemes, jobs, scholarships and
          services. Users should verify important
          information, eligibility requirements and
          application dates through the respective
          official government websites.
        </p>

      </div>
        </div>
    );
}