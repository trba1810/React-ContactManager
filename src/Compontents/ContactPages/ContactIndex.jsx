import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import GeneralContact from "./GeneralContact";
import RemoveAllContact from "./RemoveAllContact";
import FavoriteContact from "./FavoriteContact";

export default class ContactIndex extends Component {
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
              <FavoriteContact />
            </div>
            <div className="row py-2">
              <GeneralContact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
