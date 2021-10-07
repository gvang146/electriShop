import NavBar from "../NavBar"
import { makeStyles} from "@material-ui/core"
import ScrollableTabs from "../tabs/ScrollableTab";



const useStyles = makeStyles({
    root: {
        minWidth: 300,
    }
})

function Dashboard () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="tabs">
            <ScrollableTabs />
            </div>
            <NavBar />
        </div>
    )
}

export default Dashboard