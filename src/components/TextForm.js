import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleUpClicklwer = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    setText("");
    setWords(0);
    props.showAlert("Console Cleared", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
    setWords(text.split(/\s+/).filter((word) => word !== "").length);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text to be converted into Uppercase"
            // style={props.style}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleUpClicklwer}
        >
          Convert to Lower Case
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleClearClick}
        >
          Clear Console
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {words} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview of the text : </h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.prototype = {
  heading: PropTypes.string,
};
