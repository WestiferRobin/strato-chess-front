import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PrismSelect({defaultValue, onHandle}) {
  const debugOptions = [
      'Alpha',
      'Beta',
      'Gamma'
  ]

  const handleChange = (event) => {
    onHandle(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Prism Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={defaultValue}
          label="Prism Model"
          onChange={handleChange}
        >
          {
            debugOptions.map(option => <MenuItem value={option}>{option}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}