import React, { Component } from "react";
import "./Card.scss";
import heroLogo from "../../assets/images/hero-association-logo.png";
import html2canvas from "html2canvas";
import FileSaver from "file-saver";
import CopyToClipboard from "react-copy-to-clipboard";

class Card extends Component {
  state = {
    copied: false,
    text: "replace this",
  };

  handleChange = (e) => {
    this.props.onChangeEvent(e);
  };

  handleDownload = () => {
    html2canvas(document.querySelector(".card"), {
      allowTaint: true,
      useCORS: true,
      scrollY: -window.scrollY,
    }).then((canvas) => {
      //https://stackoverflow.com/questions/36213275/html2canvas-does-not-render-full-div-only-what-is-visible-on-screen
      const imgData = canvas.toDataURL("image/png");
      FileSaver.saveAs(imgData, `${this.props.first_name}-ani-card.png`);
    });
  };

  handleCopy = () => {
    this.setState({ copied: true });
    setTimeout(
      () =>
        this.setState({
          copied: false,
        }),
      3000
    );
  };

  render() {
    const {
      first_name,
      last_name,
      profile_image,
      age,
      blood_type,
      favorite_food,
      birthday,
      super_power,
      card_title,
    } = this.props;
    return (
      <div className="card-container">
        <h1 className="card-container__headline">
          Click on the fields to edit them
        </h1>
        <article className="card">
          <div className="card-content">
            <input
              className="card-content__title"
              value={card_title}
              onChange={this.handleChange}
              name="card_title"
            />
            <article className="card-main">
              <div className="card-main__avatar">
                <div className="card-main__avatar-rank">S</div>
                <div className="card-main__avatar-image-container">
                  <img
                    src={profile_image}
                    alt="Naruto"
                    className="card-main__avatar-image"
                  />
                </div>
              </div>

              <div className="card-content-text">
                <div className="card-content-text__name">
                  <input
                    className="card-content-text__first-name"
                    value={first_name}
                    onChange={this.handleChange}
                    name="first_name"
                  />
                  <input
                    className="card-content-text__value"
                    value={last_name}
                    onChange={this.handleChange}
                    name="last_name"
                  />
                </div>
                <div className="card-content-text__other-info">
                  <div className="card-content-text__label-column">
                    <p className="card-content-text__label">Age</p>
                    <p className="card-content-text__label">Birthday</p>
                    <p className="card-content-text__label">Blood Type</p>
                    <p className="card-content-text__label">Favorite Food</p>
                    <p className="card-content-text__label">Super Power</p>
                  </div>
                  <div className="card-content-text__value-column">
                    <input
                      className="card-content-text__value"
                      value={age}
                      onChange={this.handleChange}
                      name="age"
                    />
                    <input
                      className="card-content-text__value"
                      value={birthday}
                      onChange={this.handleChange}
                      name="birthday"
                    />
                    <input
                      className="card-content-text__value"
                      value={blood_type}
                      onChange={this.handleChange}
                      name="blood_type"
                    />
                    <input
                      className="card-content-text__value"
                      value={favorite_food}
                      onChange={this.handleChange}
                      name="favorite_food"
                    />
                    <input
                      className="card-content-text__value"
                      value={super_power}
                      onChange={this.handleChange}
                      name="super_power"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
          <span className="card__hero-logo">
            <img
              src={heroLogo}
              alt="heroLogo"
              className="card__hero-logo-image"
            />
          </span>
        </article>
        <div className="card-buttons">
          <button
            className="card-buttons__download"
            onClick={this.handleDownload}
          >
            Download Card
          </button>
          <CopyToClipboard text={this.state.text} onCopy={this.handleCopy}>
            <button className="card-buttons__get-short-url">
              {!this.state.copied && <span>Get Short Url</span>}
              {this.state.copied && <span>Copied Successfully</span>}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

export default Card;
