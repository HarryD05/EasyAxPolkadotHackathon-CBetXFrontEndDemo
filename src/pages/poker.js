import Navbar from "../shared/navbar";
import Footer from "../shared/footer";

import React, { useState, useContext, useEffect } from 'react';
import { BalanceContext } from "../contexts/balanceContext";

const Poker = () => {
    const [dice, setDice] = useState([0, 0]);
    const [bet, setBet] = useState([2, 0.01]);

    const balanceContext = useContext(BalanceContext);

    const updateSum = e => {
        setBet(bet => [Number(e.target.value), bet[1]]);
    }

    const updateBet = e => {
        setBet(bet => [bet[0], Number(e.target.value)]);
    }

    const setDie = (value, num) => {
        if (num == 0) {
            setDice(dice => {
                return [
                    value,
                    dice[1]
                ]
            })
        } else if (num == 1) {
            setDice(dice => {
                return [
                    dice[0],
                    value
                ]
            })
        }
    }

    const Roll = () => {
        setDie(Math.ceil(Math.random() * 6), 0);
        setDie(Math.ceil(Math.random() * 6), 1);

        if (dice[0] * dice[1] == bet[0]) {
            balanceContext.updateBalance(bet[1] * 10);
        } else {
            balanceContext.updateBalance(-bet[1]);
        }
    }

    return (
        <div>
            <Navbar />
                <div className="main">
                    <div id="dice">

                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Poker;
