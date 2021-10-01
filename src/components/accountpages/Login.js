import {
    makeStyles,
    TextField,
    Typography,
    Button,
    Grid,
    Link,
    Toolbar
} from '@material-ui/core'
import useState from 'react'

const useStyles = makeStyles({
    root: {
        background: 'primary'
    },
    button: {
        marginTop: 1,
        minWidth: 100,
    }
})

function Login({ history }) {
    const classes = useStyles();

    return (
        <div className="containerLogin">
            <Grid justifyContent="center"
                wrap="wrap">
                <Typography variant="h6">
                    E-mail Address:
                </Typography>
                <TextField placeholder="E-mail Address" />
                <Typography variant="h6">
                    Password:
                </Typography>
                <TextField placeholder="Password" />
                <Button variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"> Login </Button>
                <Link href="#" variant="body2">
                    Forgot Password?
                </Link>

            </Grid>
            <Grid>
                <Link href="#" variant="6">
                    Don't Have an account yet? Sign-Up
                </Link>

            </Grid>
        </div>
    )


}

export default Login