import React from "react";

export default function Alert(props) {
  const captilize = (message) => {
    const lowerCase = message.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{captilize(props.alert.type)} : </strong>{" "}
        {captilize(props.alert.message)}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
