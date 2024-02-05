import React, { useState } from "react";
import "./order.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { useEffect } from "react";

const Order = () => {

  const [order, setOrder] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/store/bills`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(order)
  const user_id =  JSON.parse(window.localStorage.getItem("user")).user_id;

  const orders = order.filter((item) => item.user === user_id);


  return (
    <>
      <Header />
      <section id="container_order_item">
        <div className="container_order_all">
          <Link to="/" className="box_management_iconnback">
            <IoIosArrowBack id="icons_back" />
            <p>Back</p>
          </Link>
          <h2>Order</h2>
          {order.map((i, index) => (
          <Link to={`/bill/${i.id}`} className="box_item_order" key={index}>
            <div >
              <div className="box_item_order_text">
                <p>NO:{i.id}</p>
                <p>{i.due_date}</p>
              </div>
              <p className="txtheadeproductorder">
                {i.decs}
              </p>
            </div>
          </Link>
          ))}
        </div>
      </section>
      <Menu />
    </>
  );
};

export default Order;
