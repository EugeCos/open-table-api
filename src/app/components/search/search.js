import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePage } from "../../store/actions/user-actions";
import TextField from "material-ui/TextField";
import "./search.scss";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchOption: "byCity"
    };
  }
  componentDidMount() {
    this.props.updatePage("search");
  }

  handleClick = option => {
    this.setState({
      searchOption: option
    });
  };

  render() {
    const { searchOption } = this.state;
    return (
      <div className="search-container">
        <div className="left-side-wrapper">
          <h1>
            <span>13</span> countries
          </h1>
          <br />
          <h1>
            <span>260</span> cities
          </h1>
          <br />
          <h1>
            <span>13596</span> restaurants
          </h1>
        </div>
        <div className="right-side-wrapper">
          <h3>Lookup restaurants</h3>
          <br />
          <div className="search-option-wrapper">
            <h4
              onClick={() => this.handleClick("byCity")}
              className={`${searchOption === "byCity" && "selected"}`}
            >
              by city
            </h4>
            <h4
              onClick={() => this.handleClick("byName")}
              className={`${searchOption === "byName" && "selected"}`}
            >
              by restaurant name
            </h4>
          </div>
          <TextField hintText="Search City" hintStyle={{ color: "#fff" }} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { updatePage }
)(Search);
