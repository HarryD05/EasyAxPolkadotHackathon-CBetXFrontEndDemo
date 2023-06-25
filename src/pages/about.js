import Navbar from "../shared/navbar";
import Footer from "../shared/footer";

import React, {useState} from "react";

const About = () => {
    const [is1Open, setIs1Open] = useState(true);
    const [is2Open, setIs2Open] = useState(false);
    const [is3Open, setIs3Open] = useState(false);
    const [is4Open, setIs4Open] = useState(false);

    const toggle = index => {
        switch (index) {
            case 0:
                setIs1Open(open => !open);
                break;
            case 1:
                setIs2Open(open => !open);
                break;
            case 2:
                setIs3Open(open => !open);
                break;
            case 3:
                setIs4Open(open => !open);
                break;
        }
    }

    return (
        <div>
            <Navbar />
            <div className="main" id="about">
                <h2>About Us</h2>
                <p>Here is a brief explanation about who we are as a company and what<br />we aim to provide to the games industry</p>

                <div className="openers">
                    <div className="opener">
                        <button onClick={() => toggle(0)}>=</button>
                        <h3>What is CBetX?</h3>
                        <p style={{"display": (is1Open ? "inherit" : "none")}}>CBetX is a decentralised games service that priorities the user experience and removes the house advantage, allowing for pure fun without being cheated out of winnings.</p>
                    </div>

                    <div className="opener">
                        <button onClick={() => toggle(1)}>=</button>
                        <h3>What currencies do we accept?</h3>
                        <p style={{"display": (is2Open ? "inherit" : "none")}}>Placeholder</p>
                    </div>

                    <div className="opener">
                        <button onClick={() => toggle(2)}>=</button>
                        <h3>Can I withdraw to multiple currencies?</h3>
                        <p style={{"display": (is3Open ? "inherit" : "none")}}>Placeholder</p>
                    </div>

                    <div className="opener">
                        <button onClick={() => toggle(3)}>=</button>
                        <h3>What separates CBetX from other crypto casinos?</h3>
                        <p style={{"display": (is4Open ? "inherit" : "none")}}>Placeholder</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;