import { Grid } from "@material-ui/core";
import React, { useState } from "react";

export default function NavigationBar() {
    const [selected, setSelected] = useState("About");
    const handleSelect = (e) => {
        setSelected(e.target.text);
    };
    return (
        <Grid
            container={true}
            item={true}
            lg={9}
            alignItems="center"
            justifyContent="center"
            className="navigation-container"
        >
            <Grid container={true} item={true} justifyContent="center">
                <a
                    href="#about"
                    style={selected === "About" ? styles.selected : {}}
                    onClick={handleSelect}
                    className="nav-items"
                >
                    About
                </a>
                <a
                    href="#works"
                    style={selected === "Works" ? styles.selected : {}}
                    onClick={handleSelect}
                    className="nav-items"
                >
                    Works
                </a>
                <a
                    href="#contact"
                    style={selected === "Contact" ? styles.selected : {}}
                    onClick={handleSelect}
                    className="nav-items"
                >
                    Contact
                </a>
            </Grid>
        </Grid>
    );
}

const styles = {
    selected: {
        borderBottom: "4px solid #f3ca20",
        transition: "border .7s",
    },
};
