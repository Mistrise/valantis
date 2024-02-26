import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export default function DenseBar() {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Filters
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}