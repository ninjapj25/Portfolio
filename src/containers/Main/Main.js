import React from "react";

import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

export default function Main() {
    return (
        <React.Fragment>
            <About />
            <Skills />
            <Projects />
        </React.Fragment>
    );
}
