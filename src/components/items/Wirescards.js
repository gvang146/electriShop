import {
    makeStyles,
    Button,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        color: 'primary',
    },
})

export default function Gpucards() {
    const classes = useStyles();
    const data = [
        { title: "Ethernet 800ft cord", Price: "$40" },
        { title: "Dino Wire", Price: "$200" },
        { title: "Lost Wire", Price: "$135" },
        { title: "Ghost Wire", Price: "$60" },
        { title: "Choking Wire", Price: "$5" }
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