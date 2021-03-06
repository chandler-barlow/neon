import { useState } from 'react'
import Head from 'next/head'
import UserInfo from '../Components/UserInfo/UserInfo'
import UserWallet from '../Components/UserWallet/UserWallet'
import styles from '../styles/PageStyles/Profile.module.css'
import Modal from 'react-modal'
import DoughnutChart from '../Components/Charts/DoughnutChart'

const Profile = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
      setIsOpen(true);
  }

  function closeModal() {
      setIsOpen(false);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.profileContainer}>
        <div className={styles.topContainer}>
            <h1>Random User</h1>
        </div>
        <div className={styles.middleContainer}>
          <div className={styles.middleWrapper}>
            <img 
              style={{borderRadius: '50%', width: 150, height: 150}} 
              src="https://randomuser.me/api/portraits/med/men/74.jpg"
            />
            <button className={styles.showesg} onClick={openModal}>ShowESG</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className={styles.modal}
              overlayClassName={styles.overlay}
              contentLabel="Example Modal"
            >
              <DoughnutChart />
            </Modal>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <UserInfo />
          <UserWallet />
        </div>
      </div>
    </div>
  )
}

export default Profile