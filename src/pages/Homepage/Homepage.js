import React, { Component, Fragment } from "react";
import "./Homepage.scss";
import { characters } from "../../utils/chars";
import { getRandomInclusive } from "../../utils/helpers";
import Form from "../../components/Form/Form";
import axios from "axios";
import Card from "../../components/Card/Card";

export default class Homepage extends Component {
  state = {
    card_title: "あなたのスーパーヒーローカード",
    first_name: "",
    last_name: "",
    profile_image: "",
    age: "19",
    birthday: "10/10/2020",
    blood_type: "A+",
    favorite_food: "Ichirako Ramen",
    super_power: "Eating",
    character: null,
    submitted: false,
    loading: false,
  };

  componentDidMount() {
    const number = localStorage.getItem("random") || getRandomInclusive(1, 200);
    localStorage.setItem("random", number);
    this.setState({
      character: characters[number - 1].profile_number, // because id starts from 1 for this object
    });
  }

  onSubmitEvent = (name) => {
    this.setState(
      {
        first_name: name,
        submitted: true,
        loading: true,
      },
      () => {
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/character/${this.state.character}`
          )
          .then((response) => {
            console.log(response.data.name, response.data.image_url);
            this.setState({
              loading: false,
              last_name: response.data.name,
              profile_image: response.data.image_url,
            });
          });
      }
    );
  };

  onChangeEvent = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        {!this.state.submitted && <Form onSubmitEvent={this.onSubmitEvent} />}
        {this.state.submitted && !this.state.loading && (
          <Card
            card_title={this.state.card_title}
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            profile_image={this.state.profile_image}
            age={this.state.age}
            birthday={this.state.birthday}
            blood_type={this.state.blood_type}
            favorite_food={this.state.favorite_food}
            super_power={this.state.super_power}
            onChangeEvent={this.onChangeEvent}
            {...this.props}
          />
        )}
      </Fragment>
    );
  }
}
