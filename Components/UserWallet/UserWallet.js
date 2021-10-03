import styles from '../../styles/ComponentStyles/UserWallet.module.css'


const UserWallet = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <div className={styles.walletTitle}>Wallet</div>
                <div className={styles.listItemsFill}>$759</div>
                <div className={styles.listItems}>9999 BTC</div>
                <div className={styles.listItems}>23.23 ETH</div>
                <div className={styles.listItems}>380 LTC</div>
                <div className={styles.listItems}>50.29 RAD</div>
            </ul>
        </div>
    )
}

export default UserWallet
