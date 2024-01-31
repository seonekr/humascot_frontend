import "./productHome.css";
import productImage from "../../img/productImage.png";
import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ProductHome = () => {
  const navigate = useNavigate();
  const [ShowFilter, setShowFilter] = useState(false);
  const [goods_list, set_goods_list] = useState([]);
  const [sliceNum, set_sliceNum] = useState(8);
  const storage = JSON.parse(window.localStorage.getItem("user"));
  const [seatch, set_search] = useState("");
  const [category, set_category] = useState(6);

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

  return (
    <div>
      <section id="product">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>Product
          </h1>
          <div className="categoryBoxfiler">
            <form className="boxfilterseach">
              <select
                className="filter_priceProduct"
                onClick={(e) => set_category(e.target.value)}
              >
                <option value="6">Latest</option>
                <option value="3">Sort by review</option>
                <option value="1">Highest price</option>
                <option value="4">Low to lowest prices</option>
                <option value="5">By sales volume</option>
              </select>
            </form>
          </div>
        </div>

        <div className="product-area">
          {goods_list.map((i, index) => (
            <div className="box-product" key={index}>
              <Link to={`/goods/${i.id}`}>
                <div className="img">
                  <img src={i.image} alt="" />
                </div>
                <ul className="txtOFproduct2">
                  <li className="name">{i.name}</li>
                  <li className="price">{i.price}</li>
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductHome;
