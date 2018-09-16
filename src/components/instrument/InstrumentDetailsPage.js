import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import InstrumentDetails from './InstrumentDetails'
import * as instrumentActions from '../../actions/instrumentActions';


class InstrumentDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
      this.props.fetchInstrumentById(this.props.params.id);
    }

    addToCart(instrument){
      const item = {
        title: instrument.title,
        price: instrument.price
      };
      this.props.addToCart(item);
    }

    render() {
        return (
            <div>
                <h1>Instrument Details Page</h1>
                <InstrumentDetails instrument={this.props.instrument} addToCart={this.addToCart.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      instrument: state.instrument
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchInstrumentById: instrumentId => dispatch(instrumentDetails.fetchInstrumentById(instrumentId)),
      addToCart: item => dispatch(instrumentDetails.addToCart(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentDetailsPage);
