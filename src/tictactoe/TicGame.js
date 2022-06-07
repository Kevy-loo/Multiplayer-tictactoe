import React from 'react';
import { useState, useEffect } from 'react';
import Square from './Square';
import "../styles/tictactoeStyles.css";
import { WinningPatterns } from './WinningPatterns';


export default function TicBoard() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "" ]);
    const [result, setResult] = useState({winner: "none", state: "none"})
    const [player, setPlayer] = useState("X");

    useEffect(() => {
        checkIfTie();
        checkWin();
        flipPlayer()  
    }, [board]);

    useEffect(() => {
        if (result.state != "none") {
          alert(`Game Finished! Winning Player: ${result.winner}`);
          restartGame();
        }
    }, [result]);


    const flipPlayer = () => {
        setPlayer((previousPlayer) => {
            if (previousPlayer === "X") return "O";
            else {
              return "X";
            }
        });      
    }



    const chooseSquare = (square) => {
        setBoard(board.map((val, idx) => {
            if(idx === square && val === "") {
               return player; 
            }
            if(idx === square && val !== "") {
                alert('cannot go there')
                flipPlayer()                              
            }
            return val;
        }));
    };
    const checkWin = () => {
        WinningPatterns.forEach((currPattern) => {
          const firstPlayer = board[currPattern[0]];
          if (firstPlayer === "") return;
          let foundWinningPattern = true;
          currPattern.forEach((idx) => {
            if (board[idx] !== firstPlayer) {
              foundWinningPattern = false;
            }
          });
    
          if (foundWinningPattern) {
            setResult({ winner: player, state: "Won" });
          }
        });
    };

      const checkIfTie = () => {
        let filled = true;
        board.forEach((square) => {
          if (square === "") {
            filled = false;
          }
        });
    
        if (filled) {
          setResult({ winner: "Tie", state: "Tie" });
        }
    };



    const restartGame = () => {
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setPlayer("X");
    };
    



    return (
        <div className='board'>
            <div className='row'>
                <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}}/>
                <Square val={board[1]} chooseSquare={() => {chooseSquare(1)}}/>
                <Square val={board[2]} chooseSquare={() => {chooseSquare(2)}}/>
            </div>
            <div className='row'>
                <Square val={board[3]} chooseSquare={() => {chooseSquare(3)}}/>
                <Square val={board[4]} chooseSquare={() => {chooseSquare(4)}}/>
                <Square val={board[5]} chooseSquare={() => {chooseSquare(5)}}/>
            </div>
            <div className='row'>
                <Square val={board[6]} chooseSquare={() => {chooseSquare(6)}}/>
                <Square val={board[7]} chooseSquare={() => {chooseSquare(7)}}/>
                <Square val={board[8]} chooseSquare={() => {chooseSquare(8)}}/>
            </div>
            
        </div>
    )
}
