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

const useStyles = makeStyles({
    header: {
        position: "static",
        color: 'secondary',
        alignItems: 'flex-start'
    },
    title: {
        flexGrow: 1,
    },
    loginButton: {
        marginTop: 5,
        minWidth: 100,
        color: "primary",
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
                >
                    ElectriShop
                </Typography>
                {right}
                <Button variant="inherit"
                    component={Link}
                    size="small"
                    color="secondary"
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
                    color="secondary"
                    aria-label="register"
                    id="register"
                    classes={{
                        root: classes.loginButton,
                        disabled: classes.loginButtonDisabled
                    }}
                    onClick={() => history.push("/register")}>
                    Sign-up
                </Button>
            </Toolbar>
        </AppBar>

    )
}

export default Header
