import "./../styling/index.scss";

import {useState, React, useEffect} from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="nav">
            <div className="left">
                <h1><a href="/">CBetX</a></h1>
            </div>
            <div className="right">
                <a href="/about">About</a>
                <a onClick={() => setIsOpen(isOpen => !isOpen)} 
                    className="final">
                    Games
                    <div className={isOpen ? "last open" : "last closed"}>
                        <a href="/blackjack">Blackjack</a>
                        <a href="/poker">Poker</a>
                    </div>
                </a>
                <a href="#footer">Contact</a>
                <button >Link Wallet</button>
            </div>
        </div>
    )
}    

export default Navbar;