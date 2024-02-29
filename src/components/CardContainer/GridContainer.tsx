import {Grid} from "@mui/material";




const GridContainer = (props: any) => {
    return (
        <Grid container
              spacing={{ xs: 2, sm: 2, md: 3, lg: 3 }}
              columns={{ xs: 2, sm: 2, md: 4, lg: 6 }}
              paddingTop={{xs: 18, sm: 10, md: 10, lg: 10}}
              sx={{marginBottom: 2}}>
            {props.children}
        </Grid>)
}

export default GridContainer