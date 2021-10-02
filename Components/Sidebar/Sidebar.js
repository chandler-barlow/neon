import { SidebarData } from './SidebarData'
import styles from '../../styles/ComponentStyles/Sidebar.module.css'

const Sidebar = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Neon
            </div>
            <ul className={styles.listItems}>
                {SidebarData.map((item, index) => {
                    return (
                    <a className={styles.links} href={item.path}>
                        <li key={index} className={styles.listItemContainer}>
                            {item.icon}
                            <span className={styles.title}>{item.title}</span>
                        </li>
                    </a>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
