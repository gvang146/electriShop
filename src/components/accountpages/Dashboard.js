import NavBar from "../NavBar"
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles({
    root: {
        minWidth: 300,
    }
})

function Dashboard () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
        </div>
        
    )
}

export default Dashboard