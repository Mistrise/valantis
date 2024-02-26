import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Product} from "../../types";
import notFoundImage from "../../assets/images/NotFound.png"


export const JewelryCard = ({id, brand, price, product}: Product) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardMedia
                sx={{ height: 150 }}
                image={notFoundImage}
                title="image of jewelry"
            />
            <CardContent sx={{height: 75}}>
                <Typography sx={{fontSize: 14, marginBottom: 0, fontWeight: 600}} gutterBottom variant="h5" component="div">
                    {product}
                </Typography>
                <Typography sx={{fontSize: 14, marginBottom: 0}} gutterBottom variant="h5" component="div">
                    {price}
                </Typography>
                <Typography sx={{fontSize: 14, marginBottom: 0}} variant="body2" color="text.secondary">
                    {brand ? brand : 'brand is not specified'}
                </Typography>
                <Typography sx={{fontSize: 8, marginBottom: 0}} gutterBottom variant="h5" component="div">
                    {id}
                </Typography>
            </CardContent>
        </Card>)
}

