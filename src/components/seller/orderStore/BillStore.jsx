import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./billStore.css";

const BillStore = () => {

  return (
    <>
      <div className="header_box_management">
        <Link to="/order-store" className="box_management_iconnback">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div>
          <h3>Store management</h3>
        </div>
        <div></div>
      </div>
      <h3 className="txt_h3Bill">Bill</h3>
      <div className="bill_store_container">
        <div className="bill-detial newspanBox" >
          <div className="guopoidHead">
            <div className="idf">
              <p>No: ...</p>
              <p>OrderID: ...</p>
              <p>Name: ...</p>
            </div>
          </div>
          <div className="billGopBox">
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Color</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>2,000</td>
                  <td>3</td>
                  <td>red</td>
                  <td>L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="titlePrice">
            <p>Total:</p>
            <p>2,000 KIP</p>
          </div>
          <div className="place-on">
            <p>Payment date: 15/09/2023</p>
            <p>Payment method: MasterCard</p>
            <p>Delivery: company name</p>
            <form className="status_box">
              <div className="status_box2">
                <p>Status: </p>
                <select className="filter_priceProduct2">
                  <option value="default">Pending</option>
                  <option value="higherPrice">Paid</option>
                </select>
              </div>
              <button className="btn_confirm_orderD">
                confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillStore;
