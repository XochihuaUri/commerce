import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import { backgroundColor } from "../generics/generalStyles";
import { useEffect, useState } from "react";
import axios from "axios";
const product1 = {
  name: "product1",
  price: 1000,
  images: [
    "https://img.asmedia.epimg.net/resizer/76WWcfnIjah2kNrnLSDV5c6n_VU=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/J6NTSQ3HXJD6FI7DGGVC64L2QE.jpg",
    "https://img.remediosdigitales.com/818b47/ford-ranger-raptor_/1366_2000.jpg",
    "https://img.remediosdigitales.com/61b860/ford-ranger-raptor-2023_11/1366_2000.jpeg",
    "https://www.fordmylsa.mx/Assets/ModelosNuevos/Img/Modelos/RANGER-RAPTOR/23/galeria/big/galeria-01.jpg",
  ],
  id: "id1",
};

const product2 = {
  name: "product2",
  price: 2000,
  images: [
    "https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/raptor-2018/landing-intermedia/2019/ford-mexico-pick-up-offroad-camioneta-raptor-2019-con-gran-tecnologia.jpg/jcr:content/renditions/small.jpeg",
  ],
  id: "id2",
};

const product3 = {
  name: "product3",
  price: 3000,
  images: [
    "https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/raptor-2018/lobo-raptor-2021/overview/features/ford-lobo-raptor-2021-camioneta-pickup-offroad-motor-ecoboost-potencia-eficiente.jpg/jcr:content/renditions/small.jpeg",
  ],
  id: "id3",
};

const product4 = {
  name: "product4",
  price: 4000,
  images: [
    "https://www.fordcountryags.mx/Assets/ModelosNuevos/Img/Modelos/LOBO-RAPTOR/22/Colores/AZUL-MARINO-METALICO.png",
  ],
  id: "id4",
};

const product5 = {
  name: "product5",
  price: 5000,
  images: [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/877349-1627732659.jpg?crop=1.00xw:0.753xh;0,0.247xh&resize=1200:*",
  ],
  id: "id5",
};

const products = [product1, product2, product3, product4, product5];

type productPanelType = {
  name: string;
  price: number;
  images: string[];
  _id: string;
};

export default function ProductsPanel() {
  const [products1, setProducts1] = useState<productPanelType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:4000/api/product");
      if (response.status == 200) {
        setProducts1(response.data);
        console.log(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
        padding: "1rem 3rem",
        backgroundColor: backgroundColor,
      }}
    >
      {products1.map((product, index) => (
        <ProductCard
          name={product.name}
          price={product.price}
          images={product.images}
          id={product._id}
          key={index}
        />
      ))}
    </Box>
  );
}
