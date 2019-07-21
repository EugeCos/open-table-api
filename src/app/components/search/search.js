import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePage } from "../../store/actions/user-actions";
import { fetchStats, fetchRestaurants } from "../../store/actions/api-actions";
import TextField from "material-ui/TextField";
import RestaurantList from "./restaurant-list";
import "./search.scss";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchOption: "City",
      searchValue: "",
      perPage: 25,
      pageNumber: 1
    };
  }
  componentDidMount() {
    const { updatePage, fetchStats, generalInfo } = this.props;
    updatePage("search");

    // Only call fetchStats on initial page load (countries list is empty)
    if (!generalInfo.countries) fetchStats();
  }

  handleClick = option => {
    this.setState({
      searchOption: option
    });
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = () => {
    // searchValue = eg. "toronto", "winnipeg", "ney york" etc
    // searchOption = "City" or "Restaurant"
    const { searchValue, searchOption, pageNumber, perPage } = this.state;
    this.props.fetchRestaurants(searchValue, searchOption, perPage, pageNumber);
  };

  render() {
    const { searchOption, searchValue } = this.state;
    const { generalInfo } = this.props;
    return (
      <div className="search-page-container">
        <div className="search-box-wrapper">
          <div className="left-side-wrapper">
            <GeneralDataDisplay generalInfo={generalInfo} />
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

        <RestaurantList />
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
  { updatePage, fetchStats, fetchRestaurants }
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
