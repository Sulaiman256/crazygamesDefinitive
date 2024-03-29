import React from "react";
import { useParams } from "react-router-dom";
import CoverDetail from "./CoverDetail";
import GameImageCenter from "./GameImageCenter";
import StateGame from "./StateGame";
import DetectUsers from "./DetectUsers";
import ButtonsAndPriceGameDetails from "./ButtonsAndPriceGameDetails";
import GameFeatures from "./GameFeatures";
import Visuals from "./Visuals";
import Description from "./Description";

const GameDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <CoverDetail productId={id} />
      <GameImageCenter productId={id} />
      <StateGame productId={id} />
      <DetectUsers productId={id} />
      <ButtonsAndPriceGameDetails productId={id} />
      <GameFeatures productId={id} />
      <Description productId={id} />
      <Visuals productId={id} />
    </div>
  );
};

export default GameDetails;
