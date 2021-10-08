import { Typography, 
         TextField,
         Modal,
         makeStyles,
         Button,
        } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 200,
        },
    textfield: {
        margin: 20,
    },
    button: {
        display: "flex",
        marginTop: 5,
        minWidth: 100,
        color: "primary",
        alignContents: "flex-start",
    },
    title: {
        justifyContent: "center",
        marginTop: -100,
        marginBottom: 40,
    }
})

export default function ForgotPass() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
            <Typography variant="h4">
                Forgot yo' own Password Bruh?
            </Typography>
            </div>
            <Typography variant="h6" >
                Please Enter your e-mail address associated with 
                our service and we will e-mail you a renew password?
            </Typography>
                <TextField 
                    className={classes.textfield} 
                    placeholder="E-mail Address" />
                <Button
                    type="submitBtn"
                    color="secondary"
                    variant="contained"
                    className={classes.button}>
                        Submit
                    </Button>

        </div>
    )
}