import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    Button,
    makeStyles,
    Box,
    SwipeableDrawer,
    Typography,
    IconButton,
    Paper,
    Divider
} from "@material-ui/core";
import React from "react";
import ListItems from "./ListItems";

const useStyle = makeStyles({
    paper: {
        color: "secondary",
    },
    button: {
        color: "secondary",
    },
    tabSize: {
        maxWidth: 100,
    },
    cartTitle: {
        display: "flex",
        marginLeft: 150,
    },
})

export default function Cart() {
    const [state, setState] = React.useState(false);
    const classes = useStyle();

    return (
        <div>
            <IconButton onClick={() => setState(true)}>
                <ShoppingCartIcon />
            </IconButton>
            <Paper>
                <SwipeableDrawer
                    anchor="right"
                    open={state}
                    onClose={() => setState(false)}
                    onOpen={() => setState(true)}
                    classes={{ paper: classes.paper }}
                >
                    <div className={classes.cartTitle}>
                        <Typography variant="h5"> Cart </Typography>
                    </div>
                    <Divider />
                    <ListItems />
                </SwipeableDrawer>
            </Paper>
        </div>
    )
}
