import {
    AppBar,
    makeStyles,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core'
import { useState } from 'react'
import Login from "./accountpages/Login"
import { withRouter, BrowserRouter as Router, Link } from 'react-router-dom'
import Home from "./accountpages/Home"
import Register from "./accountpages/Register"

const useStyles = makeStyles({
    header: {
        position: "static",
        color: 'secondary',
        alignItems: 'flex-start'
    },
    title: {
        flexGrow: 1,
        textDecoration: 'inherit',
        color: 'inherit',
    },
    loginButton: {
        display: "flex",
        marginTop: 5,
        minWidth: 100,
        color: "primary",
        alignContent: "flex-end",
    },
    loginButtonDisabled: {
        backgroundColor: "rgba(29, 185, 84, 1)",
        color: "white",
        cursor: "not-allowed ",
        pointerEvents: "auto "
    },
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
                    to="/home"
                >
                    ElectriShop
                </Typography>
                {right}
                <Button variant="inherit"
                    component={Link}
                    size="small"
                    color="primary"
                    aria-label="login"
                    id="login"
                    classes={{
                        root: classes.loginButton,
                        disabled: classes.loginButtonDisabled
                    }}
                    to="/login">
                    Login

                </Button>
                <Button variant="inherit"
                    size="small"
                    color="primary"
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
            </Toolbar>
        </AppBar>

    )
}

export default Header
