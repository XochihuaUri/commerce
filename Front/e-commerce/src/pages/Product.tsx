import React from "react";
import Navbar from "../components/generics/Navbar";
import ProductContainer from "../components/product/ProductContainer";
import { backgroundColor } from "../components/generics/generalStyles";

export default function Product() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: backgroundColor,
          padding: "1rem 8%",
          minHeight: "90vh",
        }}
      >
        <ProductContainer />
      </div>
    </div>
  );
}
