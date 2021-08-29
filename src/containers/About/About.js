import { Avatar, Box, Grid, Tooltip } from "@material-ui/core";
import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default function About() {
    return (
        <Grid
            container={true}
            item={true}
            justifyContent="space-evenly"
            alignItems="center"
            lg={9}
            id="about"
            style={{ marginTop: 50 }}
        >
            <Grid
                container={true}
                item={true}
                lg={4}
                md={6}
                justifyContent="center"
                className="about-columns"
            >
                <Grid container={true}>
                    <Tooltip title="How are you?" placement="right">
                        <Box
                            className="me-container"
                            bgcolor="#f3ca20"
                            borderRadius={4}
                            p={2}
                            onClick={() => alert("How are you?")}
                        >
                            Hello I am
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid container={true}>
                    <h1> Rey PJ Baliguat </h1>
                </Grid>
                <Grid container={true}>
                    <h4> Fullstack Software Engineer </h4>
                </Grid>
                <Grid container={true}>
                    <Box width="100%" my={2}>
                        <Box display="flex" my={1} alignItems="center">
                            <EmailIcon /> <span> ninjapj25@gmail.com </span>
                        </Box>
                        <Box display="flex" my={1} alignItems="center">
                            <CallIcon /> <span> +63 9565686257 </span>
                        </Box>
                        <Box display="flex" my={1} alignItems="center">
                            <LocationOnIcon />{" "}
                            <span>
                                {" "}
                                Poblacion, Talisay City, Cebu 6045, Philippines{" "}
                            </span>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container={true}
                item={true}
                justifyContent="center"
                className="about-columns"
                lg={4}
                md={6}
            >
                <Avatar
                    src="1.jpg"
                    className="about-avatar"
                    style={{
                        width: 300,
                        height: 300,
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                />
            </Grid>
        </Grid>
    );
}
