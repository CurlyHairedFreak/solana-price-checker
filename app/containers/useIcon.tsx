import { useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { IconDefinition, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SolPriceState {
  currentSolPrice: number;
  previousSolPrice: number;
}

//  returns font awesome icon depednding on current/previous price of Solana
const updateIcon = (solPrices: SolPriceState): IconDefinition => {
  const icon =
    solPrices.currentSolPrice === 0.0
      ? faMinus
      : solPrices.currentSolPrice > solPrices.previousSolPrice
      ? faArrowUp
      : solPrices.currentSolPrice < solPrices.previousSolPrice
      ? faArrowDown
      : faMinus;

  return icon;
};

export default updateIcon;
