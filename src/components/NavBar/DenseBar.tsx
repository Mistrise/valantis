import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Input} from "@mui/material";
import {useState} from "react";



export default function DenseBar() {
    const ariaLabel = { 'aria-label': 'description' };
    const [input, setInput] = useState('')

    return (
        <Box sx={{ flexGrow: 1, marginBottom: 2, }}>
            <AppBar position="static">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Input placeholder="Brand" inputProps={ariaLabel} onChange={() => setInput('')}/>
                    <Input placeholder="Product" inputProps={ariaLabel} onChange={() => setInput('')}/>
                    <Input placeholder="Price" inputProps={ariaLabel} onChange={() => setInput('')}/>
                </Box>
            </AppBar>
        </Box>
    );
}