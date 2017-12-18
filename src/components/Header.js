import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row mx-auto">
                <i className="fa fa-calculator fa-3x text-white my-auto"></i>
                <div className="h3 ml-3 my-auto text-light">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;