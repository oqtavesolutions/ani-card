import React, { Component } from "react";
import axios from "axios";
import "./App.scss";

export default class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/search/character?q=Naruto&page=1"
      )
      .then((response) => {
        console.log(response.data);
        // axios
        //   .get(
        //     `https://cors-anywhere.herokuapp.com/${response.data.results[0].url}`
        //   )
        //   .then((response) => console.log(response.data));
      });
  }
  render() {
    return <div>This is a class based</div>;
  }
}
