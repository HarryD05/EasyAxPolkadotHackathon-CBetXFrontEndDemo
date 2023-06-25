import Navbar from "./../shared/navbar";
import Footer from "../shared/footer";

import React, { useState, useContext } from "react";
import {BalanceContext} from "../contexts/balanceContext";

import bgImage from "./../assets/background.png";

import "./../styling/index.scss";

const Home = () => {
    const balanceContext = useContext(BalanceContext);  

    return (
        <div>
            <Navbar />
            <div id="home">
                <img src={bgImage} className="bg" />

                <div className="side">
                    <h2>Gambling without the house.</h2>
                    <p>Accepting of all crypto currency, whilst providing complete anonymity.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;