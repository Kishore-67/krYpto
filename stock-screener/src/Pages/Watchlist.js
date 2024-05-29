import React from 'react';
import '../Styles/Watchlist.css';
import NewsFeed from './NewsFeed';
function Watchlist() {
  const stocks = [
    { name: 'Apple Inc.', symbol: 'AAPL', price: 145.32, change: -0.48 },
    { name: 'Microsoft Corporation', symbol: 'MSFT', price: 249.05, change: 1.27 },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', price: 3271.12, change: -15.62 },
    { name: 'Alphabet Inc.', symbol: 'GOOGL', price: 2445.00, change: 5.15 },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: 672.37, change: -2.84 },
    { name: 'Apple Inc.', symbol: 'AAPL', price: 145.32, change: -0.48 },
    { name: 'Microsoft Corporation', symbol: 'MSFT', price: 249.05, change: 1.27 },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', price: 3271.12, change: -15.62 },
    { name: 'Alphabet Inc.', symbol: 'GOOGL', price: 2445.00, change: 5.15 },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: 672.37, change: -2.84 },
    { name: 'Apple Inc.', symbol: 'AAPL', price: 145.32, change: -0.48 },
    { name: 'Microsoft Corporation', symbol: 'MSFT', price: 249.05, change: 1.27 },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', price: 3271.12, change: -15.62 },
    { name: 'Alphabet Inc.', symbol: 'GOOGL', price: 2445.00, change: 5.15 },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: 672.37, change: -2.84 },
    { name: 'Apple Inc.', symbol: 'AAPL', price: 145.32, change: -0.48 },
    { name: 'Microsoft Corporation', symbol: 'MSFT', price: 249.05, change: 1.27 },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', price: 3271.12, change: -15.62 },
    { name: 'Alphabet Inc.', symbol: 'GOOGL', price: 2445.00, change: 5.15 },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: 672.37, change: -2.84 },
    // Add more stocks as needed
  ];

  return (
    <>

        <div style={{fontFamily:'fantasy',fontSize:30}}>Watchlist</div>

    <div className="stocks-watchlist">

      <table className="stock-table">
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Stock Symbol</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.symbol}</td>
              <td>{stock.price}</td>
              <td className={stock.change >= 0 ? 'positive' : 'negative'}>
                {stock.change >= 0 ? '+' : ''}{stock.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Watchlist;
