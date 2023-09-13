import React from "react";
import { Link } from "react-router-dom";

export default function MiniGames() {
  const games = [
    {
      title: "1. Rock, Paper, Scissors",
      route: "/rock-paper-scissors",
    },
    {
      title: "2. Hangman",
      route: "/hangman",
    },
    {
      title: "3. Memory Card Game",
      route: "/memory-card-game",
    },
    {
      title: "4. Snake",
      route: "/snake",
    },
    {
      title: "5. Pong",
      route: "/pong",
    },
    {
      title: "6. Flappy Bird",
      route: "/flappy-bird",
    },
    {
      title: "7. Connect Four",
      route: "/connect-four",
    },
    {
      title: "8. Sudoku",
      route: "/sudoku",
    },
    {
      title: "9. Tic-Tac-Toe",
      route: "/tic-tac-toe",
    },
    {
      title: "10. Minesweeper",
      route: "/minesweeper",
    },
  ];

  return (
    <div>
      <h1>Mini Games</h1>
      <p>Choose a game to play:</p>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <Link to={game.route}>{game.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
