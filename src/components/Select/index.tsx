import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { UserContext } from "../../contexts/userContext";

export default function BasicSelect() {
  const { shift, setShift } = React.useContext(UserContext);

  const handleChange = (event: SelectChangeEvent) => {
    setShift(event.target.value as string);
  };

  return (
    <Box sx={{ width: 380 }} style={{ maxWidth: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="shift-select" style={{ fontFamily: "Nunito" }}>
          Turno
        </InputLabel>

        <Select
          required
          labelId="shift-select"
          id="shift-select"
          value={shift}
          label="shift-select"
          onChange={handleChange}
          style={{
            fontFamily: "Nunito",
            background: "#ffff",
            boxShadow: " 0px 1px 12px -8px rgba(133,133,133,1)",
            marginTop: "0px",
          }}
        >
          <MenuItem style={{ fontFamily: "Nunito" }} value={"Manhã"}>
            Manhã
          </MenuItem>
          <MenuItem style={{ fontFamily: "Nunito" }} value={"Tarde"}>
            Tarde
          </MenuItem>
          <MenuItem style={{ fontFamily: "Nunito" }} value={"Noite"}>
            Noite
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
