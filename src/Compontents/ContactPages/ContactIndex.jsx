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
      contactList: [
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
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "Greska", msg: "Dodaj ispravno ime" };
    } else if (newContact.phone === "") {
      return { status: "Greska", msg: "Dodaj ispravan telefon" };
    } else if (newContact.email === "") {
      return { status: "Greska", msg: "Dodaj ispravan email" };
    }

    const duplicateContact = this.state.contactList.filter((x) => {
      if (x.name === newContact.name && x.phone === newContact.phone) {
        return true;
      }
      return false;
    });
    if (duplicateContact.length > 0) {
      return { status: "Greska", msg: "Duplikat" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "Uspeh", msg: "Uspesno dodat kontakt" };
    }
  };

  handleUpdateContact = (updatedContact) => {
    if (updatedContact.name === "") {
      return { status: "Greska", msg: "Dodaj ispravno ime" };
    } else if (updatedContact.phone === "") {
      return { status: "Greska", msg: "Dodaj ispravan telefon" };
    } else if (updatedContact.email === "") {
      return { status: "Greska", msg: "Dodaj ispravan email" };
    }

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id === updatedContact.id) {
            return {
              ...obj,
              name: updatedContact.name,
              email: updatedContact.email,
              phone: updatedContact.phone,
            };
          }
          return obj;
        }),
        isUpdating: false,
        selectedContact: undefined,
      };
    });
    return { status: "Uspeh", msg: "Uspesno izmenjen kontakt" };
  };

  handleToggleFavorite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id === contact.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          }
          return obj;
        }),
      };
    });
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => {
          return obj.id !== contactId;
        }),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleRemoveAllContact = () => {
    this.setState({
      contactList: [],
    });
  };

  handleClickContact = (contact) => {
    this.setState({
      selectedContact: contact,
      isUpdating: true,
    });
  };

  handleCancelUpdateContact = (contact) => {
    this.setState({
      selectedContact: undefined,
      isUpdating: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85lv" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContact
                handleRemoveAllContact={this.handleRemoveAllContact}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  handleAddContact={this.handleAddContact}
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  cancelUpdateContact={this.handleCancelUpdateContact}
                  handleUpdateContact={this.handleUpdateContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContact
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === true
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  updateContact={this.handleClickContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContact
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === false
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDeleteContact}
                  updateContact={this.handleClickContact}
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
