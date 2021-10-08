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
import Mouse1 from "../images/Mouse/Mouse1.jpg";
import Mouse2 from "../images/Mouse/Mouse2.jpg";
import Mouse3 from "../images/Mouse/Mouse3.jpg";

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
        { title: "Mouse 1", Price: "$150", image: Mouse1 },
        { title: "Mouse 2", Price: "$200", image: Mouse2 },
        { title: "Mouse 3", Price: "$135", image: Mouse3 },
        { title: "Tecknet", Price: "140" },
        { title: "Logitech", Price: "$80" }
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
                    {data.map(elem=> (
                        <Grid item sx={12} sm={6} md={3} key={data.indexOf(elem)}>
                            <Card>
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