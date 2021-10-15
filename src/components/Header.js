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

const useStyles = makeStyles({
    header: {
        position: "static",
        color: "primary",
        alignItems: 'flex-start'
    },
    title: {
        flexGrow: 1,
        textDecoration: 'inherit',
        color: 'inherit',
        minWidth: "100%"
    },
    loginButton: {
        display: "flex",
        margin: 5,
        minWidth: 100,
        color: "secondary",
    },
    loginButtonDisabled: {
        backgroundColor: "rgba(29, 185, 84, 1)",
        color: "white",
        cursor: "not-allowed ",
        pointerEvents: "auto "
    },
    searchBar: {
        minWidth: "90%",
    },
    buttonDiv: {
        display: "flex",
        minWidth: "20%",
        flexDirection: "row",
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
                <Button variant="contained"
                    component={Link}
                    size="small"
                    aria-label="login"
                    id="login"
                    classes={{
                        root: classes.loginButton,
                        disabled: classes.loginButtonDisabled
                    }}
                    to="/login">
                    Login
                </Button>
                <Button variant="contained"
                    size="small"
                    aria-label="register"
                    id="register"
                    component={Link}
                    to="/Register"
                    classes={{
                        root: classes.loginButton,
                        disabled: classes.loginButtonDisabled
                    }}
                >
                    Sign-up
                </Button>
                </div>
            </Toolbar>
        </AppBar>

    )
}

export default Header
