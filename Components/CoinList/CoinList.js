import styles from '../../styles/ComponentStyles/CoinList.module.css'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io'


const CoinList = () => {
    return (
        <div className={styles.container}>
            <p>COINS</p>
            <div className={styles.coinBox}>
                <div className={styles.symbol}>
                    <BiIcons.BiBitcoin style={{fontSize: 30}}/>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.topContainer}>
                        <span style={{fontSize: 17}}>1.765</span>
                        <span style={{fontSize: 12, fontWeight: 'bold'}}>BTC</span>
                    </div>
                    <div className={styles.bottomContainer}>
                        <IoIcons.IoMdArrowDropup />
                        <span style={{fontSize: 11}}>+12.5%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinList
