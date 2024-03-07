/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Quit } from "../../components/quit";
import { playSoundO, playSoundX } from "../../components/sound";
import { ToggleTheme } from "../../components/toggleTheme";
import * as S from "./styles";

export function Room() {
  const initialBoard = Array(9).fill(null);

  const [board, setBoard] = useState<(null | string)[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);

  const { id } = useParams();

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard: (string | null)[] = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    checkWinner(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    if (currentPlayer === "X") {
      playSoundO();
    } else {
      playSoundX();
    }
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

  async function copy(code: string) {
    try {
      await navigator.clipboard.writeText(`${code}`);
      toast.success(`Código copiado: ${code}`);
    } catch (err) {
      console.error("Erro ao copiar para a área de transferência:", err);
    }
  }

  return (
    <S.Container>
      <S.Header>
        <ToggleTheme />

        <div className="code">
          <h1>Código: {id}</h1>
          <button onClick={() => id && copy(id)}>
            <FaRegCopy size={20} />
          </button>
        </div>

        <Quit />
      </S.Header>

      <S.Game>{board.map((_, index) => renderSquare(index))}</S.Game>
      <S.Status>
        {winner ? `Winner: ${winner}` : `Next Player: ${currentPlayer}`}
      </S.Status>
      <S.Button onClick={resetGame}>Reset Game</S.Button>
    </S.Container>
  );
}
