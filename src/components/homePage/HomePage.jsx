import "./homePage.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import Banner from "../header/Banner";
import ProductHome from "../products/ProductHome";
import Category from "./Category";
// import { useEffect } from "react";

const HomePage = () => {
  // useEffect(() => {
  //   AllProducts();
  // });

  // const AllProducts = () => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch(import.meta.env.VITE_API+"/store", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <ProductHome />
      <Menu />
    </div>
  );
};

export default HomePage;
