import React from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';


const NavbarLogin = () => {
    return (
        <header className='note-detail-header'>
            <h1><Link to="/">Aplikasi Catatan Pribadi</Link></h1>
            <ThemeButton/>
        </header>
    )
}

export default NavbarLogin;