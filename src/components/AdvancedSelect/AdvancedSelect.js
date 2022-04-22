import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const { Option } = Select;

function AdvancedSelect({options, label, selected, handleChange}) {

  return (
    <div className="advanced-select">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id=""
            value={selected}
            label={label}
            onChange={e => handleChange(e.target.value)}
          >
            {options.map((option, i) =>
              <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    </div>

  )
}

export default AdvancedSelect