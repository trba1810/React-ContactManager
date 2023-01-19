import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import GeneralContact from "./GeneralContact";
import RemoveAllContact from "./RemoveAllContact";
import FavoriteContact from "./FavoriteContact";

export default class ContactIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constactList: [
        {
          id: 1,
          name: "Pera Peric",
          phone: "555333",
          email: "peraperic@gmail.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Jova Jovic",
          phone: "222333",
          email: "jovajovic@gmail.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Mika Mikic",
          phone: "111333",
          email: "mikamikic@gmail.com",
          isFavorite: true,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85lv" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <AddContact />
            </div>
            <div className="row py-2">
              <FavoriteContact
                contacts={this.state.constactList.filter(
                  (u) => u.isFavorite === true
                )}
              />
            </div>
            <div className="row py-2">
              <GeneralContact
                contacts={this.state.constactList.filter(
                  (u) => u.isFavorite === false
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
