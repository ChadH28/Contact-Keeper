import React, {Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import ContactContext from '../../context/contact/contactContext';
import logo from '../../images/CA_logo.png';

const Navbar = ({title, icon}) => {

    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const {isAuthenticated, logout, user} = authContext
    const {clearContacts} = contactContext

    const onLogout = () => {
        logout();
        clearContacts();
    }

    const authLinks = (
        <Fragment>
            <li>
            <button id='username' className='btn'>
                Hello {user && user.name}, Welcome to Contact Assistant
            </button>
            </li>
        <li>
            <button id='logout-btn' className='btn btn-success' onClick={onLogout} href="#!">
                <i className='fas fa-sign-out-alt'/> <span className='hide-sm'>Logout</span>
            </button>
        </li>
        </Fragment>
    );
    
    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register' className='btn btn-success user-btn'>Register</Link>
            </li>
            <li>
                <Link to='/login' className='btn btn-success user-btn'>Login</Link>
            </li>
        </Fragment>
    );
    return (
      <div className="navbar bg-success">
        <div className="container">
          <div className="navbar-brand">
            <img id="logo" className="img-fluid" src={logo} />
          </div>
          <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
        </div>
      </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Contact Assistant',
    icon: 'fas fa-address-book' 
}

export default Navbar
