import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerCard from "./PlayerCard";
import { playersProfileJSON } from "../players";

const PlayerList = () => {
  const players = JSON.parse(playersProfileJSON);
  return (
    <section className="row col gap-3">
      {/* <PlayerCard {...players[0]} />
      <PlayerCard {...players[1]} /> */}
      {players.map((player) => (
        <PlayerCard {...player} key={player.id} />
      ))}
    </section>
  );
};

export default PlayerList;
