import { Transaction } from '../types/transaction';

export const transactions: Transaction[] = [
  {
    id: '1',
    type: 'buy',
    coin: 'BTC',
    amount: 0.025,
    value: 0,
    date: '08/26/2018',
    description: 'Akhirnya Joko bayar Utang'
  },
  {
    id: '2',
    type: 'other',
    coin: 'ETH',
    amount: -5.23, // Using percentage as per screenshot
    value: 0,
    date: '08/26/2018',
    description: 'Cicilan mobil'
  },
  {
    id: '3',
    type: 'other',
    coin: 'LTC',
    amount: -5.23,
    value: 0,
    date: '08/26/2018',
    description: 'Langganan adobe CC'
  },
  {
    id: '4',
    type: 'receive',
    coin: 'BTC',
    amount: 0.025,
    value: 0,
    date: '08/26/2018',
    description: 'Hasil mining 3 minggu'
  }
];
