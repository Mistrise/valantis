import {Grid} from "@mui/material";


const GridContainer = (props: any) => {
    return (
        <Grid container
              spacing={{ xs: 2, md: 3, lg: 3 }}
              columns={{ sm: 2, md: 4, lg: 6 }}
              sx={{marginBottom: 2}}>
            {props.children}
        </Grid>)
}

export default GridContainer