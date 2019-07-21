import React, { Component } from "react";
import { capitalizeFirstLetter } from "../../services/utils";
import { connect } from "react-redux";
import "./restaurant-list.scss";

export class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      priceFilter: [],
      resultsMessage: ""
    };
  }

  componentDidUpdate(prevProps) {
    const { restaurants, searchValue, searchOption } = this.props;
    let resultsMessage;
    if (
      prevProps.restaurants.restaurants.length !==
      restaurants.restaurants.length
    ) {
      resultsMessage =
        searchOption === "City"
          ? `${
              restaurants.total_entries
            } restaurants found in ${capitalizeFirstLetter(searchValue)}`
          : `Found ${
              restaurants.total_entries
            } restaurants containing the name "${capitalizeFirstLetter(
              searchValue
            )}"`;
      return this.setState({ resultsMessage });
    }
  }

  render() {
    const { restaurants } = this.props;
    return (
      <div className="restaurant-list-container">
        <Filters />
        <List
          restaurantsData={restaurants}
          resultsMessage={this.state.resultsMessage}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    restaurants: state.restaurants.data
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

export const List = ({ restaurantsData, resultsMessage }) => {
  const { per_page, current_page, restaurants } = restaurantsData;

  const restaurantListJSX = restaurants.map((item, index) => {
    return (
      <div className="list-item-wrapper" key={index}>
        <div className="image-wrapper">
          <img src={item.image_url} alt="restaurant" />
        </div>

        <div className="description-wrapper">
          <h2>{item.name}</h2>
          <h4>Location: {`${item.city}, ${item.state}`}</h4>
          <h4>Country: {item.country}</h4>
        </div>

        <div className="price-wrapper">
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign greyed" />
        </div>
      </div>
    );
  });

  return (
    <div className="list-container">
      <h3>{resultsMessage}</h3>
      {restaurantListJSX}
    </div>
  );
};
