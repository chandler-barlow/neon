import * as BiIcons from 'react-icons/bi'
import * as SiIcons from 'react-icons/si'
import * as FaIcons from 'react-icons/fa'

const coinListData = [
    {
        symbol: <BiIcons.BiBitcoin />,
        currentPrice: 9999,
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
    {
        symbol: <FaIcons.FaViacoin />,
        currentPrice: 0.341,
        ticker: 'VIA',
        priceChangePercentage: 12.34,
        coinColor: '#7209b7',
    },
    {
        symbol: <SiIcons.SiPoly />,
        currentPrice: 50.29,
        ticker: 'RAD',
        priceChangePercentage: 39.69,
        coinColor: '#E63946',
    },
    {
        symbol: <SiIcons.SiAbbrobotstudio />,
        currentPrice: 2387,
        ticker: 'COO',
        priceChangePercentage: 56.69,
        coinColor: '#f4acb7',
    },
]

export { coinListData }