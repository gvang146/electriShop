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
import BlackWidow from "../images/Keyboards/Blackwidow.png";
import CherryBlk from "../images/Keyboards/CoolerMaster MX Cherry Black.jpg";
import MechKey from "../images/Keyboards/MechanicalKeyboard.jpg";

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
        { title: "CoolerMaster MX Cherry BLK", Price: "$150", image: CherryBlk },
        { title: "Original Mech. Keyboard", Price: "$200", image: MechKey},
        { title: "CoolerMaster", Price: "$135" },
        { title: "Razor BlackWidow", Price: "$140", image: BlackWidow },
        { title: "Mechanical Keys", Price: "$80" }
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