import { AppBar, 
         makeStyles,
         Toolbar,
         Typography,
         Button } from '@material-ui/core'
import {useState} from 'react'

const useStyles = makeStyles({
    header: {
        position: "static",
        color: 'secondary',
    },
    title: {
        flexGrow: 1
    },
    loginButton: {
        marginTop: 5,
        minWidth: 100,
        color: "primary"
    },
    loginButtonDisabled: {
        backgroundColor: "rgba(29, 185, 84, 1) !important",
        color: "white !important",
        cursor: "not-allowed !important",
        pointerEvents: "auto !important"
    },
})


function Header ({children, left, right}) {
    const classes = useStyles();
    const handleJoin = () => {

    }
    return (
        <AppBar className={classes.header}>
            {left}
            <Toolbar >
                <Typography className={classes.title}
                            variant="h3"
                            style={{ align: "center"}}>
                        ElectriShop
                </Typography>
            {right}
            <Button variant="inherit"
                 size="small"
                 color="primary"
                 aria-label="login"
                 id="login"
                 classes={{
                    root: classes.loginButton,
                    disabled: classes.loginButtonDisabled
                    }}
                    onClick={() => handleJoin()}>
                        Login

            </Button>
            <Button variant="inherit"
                 size="small"
                 color="primary"
                 aria-label="register"
                 id="register"
                 classes={{
                    root: classes.loginButton,
                    disabled: classes.loginButtonDisabled
                    }}
                    onClick={() => handleJoin()}>
                        Sign-up

            </Button>
            </Toolbar>
        </AppBar>
        
    )
}

export default Header
