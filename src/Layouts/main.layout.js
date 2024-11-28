import React from "react";
import Header from "../Component/Header"
import Footer from '../Component/Footer';

const MainLayout = ({children}) => {
    return (
        <React.Fragment>
            <Header />
                {children}
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout
