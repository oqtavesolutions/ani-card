import React, { Component } from "react";
import "./Homepage.scss";
import { characters } from "../../utils/chars";
import { getRandomInclusive } from "../../utils/helpers";
import luffyImage from "../../assets/images/luffy.png";

export default class Homepage extends Component {
  state = {
    data: characters,
  };

  componentDidMount() {
    const number =
      localStorage.getItem("random") || getRandomInclusive(1, 200).toString();
    localStorage.setItem("random", number);
    const findCharacter = this.state.data.find((item) => item.id === number);
    console.log(findCharacter);
    // axios
    //   .get(
    //     "https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/search/character?q=Naruto&page=1"
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //     axios
    //       .get(
    //         `https://cors-anywhere.herokuapp.com/${response.data.results[0].url}`
    //       )
    //       .then((response) => console.log(response.data));
    //   });
  }
  render() {
    return (
      <div className="main">
        <div className="main__image-container">
          <img src={luffyImage} alt="Luffy" className="main__image" />
        </div>
        <div className="main__form">
          <form className="card-form">
            <input
              className="card-form__input"
              type="text"
              placeholder="Enter Your Name"
            />
            <button className="card-form__button">Get your ID card</button>
          </form>
        </div>
      </div>
    );
  }
}
