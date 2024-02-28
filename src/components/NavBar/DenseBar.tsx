import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Button, FormControl, FormGroup, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import React, {useState} from "react";
import {fetchFilteredIds} from "../../helpers/api";

interface DensProps {
    setFormInput: (input: string) => void
}

export default function DenseBar({setFormInput}: DensProps) {
    const [select, setSelect] = useState('')
    const [textInput, setTextInput] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (select === "price") {
            const data = await fetchFilteredIds({[select]: parseInt(textInput, 10)})
            setFormInput(data)
        } else {
            const data = await fetchFilteredIds({[select]: textInput})
            setFormInput(data)
        }

    }

    return (
        <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
            <AppBar position="static">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <FormGroup>
                        <FormControl>
                            <Select defaultValue="brand" id="filter" onChange={(event:SelectChangeEvent<string>) => setSelect(event.target.value)}>
                                <MenuItem value="brand">brand</MenuItem>
                                <MenuItem value="price">price</MenuItem>
                                <MenuItem value="product">product</MenuItem>
                            </Select>
                            <TextField placeholder={'Filter'} onChange={(event) => setTextInput(event.target.value)}/>
                            <Button color={"secondary"} type={"submit"}>Submit</Button>
                        </FormControl>
                    </FormGroup>
                </form>
            </AppBar>
        </Box>
    );
}