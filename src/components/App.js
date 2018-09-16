import React from 'react';
import {Link} from 'react-router';
import './app.scss';

const App = (props) => {
  return (
      <div className="container">
        <nav className="navbar navbar-default" style={navbarStyle}>
          <div className="container-fluid" style={navbarStyle}>
            <div className="navbar-header" style={navbarStyle}>
              <a className="navbar-brand" href="#">Reactive Keys</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/instruments">Product Line</Link></li>
                <li><Link to="/basket">Basket</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Each smaller components */}
        {props.children}
      </div>
    );
  };

  const navbarStyle = {
    backgroundColor: 'DeepSkyBlue',
  color: 'black',
};


export default App;
