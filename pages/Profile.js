import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/PageStyles/Profile.module.css'

const Profile = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Profile</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <a href="/">Go Back</a>

        <div className={styles.main}>
          <div className={styles.profileHub}>
            Random User
            <div>
              <img className={styles.picture} src="https://randomuser.me/api/portraits/med/men/75.jpg"/>
            </div>
          </div>

          <div className={styles.wallet}>
            <p>My Wallet</p>
          </div>

        </div>
      </div>
    )
}

export default Profile