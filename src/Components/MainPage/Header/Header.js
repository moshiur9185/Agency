import React from 'react';
import "./Header.css";
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className="header">
            <NavigationBar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;