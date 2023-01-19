import React from "react";
import Contact from "./Contact";

const FavoriteContact = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} key={index} />
      ))}
    </div>
  );
};

export default FavoriteContact;
