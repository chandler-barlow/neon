import styles from '../../styles/ComponentStyles/UserInfo.module.css'


const UserInfo = () => {
    const qty = 120;
    
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.listItems}>RandomUser</li>
                <li className={styles.listItems}>Random@gmail.com</li>
                <li className={styles.listItems}>(469)-726-9187</li>
                <li className={styles.listItems}>Male</li>
                <li className={styles.listItems}>Real Street St, Frisco TX 75068</li>
                <li className={styles.listItems}>Quantity of Neon: {qty}</li>
            </ul>
        </div>
    )
}

export default UserInfo
