import Navbar from "./../shared/navbar";
import Footer from "../shared/footer";

import React, { useState, useContext, useEffect } from "react";
import {BalanceContext} from "../contexts/balanceContext";

const Blackjack = () => {
    const [bet, setBet] = useState(0);
    const [showCards, setShowCards] = useState(false);
    const [cards, setCards] = useState([]);

    const suits = ["diamond", "spade", "heart", "clove"];
    const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "Jack", "Queen", "King", "Ace"];
    const deck = [];
    suits.forEach(suit => {
        numbers.forEach(number => {
            deck.push(suit + " " + number);
        })
    });
    
    const shuffleDeck = () => {
        for (let i = 0; i < 50; i++) {
            continue;
        }
    }

    useEffect(() => {
        setCards([
            
        ])
    }, []);

    const balanceContext = useContext(BalanceContext);  

    return (
        <div>
            <Navbar />
            <div className="main" id="blackjack">

            </div>
            <Footer />
        </div>
    )
}

export default Blackjack;