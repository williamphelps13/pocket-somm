import { Dispatch, SetStateAction } from "react";

export type Theme = "light" | "dark";

export type NoteSelectorProps = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  acidity: Marks;
  setAcidity: Dispatch<SetStateAction<number[]>>;
  body: Marks;
  setBody: Dispatch<SetStateAction<number[]>>;
  tannin: Marks;
  setTannin: Dispatch<SetStateAction<number[]>>;
  setOak: Dispatch<SetStateAction<string>>;
  setFloral: Dispatch<SetStateAction<string>>;
  setMinerality: Dispatch<SetStateAction<string>>;
};

export type ResultsProps = {
  filteredVarietals: Varietal[];
};

export type Option = {
  label: string;
  value: string;
};

export type MarkMap = Record<number, string>;

export type Marks = number[];

export type Varietal = {
  name: string;
  color: string;
  acidity: string[];
  body: string[];
  tannin: string[];
  oak: string;
  floral: string;
  minerality: string;
  similarVarietals: string[];
  pairingPossibilities: string[];
};
