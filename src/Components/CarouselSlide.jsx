import React from "react";
import { Carousel } from "react-bootstrap";

export default class CarouselSlide extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 center-block" width={400} height={400} src={require("../assets/eventpic1.png")} alt="Slide1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 center-block" width={400} height={400} src={require("../assets/eventpic2.png")} alt="Slide2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 center-block" width={400} height={400} src={require("../assets/eventpic3.png")} alt="Slide3" />
                </Carousel.Item>
            </Carousel>
        );
    }
}