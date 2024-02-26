import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Product} from "../../types";
import notFoundImage from "../../assets/images/NotFound.png"


export const JewelryCard = ({id, brand, price, product}: Product) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={notFoundImage}
                title="image of jewelry"
            />
            <CardContent sx={{height: 200}}>
                <Typography gutterBottom variant="h5" component="div">
                    {product}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {brand}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                    {price}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {id}
                </Typography>
            </CardContent>
        </Card>)
}

