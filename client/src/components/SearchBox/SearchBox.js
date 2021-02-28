import { InputAdornment, Input, IconButton } from "@material-ui/core";
import { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import { useStyles } from "./SearchBoxStyle";
const SearchBox = ({ placeholder, onSearchChange }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const onChange = (query) => {
    setValue(query);
    onSearchChange(query);
  };
  return (
    <div>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <MdSearch />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end" onClick={() => onChange("")} className={`${value == "" && classes.none}`}>
            <IconButton>
              <MdClose />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default SearchBox;
