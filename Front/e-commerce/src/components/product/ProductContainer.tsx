import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { productContainerStyle } from "./style";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

export type product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  stock: boolean;
};

export default function ProductContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState<product>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://127.0.0.1:4000/api/product/${productId}`
      );
      if (response.status == 200) {
        setProduct(response.data);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={productContainerStyle}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ProductImages images={product!.images} />
        )}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ProductInfo
            name={product!.name}
            price={product!.price}
            description={product!.description}
            stock={product!.stock}
          />
        )}
      </div>
    </>
  );
}
