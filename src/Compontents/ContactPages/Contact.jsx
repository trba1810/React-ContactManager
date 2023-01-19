import React from "react";

const Contact = (props) => {
  return (
    <div>
      <button className="btn btn-danger form-control">
        {props.contact.name}
      </button>
    </div>
  );
};

export default Contact;
