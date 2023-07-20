// src/context/PuzzleContext.tsx

import React, { createContext, useState } from "react";

export const PuzzleContext = createContext();

export const PuzzleProvider = ({ children }) => {
    const [puzzles, setPuzzles] = useState([]);

    return (
        <PuzzleContext.Provider value={{ puzzles, setPuzzles }}>
            {children}
        </PuzzleContext.Provider>
    );
};
