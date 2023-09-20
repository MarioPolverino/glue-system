import React from 'react';
import '../../Assets/Styles/Footer.css';
import Menu from '../Menu/Index';

function Footer(){
    return(
        <div id='footer'>
            <div className='bar'>
                <Menu />
            </div> 
        </div>
    )
}

export default Footer;