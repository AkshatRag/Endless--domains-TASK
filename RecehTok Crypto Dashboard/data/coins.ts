import { Coin } from '../types/coin';

export const coins: Coin[] = [
  {
    id: 'btc',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 7356.67,
    change24h: -5.23,
    marketCap: 0,
    sparkline: [30, 40, 35, 50, 49, 60, 70, 91, 125, 110, 105, 115],
  },
  {
    id: 'eth',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 465.22,
    change24h: 132,
    marketCap: 0,
    sparkline: [20, 25, 30, 28, 35, 45, 55, 60, 65, 58, 62, 70],
  },
  {
    id: 'ltc',
    symbol: 'LTC',
    name: 'Litecoin',
    price: 104.23,
    change24h: 75.69,
    marketCap: 0,
    sparkline: [10, 15, 12, 18, 20, 25, 22, 30, 35, 30, 38, 42],
  },
  {
    id: 'btc-idr',
    symbol: 'BTC',
    name: 'Bitcoin (IDR)',
    price: 107543234,
    change24h: 132,
    marketCap: 0,
    sparkline: [40, 35, 45, 50, 45, 55, 60, 65, 70, 75, 80, 85],
  }
];
