import { Link, useParams } from "react-router-dom";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { IoIosArrowBack } from "react-icons/io";
import "./bill.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Bill = () => {

  const { order_id } = useParams();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/store/bills/${order_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(config)
      .then((response) => {
        setBill(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  console.log(bill)

  return (
    <>
      <Header></Header>
      <div className="bill">
        <Link to="/order" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        {bill ?(
          <div className="bill-detial newspanBox">
            <div className="guopoidHead" >
              <div className="idf">
                <p>OrderID: {bill.id}</p>
              </div>
            </div>

            <div className="billGopBox">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{bill.name}</td>
                    <td>{bill.price}</td>
                    <td>{bill.amount}</td>
                    <td>{bill.size}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="titlePrice">
              <p>Total:</p>
              <p>2,000 KIP</p>
            </div>
            <div className="place-on">
              <p>Place on: BCEL ONE</p>
              <p>Payment method: MasterCard</p>
              <p>Status: something</p>
              <p>Delivery: company name</p>
            </div>
          </div>
        ):(
          <p></p>
        )}
          
      </div>
      <Menu />
    </>
  );
};

export default Bill;
