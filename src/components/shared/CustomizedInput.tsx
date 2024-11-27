import { TextField } from "@mui/material";


type InputProps = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (props: InputProps) => {
  return (
    <TextField
      name={props.name}
      margin="normal"
      label={props.label}
      type={props.type}
      InputLabelProps={{ style: { color: "white" } }}
      InputProps={{
        style: {
          width: '100%',
          borderRadius: 10,
          fontSize: 20,
          color: "white"
        },
      }}
    />
  );
};

export default CustomizedInput;
