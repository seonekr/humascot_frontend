import { FiPlus } from "react-icons/fi";
import "./payment.css";
import qrcode from "../../img/QRCODE.png";
import wechat from "../../img/WeChat.png";
import Menu from "../menuFooter/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { FiCopy } from "react-icons/fi";
const Payment = () => {

  return (
    <>
      <Header />
      <div className="guopBoxPayment_container">
        <h2 className="h2_boxPayment">Payment</h2>
        <div className="adress_payment_content">
          <h3>Address:</h3>
          <div className="box_address">
            <Link to="/address" className="address">
              <FiPlus /> Update address
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, explicabo?
            </p>
          </div>
          <h3>Details:</h3>
          <div className="details_ProductInPayMentBox">
            <ul>
              <li className="detailsProduct_li">
                <p>Product Name: </p>
                <p>Size: </p>
                <p>Color: </p>
                <p>Price: </p>
              </li>
            </ul>
          </div>
          <div className="box_transfer">
            <p className="box_transfer_p_line">Please transfer money to this account</p>
            <div className="boxaccount_number">
              <div className="boxaccount_number_p">
                <p>Account number</p>
                <p>123435346578589</p>
              </div>
              <FiCopy className="iconnn_copy_account"/>
            </div>
          </div>
          <h3>Confirm transfer</h3>
          <div className="box_description">
            <p>Please attach proof of  money transfer!</p>
            <div className="image_confirm_transfer">
              <p>Choose image</p>
              <input type="file" id="img" />
            </div>
          </div>
          <Link to="/successfulBuy" className="save">
            Confirm
            {/* <button type="submit">
                  Confirm
                </button> */}
            {/* The button will show when user input information */}
          </Link>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Payment;
