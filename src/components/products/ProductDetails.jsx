import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./productDetails.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { IoIosArrowBack } from "react-icons/io";
import { BiStore } from "react-icons/bi";
import icon_star from "../../img/icon_star.png";
import icon_star2 from "../../img/icon_star2.png";
import user from "../../img/user.png";
import productImage from "../../img/productImage.png";
import detailproduct from "../../img/detailproduct.jpg";
import axios from "axios";

function ProductDetails() {
  const { goods_id } = useParams();
  const [goods_list, set_goods_list] = useState([]);
  const [reiews_list, set_reviews_list] = useState([]);
  const [sliceNum, set_sliceNum] = useState(8);
  const [category, set_category] = useState(6);
  const storage = JSON.parse(window.localStorage.getItem("user"));

  console.log(goods_list)

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/store/goods/${goods_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [goods_id]);

  const handleMore = () => {
    set_sliceNum(sliceNum + 8);
  };

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

  console.log(product);

  return (
    <>
      <Header />
      <div className="contentBody">
        {/* <Link to="/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link> */}

        <div className="box_betavinOfob">
          {/* {joinedData.map((item) => ( */}
          {product ? (
            <div>
              <form className="boxProduct_deteils">
                <div className="product-page-img">
                  <img src={product.image_set} alt="" />
                </div>
                <div className="txtContentproduct">
                  <h1 className="txt_nameP">{product.name}</h1>
                  <p className="money_txt">{product.price} $</p>
                  <p className="txt_description">{product.description}</p>
                  <Link to="/stores" className="store_boxLink">
                    <BiStore className="iconn_linkbox" />
                    <p>Go to store</p>
                  </Link>

                  {/* <div className="size_product">
                    <p>Size:</p>
                    {item.size && (
                      <div className="size">
                        {item.size.map((size, index) => (
                          <p className="echSize" key={index}>
                            {size}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="container_item_icon">
                    <div
                      className="container_minus_plus"
                      onClick={() => decrementCount(item.id)}
                    >
                      -
                    </div>
                    <span>{goodsCount[item.id] || 1}</span>
                    <div
                      className="container_minus_plus"
                      onClick={() => incrementCount(item.id)}
                    >
                      +
                    </div>
                  </div>
                  <div className="Count_product">
                    <Link onClick={buyNow} className="echbtn btnBut">
                      Buy Now
                    </Link>
                    <Link onClick={addToCart} className="echbtn btnAdd">
                      Add To Cart
                    </Link>
                  </div> */}
                </div>
              </form>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          {/* ))} */}

          {/* <div className="description_container">
            <img src={detailproduct} alt="" />
          </div> */}

          {/* <div className="review_box">
            <h3>Reviews(8)</h3>

            <form className="review_boxstar" onSubmit={handleReviewSubmit}>
              <div className="star">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      cursor: "pointer",
                      color: star <= comment.rating ? "#FFBF00" : "gray",
                    }}
                    onClick={() => handleRatingChange(star)}
                  >
                    {star <= comment.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <div className="comment_box_content">
                <textarea
                  name="commend"
                  className="review-text"
                  id="review"
                  value={comment.commend}
                  onChange={handleChange}
                  placeholder="Your opinion"
                  maxLength="255"
                  required
                />
                <button
                  type="submit"
                  disabled={comment.rating < 1 || comment.commend.trim() === ""}
                  className="btn_submit_comment"
                >
                  Sent
                </button>
              </div>
            </form>
            <div className="last_box_review">
              {reviews.length > 0 ? (
                <div>
                  {loading ? (
                    <p>Loading reviews...</p>
                  ) : (
                    <div>
                      {reviews.map((item, index) => (
                        <div className="box_comment_connntent" key={item.id}>
                          <div className="box_head_user">
                            <div className="box_head_user_title">
                              <div className="comment__userImg">
                                <img src={user} alt="" />
                              </div>
                              <div className="box_head_user_titt_detils">
                                <p>{item.userid}</p>
                                <div className="review_boxstar_user">
                                  {[...Array(item.rating)].map((_, index) => (
                                    <span key={index} className="star">
                                      ★
                                    </span>
                                  ))}
                                  {[...Array(5 - item.rating)].map(
                                    (_, index) => (
                                      <span
                                        key={index}
                                        className="star"
                                        style={{ color: "gray" }}
                                      >
                                        ☆
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="box_user_time">
                              <p>2023.08.23</p>
                            </div>
                          </div>
                          <div className="comment_boxOfuser">
                            <p>{item.commend}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <p className="no-available">No reviews available.</p>
              )}

              <div className="comment_boxOfuser">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  numquam sapiente voluptates ut porro quisquam eveniet voluptas
                  sed. Nulla ducimus odit esse quam corporis, dolorem labore.
                  Ipsa quis repudiandae nihil.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <h2 className="box_betavinOfob asd2">
        <span className="spennofStyle"> </span>
        More products
      </h2>
      <div className="product-area">
        {goods_list.map((i, index) => (
          <div className="box-product" key={index} >
            <Link to={"/goods/"+i.id}>
              <div className="img">
                <img src={i.image} alt="image" />
              </div>
              <ul className="txtOFproduct2">
                <li className="name">{i.name}</li>
                <li className="price">{i.price}</li>
                <li className="desc">{i.description}</li>
              </ul>
            </Link>
          </div>
        ))}

      </div>
      <Menu />
    </>
  );
}

export default ProductDetails;
