import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import './paymentStore.css'
import { CiImageOn } from "react-icons/ci";
import QRCODE from "../../../img/QRCODE.png";
import { useState, useEffect } from "react";

function PaymentStore() {
    const dataPayment = ({
        nameBank: "asfasf",
        accountName: "asfasf",
        accountNumber: "12412412",
        Image: QRCODE,
    });

    return (
        <>
            <div className="header_box_management">
                <Link to="/stores" className="box_management_iconnback">
                    <IoIosArrowBack id="icons_back" />
                    <p>Back</p>
                </Link>
                <div>
                    <h3>Store management</h3>
                </div>
                <div></div>
            </div>
            <form className="box_container_review1" >
                <div className="add_payment_box">
                    <h3>Payment</h3>
                    <div>
                        <div className='inputproduct_box_dplay'>
                            <p>Bank: {dataPayment.nameBank}</p>
                        </div>
                        <div className='inputproduct_box_dplay'>
                            <p>Account  name: {dataPayment.accountName}</p>
                        </div>
                        <div className='inputproduct_box_dplay'>
                            <p>Account number: {dataPayment.accountNumber}</p>
                        </div>
                        <div className="add_img_product_box">
                            <p>QR Code:</p>
                            <div className="imag_qrcode_store">
                                <img src={dataPayment.Image} alt="" />
                            </div>
                        </div>
                    </div>
                    <Link to="/add-payment-store" type='submit' className='btn_save_productUser'>
                        Add/Edit
                    </Link>


                </div>
            </form>

        </>
    )
}

export default PaymentStore