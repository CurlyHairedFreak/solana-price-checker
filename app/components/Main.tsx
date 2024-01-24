"use client";

import React, { useState } from "react";
import useFetchPrice from "../containers/useFetchPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  const { solState, icon } = useFetchPrice();

  return (
    <main className="mt-12 text-lg text-cyan-300">
      {solState.previousSolPrice === 0.0 && <div className="loader"></div>}
      {solState.currentSolPrice > 0.0 && (
        <div className="flex items-center gap-2 justify-center">
          <h3 className="text-cyan-300 ">Solana: </h3>
          <p> $ {solState.currentSolPrice}</p>
          <FontAwesomeIcon
            icon={icon}
            className={
              icon.iconName === "arrow-up"
                ? "text-green-500"
                : icon.iconName === "arrow-down"
                ? "text-red-500"
                : "text-white"
            }
          />
        </div>
      )}
    </main>
  );
};

export default Main;
