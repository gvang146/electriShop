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
        { title: "Intel Cheating i29", Price: "$46" },
        { title: "Intel i1", Price: "$20" },
        { title: "Gigabax AMD Ryden", Price: "$275" },
        { title: "Column CPU", Price: "$487" },
        { title: "Speedster Intel i3000", Price: "$8000" }
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