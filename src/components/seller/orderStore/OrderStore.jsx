import React from "react";
import './orderStore.css'
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const OrderStore = () => {
    return (

        <>
            <div className="header_box_management">
                <Link to="/store-management" className="box_management_iconnback">
                    <IoIosArrowBack id="icons_back" />
                    <p>Back</p>
                </Link>
                <div>
                    <h3>Store management</h3>
                </div>
                <div></div>
            </div>
            <div className="container_order_store">
                <h2 className="h2_store">Order</h2>
                <div className="heade_productorder_store">
                    <Link to="/bill-store" className="box_item_order_text_Store">
                        <p>No: 01</p>
                        <p >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui!
                        </p>
                        <p>10.1.2024</p>
                    </Link>
                    <button className="btn_confirm_orderD nConfrim">
                        Pending
                    </button>

                    {/* <button className="btn_confirm_orderD fnConfrim">
                        Paid
                    </button> */}
                </div>
                <div className="heade_productorder_store">
                    <Link to="/bill-store" className="box_item_order_text_Store">
                        <p>No: 02</p>
                        <p >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui!
                        </p>
                        <p>10.1.2024</p>
                    </Link>
                    <button className="btn_confirm_orderD fnConfrim">
                        Paid
                    </button>
                </div>

            </div>
        </>
    );
};

export default OrderStore;
