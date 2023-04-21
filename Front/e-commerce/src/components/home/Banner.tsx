import BannerImg from "../../assets/banner3.jpg";
import { backgroundColor, mainColor } from "../generics/generalStyles";

export default function Banner() {
  return (
    <>
      <div
        style={{
          height: "330px",
          backgroundColor: mainColor,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${BannerImg})`,
            backgroundPosition: "50% 5%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "1rem 3rem 0.5rem",
          backgroundColor: backgroundColor,
        }}
      >
        <h2
          style={{
            color: mainColor,
            fontSize: "2rem",
            borderBottom: "solid 3px #ccc",
            width: "100%",
            paddingBottom: "5px",
          }}
        >
          Check out our new vehicles!
        </h2>
      </div>
    </>
  );
}
