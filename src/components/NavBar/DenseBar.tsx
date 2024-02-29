import AppBar from '@mui/material/AppBar';
import {Box, Button, FormControl, FormGroup, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import React, {useState} from "react";

const style = {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
    '& svg': {
        m: 1,
    },
    '& hr': {
        mx: 0.5,
    }
}

export default function DenseBar({setFormInput}: any) {
    const [select, setSelect] = useState('brand')
    const [textInput, setTextInput] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (select === "price") {
            setFormInput({[select]: parseInt(textInput, 10)})
        } else {
            setFormInput({[select]: textInput})
        }

    }

    return (
        <AppBar sx={{marginBottom: 3, backgroundColor: '#c5aa6a', alignItems: 'center'}} >
                <form  onSubmit={(event) => handleSubmit(event)} >
                    <FormGroup sx={style}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Select defaultValue="product" id="filter" onChange={(event:SelectChangeEvent<string>) => {
                                setSelect(event.target.value)
                            }}>
                                <MenuItem value={"product"}>product</MenuItem>
                                <MenuItem value={"brand"}>brand</MenuItem>
                                <MenuItem value={"price"}>price</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, }}>
                            <TextField size={'small'} placeholder={'Filter'} onChange={(event) => setTextInput(event.target.value)}/>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, display: 'inline-block' }}>
                            <Button disabled={!(textInput !== '')} sx={{backgroundColor: 'gray', color: "white"}} type={"submit"}>Submit</Button>
                        </FormControl>
                    </FormGroup>
                </form>
        </AppBar>
    );
}