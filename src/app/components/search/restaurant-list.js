import React, { Component } from "react";
import { capitalizeFirstLetter } from "../../services/utils";
import { connect } from "react-redux";
import Spinner from "../common/spinner";
import "./restaurant-list.scss";

export class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      priceFilter: ["displayAll"],
      resultsMessage: ""
    };
  }

  componentDidUpdate(prevProps) {
    const { restaurants, searchValue, searchOption } = this.props;
    const totalEntries = restaurants.data.total_entries;
    let resultsMessage;
    if (prevProps.restaurants.data.total_entries !== totalEntries) {
      resultsMessage =
        searchOption === "City"
          ? `${totalEntries} restaurants found in ${capitalizeFirstLetter(
              searchValue
            )}`
          : `Found ${totalEntries} restaurants containing the name "${capitalizeFirstLetter(
              searchValue
            )}"`;
      return this.setState({ resultsMessage });
    }
  }

  handlePriceFilter = selectedRating => {
    const priceFilterArrayCopy = this.state.priceFilter;
    const selecetItemIndex = priceFilterArrayCopy.indexOf(selectedRating);

    // Add or remove selected price filters
    if (selecetItemIndex > -1) {
      priceFilterArrayCopy.splice(selecetItemIndex, 1);
    } else priceFilterArrayCopy.push(selectedRating);

    this.setState({ priceFilter: priceFilterArrayCopy });
  };

  render() {
    const { restaurants } = this.props;
    const { priceFilter, resultsMessage } = this.state;
    return (
      <div className="restaurant-list-container">
        <Filters
          handlePriceFilter={this.handlePriceFilter}
          priceFilter={priceFilter}
        />
        {restaurants.fetching ? (
          <Spinner />
        ) : (
          <List
            restaurantsData={restaurants.data}
            resultsMessage={resultsMessage}
            priceFilter={priceFilter}
          />
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

export default connect(
  mapStateToProps,
  {}
)(RestaurantList);

export const Filters = ({ handlePriceFilter, priceFilter }) => {
  return (
    <div className="filters-container">
      <i className="fa fa-money-bill-wave" />
      &nbsp;&nbsp;&nbsp;Price filter
      <div className="price-filter">
        <p
          className={`${priceFilter.indexOf(2) > -1 && "selected"}`}
          onClick={() => handlePriceFilter(2)}
        >
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
        </p>
        <p
          className={`${priceFilter.indexOf(3) > -1 && "selected"}`}
          onClick={() => handlePriceFilter(3)}
        >
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
        </p>
        <p
          className={`${priceFilter.indexOf(4) > -1 && "selected"}`}
          onClick={() => handlePriceFilter(4)}
        >
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
        </p>
      </div>
      <i className="fas fa-list-ol" />
      &nbsp;&nbsp;&nbsp;Restaurants per page
      <div className="display-per-page-filter">
        <p className="">5</p>
        <p className="">10</p>
        <p className="">15</p>
        <p className="selected">25</p>
        <p className="">50</p>
        <p className="">100</p>
      </div>
    </div>
  );
};

export const List = ({ restaurantsData, resultsMessage, priceFilter }) => {
  const { current_page, restaurants } = restaurantsData;

  // Filter restaurants by price rating
  let filteredRestaurantList = restaurants;
  // If array contains any values apart from "displayAll", do filtering
  if (priceFilter.length !== 1) {
    filteredRestaurantList = restaurants.filter(
      item => priceFilter.indexOf(item.price) > -1
    );
  }

  // Display filtered restaurants
  const restaurantListJSX = filteredRestaurantList.map((item, index) => {
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
          <i className={`fas fa-dollar-sign ${item.price < 2 && "greyed"}`} />
          <i className={`fas fa-dollar-sign ${item.price < 3 && "greyed"}`} />
          <i className={`fas fa-dollar-sign ${item.price < 4 && "greyed"}`} />
        </div>
      </div>
    );
  });

  return (
    <div className="list-container">
      <h3>{resultsMessage}</h3>
      {restaurantListJSX}
      {filteredRestaurantList.length ? (
        <div className="page-indicator-container">
          <i className="fas fa-angle-left" />
          <h4>Page 1</h4>
          <i className="fas fa-angle-right" />
        </div>
      ) : null}
    </div>
  );
};
