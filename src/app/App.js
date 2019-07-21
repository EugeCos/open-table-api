import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import Router from "./Router";
import Navbar from "./components/navbar/navbar";

export class App extends Component {
  render() {
    return (
      <div className={`App ${this.props.currentPage && "faded-background"}`}>
        <Navbar />
        <Router />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    currentPage: state.currentPage.name
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
