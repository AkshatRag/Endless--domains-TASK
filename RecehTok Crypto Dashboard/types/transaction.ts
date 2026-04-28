export type Transaction = {
  id: string;
  type: 'buy' | 'sell' | 'receive' | 'send' | 'other';
  coin: string;
  amount: number;
  value: number;
  date: string;
  description: string;
};
