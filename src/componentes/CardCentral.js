import React, {useState} from 'react';
import './CardCentral.css'


function CardCentral() {
    const [wins, setWins] = useState((localStorage.getItem('CDg-calculator/wins')) == null ? 0 : (localStorage.getItem('CDg-calculator/wins')));
    const [lose, setLose] = useState((localStorage.getItem('CDg-calculator/lose')) == null ? 0 : (localStorage.getItem('CDg-calculator/lose')));
    const [rats, setRats] = useState((localStorage.getItem('CDg-calculator/rats')) == null ? 0 : (localStorage.getItem('CDg-calculator/rats')));

    function addWin() {
        localStorage.setItem('CDg-calculator/wins', wins + 1)
        setWins(wins+1);
    }
    function addLose() {
        localStorage.setItem('CDg-calculator/lose', lose + 1)
        setLose(lose+1);
    }
    function addRat() {
        localStorage.setItem('CDg-calculator/rats', rats + 1)
        setRats(rats+1);
    }
    function reset(){
        localStorage.removeItem('CDg-calculator/wins')
        localStorage.removeItem('CDg-calculator/lose')
        localStorage.removeItem('CDg-calculator/rats')
        setWins(0);
        setLose(0);
        setRats(0);
    }

    return(
        <div className="Dg-card">
            <h1 className="App-name">Corrupted Dungeon WIN/LOSE</h1>
            <h2 className="score">{wins} x {lose}</h2>
            <h2 className="ratao">Fucking Rats: {rats}</h2>
            <div className="buttons">
                <button id="win" onClick={ addWin }>Win</button>
                <button id="lose" onClick={ addLose }>Lose</button>
                <button id="rato" onClick={ addRat }>RATAO</button>
                <button id="reset" onClick={ reset }>Reset</button>
            </div>
        </div>
    );
};

export default CardCentral;