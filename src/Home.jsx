import React from "react";
import NavigationBar from "./Components/NavigationBar";
import CarouselSlide from "./Components/CarouselSlide";

export default class Home extends React.Component {
    render() {
        return (<div>
            <NavigationBar />
            <CarouselSlide />
        </div>
        );
    }
}
