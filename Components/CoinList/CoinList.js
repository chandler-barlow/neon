import styles from '../../styles/ComponentStyles/CoinList.module.css'
import * as BiIcons from 'react-icons/bi'


const CoinList = () => {
    return (
        <div className={styles.container}>
            <p>COINS</p>
            <div className={styles.coinBox}>
                <div className={styles.symbol}>
                    <BiIcons.BiBitcoin />
                </div>
                <div className={styles.leftContainer}>
                    <div className={styles.topContainer}>
                        <span>PRICE</span>
                        <span>TICKER</span>
                    </div>
                    <div className={styles.bottomContainer}>
                        <span>ARROW</span>
                        <span>PERCENTAGE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinList
