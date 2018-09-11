import React from 'react';

class Instrument extends React.Component{
  constructor(props){
    super(props);
  }

  submitInstrument(input){
    alert('Submitted.')
  }

  render(){

    let nameInput;
    let descriptionInput;
    let priceInput;
    let quantityInput;
    let imageInput;

    return(
      <div>
        <h3>Current Product Range</h3>
        <ul>
          {/* Go through instruments array */ }
          {this.props.instruments.map((instrument, index) => <li key={index}>{instrument.name}</li>
         )}
        </ul>
        <div>
          <h3>Instrument Form</h3>
          <form onSubmit={e => {
            e.preventDefault();
            var input = {name: nameInput.value, description: descriptionInput.value, price: priceInput.value, quantity: quantityInput.value, image: imageInput.value}
          }}
        </div>
      </div>
    )
  }
}

export default Instrument;
