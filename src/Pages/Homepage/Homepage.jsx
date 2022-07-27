import React from "react";
import CallToAction from "./Sections/CallToAction/CallToAction";
import Navigation from "./Sections/Navigation/Navigation";
import BlueTiles from "./Sections/BlueTiles/BlueTiles";
import Latest from "./Sections/Latest/Latest";
import Welcome from "./Sections/Welcome/Welcome";

export default function Homepage() {
    return (
        <div>
            <CallToAction />
            <Navigation />
            <BlueTiles />
            <Welcome />
            <Latest />
        </div>
    );
}
