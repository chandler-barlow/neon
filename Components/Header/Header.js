import { useState } from 'react'
import styles from '../../styles/ComponentStyles/Header.module.css'
import * as FaIcons from 'react-icons/fa'
import Modal from 'react-modal'
import { getContent } from "../../utilities/db.js";
import { userData } from "../../utilities/user_information.js";

const Header = () => {

    // select random user to log in as
    const dataFromDB = {
      TableName: 'Users',
      Item: {
        Username: userData[Math.floor(Math.random()*10)]
      }
    }

    getContent(dataFromDB)
    .then(val => {
      self.setState
    });

    const name = dataFromDB.Item.Username.Username;

    const notifications = 2;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.leftContainer}>
                    Welcome {name}
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.modalContainer}>
                        <button className={styles.btn} onClick={openModal}>
                            <FaIcons.FaBell style={{paddingRight: 3}}/>
                            {notifications > 0 ? notifications : null}
                        </button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            className={styles.modal}
                            overlayClassName={styles.overlay}
                            contentLabel="Example Modal"
                        >
                        <div className={styles.topWrapper}>
                            <p>NOTIFICATIONS</p>
                            <button className={styles.modalCancel} onClick={closeModal}>X</button>
                        </div>
                        <div className={styles.notifications}>
                            <img style={{borderRadius: '50%', width: 35, height: 35, marginRight: 13}} src="https://randomuser.me/api/portraits/med/men/76.jpg" alt="" />
                            <div>
                                <div className={styles.notificationsTop}>
                                    <p style={{margin: 0, marginBottom: 9, fontSize: 13, fontWeight: 'bold'}}>Adam</p>
                                    <p style={{margin: 0, marginBottom: 9, fontSize: 10}}>Responded to your comment</p>
                                </div>
                                <div className={styles.notificationsMiddle}>
                                    <p style={{margin: 0, marginBottom: 9, fontSize: 11, cursor: 'pointer'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, veritatis.</p>
                                </div>
                                <div className={styles.notificationsBottom}>
                                    <p style={{margin: 0, marginBottom: 9, fontSize: 12}}>7 hours ago</p>
                                </div>
                            </div>
                        </div>
                        </Modal>
                    </div>
                    <a href="/Profile">
                        <div className={styles.profileContainer}>
                            <img style={{marginRight: '0.8rem', borderRadius: '50%', width: 30, height: 30}} src="https://randomuser.me/api/portraits/med/men/74.jpg" alt="" />
                            <p>{name}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
