import { Grid } from "@material-ui/core";
import Main from "./containers/Main/Main";
import NavigationBar from "./containers/NavigationBar.js/NavigationBar";
import "./index.css";

function App() {
    return (
        <Grid
            container={true}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            justifyContent="center"
        >
            {/* <NavigationBar /> */}
            <Main />
        </Grid>
    );
}

export default App;
