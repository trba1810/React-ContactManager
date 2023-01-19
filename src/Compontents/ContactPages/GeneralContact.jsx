import React from "react";
import Contact from "./Contact";

export const GeneralContact = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} key={index} />
      ))}
    </div>
  );
};

export default GeneralContact;
