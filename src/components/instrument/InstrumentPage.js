import React from 'react';
import { connect } from 'react-redux';
import InstrumentForm from './InstrumentForm';
import { Link } from 'react-router';
import * as instrumentActions from '../../actions/instrumentActions';

class Instrument extends React.Component{
  constructor(props){
    super(props);
  }

  submitInstrument(input){
    this.props.createInstrument(input);
  }

  render(){

    return(
      <div className="row">
        <div className="col-md-6">
          <h3>instruments</h3>
          <table className="table">
            <thead>
              <th>
                <td>Title</td>
                <td></td>
              </th>
            </thead>
            <tbody>
            {this.props.instruments.map((instrument, index) => {
              return(
                <tr key={index}>
                  <td>{instrument.title}</td>
                  <td><Link to={`/instruments/${instrument.id}`}>View</Link></td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New instrument</h3>
         <InstrumentForm submitInstrument={this.submitInstrument.bind(this)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    instruments: state.instruments
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createInstrument: instrument => dispatch(instrumentActions.createInstrument(instrument))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Instrument);
