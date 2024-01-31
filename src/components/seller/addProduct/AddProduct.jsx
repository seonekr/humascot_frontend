import React from 'react'
import './addProduct.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { useState, useEffect } from "react";

function AddProduct() {
    const [categories, set_categories] = useState([])

    

    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        sizes: [],

        image: "",
        image_details: "",
        currentsizes: "",

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSizeInputChange = (e) => {
        const { value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            currentsizes: value,
        }));
    };

    const addSizeInput = () => {
        if (product.currentsizes.trim() !== "") {
            setProduct((prevProduct) => ({
                ...prevProduct,
                sizes: [...prevProduct.sizes, prevProduct.currentsizes],

                currentsizes: "", // Reset the current color after adding

            }));
        }
    };

    const removeSizeInput = (index) => {
        if (product.sizes.length > 0) {
            setProduct((prevProduct) => {
                const updatedSizes = [...prevProduct.sizes];
                updatedSizes.splice(index, 1);
                return {
                    ...prevProduct,
                    sizes: updatedSizes,
                };
            });
        }
    };



    const handleColorInputChange = (e) => {
        const { value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            currentColor: value,
        }));
    };

    const addColorInput = () => {
        if (product.currentColor.trim() !== "") {
            setProduct((prevProduct) => ({
                ...prevProduct,
                colors: [...prevProduct.colors, prevProduct.currentColor],
                currentColor: "", // Reset the current color after adding
            }));
        }
    };

    const removeColorInput = (index) => {
        if (product.colors.length > 0) {
            setProduct((prevProduct) => {
                const updatedColors = [...prevProduct.colors];
                updatedColors.splice(index, 1);
                return {
                    ...prevProduct,
                    colors: updatedColors,
                };
            });
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("price", product.price);
            formData.append("category", product.category);
            formData.append("description", product.description);

        } catch (error) {
            console.error("Error submitting form:", error);
        }
        console.log(product);
    };


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

            <form className="addproduct_container" onSubmit={handleSubmit}>
                <h3>Add product</h3>
                <div className='inputproduct_box'>
                    <label htmlFor="name">Name:</label>
                    <input className="inputproduct" name='name' type="text" placeholder='Product name' onChange={handleInputChange} />
                </div>
                <div className='inputproduct_box'>
                    <label htmlFor="price">Price:</label>
                    <input className="inputproduct" name='price' type="text" placeholder='Product price' onChange={handleInputChange} />
                </div>
                <div className='inputproduct_box'>
                    <label htmlFor="category">Category:</label>
                    <select name="category" className="inputproduct select_box">

                        <option className='option_itemD' value="Name1">Name1</option>
                        <option className='option_itemD' value="Name1">Name1</option>
                        <option className='option_itemD' value="Name1">Name1</option>

                    </select>
                </div>
                <div className='inputproduct_box'>
                    <label htmlFor="description">Description:</label>
                    <input className="inputproduct" name='description' type="text" placeholder='Description' onChange={handleInputChange} />
                </div>

                <div className="size_product_box">
                    <h3>Size:</h3>
                    <div className="size_product_box_container">
                        <div className="box_sizeTso_add" >
                            {product.sizes.map((size, index) => (
                                <div className="box_sizeTo_add_item" key={index}>
                                    <p>{size}</p>
                                    <span
                                        className="spanCancelBox"
                                        onClick={() => removeSizeInput(index)}
                                    >
                                        <IoIosClose className='iconn_close_addSize' />
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="size_content_box">
                            <input
                                className="inputproduct"
                                type="text"
                                placeholder='Add Size...'
                                onChange={handleSizeInputChange}

                                value={product.currentsizes}

                            />
                            <div className="addsize_btn" onClick={addSizeInput}>
                                Add
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_img_product_box">
                    <h3>Product image:</h3>
                    <div className="boxicon_img_input">
                        <CiImageOn className='boxicon_img_iconn' />
                        <input type="file" name='image' className="input" onChange={handleInputChange} />
                    </div>
                </div>

                <div className="add_img_product_box">
                    <h3>Details image:</h3>
                    <div className="boxicon_img_input">
                        <CiImageOn className='boxicon_img_iconn' />
                        <input type="file" name='image_details' className="input" onChange={handleInputChange} />
                    </div>
                </div>

                <button type="submit" className='btn_save_productUser'>
                    Save
                </button>
            </form>
        </>
    )
}

export default AddProduct