import { useState } from "react";
import { mainColor } from "../generics/generalStyles";

type miniImageProps = {
  imageUrl: string;
  handleActive: (id: number) => void;
  id: number;
};

export default function MiniImage({
  imageUrl,
  handleActive,
  id,
}: miniImageProps) {
  const [active, setActive] = useState<boolean>(false);
  const handleMouseEnter = () => {
    handleActive(id);
    setActive(true);
  };
  return (
    <div
      style={{
        height: "75px",
        width: "75px",
        marginBottom: "10px",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "4px",
        cursor: "pointer",
        border: active ? `solid 3px #757ce8` : "none",
      }}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => setActive(false)}
    ></div>
  );
}
