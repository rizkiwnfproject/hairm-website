import React from "react";
import { Link } from "react-router-dom";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Classes } from "@blueprintjs/core";

const Home = () => {

    return (
        <div id="home">
            <div id="home-main"></div>
            <div className="home-content-main">
                <div className="table-cell">
                    <div className="container">
                        <div className="row home-row">
                            <div className="first-col-home col-lg-6 col-md-6">
                                <div className="row">
                                    <p> What is <span>HairM</span> ? </p>
                                </div>
                                <div className="main-title-home">
                                    <p>HairM is an application that provides references to the most popular haircut models and also recommends it for you so that it can help determine the best haircut model that suits you!</p>
                                    <p>Sed tristique semper iaculis. Suspendisse id ante molestie, auctor nibh molestie, tempor ex. Nam convallis, sapien at fermentum tempus, erat lacus fermentum libero, sit amet viverra est urna et lorem. Vestibulum tempus enim arcu, in suscipit felis sagittis quis. Fusce porta arcu sed lacinia feugiat.
                                    </p>
                                    <a href="/#model">
                                        <button type="button" className="btn-information-home-first text-center">Explore Models</button>
                                    </a>
                                        
                                    <a href="https://play.google.com/store/apps/details?id=com.cukuran.hairm&gl=US"><button type="input" className="btn-information-home-second text-center">HairM App</button></a>
                                </div>
                            </div>
                            <div className="second-col-home col-lg-5 col-md-5">
                                <img src="assets/img/home-image.jpg" alt="information" className={Classes.ELEVATION_4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;