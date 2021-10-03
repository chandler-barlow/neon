import styles from '../../styles/ComponentStyles/CoinList.module.css'
import * as IoIcons from 'react-icons/io'
import { coinListData } from './CoinListData'


const CoinList = () => {
    
    return (
        <div className={styles.container}>
            <p>MARKET WATCH</p>

            <ul className={styles.coinCardList}>
                {coinListData.map((item, index) => {
                    return (
                        <li key={index} className={styles.itemMapContainer}>
                            <div style={{background: item.coinColor}} className={styles.coinBox}>
                                <div className={styles.symbol}>
                                    {item.symbol}
                                </div>
                                <div className={styles.rightContainer}>
                                    <div className={styles.topContainer}>
                                        <span style={{fontSize: 17, paddingRight: 10}}>$ {item.currentPrice}</span>
                                        <span style={{fontSize: 12, fontWeight: 'bold'}}>{item.ticker}</span>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}} className={styles.bottomContainer}>
                                        <IoIcons.IoMdArrowDropup style={{display: 'inline', color: '#50E3C2'}}/>
                                        <span style={{fontSize: 11, color: '#50E3C2'}}>{item.priceChangePercentage}%</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default CoinList
