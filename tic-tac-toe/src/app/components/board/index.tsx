import React from 'react';
import styles from './board.module.css'
import xAnimation from '../../assets/xAnimation.json'
import oAnimation from '../../assets/oAnimation.json'
import Lottie from 'lottie-react';


const Board = () => {
    const emptyBoard = Array(9).fill('')
    const [board, setBoard] = React.useState(emptyBoard)
    const [animations, setAnimations] = React.useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = React.useState('O')
    const [winner, setWinner] = React.useState()

  const handleCellClick = (index: number) => {
    if (winner) {
        console.log('jogo finalizada')
        return null;
    }
    if (board[index] !== '') {
        return null;
    }
    const newBoard = board.map((item, Itemindex) => (Itemindex === index ? currentPlayer : item));
    const newAnimations = [...animations];
    newAnimations[index] = getAnimationForPlayer();

    setBoard(newBoard);
    setAnimations(newAnimations);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
    const getAnimationForPlayer = () => {
        return currentPlayer === 'X' ? xAnimation : oAnimation;
      };

    const generateWinningCombinations = (size) => {
        const combinations = [];
    
        // Adiciona linhas
        for (let row = 0; row < size; row++) {
            const rowCombination = [];
            for (let col = 0; col < size; col++) {
                rowCombination.push(row * size + col);
            }
            combinations.push(rowCombination);
        }
    
        // Adiciona colunas
        for (let col = 0; col < size; col++) {
            const colCombination = [];
            for (let row = 0; row < size; row++) {
                colCombination.push(row * size + col);
            }
            combinations.push(colCombination);
        }
    
        // Adiciona diagonais
        const diagonal1 = [];
        const diagonal2 = [];
        for (let i = 0; i < size; i++) {
            diagonal1.push(i * size + i);
            diagonal2.push((size - 1 - i) * size + i);
        }
        combinations.push(diagonal1, diagonal2);
    
        return combinations;
    };

    const checkWinner = () => {
        const possibleWaysToWin = generateWinningCombinations(3);

        let winner = null;

        possibleWaysToWin.forEach(cells => {
            const values = cells.map(cell => board[cell]);

            if (values.every(value => value === "O")) {
                winner = 'O';
            }
            if (values.every(value => value === "X")) {
                winner = 'X';
            }

        });

        if (winner) {
            setWinner(winner)
        } else 
        if (board.every(cell => cell !== '')) {
            setWinner('E');
        } else {
            console.log('Ninguém venceu ainda.');
        }
    };

    React.useEffect(() => {
        checkWinner();
    }, [board]);


   return (
    <div className={styles.board}>
        {board.map((item, index) => (
        <div key={index}
            className={`${styles.cell} ${item && styles[item]}`}
            onClick={() => handleCellClick(index)}>
                <div>
            {animations[index] && <Lottie loop={false} animationData={animations[index]} />}
                </div>
        </div>
        
        ))}
    </div>
   ) 
};

export default Board;