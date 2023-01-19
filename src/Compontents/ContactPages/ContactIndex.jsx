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

  handleAddContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.constactList[this.state.constactList.length - 1].id + 1,
      isFavorite: false,
    };
    this.setState((prevState) => {
      return {
        constactList: prevState.constactList.concat([newFinalContact]),
      };
    });
    alert("hello");
  };

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
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContact
                  contacts={this.state.constactList.filter(
                    (u) => u.isFavorite === true
                  )}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContact
                  contacts={this.state.constactList.filter(
                    (u) => u.isFavorite === false
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
