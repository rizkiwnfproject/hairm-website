import React from "react";
import Home from '../Pages/Home';
import Information from '../Pages/Information';
import Feature from '../Pages/Feature';
import Model from '../Pages/Model';
import Testimonial from '../Pages/Testimonial';
// import Teams from '../Pages/Teams';


const MainHome = () => {
    return (
        <React.StrictMode>
            <div className="main-page-content">
                <Home />
                <Information />
                <Feature />
                <Model />
                <Testimonial />
                {/* <Teams /> */}
            </div>
        </React.StrictMode>
    );
};

export default MainHome;
