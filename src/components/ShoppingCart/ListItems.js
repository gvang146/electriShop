import {
    Box,
    Button,
    ButtonGroup,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@material-ui/core";
import React from "react";


export default function listItems({ anchor }) {
    return (
        <List>
            {["Item 1", "Item 2", "Item 3", "Item 4"].map((text, index) => (
                <ListItem key={text} >
                    <ListItemText primary={text} />
                    <ButtonGroup>
                        <Button>+</Button>
                        <Button>-</Button>
                    </ButtonGroup>
                    <div>
                        <Button variant="contained"
                                color="secondary">Remove</Button>
                    </div>
                </ListItem>
            ))}
        </List>
    )
}