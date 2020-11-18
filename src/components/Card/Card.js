import React from "react";
import "./Card.scss";
import heroLogo from "../../assets/images/hero-association-logo.png";
import { getLastName } from "../../utils/helpers";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Card({
  first_name,
  last_name,
  profile_image,
  onChangeEvent,
  age,
  blood_type,
  favorite_food,
  birthday,
  super_power,
  history,
}) {
  const handleChange = (e) => {
    onChangeEvent(e);
  };

  const handleDownload = () => {
    html2canvas(document.querySelector(".card"), {
      allowTaint: true,
      useCORS: true,
      scrollY: -window.scrollY,
    }).then((canvas) => {
      //https://stackoverflow.com/questions/36213275/html2canvas-does-not-render-full-div-only-what-is-visible-on-screen
      //https://stackoverflow.com/questions/36472094/how-to-set-image-to-fit-width-of-the-page-using-jspdf/55497749#55497749
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <div className="card-container">
      <article className="card">
        <div className="card-content">
          <p className="card-content__title">あなたのスーパーヒーローカード</p>
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
                <p className="card-content-text__first-name">{first_name}</p>
                <p className="card-content-text__last-name">
                  {getLastName(last_name)}
                </p>
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
                    onChange={handleChange}
                    name="age"
                  />
                  <input
                    className="card-content-text__value"
                    value={birthday}
                    onChange={handleChange}
                    name="birthday"
                  />
                  <input
                    className="card-content-text__value"
                    value={blood_type}
                    onChange={handleChange}
                    name="blood_type"
                  />
                  <input
                    className="card-content-text__value"
                    value={favorite_food}
                    onChange={handleChange}
                    name="favorite_food"
                  />
                  <input
                    className="card-content-text__value"
                    value={super_power}
                    onChange={handleChange}
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
        <button className="card-buttons__download" onClick={handleDownload}>
          Download Card
        </button>
        <button className="card-buttons__get-short-url">Get Short Url</button>
      </div>
    </div>
  );
}

export default Card;
