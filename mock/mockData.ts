const stocks = [
  {
    id: 'MSFT',
    stock_name: 'Microsoft',
    stock_price: '$335.00',
    isin: 'US5949181045',
    index: 'NASDAQ',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
  },
  {
    id: 'AAPL',
    stock_name: 'Apple',
    stock_price: '$182.00',
    isin: 'US0378331005',
    index: 'NASDAQ',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
  },
  {
    id: 'NVDA',
    stock_name: 'Nvidia',
    stock_price: '$550.00',
    isin: 'US67066G1040',
    index: 'NASDAQ',
    image_url: 'https://cdn.worldvectorlogo.com/logos/nvidia-7.svg'
  },
  {
    id: '2222.SR',
    stock_name: 'Saudi Aramco',
    stock_price: '$35.00',
    isin: 'SA14TG012N13',
    index: 'Tadawul',
    image_url: 'https://cdn.worldvectorlogo.com/logos/aramco-1.svg'
  },
  {
    id: 'GOOGL',
    stock_name: 'Alphabet (Google)',
    stock_price: '$138.00',
    isin: 'US02079K3059',
    index: 'NASDAQ',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    id: 'AMZN',
    stock_name: 'Amazon',
    stock_price: '$135.00',
    isin: 'US0231351067',
    index: 'NASDAQ',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    id: 'META',
    stock_name: 'Meta Platforms',
    stock_price: '$270.00',
    isin: 'US30303M1027',
    index: 'NASDAQ',
    image_url: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg'
  },
  {
    id: 'BRK.A',
    stock_name: 'Berkshire Hathaway',
    stock_price: '$480,000.00',
    isin: 'US0846707026',
    index: 'NYSE',
    image_url: 'https://static.cdnlogo.com/logos/b/40/berkshire-hathaway.png'
  },
  {
    id: 'LLY',
    stock_name: 'Eli Lilly',
    stock_price: '$580.00',
    isin: 'US5324571083',
    index: 'NYSE',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eli_Lilly_and_Company.svg/2560px-Eli_Lilly_and_Company.svg.png'
  },
  {
    id: 'TSM',
    stock_name: 'TSMC',
    stock_price: '$105.00',
    isin: 'US8740391003',
    index: 'NYSE',
    image_url:
      'https://upload.wikimedia.org/wikipedia/de/7/72/TSMC_202x_logo.svg'
  }
];

const watchList: any[] = [];

export const getStockInfo = (id) => {
  return stocks.find((stock) => stock.id === id);
};

export const addToWatchList = (id) => {
  const stock = getStockInfo(id);
  watchList.push(stock);
  return watchList;
};

export const removeFromWatchList = (id) => {
  const stockIndex = watchList.findIndex((stock) => stock.id === id);
  watchList.splice(stockIndex, 1);
  return watchList;
};

export const getWatchList = () => {
  return watchList;
};

export const getStockList = () => {
  return stocks;
};
