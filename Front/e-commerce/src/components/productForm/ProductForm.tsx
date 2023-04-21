import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "./CustomModal";
import postProduct from "./utils";
import AddIcon from "@mui/icons-material/Add";
import {
  checkboxContainer,
  errorStyle,
  fieldStyle,
  formContainer,
  formStyle,
  inputStyle,
  labelStyle,
  listStyle,
} from "./styles";
import { Box, Button } from "@mui/material";
import ListLinkItem from "./ListLinkItem";

export default function ProductForm() {
  const [listOfLinks, setListOfLinks] = useState<string[]>([]);
  const [link, setLink] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, price, description, stock } = data;
    const dataToSend = {
      name: name,
      price: price,
      description: description,
      images: listOfLinks,
      stock: stock,
    };
    handleOpen();
    console.log(dataToSend);
    const response = await postProduct(dataToSend);
    console.log(response);
    if (response.status == 200) {
      setSuccess(true);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLink(e.currentTarget.value);
  };

  const deleteItem = (index: number) => {
    setListOfLinks((prev) =>
      prev.slice(0, index).concat(prev.slice(index + 1))
    );
  };

  const handleAddLink = () => {
    if (link.length < 1) {
      return;
    }
    setListOfLinks((prev: string[]) => [...prev, link]);
    reset({
      links: "",
    });
    setLink("");
  };

  return (
    <>
      <form style={formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={formStyle}>
          <Box sx={fieldStyle}>
            <label style={labelStyle}>Name</label>
            <input
              style={inputStyle}
              {...register("name", { required: true, maxLength: 50 })}
            />
            {errors.name && (
              <span style={errorStyle}>This field is required</span>
            )}
          </Box>

          <Box sx={fieldStyle}>
            <label style={labelStyle}>Price</label>
            <input
              style={inputStyle}
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span style={errorStyle}>This field is required</span>
            )}
          </Box>

          <Box sx={fieldStyle}>
            <label style={labelStyle}>Description</label>
            <input
              style={inputStyle}
              {...register("description", { required: true, maxLength: 150 })}
            />
            {errors.description && errors.description.type === "required" && (
              <span style={errorStyle}>This field is required</span>
            )}
            {errors.description && errors.description.type === "maxLength" && (
              <span style={errorStyle}>
                Max length of 150 characters exceeded
              </span>
            )}
          </Box>

          <Box sx={fieldStyle}>
            <label style={labelStyle}>Links to the images</label>
            <input
              style={inputStyle}
              {...register("links")}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              sx={{
                marginTop: "10px",
                alignSelf: "end",
                backgroundColor: "#29495C",
                ":hover": {
                  bgcolor: "#8DDBD0",
                  color: "#29495C",
                },
              }}
              size="medium"
              endIcon={<AddIcon />}
              type="button"
              onClick={handleAddLink}
            >
              Add link
            </Button>
            {listOfLinks.length > 0 && (
              <ul style={listStyle}>
                {listOfLinks.map((link, i) => (
                  <ListLinkItem
                    key={i}
                    id={i}
                    link={link}
                    deleteFn={deleteItem}
                  />
                ))}
              </ul>
            )}
          </Box>

          <Box sx={checkboxContainer}>
            <label style={labelStyle}>Is it in stock?</label>
            <input type="checkbox" {...register("stock")} />
          </Box>

          <Button
            variant="contained"
            sx={{
              margin: "10px 0",
              alignSelf: "center",
              backgroundColor: "#29495C",
              ":hover": {
                bgcolor: "#8DDBD0",
                color: "#29495C",
              },
            }}
            size="large"
            type="submit"
          >
            Create
          </Button>
        </Box>
      </form>
      <CustomModal open={open} handleClose={handleClose} success={success} />
    </>
  );
}
