import React from "react";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

const Heading = () => {
  return (
    <>
      <div className="heading">
        <div className="account">
          <div className="wallet">
            <AccountBalanceWalletIcon /> Balance{" "}
          </div>
          <div className="contact">
            <ContactPhoneIcon /> Contact
          </div>
        </div>

        <h2 className="title">The List of Top 5 Netflix Series</h2>
        <div className="searchbar">
        <div>
          <input
            type="text"
            placeholder="search here"
            className="search"
          /></div>
          <div>
          <SearchIcon className="searchicon"/>
        </div>
        </div>
        <div className="login">
          <div className="like">
            <FavoriteBorderIcon /> Like{" "}
          </div>
          <div className="shop">
            <AddShoppingCartIcon /> shopping
          </div>
          <div className="subs">
            <SubscriptionsIcon />
            login
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
