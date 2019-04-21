import React from "react";
import { Carousel } from "react-bootstrap";
import { eventpic1 } from "../assets/eventpic1.png";
import { eventpic2 } from "../assets/eventpic2.png";
import { eventpic3 } from "../assets/eventpic3.png";


export default class CarouselSlide extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-fade" src={eventpic1} alt="Slide1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={eventpic2} alt="Slide2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={eventpic3} alt="Slide3" />
                </Carousel.Item>
            </Carousel>
        );
    }
}