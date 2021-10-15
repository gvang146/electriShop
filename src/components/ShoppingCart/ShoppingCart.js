import {
    ShoppingCartIcon
} from "@material-ui/icons/ShoppingCart";
import {
    Button,
    makeStyles,
    Box,
    SwipeableDrawer,
    Typography,
} from "@material-ui/core";
import React from "react";
import ListItems from "./ListItems";

const useStyle = makeStyles({
    button: {
        color: "secondary",
    },
    tabSize: {
        maxWidth: 100,
    }
})

export default function ShoppingCart() {
    const [state, setState] = React.useState({
        right: false,
    });
    const classes = useStyle();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return (
        <div className="container">
            {["right"].map((anchor) => (
                <React.Fragment ley={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        {anchor}
                    </Button>
                    <SwipeableDrawer
                        className={classes.tabSize}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        <Typography>Cart Items</Typography>
                        <div>
                            <ListItems />
                        </div>
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    )
}
