import "./addPaymentStore.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { CiImageOn } from "react-icons/ci";

const AddPaymentStore = () => {

    const [dataPayment, setdataPayment] = useState({
        nameBank: "",
        accountName: "",
        accountNumber: "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setdataPayment((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dataPayment);
    };

    return (
        <>
            <div className="header_box_management">
                <Link to="/payment-store" className="box_management_iconnback">
                    <IoIosArrowBack id="icons_back" />
                    <p>Back</p>
                </Link>
                <div>
                    <h3>Store management</h3>
                </div>
                <div></div>
            </div>
            <form className="box_container_review1" onSubmit={handleSubmit}>
                <div className="add_payment_box">
                    <h3>Add payment</h3>
                    <div className='inputproduct_box'>
                        <p>Bank  name:</p>
                        <input className="inputproduct" type="text" name='nameBank' placeholder='name...' onChange={handleInputChange} />
                    </div>
                    <div className='inputproduct_box'>
                        <p>Account  name:</p>
                        <input className="inputproduct" type="text" name='accountName' placeholder='Account name...' onChange={handleInputChange} />
                    </div>
                    <div className='inputproduct_box'>
                        <p>Account number:</p>
                        <input className="inputproduct" type="text" name='accountNumber' placeholder='account number...' onChange={handleInputChange} />
                    </div>
                    <div className="add_img_product_box">
                        <p>QR Code:</p>
                        <div className="boxicon_img_input">
                            <CiImageOn className='boxicon_img_iconn' />
                            <input type="file" className="input" />
                        </div>
                    </div>

                    <button type='submit' className='btn_save_productUser'>
                        Save
                    </button>
                </div>
            </form>

        </>
    );
};

export default AddPaymentStore;
