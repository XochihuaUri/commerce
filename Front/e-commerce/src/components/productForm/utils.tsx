import axios from "axios";

type postProductType = {
  name: string;
  price: string;
  description: string;
  images: string[];
  stock: boolean;
};

const postProduct = async (data: postProductType) => {
  const response = await axios.post("http://127.0.0.1:4000/api/product", data);
  return response;
};

export default postProduct;
