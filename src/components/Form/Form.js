import React from "react";
import "./Form.scss";

function Form({ onSubmitEvent }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/([a-zA-z])$/.test(event.target.name.value)) {
      event.target.reset();
      alert(
        "Please enter a valid first name, without using numbers or symbols."
      );
      return;
    }
    onSubmitEvent(event.target.name.value);
  };
  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <label htmlFor="Your Name" className="card-form__label">
        Enter your first name and click on the submit button!
      </label>
      <input
        className="card-form__input"
        type="text"
        placeholder="Enter Your Name"
        name="name"
      />
      <button className="card-form__button">Submit</button>
    </form>
  );
}

export default Form;
