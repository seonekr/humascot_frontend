import "./store.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import banner from "../../../img/banner.jpg";
import productImage from "../../../img/productImage.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Store = () => {
  const [store_id, set_store_id] = useState(
    JSON.parse(window.localStorage.getItem("user")).store_id
  );

  const [category, set_category] = useState(6);
  const [goods_list, set_goods_list] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/store/?category=${category}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        set_goods_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <>
      <div className="box_store">
        <div className="store_container">
          <div className="store_item_head">
            <Link to="/" className="back_icons_back">
              <IoIosArrowBack />
              <p>Back</p>
            </Link>
            <div className="title_nameStore">
              <h3>online shop</h3>
            </div>
            {store_id !== false && (
              <Link to="/store-management" className="btn_add_editStore">
                Add/Edit
              </Link>
            )}

            {store_id === false && (
              <div></div>
            )}
          </div>

          <div className="link_btn_store">
            <Link to="/stores" className="btn_link_store link_store_active">
              Sale items
            </Link>
            <Link to="/dashboard-seller" className="btn_link_store">
              Dashboard
            </Link>
            <Link to="/payment-store" className="btn_link_store">
              Payment
            </Link>
          </div>

          <div className="banner_box">
            <img src={banner} alt="" />
          </div>

          <div className="product-area">
            {goods_list.map((i, index) => (
              <div className="box-product" key={index}>
                <div>
                  <div className="img">
                    <img src={i.image} alt="image" />
                  </div>
                  <ul className="txtOFproduct2">
                    <li className="name">{i.name}</li>
                    <li className="price">{i.price}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
