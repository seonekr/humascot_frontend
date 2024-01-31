import "./product_Admin.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import productImage from "../../../img/productImage.png";

const Product_Admin = () => {

  //PopUp box delete product
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <AdminMenu />
      <section id="product_admin">
        <div className="container_body_admin_product">
          <div className="search-box_product">
            <input
              type="text"
              placeholder="Search ..."
            />
            <button>
              <IoSearchOutline />
            </button>
          </div>

          <div className="productHead_content">
            <h1 className="htxthead">
              <span className="spennofStyleadmin"></span>Products
            </h1>
            <div className="categoryBoxfiler">
              <Link to="/addproduct-admin" className="box_add_product">
                <BiPlus id="icon_add_product" />
                <p>Add Product</p>
              </Link>
            </div>
          </div>

          <div className="product-area">

            <div className="box-product">
              <div>
                <img
                  src={productImage}
                  alt="image"
                />
              </div>
              <ul className="txtOFproduct">
                <li>product name</li>
                <li>product description</li>
                <li>product price</li>
                <div className="box_btn_edit_delete">
                  <button
                    className="btn_icon_delete_user" onClick={togglePopup}
                  >
                    <AiOutlineDelete id="btn_icon_edit" />
                  </button>
                  <Link to="/editproduct-admin" className="btn_icon_edit_user">
                    <MdOutlineEdit id="btn_icon_edit" />
                  </Link>
                </div>
              </ul>
            </div>
          </div>

          <div className="box_container_next_product">
            <button className="box_prev_left_product">
              <AiOutlineLeft id="box_icon_left_right_product" />
              <p>Prev</p>
            </button>

            <div className="box_num_product">
              <div>
                <div className="num_admin_product">
                  <p>1</p>
                </div>
              </div>
            </div>

            <button className="box_prev_right_product" >
              <p>Next</p>
              <AiOutlineRight id="box_icon_left_right_product" />
            </button>
          </div>
        </div>
      </section>
      {/* PopUp box add banner */}
      {isPopupVisible && (
        <div className="boxAlertDelete">
          <div className="confirmation-popup">
            <p>Do you want to delete?</p>
            <div className="btn_ok_on">
              <button className="btn_on" onClick={togglePopup}>
                No
              </button>
              <button className="btn_yes" >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

};

export default Product_Admin;
