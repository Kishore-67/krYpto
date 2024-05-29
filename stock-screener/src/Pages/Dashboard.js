import React, { useState, useEffect } from 'react';
import '../Styles/Dashboard.css';
import Navbar from '../Navbar.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import BitcoinChart from '../Components/BitcoinChart.js';
import Modal from '../Components/Modal.js';



export default function Dashboard() {

  const [showPopup, setShowPopup] = useState(false);
  const [accountBalance, setAccountBalance] = useState(0);
  const [username, setusername] = useState(0);
  const [mailid, setmailid] = useState(0);
  
  const investedValue = 10000;
  const returns = 7500;
  const profitAndLoss = returns - investedValue;
  const profitAndLossPercentage = ((profitAndLoss / investedValue) * 100).toFixed(2);

  const userDetails = {
    name: "Kishore",
    email: "kishore123@gmail.com",
    phno:389378387,
    age: 19,
    gender: "Male",
    location: "New York, USA"
  };

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('http://localhost:5000/balance');
        if (response.data && response.data.newBalance) {
          setAccountBalance(response.data.newBalance);


        }
      } catch (error) {
        console.error('Failed to fetch balance', error);
      }
    };

    fetchBalance();
  }, []);

  const handleAddFunds = async () => {
    const amount = prompt("Enter the amount to be added:");
    if (amount && !isNaN(amount)) {
      const newBalance = accountBalance + parseFloat(amount);
      setAccountBalance(newBalance);
      alert(`Funds added successfully. New account balance: $${newBalance}`);

      try {
        await axios.post('http://localhost:5000/Addfunds', { amount });
        await axios.post('http://localhost:5000/Balance', { newBalance });
      } catch (error) {
        console.error('Error in adding funds:', error);
        alert('Failed to add funds');
      }
    } else {
      alert("Invalid amount. Please enter a valid number.");
    }
  };

  const handleWithdrawal = async () => {
    const amount = prompt("Enter the amount to be withdrawn:");
    if (amount && !isNaN(amount)) {
      const newBalance = accountBalance - parseFloat(amount);
      if (newBalance >= 0) {
        setAccountBalance(newBalance);
        alert(`Withdrawal successful. New account balance: $${newBalance}`);

        try {
          await axios.post('http://localhost:5000/Withdraw', { amount });
          await axios.post('http://localhost:5000/Balance', { newBalance });
        } catch (error) {
          console.error('Error in withdrawal:', error);
          alert('Failed to withdraw funds');
        }
      } else {
        alert("Insufficient funds for withdrawal.");
      }
    } else {
      alert("Invalid amount. Please enter a valid number.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      
      
      <div className='Main'>
      <Navbar />
      {/* {showPopup && <Modal onClose={closePopup} />} */}
        <div className='AccountActionsCard'>
          <div style={{ marginLeft: 25,   fontFamily: 'Signika Negative, sans-serif', fontSize: 30,fontWeight:400,color:'white' }}>Account Balance: ${accountBalance}</div>
          <div className='AccountAction' onClick={handleAddFunds}>Add Funds</div> 
          <div className='AccountAction' onClick={handleWithdrawal}>Withdrawal</div>
        </div>
        <div className='CardContainer'>
          <div className='txt'>Dashboard</div>
          <div className='Card'>
            <CircularProgressbar
              value={100}
              text={`Invested Value: $${investedValue}`}
              strokeWidth={10}
              styles={buildStyles({
                pathColor: '#3E98C7',
                textColor: '#3E98C7',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div className='Card2'>
            <CircularProgressbar
              value={(returns / investedValue) * 100}
              text={`Returns: $${returns}`}
              strokeWidth={10}
              styles={buildStyles({
                pathColor: '#5cb85c',
                textColor: '#5cb85c',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div className='Card3'>
            <CircularProgressbar
              value={25}
              text={`P&L: $${profitAndLoss} (${profitAndLossPercentage}%)`}
              strokeWidth={10}
              styles={buildStyles({
                pathColor: profitAndLossPercentage >= 0 ? '#5cb85c' : '#d9534f',
                textColor: profitAndLossPercentage >= 0 ? '#5cb85c' : '#d9534f',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div className='UserDetailsCard'>
            <div className='UserDetails'>
              <h2>User Details</h2>
              <p>Name: {userDetails.name}</p>
              <p>Email: {userDetails.email}</p>
              <p>Phone: {userDetails.phno}</p>
              <p>Age: {userDetails.age}</p>
              <p>Gender: {userDetails.gender}</p>
              <p>Location: {userDetails.location}</p>
            </div>
          </div>
        </div>
        <div className='Investment-container'>
          
               <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 30, fontWeight: 200, color: 'White' }}>EVERY INVESTMENTS IN A SINGLE PLACE</div> 
               <div style={{display:'flex',position:'absolute',justifyContent:'flex-start',marginTop:'35px',backgroundColor:'white',borderRadius:'20px',height:'290px'}}>
               <BitcoinChart/>
               </div>
                <div className='Investment'>
                  <div style={{fontFamily:'Poetsen One, sans-serif'}}> Current Investment
                  <div className='Inve'>
                     NO DATA IS AVAILABLE!
                 </div>
                 </div>
                </div>

                
        </div>
      </div>
    </>
  );
}
