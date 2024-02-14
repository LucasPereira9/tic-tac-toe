import React from 'react';
import styles from './board.module.css'

const Board = () => {
    const emptyBoard = Array(9).fill('')
    const [board, setBoard] = React.useState(emptyBoard)
    const [currentPlayer, setCurrentPlayer] = React.useState('O')

  const handleCellClick = (index: number) => {
    if (board[index] !== '') {
        return null;
    }
    setBoard(board.map((item, Itemindex) => Itemindex === index ? currentPlayer : item ))
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
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
            console.log(`${winner} venceu!`);
            // Lógica adicional para o vencedor
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
                {item}
        </div>
        ))}
    </div>
   ) 
};

export default Board;