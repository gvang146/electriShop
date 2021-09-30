import {
    List,
    ListItem,
    ListItemText,
    makeStyles,
    TextField,
    Tooltip
} from "@material-ui/core"
import useState from 'react'

const useStyles = makeStyles({
    root: {
        marginTop: 2,
    },
    textInput: {
        background: "white",
        color: "black",
        fontSize: "x-large",
        fontWeight: "bold"
    },
    img: {
        margin: 1,
        width: 40
    }
})

/*function SearchResult ({item, handleSelect}) {
    const classes = useStyles();
    return (
        <ListItem
            id="search-results"
            alignItems="flex-start"
            onClick={() => handleSelect(item)}
            button
            >
            <listItemtext 
                primary={item.name.map(item => {
                    return item.name
                }).toString()}
                />
            </ListItem>
    )
} */
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
                    style={{ width: "80%" }}
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