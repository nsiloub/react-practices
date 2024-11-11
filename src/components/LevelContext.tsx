import { createContext } from "react";

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export const LevelContext = createContext<0 | Level>(0);