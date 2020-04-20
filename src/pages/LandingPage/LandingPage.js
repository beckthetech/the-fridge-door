import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../EquipT.png';

const LandingPage = (props) => {
    const landingPage = props.user ?
        <div className="LandingPage">
            <Link to='/marketplace' className="logo-link"><img src={Logo} className="logo"
className="logo" /></Link>
        </div>
        :
        <div className="LandingPage">
            <Link to='/login' className="logo-link"><img src={Logo} alt="logo" className="logo"
className="logo"/></Link>
        </div>;
    return (
        <div>
            {landingPage}
        </div>
    );
}

export default LandingPage;
