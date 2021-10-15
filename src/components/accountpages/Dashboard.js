import NavBar from "../NavBar"
import { makeStyles } from "@material-ui/core"
import ScrollableTabs from "../tabs/ScrollableTab";
import ShoppingCart from "../ShoppingCart/ShoppingCart";


const useStyles = makeStyles({
    root: {
        display: "flex",
        minWidth: 300,
        flexDirection: "row",
    },
    scrollable: {
        minWidth: "95%",
    },
    cart: {
        padding: 5,
        minWidth: "5%",
    }

})

function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.scrollable}>
                <ScrollableTabs />
            </div>
            <div className={classes.cart}>
                <ShoppingCart />
            </div>

        </div>
    )
}

export default Dashboard