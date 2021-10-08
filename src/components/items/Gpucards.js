import {
    makeStyles,
    Button,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Typography,
    CardMedia,
} from "@material-ui/core";
import GTX1080 from "../images/GPUS/GTX1080.jpg";
import GTX1080TI from "../images/GPUS/GTX1080Ti.jpg";
import RTX3070TI from "../images/GPUS/RTX3070Ti.jpg";
import RTX3090 from "../images/GPUS/RTX3090.jpg";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        color: 'primary',
    },
    card: {
        flexGrow: 1,
        borderRadius: 10,
    },
    media: {
        height: 0,
        paddingTop: "56.25%",
    }
})

export default function Gpucards() {
    const classes = useStyles();
    const data = [
        { title: "GTX1080", Price: "$400", image: GTX1080 },
        { title: "GTX1080Ti", Price: "$500", image: GTX1080TI },
        { title: "RTX3070Ti", Price: "$800", image: RTX3070TI },
        { title: "RTX3090", Price: "$1200", image: RTX3090 },
        { title: "RTX3070", Price: "$700" }
    ]
    const handleAddToCart =() => {

    }

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                flex-direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                >
                    {data.map(elem => (
                        <Grid item sx={12} sm={6} md={3} key={data.indexOf(elem)}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.media}
                                    image={`${elem.image}`}
                                    />
                                <CardHeader
                                    title={`${elem.title}`}
                                    subheader={`Price: ${elem.Price}`}
                            />
                            <CardContent>
                                <Typography vairant="h5" gutterBottom>
                                    Stock Available 
                                </Typography>
                                <Button variant="contained"
                                        color="secondary"
                                        size="small"
                                        onClick={handleAddToCart}>
                                    Add To Cart
                                </Button>    
                            </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
        </div>
    )
}