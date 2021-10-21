import {
    makeStyles,
    Button,
    ButtonGroup
}
    from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
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
        pointerEvents: "auto"
    },
    buttonDiv: {
        display: "flex",
        flexDirection: "row",
    },
})

export default function () {
    const classes = useStyles();

    return (
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
    )
}