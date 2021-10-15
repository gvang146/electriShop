import {
    ShoppingCartIcon
} from "@material-ui/icons/ShoppingCart";
import { Button,
         makeStyles } 
from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
    button: {
        color: "secondary",
    },
})

export default function ShoppingCart() {
    const classes = useStyle();

        return (
            <Button>
                ShoppingCart
            </Button>
        )
}
