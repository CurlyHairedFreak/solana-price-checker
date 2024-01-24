import React from "react";
import { useReducer, useState } from "react";
import updateIcon from "../containers/useIcon";

interface ApiResponse {
  solana: {
    usd: number;
  };
}

interface SolPriceState {
  currentSolPrice: number;
  previousSolPrice: number;
}
// initialise state for solPrice
const initialState: SolPriceState = {
  currentSolPrice: 0.0,
  previousSolPrice: 0.0,
};

// reducer function used to update state with current and previous Solana price
const reducer = (state: SolPriceState, newPrice: number): SolPriceState => {
  return {
    currentSolPrice: newPrice,
    previousSolPrice: state.currentSolPrice,
  };
};

// Custom hook
const useFetchPrice = () => {
  const [solState, dispatch] = useReducer(reducer, initialState);
  const [icon, setIcon] = useState(updateIcon(solState));
  const apiUrl: string =
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&precision=2";

  //  function that returns current Solana price by calling Coingecko API
  const getSolPrice = async (): Promise<number> => {
    try {
      const response = await fetch(apiUrl);
      const data: ApiResponse = await response.json();
      return data.solana.usd;
    } catch (err: any) {
      throw new Error(`Failed to fetch price of Solana: ${err.message}`);
    }
  };

  // function that calls getSolPrice then calls dispatch function from reducer to update values
  const updateSolPrices = (): void => {
    getSolPrice().then(dispatch);
  };

  // Runs every ten seconds and fetches/updates Solana price
  React.useEffect(() => {
    updateSolPrices();
    setIcon(updateIcon(solState));

    const interval = setInterval(() => {
      updateSolPrices();
      setIcon(updateIcon(solState));
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return { solState, icon };
};

export default useFetchPrice;
