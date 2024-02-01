import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./productDetails.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { BiStore } from "react-icons/bi";
import axios from "axios";
import user from "../../img/user.png";

function ProductDetails() {
  const { goods_id } = useParams();
  const [goods_list, set_goods_list] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState(null);
  // Rating
  const [comment, setComment] = useState({
    review: "",
    star: 0,
  });
  const user_id = JSON.parse(window.localStorage.getItem("user")).user_id;

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

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/store/?goods`,
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
  }, []);

  // Get review product
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/store/review/${goods_id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Number of product
  const [goodsCount, setGoodsCount] = useState(1);

  // Reduce the number of products
  const incrementCount = (goodsID) => {
    setGoodsCount((prevCounts) => ({
      ...prevCounts,
      [goodsID]: (prevCounts[goodsID] || 1) + 1,
    }));
  };

  // Increase the number of products
  const decrementCount = (goodsID) => {
    setGoodsCount((prevCounts) => ({
      ...prevCounts,
      [goodsID]: Math.max(1, (prevCounts[goodsID] || 1) - 1),
    }));
  };

  const handleRatingChange = (newStar) => {
    setComment({ ...comment, star: newStar });
  };

  // Comment input box
  const handleChange = (e) => {
    if (comment.star < 1) {
      e.preventDefault();
      return;
    }
    setComment({ ...comment, [e.target.name]: e.target.value });
    autoGrowTextarea(e.target);
  };

  // Resize grow up if typing full box
  const autoGrowTextarea = () => {
    const textarea = document.getElementById("multiline-input");

    if (textarea) {
      const maxHeight = (10 * window.innerHeight) / 100;
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
    }
  };

  // sent review
  const [loading, setLoading] = useState(true);

  // const handleReviewSubmit = (e) => {
  //   e.preventDefault();

  //   try {
  //     const newReview = {
  //       product: product.id,
  //       rating: comment.rating,
  //       ...comment,
  //     };

  //     console.log(newReview)

  //     setComment({
  //       comment: "",
  //       rating: 0,
  //     });

  //     document.getElementById("review").style.height = "auto";
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    setLoading(false);
  }, []);

  // Handle review
  const handleReview = (e) => {
    e.preventDefault();

    const data = {
      user_id: parseInt(user_id),
      goods_id: product.id,
      star: parseInt(comment.star),
      ...comment,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/store/review/",

      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    setComment({
      review: "",
      star: 0,
    });
    console.log(data);
    document.getElementById("review").style.height = "auto";

    axios
      .request(config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className="contentBody">
        {/* <Link to="/" className="box_container_back_icons_back">
            <IoIosArrowBack id="icons_back" />
            <p>Back</p>
          </Link> */}

        <div className="box_betavinOfob">
          {product ? (
            <div>
              <form className="boxProduct_deteils">
                <div className="product-page-img">
                  <img src={product.image_set} alt="" />
                </div>
                <div className="txtContentproduct">
                  <h1 className="txt_nameP">{product.name}</h1>
                  <p className="money_txt">{product.price} Kip</p>
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
                      </div> */}
                  <div className="container_item_icon">
                    <div
                      className="container_minus_plus"
                      onClick={() => decrementCount(product.id)}
                    >
                      -
                    </div>
                    <span>{goodsCount[product.id] || 1}</span>
                    <div
                      className="container_minus_plus"
                      onClick={() => incrementCount(product.id)}
                    >
                      +
                    </div>
                  </div>
                  <div className="Count_product">
                    <Link className="echbtn btnBut">Buy Now</Link>
                    <Link className="echbtn btnAdd">Add To Cart</Link>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <p>Loading...</p>
          )}

          {/* <div className="description_container">
              <img src={detailproduct} alt="" />
            </div> */}

          <div className="review_box">
            <h3>Reviews ({reviews && reviews.length})</h3>
            <form className="review_boxstar" onSubmit={handleReview}>
              <div className="star">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      cursor: "pointer",
                      color: star <= comment.star ? "#FFBF00" : "gray",
                    }}
                    onClick={() => handleRatingChange(star)}
                  >
                    {star <= comment.star ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <div className="comment_box_content">
                <textarea
                  name="review"
                  className="review-text"
                  id="review"
                  value={comment.review}
                  onChange={handleChange}
                  placeholder="Your opinion"
                  maxLength="255"
                  required
                />
                <button
                  type="submit"
                  disabled={comment.star < 1 || comment.review.trim() === ""}
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
                      {reviews.map((review, index) => (
                        <div className="box_comment_connntent" key={index}>
                          <div className="box_head_user">
                            <div className="box_head_user_title">
                              <div className="comment__userImg">
                                {/* Assuming `user` is the path to the user image */}
                                <img src={user} alt="user" />
                              </div>
                              <div className="box_head_user_titt_detils">
                                <p>UserID: {review.user}</p>
                                <div className="review_boxstar_user">
                                  {[...Array(review.star)].map((_, index) => (
                                    <span key={index} className="star">
                                      ★
                                    </span>
                                  ))}
                                  {[...Array(5 - review.star)].map(
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
                              <p>{review.created_at}</p>
                            </div>
                          </div>
                          <div className="comment_boxOfuser">
                            <p>{review.review}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <p className="no-available">No reviews available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <section id="more-product">
        <h2 className="box_betavinOfob asd2">
          <span className="spennofStyle"> </span>
          More products
        </h2>
        <div className="product-area-details">
          {goods_list.map((i, index) => (
            <div className="box-product-details" key={index}>
              <Link to={"/goods/" + i.id} target="/#endregion">
                <div className="img-details">
                  <img src={i.image} alt="image" />
                </div>
                <ul className="txtOFproduct2-details">
                  <li className="name">{i.name}</li>
                  <li className="price">{i.price}</li>
                  <li className="desc">{i.description}</li>
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Menu />
    </>
  );
}

export default ProductDetails;
