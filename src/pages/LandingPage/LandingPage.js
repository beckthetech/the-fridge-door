import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../EquipT.png';

const LandingPage = (props) => {
    const landingPage = props.user ?
        <div className="LandingPage">
            <Link to='/marketplace' className="logo"><img width="500" height="500" src={Logo} /></Link>
        </div>
        :
        <div className="LandingPage">
            <Link to='/login' className="logo"><img width="500" height="500" src={Logo} alt="logo"/></Link>
        </div>;
    return (
        <div>
            {landingPage}
        </div>
    );
}

export default LandingPage;
