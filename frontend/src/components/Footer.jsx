import React from 'react';

import fb from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
   return (
      <>
         <div className='footer'>
            <div className='footer-inner'>
               <a href="#" className='donate-footer'>Ajude Watchlist</a>
               <div className="social-icons">
                  <a href="#" alt='facebook'>
                     <img src={fb} />
                  </a>
                  <a href="#" alt='instagram'>
                     <img src={instagram} />
                  </a>
                  <a href="#" alt='twitter'>
                     <img src={twitter} />
                  </a>
               </div>
            </div>
         </div>
      </>
   )
}

export default Footer