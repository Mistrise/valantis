import AppBar from '@mui/material/AppBar';
import {Button, FormControl, FormGroup, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import React, {useState} from "react";

const style = {
    display: 'flex',
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
        <AppBar>
                <form onSubmit={(event) => handleSubmit(event)} >
                    <FormGroup sx={style}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Select defaultValue="brand" id="filter" onChange={(event:SelectChangeEvent<string>) => {
                                setSelect(event.target.value)
                            }}>
                                <MenuItem value={"brand"}>brand</MenuItem>
                                <MenuItem value={"price"}>price</MenuItem>
                                <MenuItem value={"product"}>product</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <TextField placeholder={'Filter'} onChange={(event) => setTextInput(event.target.value)}/>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Button color={"secondary"} type={"submit"}>Submit</Button>
                        </FormControl>
                    </FormGroup>
                </form>
        </AppBar>
    );
}