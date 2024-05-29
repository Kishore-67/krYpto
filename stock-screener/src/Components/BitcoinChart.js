import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';


export default function BitcoinChart() {


    function formatTimestamp(timestamp) {
        if (timestamp.toString().length === 10) {
          timestamp *= 1000; // Convert seconds to milliseconds
        }
        const date = new Date(timestamp);
        const options = { hour: 'numeric', minute: 'numeric' };
        return date.toLocaleString('en-US', options);
      }
      
      function getCurrentTimestamp() {
        const now = new Date();
        return now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
      }
      
      const [currentPrice, setCurrentPrice] = useState(null);

    const [priceData, setPriceData] = useState(null);

    useEffect(() => {    
    const fetchData = async () => {
        const options = {
          method: 'GET',
          url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history',
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h'
          },
          headers: {
            'X-RapidAPI-Key': 'd32cfa6792mshe93314b0e40a130p1d3ef8jsndfd05eaa83e4',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
          }
        };
  
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setPriceData(response.data);
          setCurrentPrice(parseFloat(response.data.data.history[response.data.data.history.length - 1].price));
        } catch (error) {
          console.error('Error fetching price data:', error);
        }
      };
  
      fetchData();
  
      const interval = setInterval(() => {
        fetchData();
      }, 10000); // Fetch latest price data every 10 seconds
  
      return () => clearInterval(interval);
    }, []);

  return (
   <>
   
   {priceData && (
              <ReactApexChart
                options={{
                  chart: {
                    type: 'line',
                    height: 600,
                    toolbar: { show: false }
                  },
                  title: {
                    text: 'Bitcoin',
                    align: 'center',
                    style: {
                      fontSize: '34px',
                      fontFamily: 'fantasy',
                      color: 'black'
                    }
                  },
                  xaxis: {
                    categories: priceData.data.history.map(item => formatTimestamp(item.timestamp)).reverse(),
                    labels: { style: { fontSize: '32px' } }
                  },
                  yaxis: {
                    labels: {
                      formatter: val => `$${parseFloat(val).toFixed(2)}`,
                      style: { fontSize: '12px' }
                    }
                  }
                }}
                series={[{
                  name: 'Bitcoin Price',
                  data:priceData.data.history.map(item => item.price).reverse(),
                }]}
                type="line"
                height={350}
                width={600}
              />
            )}
   
   </>
  )
}
