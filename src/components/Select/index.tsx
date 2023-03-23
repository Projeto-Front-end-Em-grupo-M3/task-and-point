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
    <Box sx={{ minWidth: 380 }}>
      <FormControl fullWidth>
        <InputLabel id="shift-select">Turno</InputLabel>
        <Select
          labelId="shift-select"
          id="shift-select"
          value={shift}
          label="shift-select"
          onChange={handleChange}
        >
          <MenuItem value={"Manhã"}>Manhã</MenuItem>
          <MenuItem value={"Tarde"}>Tarde</MenuItem>
          <MenuItem value={"Noite"}>Noite</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
