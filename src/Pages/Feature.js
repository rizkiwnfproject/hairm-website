import React from "react";


const Feature = () => {
    return (
        <div id="feature">
            <div className="feature-content">
                <div className="feature-grid">
                    <div className="row feature-row">
                        <div className="feature main-tittle">
                            <p className="text-center">What are the <span className="first-span">Features </span>in <span className="second-span">  HairM   </span></p>
                            <div className="inside-feature">
                                <div className="first-col col-lg-3 col-md-2">
                                    <div className="box-1">
                                        <img src="assets/img/features/pict1.png" alt="" />
                                    </div>
                                    <div className="box-2">
                                        <div className="tittle">There are many hairstyles</div>
                                    </div>
                                </div>
                                <div className="second-col col-lg-3 col-md-2">
                                    <div className="box-1">
                                        <img src="assets/img/features/pict2.png" alt="" />
                                    </div>
                                    <div className="box-2">
                                        <div className="tittle">There is a camera feature</div>
                                    </div>
                                </div>
                                <div className="third-col col-lg-3 col-md-2">
                                    <div className="box-1">
                                        <img src="assets/img/features/pict3.png" alt="" />
                                    </div>
                                    <div className="box-2">
                                        <div className="tittle">There is a recomended feature</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Feature;