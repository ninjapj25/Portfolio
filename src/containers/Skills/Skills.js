import { Box, Grid, Tooltip } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import BrushIcon from "@material-ui/icons/Brush";
import React from "react";

export default function Skills() {
    return (
        <Grid
            container={true}
            item={true}
            justifyContent="space-evenly"
            alignItems="center"
            lg={9}
            className="skills-container"
        >
            <Grid
                container={true}
                item={true}
                lg={4}
                md={6}
                justifyContent="center"
                className="about-columns"
            >
                <img
                    src="skills.jpg"
                    alt="skills"
                    className="skills-image"
                    style={{
                        width: 450,
                        height: 300,
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                />
            </Grid>
            <Grid
                container={true}
                item={true}
                lg={4}
                md={6}
                justifyContent="center"
                className="about-columns"
            >
                <Grid container={true}>
                    <Tooltip title="I am a programmer" placement="right">
                        <Box
                            className="me-container"
                            bgcolor="#f3ca20"
                            borderRadius={4}
                            p={2}
                        >
                            What I can do?
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid container={true} alignItems="center">
                    <h1> MERN STACK </h1>
                </Grid>
                <Grid container={true} alignItems="center">
                    <h4> Mongo DB, Express, React JS, Node JS </h4>
                </Grid>
                <Grid container={true}>
                    <Box width="100%" my={2}>
                        <Box display="flex" my={1} alignItems="center">
                            <CodeIcon />
                            <span> I code in VSCode. </span>
                        </Box>
                        <Box display="flex" my={1} alignItems="center">
                            <BrushIcon />
                            <span>
                                {" "}
                                I can make your figma design to a website.{" "}
                            </span>
                        </Box>
                        <Box display="flex" my={1} alignItems="center">
                            <DeveloperModeIcon />

                            <span>
                                {" "}
                                I can use Material UI and Semantic UI
                                Frameworks.{" "}
                            </span>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}
