import {
    makeStyles,
    Slide,
    Fab,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Divider,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, CircularProgress, Button, Typography,
} from "@material-ui/core"
import {
    ExpandLess, ExpandMore
} from "@material-ui/icons"
import { useState } from "react"

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: 360,
    },
    active: {
        "&:hover": {
            background: "secondary",
        },
        backgroundColor: "secondary",
    },
    nested: {
        paddingLeft: 4,
    },
    center: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    },
    moreButton: {
        marginTop: 1
    },
    help: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "black",
    },
    helpText: {
        backgroundColor: "secondary",
        padding: 1,
        textAlign: "center"
    },
});

const filterItems = {
    products: ['GPU', 'CPU', 'Keyboards', 'Mouse']
}

export default function Filter({ filterItems }) {
    const classes = useStyles();

    const [open, setOpen] = useState("")

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = (event) => {
        setOpen({ [event + "Open"]: !open[event + "Open"] });
    }

    return (
        <div className="container">
            <List>
                <ListItem
                    button
                    className={classes.active}
                    onClick={() => handleClick("filter")}

                >
                    <ListItemText primary="Computer Parts" />
                    {open.computerOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open.computerOpen} timeout="auto" unmountOnExit>
                    <Typography variant={"body2"} className={classes.helptext}>
                        Filter Items
                    </Typography>
                    <List component="div" disablePadding>
                        {filterItems.map((text, index) => (
                            <ListItem
                                id="computer-parts"
                                button
                                onClick={() => handleOpen(text)}
                                className={classes.nested}
                            >
                                <ListItemText style={{ color: "#191616" }} primary={text.title} />
                            </ListItem>
                        ))}
                    </List>

                </Collapse>
            </List>
        </div>
    )
}
