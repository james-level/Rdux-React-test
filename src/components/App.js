import React from 'react';
import {Link} from 'react-router';
import './app.scss';

const App = (props) => {
  return (
      <div className="container">
        <nav className="navbar navbar-default" style={navStyle}>
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" style={{color: 'white'}} href="#">Reactive Keys</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/" style={{color: 'white'}}>Home</Link></li>
                <li><Link to="/about" style={{color: 'white'}}>About Us</Link></li>
                <li><Link to="/instruments" style={{color: 'white'}}>Product Line</Link></li>
                <li><Link to="/basket" style={{color: 'white'}}>Basket</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Each smaller components */}
        {props.children}
      </div>
    );
  };

  const navStyle = {
    backgroundColor: '#330066',
  };



export default App;
