import React, { useState, useEffect, createContext } from 'react';

export const BalanceContext = createContext();

export default (props) => {
    const { children } = props;

    const [balance, setBalance] = useState(50);

    useEffect(() => {
        if (isNaN(localStorage.getItem("balance")) !== null) {
            setBalance(Number(localStorage.getItem("balance")));
        } 
    }, []);

    useEffect(() => {
        localStorage.setItem("balance", balance);
    }, [balance]);

    const updateBalance = value => {
        setBalance(balance => balance + value);
    }

    return (
        <div>
            <BalanceContext.Provider value={{balance, updateBalance}}>
                {children}
            </BalanceContext.Provider>
        </div>
    )
}