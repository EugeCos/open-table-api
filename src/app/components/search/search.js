import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePage } from "../../store/actions/user-actions";
import "./search.scss";

export class Search extends Component {
  componentDidMount() {
    this.props.updatePage("search");
  }

  render() {
    return <div>Search</div>;
  }
}

export const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { updatePage }
)(Search);
