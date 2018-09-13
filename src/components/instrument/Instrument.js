import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/instrumentActions'

class Instrument extends React.Component{
  constructor(props){
    super(props);
  }

  submitInstrument(input){
    this.props.createInstrument(input);
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
            var input = {name: nameInput.value, description: descriptionInput.value, price: priceInput.value, quantity: quantityInput.value, image: imageInput.value};

            this.submitInstrument(input);

            e.target.reset();
          }}>
          <input type="text" name="name" ref={node => nameInput = node}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}


// Maps state from store to props

const mapStateToProps = (state, ownProps) => {
  return {
    // We can now say this.props.instruments
    instruments: state.instruments
  }
};

// Maps actions to props

const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createInstrument: instrument => dispatch(instrumentActions.createInstrument(instrument))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Instrument);
