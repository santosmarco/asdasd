export const portfolioPerformance = [
  { date: '2024-01', value: 1000000, returns: 2.3 },
  { date: '2024-02', value: 1050000, returns: 5.0 },
  { date: '2024-03', value: 1150000, returns: 9.5 },
  { date: '2024-04', value: 1200000, returns: 4.3 },
  { date: '2024-05', value: 1280000, returns: 6.7 },
  { date: '2024-06', value: 1350000, returns: 5.5 },
];

export const fundAllocation = [
  { name: 'Equities', value: 45 },
  { name: 'Fixed Income', value: 25 },
  { name: 'Real Estate', value: 15 },
  { name: 'Commodities', value: 10 },
  { name: 'Cash', value: 5 },
];

export const riskMetrics = {
  sharpeRatio: 1.8,
  volatility: 12.5,
  beta: 0.85,
  alpha: 3.2,
  maxDrawdown: -15.4,
  trackingError: 4.2,
};

export const transactions = [
  {
    id: 1,
    type: 'BUY',
    asset: 'AAPL',
    amount: 1500000,
    price: 198.5,
    date: '2024-03-15',
    status: 'completed',
  },
  {
    id: 2,
    type: 'SELL',
    asset: 'GOOGL',
    amount: 800000,
    price: 142.8,
    date: '2024-03-14',
    status: 'completed',
  },
  {
    id: 3,
    type: 'BUY',
    asset: 'MSFT',
    amount: 2000000,
    price: 425.2,
    date: '2024-03-13',
    status: 'pending',
  },
];

export const investors = [
  {
    id: 1,
    name: 'John Anderson',
    invested: 5000000,
    joinDate: '2023-06-15',
    status: 'active',
    returns: 12.5,
  },
  {
    id: 2,
    name: 'Sarah Williams',
    invested: 3500000,
    joinDate: '2023-08-22',
    status: 'active',
    returns: 10.8,
  },
  {
    id: 3,
    name: 'Michael Chen',
    invested: 4200000,
    joinDate: '2023-09-10',
    status: 'active',
    returns: 11.2,
  },
];

export const comments = [
  {
    id: 1,
    type: 'general',
    author: 'John Anderson',
    content: 'Market volatility seems to be increasing. Should we adjust our strategy?',
    timestamp: '2024-03-15T10:30:00Z',
    avatar: 'JA',
  },
  {
    id: 2,
    type: 'transaction',
    transactionId: 1,
    author: 'Fund Manager',
    content: 'Increased position in AAPL due to strong earnings forecast',
    timestamp: '2024-03-15T11:00:00Z',
    avatar: 'FM',
  },
  {
    id: 3,
    type: 'general',
    author: 'Sarah Williams',
    content: 'Can we schedule a meeting to discuss Q2 projections?',
    timestamp: '2024-03-14T15:45:00Z',
    avatar: 'SW',
  },
];