import React from "react";

function reviewFormValidation(values) {
  const errors = {};
  
  if (!values.name) {
    errors.name = "Required!";
  } else if (values.name.length < 2) {
    errors.name = "Minimum 2 characters!";
  }

  if (!values.comment) {
    errors.comment = "Required!";
  } else if (values.comment.length < 3) {
    errors.comment = "Minimum 3 characters!";
  }

  return errors;
}

export default reviewFormValidation;
