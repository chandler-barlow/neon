import * as BiIcons from 'react-icons/bi'
import * as SiIcons from 'react-icons/si'

const coinListData = [
    {
        symbol: <BiIcons.BiBitcoin />,
        currentPrice: 1.222,
        ticker: 'BTC',
        priceChangePercentage: 12.5,
        coinColor: '#FF9A00',
    },
    {
        symbol: <SiIcons.SiEthereum />,
        currentPrice: 23.23,
        ticker: 'ETH',
        priceChangePercentage: 5.23,
        coinColor: '#00A2FF',
    },
    {
        symbol: <SiIcons.SiLitecoin />,
        currentPrice: 380.2,
        ticker: 'LTC',
        priceChangePercentage: 39.69,
        coinColor: '#75749C',
    },
]

export { coinListData }