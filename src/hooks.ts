import { useEffect, useMemo, useState } from "react";
import { varietals } from "./constants";
import {
  convertAcidityMarks,
  convertBodyMarks,
  convertTanninMarks,
} from "./helpers";
import { Theme, Varietal } from "./types";

export function useFilteredVarietals(
  color: string,
  acidity: number[],
  body: number[],
  tannin: number[],
  oak: string,
  floral: string,
  minerality: string,
) {
  return useMemo(() => {
    const convertedAcidityMarks = convertAcidityMarks(acidity);
    const convertedBodyMarks = convertBodyMarks(body);
    const convertedTanninMarks = convertTanninMarks(tannin);

    const matchesColor = (varietal: Varietal) =>
      !color || varietal.color === color;
    const matchesAcidity = (varietal: Varietal) =>
      !acidity.length ||
      varietal.acidity.some((acidityMark) =>
        convertedAcidityMarks.includes(acidityMark),
      );
    const matchesBody = (varietal: Varietal) =>
      !body.length ||
      varietal.body.some((bodyMark) => convertedBodyMarks.includes(bodyMark));
    const matchesTannin = (varietal: Varietal) =>
      color !== "Red" ||
      !tannin.length ||
      varietal.tannin.some((tanninMark) =>
        convertedTanninMarks.includes(tanninMark),
      );
    const matchesOak = (varietal: Varietal) => !oak || varietal.oak === oak;
    const matchesFloral = (varietal: Varietal) =>
      !floral || varietal.floral === floral;
    const matchesMinerality = (varietal: Varietal) =>
      !minerality || varietal.minerality === minerality;

    return varietals.filter(
      (varietal) =>
        matchesColor(varietal) &&
        matchesAcidity(varietal) &&
        matchesBody(varietal) &&
        matchesTannin(varietal) &&
        matchesOak(varietal) &&
        matchesFloral(varietal) &&
        matchesMinerality(varietal),
    );
  }, [color, acidity, body, tannin, oak, floral, minerality]);
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "light",
  );

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme] as const;
};
