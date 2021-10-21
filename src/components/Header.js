import {
    AppBar,
    makeStyles,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core'
import { useState } from 'react'
import { withRouter, BrowserRouter as Router, Link } from 'react-router-dom'
import theme from "../theme"
import NavBar from "./NavBar";
import Cart from "./ShoppingCart/Cart";
import LogRegBtn from "./topright/LogRegBtns";


const useStyles = makeStyles({
    header: {
        display: "flex",
        position: "inherit",
        color: "primary",
        alignItems: "space-evenly",
    },
    title: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        textDecoration: 'inherit',
        color: 'inherit',
    },
    searchBar: {
        display: "flex",
        alignItems: "center",
    },
    cart: {
        display: "flex",
        minWidth: "5%",
    }
})


function Header({ children, left, right, history }) {
    const classes = useStyles();

    return (
        <AppBar className={classes.header} >
            {left}
            <Toolbar >
                <Typography className={classes.title}
                    variant="h3"
                    component={Link}
                    to="/dashboard"
                >
                    ElectriShop
                </Typography>
                {right}
                <div className={classes.searchBar}>
                <NavBar />
                </div>
                <div className={classes.buttonDiv}>
                <LogRegBtn />
                </div>
                <div className={classes.cart}>
                    <Cart />
                </div>
            </Toolbar>
        </AppBar>

    )
}

export default Header
