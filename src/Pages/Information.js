import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Classes } from "@blueprintjs/core";

const Information = () => {
    return (
        <div id="information">
            <div className="information-content">
                <div className="love-grid">
                    <div className="row information-row">
                        <div className="first-col-information col-md-6">
                            <img src="assets/img/information/hairm1edit.png" alt="information" />
                        </div>
                        <div className="second-col-information col-md-5">
                            <div className="row tittle-row-first">
                                <h1>The Advantages of <span className="span-information">HairM</span> ? </h1>
                            </div>
                            <div className="main-title">
                                <div className="adv-col-first col">
                                    <div className="row adv-row-first">
                                        <p><span className="number">1</span> Sed tristique semper iaculis. Suspendisse id ante molestie</p>
                                    </div>
                                    <div className="row adv-row-second">
                                        <p><span className="number">2</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>                                    </div>
                                    <div className="row adv-row-third">
                                        <p><span className="number">3</span> Sed tristique semper iaculis. Suspendisse id ante molestie</p>                                    </div>
                                    <div className="row adv-row-fourt">
                                        <p><span className="number">4</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;