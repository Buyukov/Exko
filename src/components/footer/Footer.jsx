import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='Foter__item'>
                <h2 className='footer__logo'>EXKO</h2>
                <div className='footer__social'>
                    <a href='/' alt="">INSTAGRAM</a>
                    <a href='/' alt="">FACEBOOK</a>
                    <a href='/' alt="">TWITTER</a>
                    <a href='/' alt="">WHATSAPP</a>
                </div>
                <p>
                © Crypticalcoder. All rigths reserved
                </p>
            </div>
        </footer>
      )
}

export default Footer