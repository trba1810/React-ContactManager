import React from "react";
import { getRandomUser } from "../../Utility/api";

const GetRandomContact = async (props) => {
  const responseAPI = await getRandomUser();
  console.log(responseAPI);

  return props.handleAddRandomContact({
    name: responseAPI.data.first_name + " " + responseAPI.data.last_name,
    email: responseAPI.data.email,
    phone: responseAPI.data.phone_number,
  });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact(props)}
      >
        Dodaj random kontakt
      </button>
    </div>
  );
};

export default AddRandomContact;
