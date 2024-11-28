import React from "react";
import ReactCardSlider1 from "../Component/ReactCardSlider1";
import ReactCardSlider2 from "../Component/ReactCardSlider2";
import datas from "../Component/data/response.json";

const Model = () => {


    return (
        <div id="model">
            <div className="model-content">
                <div className="model-row row">
                    <p className="tittle text-center">Hair Models</p>
                    <div className="first-slider-container">
                        <p className="first-model"> Recommendation </p>
                        <div className="slider">
                            <ReactCardSlider1 slides={datas} />
                        </div>
                    </div>
                    <div className="second-slider-container">
                        <p className="second-model"> Popular </p>
                        <div className="slider">
                            <ReactCardSlider2 slides={datas} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Model;