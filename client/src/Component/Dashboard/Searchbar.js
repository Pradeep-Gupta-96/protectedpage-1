import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { TextField, FormControl, InputLabel, Select, MenuItem, Paper, Button } from '@mui/material'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Searchbar = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <>
            <Item sx={{ display: "flex", justifyContent: "space-between" }}>
                <TextField type='Search' placeholder='file name' size="small" sx={{ m: 1, minWidth: 200 }}/>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                    <InputLabel id="demo-simple-select-label">Notice Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Notice Type"
                        onChange={handleChange}
                    >
                        <MenuItem value=''><em>none</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                    <InputLabel id="demo-simple-select-label">Email ID</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Email ID"
                        onChange={handleChange}
                    >
                        <MenuItem value=''><em>none</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <TextField type='date' size="small" sx={{ m: 1, minWidth: 200 }}/>
                <Button variant='contained' color='secondary' sx={{ m: 1 }} >Search</Button>
                <Button variant='outlined' color='secondary' sx={{ m: 1 }} >Reset</Button>
            </Item>
        </>
    )
}

export default Searchbar