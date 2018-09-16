import React from 'react';

const InstrumentDetails = ({instrument, addToCart}) => {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{instrument.title}</h4>
          <ul>
            <li><stron>Author: </stron> {instrument.author}</li>
            <li><stron>Price: </stron> ${instrument.price}</li>
            <li><stron>Year: </stron> {instrument.year}</li>
            <br/>
            <button className="btn btn-primary" onClick={e => addToCart(instrument)}>Buy</button>
          </ul>
        </div>
      </div>
    );
};


export default InstrumentDetails;
