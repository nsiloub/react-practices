import { createContext } from "react";

type ImageSize = 100 | 150;

export const ImageSizeContext = createContext<ImageSize>(100);