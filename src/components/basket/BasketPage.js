import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as instrumentActions from '../../actions/instrumentActions';


class BasketPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

  componentDidMount(){
    this.props.fetchCart();
  }

    render() {
        return (
            <div>
                <h1>Basket Page</h1>
                <table className="table">
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                  </tr>
                  {this.props.items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                      </tr>
                    );
                  })}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      items: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCart: instrumentId => dispatch(instrumentActions.fetchCart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
