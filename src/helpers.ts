import { MarkMap, Marks } from "./types";

import { standardMarks, bodyMarks } from "./constants";

const convertMarksToLabels = (marks: Marks, markMap: MarkMap): string[] => {
  const [minMark, maxMark] = marks;

  const filteredMarks = Object.keys(markMap)
    .map(Number)
    .filter((mark) => mark >= minMark && mark <= maxMark);

  return filteredMarks.map((mark) => markMap[mark]);
};

export const convertAcidityMarks = (marks: Marks): string[] => {
  return convertMarksToLabels(marks, standardMarks);
};

export const convertBodyMarks = (marks: Marks): string[] => {
  return convertMarksToLabels(marks, bodyMarks);
};

export const convertTanninMarks = (marks: Marks): string[] => {
  return convertMarksToLabels(marks, standardMarks);
};
