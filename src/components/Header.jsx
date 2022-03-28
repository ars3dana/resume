import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <a href="#top">
                <div className="header__item">About</div>
            </a>

            <a href="#projects">

                <div className="header__item">Projects</div>
            </a>
            <a href="#contact">

                <div className="header__item">Contact Me</div>
            </a>

        </div>
    );
};

export default Header;