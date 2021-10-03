import styles from '../../styles/ComponentStyles/Header.module.css'
import * as FaIcons from 'react-icons/fa'
import * as HiIcons from 'react-icons/hi'

const Header = () => {
    const name = 'Random User'
    const notifications = 2;

    const test = () => {
        console.log('Working');
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.leftContainer}>
                    Welcome {name}
                </div>
                <div className={styles.rightContainer}>
                    <button className={styles.btn} onClick={null}>
                        <FaIcons.FaBell style={{paddingRight: 3}}/>
                        {notifications > 0 ? notifications : null}
                    </button>
                    <a href="/Profile">
                      <div className={styles.profileContainer}>
                          <img style={{marginRight: '0.8rem', borderRadius: '50%', width: 30, height: 30}} src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="" />
                          <p>Random User <span><HiIcons.HiChevronDown /></span></p>
                      </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
