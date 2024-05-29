import React from 'react'
import '../Styles/Home.css'
import Navbar from '../Navbar'
import crypto from '../Resources/crypto.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Main1'>
      <Navbar/>
       
            <div className='Ca-con'>
        
                 <h1>Welcome to krYpto ultimate Crypto Companion !</h1>   
                  <div className='T1'>
                      $  Dive into the dynamic world of cryptocurrencies with krYpto, your all-in-one platform for market insights, trading simulations, and portfolio management.
                   <div/>   
                      <div className='T1'> 
                      $  Whether you just beginning your crypto journey, krYpto equips you with the tools and knowledge to navigate the digital financial frontier.</div>
                 </div>

                   <Link to={'/Dashboard'} ><div className='but'>
                        Dashboard 
                    </div></Link>

            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                  <div className='pap-tra'>
                      <div className='pap-1'>Test Your Crypto knowledge here !</div>
                      <div className='pap-2'>Test your trading skills without the risk through our advanced paper trading feature </div>
                      <div className='pap-2'>Simulate real market conditions, execute trades, and test strategies using virtual </div>
                      <div className='pap-2'>Providing detailed order management and trade history.</div>

                  </div>

                  <div style={{marginTop:'60px'}}>
                      <img src={crypto} className='crypto' alt='crypto'height={350} width={600} />
                      <Link to={'/Crypto'} ><div className='but1'>Trade now</div></Link>
                  </div>
            </div>
    
    </div>
  )
}

export default Home