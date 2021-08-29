import {
    CardActionArea,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@material-ui/core";
import React from "react";

export default function Projects() {
    const projects = [
        {
            image: "https://i.imgur.com/vKTvvek.png",
            text: "Recipe App",
            textBody:
                "This is a Web App to search for your food recipe. Powered by https://www.edamam.com/",
            link: "https://ninjapj25.github.io/Search-Recipe-App",
        },
        {
            image: "https://i.imgur.com/vyjCjnw.png",
            text: "Typing Game",
            textBody:
                "This is a very simple typing game. Remember to type the first letter to play :D",
            link: "https://ninjapj25.github.io/Typing-Game-App/",
        },
        {
            image: "https://i.imgur.com/ZylIvf6.png",
            text: "Weather App",
            textBody:
                "This is a Web App to search for the weather of a certain city, powered by https://openweathermap.org/",
            link: "https://ninjapj25.github.io/WeatherReduxAppV2/",
        },
    ];
    return (
        <Grid
            container={true}
            item={true}
            justifyContent="space-evenly"
            alignItems="center"
            lg={8}
            className="projects-container"
            id="works"
        >
            {projects.map((project) => (
                <Grid
                    container={true}
                    item={true}
                    lg={3}
                    md={6}
                    key={project.text}
                    justifyContent="center"
                >
                    <Card className={"project-cards"}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={project.text}
                                height="140"
                                image={project.image}
                                title={project.text}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {project.text}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {project.textBody}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                target="_blank"
                                href={project.link}
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
