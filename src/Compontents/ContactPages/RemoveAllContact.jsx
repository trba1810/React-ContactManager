import React from "react";

const RemoveAllContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-danger form-control"
        onClick={() => props.handleRemoveAllContact()}
      >
        Obrisi sve kontakte
      </button>
    </div>
  );
};

export default RemoveAllContact;
