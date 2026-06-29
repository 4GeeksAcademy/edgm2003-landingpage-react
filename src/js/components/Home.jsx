import React from "react";
import Navbar from "./Navbar"
import Welcome from "./Welcome"
import Card from "./Card"
import Footer from "./Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Welcome />
            <Card />
            <Footer />
        </div>    
    )
}    

export default Home;