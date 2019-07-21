import React, { Component } from "react";
import { connect } from "react-redux";
import "./restaurant-list.scss";

export class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      priceFilter: []
    };
  }

  render() {
    return (
      <div className="restaurant-list-container">
        <Filters />
        <List />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    generalInfo: state.generalInfo.data
  };
};

export default connect(
  mapStateToProps,
  {}
)(RestaurantList);

export const Filters = props => {
  return (
    <div className="filters-container">
      <i className="fa fa-money-bill-wave" />
      &nbsp;&nbsp;&nbsp;Price filter
      <div className="price-filter">
        <p className="selected">
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
        </p>
        <p>
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
        </p>
        <p>
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
        </p>
      </div>
    </div>
  );
};

export const List = props => {
  return (
    <div className="list-container">
      <h4>585 Restaurants found in Winnipeg</h4>
    </div>
  );
};
