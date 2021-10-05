import {createMUITheme} from "@material-ui/core/styles"

const theme = createMUITheme({
    palette: {
        backgroundColor: {
            paper: "rbga(0, 0, 0, 1)",
            default: "rgba( 25, 20, 20, 1)",
        },
        primary: {
                light: "rgba(255, 240, 112, 1)",
                main: "rgba(255, 231, 20, 1)",
                dark: "rgba(214, 192, 0, 1)",
                contrastText: "rgba(255, 255, 255, 1)",
            },
            secondary: {
                light: "rgba(137, 225, 255, 1)",
                main: "rgba(0, 191, 255, 1)",
                dark: "rgba(0, 130, 173, 1)",
                contrastText: "rgba(255, 255, 255, 1)",
            },
            text: {
                primary: "rgba(255, 255, 255, 1)",
                secondary: "rgba(179, 179, 179, 1)",
              },
        },
        typography: {
            fontFamily: ["sans-serif", '"Helvetica Neue"', "Helvetica", "Arial"].join(
              ","
            ),
          },
    });