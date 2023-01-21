import React from "react";
import Contact from "./Contact";

const FavoriteContact = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">Omiljeni</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact
            contact={contact}
            key={index}
            favoriteClick={props.favoriteClick}
            deleteContact={props.deleteContact}
            updateContact={props.updateContact}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteContact;
