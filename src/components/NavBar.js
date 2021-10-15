import {
    makeStyles,
    TextField,
    Tooltip,
} from "@material-ui/core"

import useState from 'react'

const useStyles = makeStyles({
    root: {
        marginLeft: 100,
    },
    textInput: {
        background: "white",
        color: "black",
        fontSize: "small",
        fontWeight: "bold"
    },
    img: {
        margin: 1,
        width: 40
    }
})


function NavBar({ createAlert }) {
    const classes = useStyles();

    const searchTip = "Search for an Item";

    const handleSelect = (item) => {

    }
    const handleSearch = (e) => {
    }
    return (
        <div className={classes.root}>
            <Tooltip title={searchTip}>
                <TextField id="search-bar"
                    variant="outlined"
                    style={{ minWidth: "100%" }}
                    type="search"
                    InputLabelProps={{
                        classes: {
                            root: classes.textInput,
                        },
                    }}
                    InputProps={{
                        classes: {
                            root: classes.textInput,
                        },
                    }}
                    placeholder="SEARCH"
                    onChange={(e) => {
                        //setCurrentInput(e.target.value)
                        handleSearch(e)
                    }}
                    //value={currentInput}
                />
            </Tooltip>

        </div>
    )

}

export default NavBar