import { useState } from "react";
import { Quit } from "../../components/quit";
import { ToggleTheme } from "../../components/toggleTheme";
import * as S from "./styles";

export function Game() {
  const initialBoard = Array(9).fill(null);

  const [board, setBoard] = useState<(null | string)[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard: (string | null)[] = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    checkWinner(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = (currentBoard: (null | string)[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentPlayer);
      }
    }

    if (!currentBoard.includes(null)) {
      setWinner("Tie");
    }
  };

  const renderSquare = (index: number) => {
    return (
      <div className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <S.Container>
      <ToggleTheme style={{ position: "absolute", top: 5, left: 20 }} />
      <Quit style={{ position: "absolute", top: 5, right: 20 }} />

      <S.Game>{board.map((_, index) => renderSquare(index))}</S.Game>
      <S.Status>
        {winner ? `Winner: ${winner}` : `Next Player: ${currentPlayer}`}
      </S.Status>
      <S.Button onClick={resetGame}>Reset Game</S.Button>
    </S.Container>
  );
}
