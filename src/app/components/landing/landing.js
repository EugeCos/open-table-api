import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePage } from "../../store/actions/user-actions";
import { Link } from "react-router-dom";
import "./landing.scss";

export class Landing extends Component {
  componentDidMount() {
    this.props.updatePage("");
  }

  render() {
    return (
      <div className="landing-container">
        <h2>Smooth dining experience</h2>
        <h3>
          Lookup a desired restaurant in seconds from your phone or laptop
        </h3>

        <Link to="/search">
          <button>START</button>
        </Link>
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
)(Landing);
