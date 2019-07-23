import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updatePage,
  clearRestaurantsList
} from "../../store/actions/user-actions";
import { fetchStats, fetchRestaurants } from "../../store/actions/api-actions";
import TextField from "material-ui/TextField";
import RestaurantList from "./restaurant-list";
import Spinner from "../common/spinner";
import "./search.scss";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchOption: "City",
      searchValue: "",
      displayPerPage: 25,
      pageNumber: 1,
      requestSubmitted: false
    };
  }
  componentDidMount() {
    const { updatePage, fetchStats, generalInfo } = this.props;
    updatePage("search");

    // Only call fetchStats on initial page load (countries list is empty)
    if (!generalInfo.data.countries) fetchStats();
  }

  handleClick = option => {
    this.setState({
      searchOption: option
    });
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value, requestSubmitted: false });
    if (this.props.hasSearchError) this.props.clearRestaurantsList();
  };

  handleSubmit = () => {
    // searchValue = eg. "toronto", "winnipeg", "ney york" etc
    // searchOption = "City" or "Restaurant"
    const { searchValue, searchOption, displayPerPage } = this.state;
    this.props.fetchRestaurants(searchValue, searchOption, displayPerPage, 1);
    this.setState({
      pageNumber: 1,
      requestSubmitted: true
    });
  };

  // Update display per page or update page number
  updateDisplayContent = (perPage, pageNum) => {
    const { searchValue, searchOption } = this.state;
    if (pageNum === 0) return;

    this.setState({ displayPerPage: perPage, pageNumber: pageNum });

    if (!!searchValue)
      this.props.fetchRestaurants(searchValue, searchOption, perPage, pageNum);
  };

  render() {
    const {
      searchOption,
      searchValue,
      displayPerPage,
      pageNumber,
      requestSubmitted
    } = this.state;
    const { generalInfo } = this.props;
    return (
      <div className="search-page-container">
        <div className="search-box-wrapper">
          <div className="left-side-wrapper">
            {generalInfo.fetching ? (
              <Spinner />
            ) : (
              <GeneralDataDisplay generalInfo={generalInfo.data} />
            )}
          </div>
          <div className="right-side-wrapper">
            <SearchArea
              searchOption={searchOption}
              searchValue={searchValue}
              handleClick={this.handleClick}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </div>
        </div>

        <RestaurantList
          searchOption={searchOption}
          searchValue={searchValue}
          updateDisplayContent={this.updateDisplayContent}
          displayPerPage={displayPerPage}
          pageNumber={pageNumber}
          requestSubmitted={requestSubmitted}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    generalInfo: state.generalInfo,
    hasSearchError: !!state.restaurants.error
  };
};

export default connect(
  mapStateToProps,
  { updatePage, fetchStats, fetchRestaurants, clearRestaurantsList }
)(Search);

export const GeneralDataDisplay = ({ generalInfo }) => {
  return (
    <>
      <h1>
        <span>{generalInfo.countries}</span> countries
      </h1>
      <br />
      <h1>
        <span>{generalInfo.cities}</span> cities
      </h1>
      <br />
      <h1>
        <span>{generalInfo.restaurants}</span> restaurants
      </h1>
    </>
  );
};

export const SearchArea = props => {
  const {
    searchValue,
    searchOption,
    handleClick,
    handleSubmit,
    handleChange
  } = props;
  return (
    <>
      <h3>Lookup restaurants</h3>
      <br />
      <div className="search-option-wrapper">
        <h4
          onClick={() => handleClick("City")}
          className={`${searchOption === "City" && "selected"}`}
        >
          by city
        </h4>
        <h4
          onClick={() => handleClick("Restaurant")}
          className={`${searchOption === "Restaurant" && "selected"}`}
        >
          by restaurant name
        </h4>
      </div>

      <div className="search-input-wrapper">
        <TextField
          hintText={`${searchOption} name`}
          floatingLabelText={`Search ${searchOption}`}
          inputStyle={{ color: "#fff" }}
          floatingLabelStyle={{ color: "#7c6335" }}
          floatingLabelShrinkStyle={{ color: "#00BCD4" }}
          hintStyle={{ color: "#7c6335" }}
          value={searchValue}
          onChange={handleChange}
        />
        <button onClick={() => handleSubmit()}>SEARCH</button>
      </div>
    </>
  );
};
