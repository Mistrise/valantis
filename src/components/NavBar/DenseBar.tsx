import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Button, FormControl, FormGroup, TextField} from "@mui/material";
import React, {useState} from "react";
import {fetchFilteredIds} from "../../helpers/api";

interface DensProps {
    setFormInput: (input: string) => void
}

export default function DenseBar({setFormInput}: DensProps) {
    const [select, setSelect] = useState('')
    const [textInput, setTextInput] = useState('')

    return (
        <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
            <AppBar position="static">
                <form onSubmit={async (event) => {
                    event.preventDefault()
                    if (select === "price") {
                        const data = await fetchFilteredIds({[select]: parseInt(textInput, 10)})
                        setFormInput(data)
                    } else {
                        const data = await fetchFilteredIds({[select]: textInput})
                        setFormInput(data)
                    }

                }}>
                    <FormGroup>
                        <FormControl>
                            <select name="filter" id="filter" onChange={(event) => {
                                setSelect(event.target.value)
                            }}>
                                <option value="brand">brand</option>
                                <option value="price">price</option>
                                <option value="product">product</option>
                            </select>
                            <TextField placeholder={'Filter'} onChange={(event) => setTextInput(event.target.value)}/>
                            <Button color={"secondary"} type={"submit"}>Submit</Button>
                        </FormControl>
                    </FormGroup>
                </form>
            </AppBar>
        </Box>
    );
}